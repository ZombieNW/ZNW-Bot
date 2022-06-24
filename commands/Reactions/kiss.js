const Discord = require("discord.js");
const client = require('nekos.life'); // Nekos life
const neko = new client();

module.exports.help = {
  name: "kiss",
  description: "Kisses given user.",
  usage: "<@member>",
  category: "Reactions",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {

  let reciever = message.mentions.members.first()
  if(!reciever) return message.reply(`Silly, you must provide a valid user!`)
  neko.sfw.kiss().then(neko => {message.channel.send({
    embed: {
        author: {
            name: `${reciever.user.tag} has been kissed, cute!`,
        }, 
        image: {
            url: neko.url
        },color: 32896
    }
})});

};