module.exports = {
	name: 'help',
	description: 'help moment',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		message.channel.send('``spork``make spork appear');
	},
};