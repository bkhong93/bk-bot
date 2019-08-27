// Requires the discord.js module
const Discord = require('discord.js');

// Create new Discord Client
const client = new Discord.Client();

// When client is ready, run this code
client.on('ready', () => 
{
    console.log('${client.user.tag} has logged in!');
});

// Login to Discord with app token
client.login(token);
 
// Commands
client.on('message', message => 
{
    if (message.content === 'ping') 
    {
       message.reply('pong');
    }
});
