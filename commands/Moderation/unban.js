const Discord = require("discord.js");

module.exports.help = {
  name: "unban",
  description: "Unbans given user ID.",
  usage: "<@member-id>",
  category: "Moderation",
  aliases: [""]
};

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission('BAN_MEMBERS')) { //If Sender Can Mannage Members
        let user = args[0];
        if (!user) return message.reply('Silly, you must provide an ID to unban!').catch(console.error);
        message.guild.members.unban(user);
        message.channel.send(`User With ID: **${user}** has been unbanned`)
    }
    else{
        message.reply("Silly, you need the `BAN_MEMBERS` perm to do that!");
    }
};