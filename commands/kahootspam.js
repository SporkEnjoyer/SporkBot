module.exports = {
	name: 'kahoot',
	description: 'kahoot joiner, how nice',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		
	
		if(message.author.id === '328665489041784832' || '876587384832163902'){
		

		
		if(args[0] === 'join'){
			const KahootSpam = require('kahoot-spam');
			let api = KahootSpam;
			var code = args[1]
			if(code != undefined){
				message.reply('command recieved, joining kahoot game')
				if(args[2] === undefined){
			api.spamWithAnswers(code, 'SporkBot', 1, true)
				}else {
					var name = args[2]
					api.spamWithAnswers(code, name, 1, true)
				}
			}else{
				message.reply('please supply a game code')
			}

		}
		if(args[0] === 'spam'){
			const KahootSpam = require('kahoot-spam');
			let api = KahootSpam;
			var code = args[1]
			
			if(code != undefined){
				message.reply('command recieved, all hell is about to break loose, be prepared.')
				if(args[2] === undefined){
					
				api.spamWithAnswers(code, 'SporkBot', 150, true)
				} else{
					var name = args[2]
					api.spamWithAnswers(code, name, 150, true)
				}
				}else{
					message.reply('please supply a game code')
				}
			
			}
		}else{
			message.reply('you do not have permission to execute this command')
		}

	
	},
};