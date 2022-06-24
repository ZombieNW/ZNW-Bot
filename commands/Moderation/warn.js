const Discord = require("discord.js");

module.exports.help = {
  name: "warn",
  description: "Gives the given member a warning role, unless they already have it.",
  usage: "<@member>",
  category: "Moderation",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {
    if (!args[0]) {
        message.reply(`Silly, you need to provide the valid arguments. (${prefix}help warn)`);
        return;
    }
    if (message.member.hasPermission('MANAGE_ROLES')) {
        
            
        function warn(){
            let role = message.guild.roles.cache.find(r => r.name === "Warned");
            // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
            
            let member = message.mentions.members.first();
            

            // or the person who made the command: let member = message.member;

            // Add the role!
            member.roles.add(role).catch(console.error);
            var reason = "No Reason Given";
            if(args[1]){
                reason = args.slice(1).join(" ")
            }
            
            const warnEmbed = //Makes embed
            {
                "title": "Warn",
                "description": `${member.user.tag} Has Been Warned For: ${reason}`, //Finds Time From Message Creation To Current Time To Find Lag In MS
                "color": 32896
            };
            message.channel.send({ embed: warnEmbed }); //Send pingEmbed embed
            return;
    }
    message.delete();

    if (message.guild.roles.cache.find(role => role.name === "Warned")){
        if(message.member.roles.cache.some(r=>["Warned"].includes(r.name)) ) {
            message.reply("That user has already be warned, consider punishing them?");
            return;
        }
        warn();
        return;
    }
    else{
        message.guild.roles.create({
            data: {
              name: 'Warned',
              color: 'RED',
            },
            reason: 'Bad People',
          })
            .then(log.warn)
            .catch(console.error);
            if(message.member.roles.cache.some(r=>["Warned"].includes(r.name)) ) {
                message.reply("That user has already be warned, consider punishing them?");
                return;
            }
        warn();
        return;
    }
    }
    else{
        message.reply("Silly, you need the `MANAGE_ROLES` perm to do that!");
    }
};