const Discord = require("discord.js");

module.exports.help = {
  name: "kick",
  description: "Kicks given member.",
  usage: "<@member>",
  category: "Moderation",
  aliases: ["softban"]
};

module.exports.run = async (bot, message, log, args) => {
    if (message.member.hasPermission('KICK_MEMBERS')) { //If Sender Can Mannage Messages
        let kickMember = message.mentions.members.first() 
        if(!kickMember) return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help kick)`);

        let reason = args.slice(1).join(" ")
        if(!reason) reason = "Unspecified"

        kickMember.send(`You have been kicked from **${message.guild.name}**, Reason: **${reason}**`).then(() => 
        kickMember.kick("Reason")).catch(err => log.warn(err))

        message.channel.send(`**${kickMember.user.tag}** has been kicked`)
    }
    else{ //If Sender Can't KICK Messages
        message.reply("Silly, you need the `KICK_MEMBERS` perm to do that!");
    }
};