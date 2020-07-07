const Discord = require("discord.js");

module.exports.help = {
  name: "clap",
  description: "Puts clap emoji between words.",
  usage: "",
  category: "Fun",
  aliases: [""]
};

module.exports.run = async (bot, message, args) => {

  //Gets argument and replaces spaces with clap emoji and sends it
  var argument = args.join(" ");
  var yike = argument.toString().replace(/ /g, ' 👏 ') + " 👏";
  message.channel.send({
      embed: {
       title: yike,
       author: {
        name: "Clap",
       },
       color: 55555
      }});
};