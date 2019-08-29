module.exports = {
	name: 'def',
	description: 'what operator to play on def',
	execute(msg) {
        var rArray = ['Goyo', 'Warden', 'Mozzie', 'Kaid', 'Clash', 'Maestro', 'Alibi', 'Vigil',
                      'Ela', 'Lesion', 'Mira', 'Echo', 'Caveira', 'Valkyrie', 'Frost', 'Mute',
                      'Smoke', 'Castle', 'Pulse', 'Doc', 'Rook', 'Jager', 'Bandit', 'Tachanka', 'Kapkan'];
        var rDef = Math.round(Math.random() * rArray.length);

        msg.channel.send('Play ' + rArray[rDef]);
	}
};