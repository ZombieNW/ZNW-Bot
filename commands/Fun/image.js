const Discord = require("discord.js");
const fetch = require('node-fetch');
const gis = require('g-i-s');

module.exports.help = {
  name: "image",
  description: "Google image searches the query.",
  usage: "<query>",
  category: "Fun",
  aliases: ["gis", "google"]
};

module.exports.run = async (bot, message, log, args) => {

  gis(args.join(" "), logResults);

function logResults(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    var randomItem = results[Math.floor(Math.random()*results.length)];
    if(!randomItem){
      return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help image)`);
    }
    const pingEmbed = //Makes embed
    {
      "title": "Image search!",
      "image": {
        "url": randomItem.url,
      },
      "color": 32896
    };
  message.channel.send({ embed: pingEmbed });
  console.log(randomItem.url);
  }
}


};