const Discord = require("discord.js");

module.exports.help = {
  name: "addme",
  description: "Gives link to ZNW Bot.",
  usage: "",
  category: "Utility",
  aliases: ["add"]
};

module.exports.run = async (bot, message, args) => {
  const addmeEmbed = //Makes embed
    {
      "title": "Add Me!",
      "description": "https://zombienw.tk/pages/dev/znw-bot/index.html", //Finds Time From Message Creation To Current Time To Find Lag In MS
      "color": 55555
    };
    message.channel.send({ embed: addmeEmbed }); //Send addmeEmbed embed
};