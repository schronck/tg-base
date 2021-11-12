/* eslint-disable no-unused-vars */
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import * as dotenv from "dotenv";

const envFound = dotenv.config();

const telegramToken = process.env.BOT_TOKEN;

if (!telegramToken)
  throw new Error("You need to specify the bot's BOT_TOKEN in the .env file.");

export default {
  telegramToken,
};
