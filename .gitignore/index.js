const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = '@'

bot.on('ready', function () {
    bot.user.setGame('THE HELL');
    console.log("Connected");
});

bot.on('message', function (message)
{
if (message.content.startsWith(prefix + 'help')){
	message.delete()
	message.channel.send('**Voici la liste des commandes:**\n **@help**: donne la liste des commandes \n **@invite**: donne un lien d invitation pour le discord \n **@avatar**: pour voir votre avatar \n **@ping**: pour voir votre ping \n **@test:** test si le bot est activé.')
}
if (message.content.startsWith(prefix + 'invite')){
	message.delete()
	message.reply('Le lien du discord: https://discord.gg/6G2XsXT')
}
 if (message.content.startsWith(prefix + 'avatar')){
 	message.delete()
 	 message.channel.send(message.author.avatarURL)
}
if (message.content.startsWith(prefix + 'ping')){
	message.delete()
	message.reply('**Pong :ping_pong:**')
}
  if (message.content.startsWith(prefix + 'test')){
  	  message.delete()
      message.channel.send('Ok :white_check_mark:')
}
});
bot.on('guildMemberAdd', function (member)
{
    member.createDM().then(function (channel) 
    {
        channel.send('Bienvenue sur le serveur **The Hell** ici on parle de tous ce qui concerne les jeux vidéos et autres amuse toi bien :)')
    })
});

bot.login(process.env.TOKEN) 
