import { Markup } from "telegraf";

const helpCommand = (ctx: any): Promise<void> =>
  ctx.replyWithMarkdown(
    "I'm sorry but I can't help you.",
    Markup.inlineKeyboard([Markup.button.callback("Shrek", "shrek")])
  );
const pingCommand = (ctx: any): Promise<void> => ctx.reply("pong");

export { helpCommand, pingCommand };
