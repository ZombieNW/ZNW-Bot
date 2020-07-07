const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.help = {
  name: "meme",
  description: "Sends memes from a variety of subreddits.",
  usage: "",
  category: "Fun",
  aliases: ["m"]
};

module.exports.run = async (bot, message, args) => {

  const subReddits = ["dankmeme", "meme", "memes", "me_irl"]
            const random = subReddits[Math.floor(Math.random() * subReddits.length)];
            const img = await randomPuppy(random);
            const memeEmbed = new Discord.MessageEmbed()
            .setColor(55555)
            .setImage(img)
            .setTitle("r/" + `${random}`)
            .setURL(`https://reddit.com/r/${random}`);
            message.channel.send(memeEmbed)

};