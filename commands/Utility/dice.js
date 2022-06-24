const Discord = require("discord.js");

module.exports.help = {
  name: "dice",
  description: "Rolls `args` sided die.",
  usage: "<dice-side>",
  category: "Utility",
  aliases: ["roll"]
};

module.exports.run = async (bot, message, log, args) => {

  if(isNaN(args[0])){ //If args IS NOT a number
    return message.reply("Silly, your arguement needs to be a number!");
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  result = getRandomInt(1,parseInt(args[0], 10) + 1);  

  const diceEmbed = //Makes embed
    {
      "title": "Dice!",
      "description": result, //Finds Time From Message Creation To Current Time To Find Lag In MS
      "color": 32896
    };
  message.channel.send({ embed: diceEmbed }); //Send pingEmbed embed
};