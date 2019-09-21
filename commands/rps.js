module.exports = {
	name: 'rps',
	description: 'asdf',
	execute(msg) {
    msg.channel.send('Please type !r for rock, !p for paper, or !s for scissors');
    // var playerChoice;
    // var botChoice = Math.floor((Math.random() * 3) + 1);
    // var botR;
    // var count = 0;
   
    //     if (msg.content === 'r')
    //     {
    //         playerChoice = 'r';
    //     }
    //     else if (msg.content === 'p')
    //     {
    //         playerChoice = 'p';
    //     }
    //     else if (msg.content === 's')
    //     {
    //         playerChoice = 's';
    //     }
 
    // switch(botChoice)
    //     {
    //         case 1:
    //             botR = 'r';
    //             msg.channel.send('I chose rock');
    //             break;
    //         case 2:   
    //             botR = 'p';
    //             msg.channel.send('I chose paper');
    //             break;
    //         case 3:
    //             botR = 's';
    //             msg.channel.send('I chose scissors')
    //             break;
    //     }
    // if (playerChoice === botR)
    // {
    //     msg.channel.send('Tie me up daddy');
    // } 

    // if (playerChoice === 'r')
    // {
    //     if (botR === 's')
    //     {
    //         msg.channel.send('fine I\'ll let you have this one UwU');
    //     }
    //     else
    //         msg.channel.send('paper wins god u fuckin suck at this');
    // }   

    // if (playerChoice === 'p')
    // {
    //     if (botR === 'r')
    //     {
    //         msg.channel.send('hmph i\'ll let you win this time OwO');
    //     }
    //     else
    //         msg.channel.send('scissors. get fukt by the hash slinging slasher');
    // }
    
    // if (playerChoice === 's')
    // {
    //     if (botR === 'p')
    //     {
    //         msg.channel.send('paper. penetrate me');
    //     }
    //     else
    //         msg.channel.send('rock hard. u lose what\'s new');
    // }
	}
};