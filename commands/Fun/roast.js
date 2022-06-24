const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.help = {
  name: "roast",
  description: "Sends a roast.",
  usage: "",
  category: "Fun",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {

  fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
            .then(res => res.json())
            .then(json =>message.channel.send({
                embed: {
                    title: "||" + json.insult + "|| (Click For Roast)",
                    author: {
                        name: "Roast",
                    },
                    color: 32896
                }
            }));

};