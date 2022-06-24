const Discord = require("discord.js");
const urban = require("urban");

module.exports.help = {
  name: "urban",
  description: "Searches top definition from Urban Dictionary",
  usage: "<query>",
  category: "Fun",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {

  let Query = args.join(" "); 

            urban(Query).first(result => {
                if(!result) return message.reply("No results found!")

                let urbanEmbed = new Discord.MessageEmbed()
                .setColor(32896)
                .setTitle("Urban Dictionary For: " + result.word)
                .setDescription("||" + result.definition + "|| (Click For Definition)")
                .setFooter(`Author: ${result.author}`);

                message.channel.send(urbanEmbed)
            });
};