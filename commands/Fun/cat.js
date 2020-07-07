const Discord = require("discord.js");
const snekfetch = require('snekfetch'); //Snekfetch

module.exports.help = {
  name: "cat",
  description: "Sends a picture of a kitty cat!",
  usage: "",
  category: "Fun",
  aliases: ["kitty"]
};

module.exports.run = async (bot, message, args) => {

    //Fetches body.file from url and sends image result
  await snekfetch.get('https://aws.random.cat/meow')
                .then(r => message.channel.send({
                    embed: {
                        author: {
                            name: "Cat",
                        },
                        image: {
                            url: r.body.file
                        }, color: 55555
                    }
                }).catch(e => console.log('Error: ' + e)));
};