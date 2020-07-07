const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.help = {
  name: "pig",
  description: "Sends a picture of a pig!",
  usage: "",
  category: "Fun",
  aliases: ["piggy"]
};

module.exports.run = async (bot, message, args) => {

            const random = "pigs"
            const img = await randomPuppy(random);
            const memeEmbed = new Discord.MessageEmbed()
            .setColor(55555)
            .setImage(img)
            .setTitle("r/" + `${random}`)
            .setURL(`https://reddit.com/r/${random}`);
            message.channel.send(memeEmbed)

};