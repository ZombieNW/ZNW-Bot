const Discord = require("discord.js");

module.exports.help = {
  name: "coinflip",
  description: "Flips a coin.",
  usage: "",
  category: "Utility",
  aliases: ["coin"]
};

module.exports.run = async (bot, message, args) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  result = getRandomInt(1,3);
  if(result === 1){
    const coinEmbed = //Makes embed
    {
      "title": "Coinflip!",
      "description": "Heads!", //Finds Time From Message Creation To Current Time To Find Lag In MS
      "color": 55555
    };
  message.channel.send({ embed: coinEmbed }); //Send pingEmbed embed
  }
  if(result === 2){
    const coinEmbed = //Makes embed
    {
      "title": "Coinflip!",
      "description": "Tails!", //Finds Time From Message Creation To Current Time To Find Lag In MS
      "color": 55555
    };
  message.channel.send({ embed: coinEmbed }); //Send pingEmbed embed
  }
};