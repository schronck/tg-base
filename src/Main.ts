import Bot from "./Bot";
import config from "./config";

export default class Main {
  static start(): void {
    // setup the Telegram bot
    Bot.setup(config.telegramToken);
  }
}

Main.start();
