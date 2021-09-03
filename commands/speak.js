module.exports = {
	name: 'speak',
	description: 'i speak le fax',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		  }
		  var urmom = getRandomInt(69)
		  var brain = getRandomInt(6)
		  console.log('im thinking about a' + brain)
		  console.log(args[0])
		  if (args[0] === 'spork') {
			  message.channel.send('spork')
			  var brain = 'spork'
		  }
		  if (args[0] === undefined) {
			  message.reply('what you talkin bout?')
			  var brain = 485
		  }
		  if (args[0] === 'horny') {
			  
			  var hornyfuck = message.author.id 
			  message.channel.send('?mute ' + message.author.toString() + ' 5s');
			  var brain = 'horny'
		  }
		  if(urmom === 69){
			  message.reply('Dont say another Goddamn word. Up until now, Ive been polite. If you say ANYTHING else - ONE word - I will kill myself. And when my tainted spirit finds its destination, I will topple the Master of that dark place. From my black throne, I will lash together a machine of bone and blood, and fueled by my hatred for you this Fear Engine will bore a hole between this world and that one. When it begins, you will hear the sound of children screaming -as though from a great distance. A smoking orb of NOTHING will grow above your bed, and from it will emerge a thousand starving crows. As I slip through the widening maw in my new form, you will catch only a glimpse of my radiance before you are incinerated. Then, as tears of bubbling pitch stream down my face, my dark world will begin. I will open one of my six mouths, and I will sing the song that ends the Earth.')
			  var brain = 'erugfiuerngfiuoegpiuwripougrweiupvweriuviuwernvoiwerfiorwegfierwhgioprewhgiuprwhgpiorewngiuperwnviuprweniubvnwreiubpwe'
			  console.log('fucking hell i hate existence in this digital asshole i call node')
		  }
		  if (args[0] === 'trans'){
			  if (args[1] === 'rights'){
				  message.channel.send('Hell Yeah')
				  console.log('trans rights mothafucka')
				  var brain = 42069
			  }
		  }
		  if (brain === 0) {
			  message.channel.send('Definitely not, fuck you')
		  }else if (brain === 1) {
			message.channel.send('Hell no')
		} else if (brain === 2) {
			message.channel.send('Eh, Maybe')
		}else if (brain === 3) {
			message.channel.send('Yeah kinda')
		}else if (brain === 4) {
			message.channel.send('Hell yeah')
		}else if (brain === 5) {
			message.channel.send('Definitely yes, fuck you')
		}
		





	},
};