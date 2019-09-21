module.exports = {
	name: 'p',
	description: 'paper',
	execute(msg) {
       var playerChoice = 'p';
       var botRan = Math.floor((Math.random() * 3) + 1);
       var botChoice
       switch(botRan)
       {
           case 1:
               botChoice = 'r';
               msg.channel.send('You win!');
               break;
           case 2:   
               botChoice = 'p';
               msg.channel.send('It\'s a tie.');
               break;
           case 3:
               botChoice = 's';
               msg.channel.send('You lose. :(');
               break;
       }
	}
};