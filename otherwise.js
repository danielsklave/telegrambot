'use strict';
const replies = ["Yeah","Nice","Cool","🙂","👍"];
const Telegram = require('telegram-node-bot');
class OtherwiseController extends Telegram.TelegramBaseController {
  handle($){
    $.sendMessage(replies[Math.floor(Math.random()*replies.length)]);
  }
}
module.exports = OtherwiseController;
