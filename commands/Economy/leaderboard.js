const Discord = require("discord.js");
const eco = require('discord-economy');

module.exports.help = {
  name: "leaderboard",
  description: "Checks Economy Leaderboard.",
  usage: "<@user(admin-only)>",
  category: "Economy",
  aliases: ["baltop"]
};

module.exports.run = async (bot, message, log, args) => {
      if (message.member.hasPermission('ADMINISTRATOR')){
        if (!message.mentions.members.first()){
            eco.Leaderboard({limit:3,filter:e=>e.balance>50}).then(async e=>{if(e[0])var a=await bot.users.fetch(e[0].userid);if(e[1])var t=await bot.users.fetch(e[1].userid);if(e[2])var o=await bot.users.fetch(e[2].userid);const n=(new Discord.MessageEmbed).setColor(32896).setTitle("Leaderboard").setDescription(`1 - ${a&&a.tag||"Nobody Yet"} : ${e[0]&&e[0].balance||"None"}\n2 - ${t&&t.tag||"Nobody Yet"} : ${e[1]&&e[1].balance||"None"}\n3 - ${o&&o.tag||"Nobody Yet"} : ${e[2]&&e[2].balance||"None"}`);message.channel.send(n)});
        }
        else{
            var output = await eco.Leaderboard({
                filter: x => x.balance > 50,
                search: message.mentions.users.first().id
              })
              const dailyEmbed =
                {
                    "title": `${message.mentions.members.first().user.username}'s Leaderboard Position.`,
                    "description": output,
                    "color": 32896
                };
            message.channel.send({ embed: dailyEmbed });
        }      
      }   
      else{
        eco.Leaderboard({limit:3,filter:e=>e.balance>50}).then(async e=>{if(e[0])var a=await bot.users.fetch(e[0].userid);if(e[1])var t=await bot.users.fetch(e[1].userid);if(e[2])var o=await bot.users.fetch(e[2].userid);const n=(new Discord.MessageEmbed).setColor(32896).setTitle("Leaderboard").setDescription(`1 - ${a&&a.tag||"Nobody Yet"} : ${e[0]&&e[0].balance||"None"}\n2 - ${t&&t.tag||"Nobody Yet"} : ${e[1]&&e[1].balance||"None"}\n3 - ${o&&o.tag||"Nobody Yet"} : ${e[2]&&e[2].balance||"None"}`);message.channel.send(n)});
    }   
};