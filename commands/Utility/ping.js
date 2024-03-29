const Discord = require("discord.js");

module.exports.help = {
  name: "ping",
  description: "Checks ping time.",
  usage: "",
  category: "Utility",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {
  const pingEmbed = //Makes embed
    {
      "title": "Pong!",
      "description": `${Date.now() - message.createdTimestamp}ms`, //Finds Time From Message Creation To Current Time To Find Lag In MS
      "color": 32896
    };
  message.channel.send({ embed: pingEmbed }); //Send pingEmbed embed
};