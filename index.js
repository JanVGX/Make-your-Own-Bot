const client  = require('discord.js');

const client = new Client();

client.on('ready', () => {

  console.log('I am ready!');

})

client.on('message', message => {

  if(message.content === '!ping') {

    message.channel.send('Pong!');

  }

});

client.login("YOUR BOT TOKEN")
