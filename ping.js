'use strict';
const quotes = ["Have a nice day","Dont worry","Everything is fine"];
const Telegram = require('telegram-node-bot');
class PingController extends Telegram.TelegramBaseController {

  pingHandler($) {
    $.sendMessage(quotes[Math.floor(Math.random()*quotes.length)]);
  }
  get routes(){
    return {
      'pingCommand': 'pingHandler'
    };
  }
}
module.exports = PingController;
