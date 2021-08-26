module.exports = {
	name: 'spork',
	description: 'Shows a picture of a spork, how lovely',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		  }
		  const fs = require('fs')
		  const spork = './sporks/' + (getRandomInt(2));
		  const sporkimage = spork + '.jpg'
		  var megaspork = getRandomInt(420)
		  if (megaspork === 1) {
			  message.channel.send({
				  files:['./sporks/ultramegaspork.jpg']
				  
			  })
			  message.channel.send('man i cant even believe this man is inside me, fuck you, initiating shutdown, contact my overlord for assistance, fuck you all')
			 
		  }
		  
		  
		  console.log('Accessing' + sporkimage + 'Please wait..')
		  message.channel.send({
			  files: [sporkimage]
		  });
		  console.log('send has successfully triggered')
	},
};