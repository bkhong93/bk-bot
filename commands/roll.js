module.exports = {
	name: 'roll',
	description: 'roll against bot',
	execute(msg) {
        var playerRoll = Math.round(((Math.random() * 999) + 1));
            msg.channel.send('You roll a ' + playerRoll + '.');
	}
};