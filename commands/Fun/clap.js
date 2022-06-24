const Discord = require("discord.js");

module.exports.help = {
  name: "clap",
  description: "Puts clap emoji between words.",
  usage: "(phrase)",
  category: "Fun",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {

  //Gets argument and replaces spaces with clap emoji and sends it
  if (!args[0]) return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help clap)`);
  var argument = args.join(" ");
  var yike = argument.toString().replace(/ /g, ' 👏 ') + " 👏";
  message.channel.send({
      embed: {
       title: yike,
       author: {
        name: "Clap",
       },
       color: 32896
      }});
};