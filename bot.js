const fs = require('fs');

// Requires the discord.js module
const Discord = require('discord.js');

// Create new Discord Client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// fs.readdirSync() returns array of all file names in directory. Filter out non .js files
// can loop over array and set commands to the collection created above
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// Define token/prefix
const { prefix, token } = require('./auth.json');

// When client is ready, run this code
client.on('ready', () => 
{
    console.log('${client.user.tag} has logged in!');
});

// Login to Discord with app token
client.login(token);
 
// Commands

client.on('message', msg => 
{
    if (!msg.content.startsWith(prefix) || msg.author.bot)
     return;

    const args = msg.content.slice(prefix.length).split(' ');
    const cmds = args.shift().toLowerCase();

    if (!client.commands.has(cmds)) return;

    try {
        client.commands.get(cmds).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('Command does not exist');
    }    
});
