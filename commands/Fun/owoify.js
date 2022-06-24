const Discord = require("discord.js");
const client = require('nekos.life'); // Nekos life
const neko = new client();

module.exports.help = {
  name: "owoify",
  description: "Turns argument into \"OwOified\" text.",
  usage: "<text>",
  category: "Fun",
  aliases: ["owo"]
};

module.exports.run = async (bot, message, log, args) => {
  var argument = args.join(" ");
  let owo = await neko.sfw.OwOify({text: argument});
  message.channel.send({
      embed: {
          title: owo.owo,
          author: {
              name: "OwOify",
          },
          color: 32896
      }
  });
};