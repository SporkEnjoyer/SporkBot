module.exports = {
	name: 'reset',
	description: 'bot crasher/restarter',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		const KahootSpam = require('kahoot-spam')
		let api = KahootSpam;
		var code = ''
		api.spamWithAnswers(code, 'SporkBot', 1, true)
		
	},
};