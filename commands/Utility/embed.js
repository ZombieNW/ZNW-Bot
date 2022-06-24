const Discord = require("discord.js");

module.exports.help = {
  name: "embed",
  description: "Makes an embed.",
  usage: "title ; message",
  category: "Utility",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {
  nodes = args.join(" ").split(";");
  title = nodes[0];
  messages = nodes[1];
  const pingEmbed = //Makes embed
    {
      "title": title,
      "description": messages,
      "footer": {
        "text": "From: " + message.author.tag
      },
      "color": 32896
    };
  message.channel.send({ embed: pingEmbed }); //Send pingEmbed embed
};