module.exports = {
	name: 'roll',
	description: 'roll a random number',
	execute(msg) {
		if (msg.member.hasPermission("ADMINISTRATOR"))
		{
        var playerRoll = Math.floor((Math.random() * 399) + 600);
			msg.channel.send('You roll a ' + playerRoll + '. Great roll.');
		}
		else if (msg.member.roles.some(role => role.name === 'abc'))
		{
			var chanceTime = Math.floor((Math.random() * 4) + 1);
			switch (chanceTime)
			{
				case 1:
					msg.channel.send('Nah, I don\'t feel like it.');
					break;
				case 2:
					msg.channel.send('Try again later.');
					break;
				case 3:
					var playerRoll2 = Math.floor(((Math.random() * 999) + 1));
					msg.channel.send('You roll a ' + playerRoll2 + '.');
					break;
				case 4:
					var playerRoll2 = Math.floor(((Math.random() * 100) + 1));
					msg.channel.send('You roll a ' + playerRoll2 + '. Wow, that\'s unfortunate.');
					break;
			}
		}
	}
};