module.exports = {
	name: 'r',
	description: 'rock',
	execute(msg) {
       var playerChoice = 'r';
       var botRan = Math.floor((Math.random() * 3) + 1);
       var botChoice
       switch(botRan)
       {
           case 1:
               botChoice = 'r';
               msg.channel.send('I chose rock. It\'s a tie.');
               break;
           case 2:   
               botChoice = 'p';
               msg.channel.send('I chose paper. You lose. :(');
               break;
           case 3:
               botChoice = 's';
               msg.channel.send('I chose scissors. You win!')
               break;
       }
	}
};