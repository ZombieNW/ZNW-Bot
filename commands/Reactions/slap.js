const Discord = require("discord.js");
const client = require('nekos.life'); // Nekos life
const neko = new client();

module.exports.help = {
  name: "slap",
  description: "Slaps given user.",
  usage: "<@member>",
  category: "Reactions",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {

  let reciever = message.mentions.members.first()
  if(!reciever) return message.reply(`Silly, you must provide a valid user!`)
  neko.sfw.slap().then(neko => {message.channel.send({
    embed: {
        author: {
            name: `${reciever.user.tag} has been slapped, rude!`,
        }, 
        image: {
            url: neko.url
        },color: 32896
    }
})});

};