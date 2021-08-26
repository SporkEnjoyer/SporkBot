module.exports = {
	name: 'about',
	description: 'fuckyou',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		
		message.reply('Spork bot was developed by Autumn Williams, 2021 ' + client.config.VersionID);
	},
}