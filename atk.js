module.exports = {
	name: 'atk',
	description: 'what operator to play on attack',
	execute(msg) {
        var rArray = ['Amaru', 'Nokk', 'Gridlock', 'Nomad', 'Maverick', 'Lion',
                      'Finka', 'Dokkaebi', 'Zofia', 'Ying', 'Jackal', 'Hibana', 'Capitao',
                      'Blackbeard', 'Buck', 'Sledge', 'Thatcher', 'Ash', 'Thermite', 'Montagne',
                      'Twitch', 'Blitz', 'IQ', 'Fuze', 'Glaz'];
        var rAtk = Math.round(Math.random() * rArray.length);

        msg.channel.send('Play ' + rArray[rAtk]);
	}
};