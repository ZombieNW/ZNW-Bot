const Discord = require("discord.js");
const snekfetch = require('snekfetch'); //Snekfetch

module.exports.help = {
  name: "dog",
  description: "Sends a picture of a puppy dog!",
  usage: "",
  category: "Fun",
  aliases: ["puppy"]
};

module.exports.run = async (bot, message, args) => {

    //Fetches body.url from url and sends image result
    await snekfetch.get('https://random.dog/woof.json')
    .then(r => message.channel.send({
        embed: {
            author: {
                name: "Dog",
            },
            image: {
                url: r.body.url
            }, color: 55555
        }
    }).catch(e => console.log('Error: ' + e)));
};