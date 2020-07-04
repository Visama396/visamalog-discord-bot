const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async (msg) => {
  if (msg.channel.id === '157524499150012417') {
    if (msg.content.toLowerCase() === 'ping') {
      await msg.reply('pong');
    }

    const eightBall = ['As I see it, yes.',
      'Ask again later.',
      'Better not tell you now.',
      'Cannot predict now.',
      'Concentrate and ask again.',
      'Don\'t count on it.',
      'It is certain.',
      'It is decidedly so.'];

    let regex = /^\!8ball\s.+}/;

    if (regex.exec(msg.content)) {
      const i = Math.floor(Math.random()*eightBall.length);
      await msg.reply(eightBall[i]);
    }
  }
});

client.login(process.env.BOT_TOKEN);

