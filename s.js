module.exports = {
	name: 's',
	description: 'scissors',
	execute(msg) {
       var playerChoice = 's';
       var botRan = Math.floor((Math.random() * 3) + 1);
       var botChoice
       switch(botRan)
       {
           case 1:
               botChoice = 'r';
               msg.channel.send('I chose rock. You lose. :(');
               break;
           case 2:   
               botChoice = 'p';
               msg.channel.send('I chose paper. You win!');
               break;
           case 3:
               botChoice = 's';
               msg.channel.send('I chose scissors. It\'s a tie.')
               break;
       }
	}
};