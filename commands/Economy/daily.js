const Discord = require("discord.js");
var eco = require('discord-economy');

module.exports.help = {
  name: "daily",
  description: "Gives money daily.",
  usage: "",
  category: "Economy",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {
  var output = await eco.Daily(message.author.id)
    //output.updated will tell you if the user already claimed his/her daily yes or no.
 
    if (output.updated) {
 
      var profile = await eco.AddToBalance(message.author.id, 100)
      const dailyEmbed =
      {
          "title": `${bot.user.username} Daily Rewards (+100${" :coin:"})`,
          "description": "New Balance: " + `${profile.newbalance} :coin:`,
          "color": 32896
      };
    message.channel.send({ embed: dailyEmbed });
 
    } else {
      message.channel.send(`Silly, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`)
    }
};