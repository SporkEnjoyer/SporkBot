module.exports = {
	name: 'funnyspork',
	description: 'deforme sporke',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		message.channel.send('bendy spork lmao');
		message.channel.send({
			files:['./sporks/funnyspork.jpg']
		})
	},
};