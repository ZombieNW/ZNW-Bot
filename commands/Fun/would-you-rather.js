const Discord = require("discord.js");
var wyrJson = require('../../data/WouldYouRather.json')

module.exports.help = {
  name: "would-you-rather",
  description: "Sends a random would you rather question.",
  usage: "",
  category: "Fun",
  aliases: ["wyr"]
};

module.exports.run = async (bot, message, log, args) => {
  var randomItem = wyrJson[Math.floor(Math.random()*wyrJson.length)];

  message.channel.send({
    embed: {
        title: randomItem,
        author: {
            name: "Would You Rather?",
        },
        color: 32896
    }
});
};