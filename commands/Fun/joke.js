const Discord = require("discord.js");
const giveMeAJoke = require('discord-jokes');

module.exports.help = {
  name: "joke",
  description: "Sends a random dad joke.",
  usage: "",
  category: "Fun",
  aliases: [""]
};

module.exports.run = async (bot, message, args) => {

  //Uses discord-joke npm package to fecth a joke and send it.
  giveMeAJoke.getRandomDadJoke (function(joke) {
    message.channel.send({
        embed: {
            title: joke,
            author: {
                name: "Joke",
            },
            color: 55555
        }
    });
});

};