const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.help = {
  name: "panda",
  description: "Sends a picture of a panda!",
  usage: "",
  category: "Animals",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {

            const random = "pandas"
            const img = await randomPuppy(random);
            const memeEmbed = new Discord.MessageEmbed()
            .setColor(32896)
            .setImage(img)
            .setTitle("r/" + `${random}`)
            .setURL(`https://reddit.com/r/${random}`);
            message.channel.send(memeEmbed)

};