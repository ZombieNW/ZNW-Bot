const Discord = require("discord.js");
const eco = require('discord-economy');

module.exports.help = {
  name: "bal",
  description: "Checks Economy Balance.",
  usage: "<@user(admin-only)>",
  category: "Economy",
  aliases: ["balance"]
};

module.exports.run = async (bot, message, log, args) => {
//message.mentions.members.first().id
  if (message.member.hasPermission('ADMINISTRATOR')){
    if (!message.mentions.members.first()){
      var output = await eco.FetchBalance(message.author.id)
      const balEmbed =
          {
              "title": bot.user.username + " Balance",
              "description": `${output.balance} :coin:`,
              "color": 32896
          };
      message.channel.send({ embed: balEmbed });
    }
    else{
      var output = await eco.FetchBalance(message.mentions.members.first().id)
      const balEmbed =
          {
              "title": bot.user.username + " Balance",
              "description": `${message.mentions.members.first().user.username} has ${output.balance} :coin:`,
              "color": 32896
          };
      message.channel.send({ embed: balEmbed });
    }      
  }   
  else{
    var output = await eco.FetchBalance(message.author.id)
    message.channel.send(`Hey ${message.author.tag}! You own ${output.balance} coins.`);
    const balEmbed =
        {
            "title": bot.user.username + " Balance",
            "description": `${output.balance} :coin:`,
            "color": 32896
        };
    message.channel.send({ embed: balEmbed });
  }   
};