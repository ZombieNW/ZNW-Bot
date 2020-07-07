const Discord = require("discord.js");
const client = require('nekos.life'); // Nekos life
const neko = new client();

module.exports.help = {
  name: "pat",
  description: "Pats given user.",
  usage: "<@member>",
  category: "Reactions",
  aliases: ["pet"]
};

module.exports.run = async (bot, message, args) => {

  let reciever = message.mentions.members.first()
  if(!reciever) return message.reply(`Silly, you must provide a valid user!`)
  neko.sfw.pat().then(neko => {message.channel.send({
    embed: {
        author: {
            name: `${reciever.user.tag} has been patted!`,
        }, 
        image: {
            url: neko.url
        },color: 55555
    }
})});

};