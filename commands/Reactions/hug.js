const Discord = require("discord.js");
const client = require('nekos.life'); // Nekos life
const neko = new client();

module.exports.help = {
  name: "hug",
  description: "Hugs given user.",
  usage: "<@member>",
  category: "Reactions",
  aliases: ["cuddle", "hold"]
};

module.exports.run = async (bot, message, args) => {

  let reciever = message.mentions.members.first()
  if(!reciever) return message.reply(`Silly, you must provide a valid user!`)
  neko.sfw.hug().then(neko => {message.channel.send({
    embed: {
        author: {
            name: `${reciever.user.tag} has been hugged, cute!`,
        }, 
        image: {
            url: neko.url
        },color: 55555
    }
})});

};