import * as TGActions from "./service/actions";
import * as TGCommands from "./service/commands";
import * as TGEvents from "./service/events";
import { Telegraf, Telegram } from "telegraf";
import logger from "./utils/logger";

export default class Bot {
  private static tg: Telegram;

  static get Client(): Telegram {
    return this.tg;
  }

  static setup(token: string): void {
    const bot = new Telegraf(token);

    this.tg = bot.telegram;

    // registering middleware to log the duration of updates
    bot.use(async (_, next) => {
      const start = Date.now();

      await next();

      logger.verbose(`response time ${Date.now() - start}ms`);
    });

    // builtin commands
    bot.start(TGEvents.onChatStart);
    bot.help(TGCommands.helpCommand);

    // other commands
    bot.command("ping", TGCommands.pingCommand);

    // event listeners
    bot.on("text", TGEvents.onMessage);
    bot.on("new_chat_members", TGEvents.onUserJoinedGroup);
    bot.on("left_chat_member", TGEvents.onUserLeftGroup);

    // action listeners
    bot.action(
      /^shrek+$/,
      TGActions.shrekAction
    );

    // starting the bot
    bot.launch({
      allowedUpdates: [
        "chat_member",
        "my_chat_member",
        "message",
        "callback_query"
      ]
    });

    bot.catch((err) => {
      logger.error(err);
    });

    // enable graceful stop
    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));

    logger.verbose("The bot is up and running");
  }
}
