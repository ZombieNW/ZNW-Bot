const Discord = require("discord.js");
const pixabay = require("pixabay-api");

module.exports.help = {
  name: "pixabay",
  description: "Sends free image from pixabay.com",
  usage: "<query>",
  category: "Fun",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {
  pixakey = bot.config.pixakey;

  if(!args[0]) return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help pixabay)`);
  
    pixabay.searchImages(pixakey, args).then((r) => {
      try{
        let result = r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL;
      }
      catch{
        return message.reply("Sorry, no results found.");
      }
      message.channel.send(new Discord.MessageEmbed()
          .setTitle("Image From pixabay.com")
          .setURL("https://pixabay.com/")
          .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
  })
  
};