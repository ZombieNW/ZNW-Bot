const Discord = require("discord.js");

module.exports.help = {
  name: "ban",
  description: "Bans given member.",
  usage: "<@member>",
  category: "Moderation",
  aliases: [""]
};

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission('BAN_MEMBERS')) { //If Sender Can Mannage Members
        let banMember = message.mentions.members.first() 
        if(!banMember) return message.reply("Silly, you must provide a member to ban.")

        let reason = args.slice(1).join(" ")
        if(!reason) reason = "Unspecified"

        banMember.send(`You have been banned from **${message.guild.name}**, Reason: **${reason}**`).then(() => 
        banMember.ban("Reason")).catch(err => console.log(err))

        message.channel.send(`**${banMember.user.tag}** has been banned`)
    }
    else{ //If Sender Can't BAN Members
        message.reply("Silly, you need the `BAN_MEMBERS` perm to do that!");
    }
};