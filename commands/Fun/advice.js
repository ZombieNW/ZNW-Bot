const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.help = {
  name: "advice",
  description: "Sends random advice!",
  usage: "",
  category: "Fun",
  aliases: ["tip"]
};

module.exports.run = async (bot, message, log, args) => {
        //Fetches slip.advice from url and sends it in an embed.
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(json =>message.channel.send({
            embed: {
                title: json.slip.advice,
                author: {
                    name: "Advice",
                },
                color: 32896
            }
        }));
};