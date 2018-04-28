const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = '%'

bot.on('ready', function () {
    bot.user.setGame('THE HELL');
    console.log("Connected");
});

bot.on('message', function (message)
{
if (message.content.startsWith(prefix + 'help')){
	message.delete()
	message.author.send('**Voici la liste des commandes:**\n **%help**: donne la liste des commandes en privé \n **%invite**: donne un lien d invitation pour le discord \n **%avatar**: pour voir votre avatar \n **%ping**: pour voir votre ping \n **%test:** test si le bot est activé \n **%serverhelp:**aide du bot')
	message.reply('La commande pour vous aidez vous a été envoyé en privé')
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
  if (message.content.startsWith(prefix + 'serverhelp')){
  	message.channel.send('**Voici la liste des commandes:**\n **%help**: donne la liste des commandes en privé \n **%invite**: donne un lien d invitation pour le discord \n **%avatar**: pour voir votre avatar \n **%ping**: pour voir votre ping \n **%test:** test si le bot est activé \n **%serverhelp:** aide du bot')
}	
});
bot.on('guildMemberAdd', function (member)
{
    member.createDM().then(function (channel) 
    {
        channel.send('Bienvenue sur le serveur **The Hell** ici on parle de tous ce qui concerne les jeux vidéos et autres amuse toi bien :)')
    })
});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === (prefix + 'kick')){


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Utilisateur non trouvé.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être kické!")
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "sanction");
    if(!kickChannel) return message.channel.send("Le channel sanction n'est pas trouvé.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === (prefix + 'ban')){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Utilisateur non trouvé.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être kické!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "sanction");
    if(!incidentchannel) return message.channel.send("Le channel sanction n'est pas trouvé.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }

  if(cmd === (prefix + 'info')){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }



  if(cmd === (prefix + 'satanbot')){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

});
bot.login(process.env.TOKEN) 
