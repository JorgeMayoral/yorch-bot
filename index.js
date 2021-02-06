const tmi = require('tmi.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: 'info' },
  connection: { reconnect: true, secure: true },
  identity: {
    username: process.env.USER,
    password: process.env.PASS,
  },
  channels: ['devyorch'],
});

client.connect().catch(console.error);

client.on('message', (channel, tags, message) => {
  if (message === '!ayuda') {
    client.say(
      channel,
      `${tags.username} aquí tienes los comandos: !ayuda -> Esta información | !hola -> Saluda al bot | !redes -> Enlaces a mis redes sociales`,
    );
  }
  if (message === '!hola') {
    client.say(channel, `Hola ${tags.username}`);
  }
  if (message === '!redes') {
    client.say(
      channel,
      `${tags.username} -> Twitter: https://twitter.com/JMayoralAlvarez`,
    );
  }
});

client.on('subscription', (channel, username) => {
  client.say(channel, `Thanks @${username} for the sub!`);
});
