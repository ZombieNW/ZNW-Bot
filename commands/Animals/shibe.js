const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.help = {
  name: "shibe",
  description: "Sends a picture of doge!",
  usage: "",
  category: "Animals",
  aliases: ["shiba", "doge"]
};

module.exports.run = async (bot, message, log, args) => {

            const random = "shiba"
            const img = await randomPuppy(random);
            const memeEmbed = new Discord.MessageEmbed()
            .setColor(32896)
            .setImage(img)
            .setTitle("r/" + `${random}`)
            .setURL(`https://reddit.com/r/${random}`);
            message.channel.send(memeEmbed)

};