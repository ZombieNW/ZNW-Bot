const Discord = require("discord.js");

module.exports.help = {
  name: "poll",
  description: "Generates voting poll.",
  usage: "<topic>",
  category: "Utility",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {
     if (!args[0]) {
      message.reply("Silly, you need to give an argument.");
     return;
    } 
    let sender = message.author;
    let msgArgs = args.join(" ");  
    const pollEmbed = //Makes embed
        {
            "title": "Poll By " + sender.tag,
            "description": `${msgArgs}`, //Finds Time From Message Creation To Current Time To Find Lag In MS
            "fields": [
                {
                  "name": "Key: 👍 = Yes! - 👎 = No!",
                  "value": "Poll",
                  "inline": true
                }
              ],
            "color": 32896
            
        };
    message.channel.send({ embed: pollEmbed }).then((messageReaction) => {
        messageReaction.react("👍");
        messageReaction.react("👎");
        message.delete({ timeout: 500 }).catch(console.error);
      }); //Send pollEmbed embed
};