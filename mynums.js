module.exports = {
	name: 'mynums',
	description: '3 random nums',
	execute(msg) {
        var rArray = [];
        for (var i = 0; i < 3; i++)
        {
            rArray[i] = ((Math.random() * 1000) + 1).toFixed();
        }
        msg.channel.send('Your numbers today are: ' + rArray.join(', '));
	}
};