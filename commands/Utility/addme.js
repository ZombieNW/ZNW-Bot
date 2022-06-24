const Discord = require("discord.js");

module.exports.help = {
  name: "addme",
  description: "Gives link to zBot.",
  usage: "",
  category: "Utility",
  aliases: ["add"]
};

module.exports.run = async (bot, message, log, args) => {
  const addmeEmbed = //Makes embed
    {
      "title": "Add Me!",
      "description": "https://zombienw.com/pages/dev/znw-bot/index.html", //Finds Time From Message Creation To Current Time To Find Lag In MS
      "color": 32896
    };
    message.channel.send({ embed: addmeEmbed }); //Send addmeEmbed embed
};