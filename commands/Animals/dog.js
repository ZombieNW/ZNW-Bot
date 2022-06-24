const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.help = {
  name: "dog",
  description: "Sends a picture of a puppy!",
  usage: "",
  category: "Animals",
  aliases: ["puppy"]
};

module.exports.run = async (bot, message, log, args) => {

            const random = "dogpictures"
            const img = await randomPuppy(random);
            const memeEmbed = new Discord.MessageEmbed()
            .setColor(32896)
            .setImage(img)
            .setTitle("r/" + `${random}`)
            .setURL(`https://reddit.com/r/${random}`);
            message.channel.send(memeEmbed)

};