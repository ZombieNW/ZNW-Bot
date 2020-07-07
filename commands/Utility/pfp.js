const Discord = require("discord.js");

module.exports.help = {
  name: "pfp",
  description: "Grabs profile picture from given member.",
  usage: "",
  category: "Utility",
  aliases: ["profile","profile-picture"]
};

module.exports.run = async (bot, message, args) => {
  if(!message.mentions.users.first()){ //If No Argument
    message.channel.send({
        embed: {
            author: {
                name: "Your profile picture!",
            },
            image: {
                url: message.author.displayAvatarURL()
            },
            color: 55555
        }
    })
  }
  else{ //If Arguement
      const user = message.mentions.users.first() //First Pinged User

      message.channel.send({
          embed: {
              author: {
                  name: "Profile picture grabber!",
              },
              image: {
                  url: user.avatarURL()
              },
              color: 55555
          }
      })
  }
};