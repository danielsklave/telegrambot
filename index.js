'use strict';
const Telegram = require('telegram-node-bot'),
tg = new Telegram.Telegram('699433514:AAFmFsH0VQ73_DgZb41u8ZOY5gEoINEcp6Y', {
  workers: 1
});
const PingController = require('./controllers/ping'),
OtherwiseController = require('./controllers/otherwise');
tg.router.when(new Telegram.TextCommand('/cheermeup','pingCommand'), new PingController()).otherwise(new OtherwiseController());
