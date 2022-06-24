const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.help = {
  name: "raccoon",
  description: "Sends a picture of a raccoon!",
  usage: "",
  category: "Animals",
  aliases: ["jj","raccon","racoon"]
};

module.exports.run = async (bot, message, log, args) => {

            const random = "Raccoons"
            const img = await randomPuppy(random);
            const memeEmbed = new Discord.MessageEmbed()
            .setColor(32896)
            .setImage(img)
            .setTitle("r/" + `${random}`)
            .setURL(`https://reddit.com/r/${random}`);
            message.channel.send(memeEmbed)

};