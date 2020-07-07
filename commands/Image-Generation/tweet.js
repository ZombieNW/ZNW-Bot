const Discord = require("discord.js");
const { NekoBot } = require("nekobot-api");
const api = new NekoBot();

module.exports.help = {
  name: "tweet",
  description: "Generates a twitter post based on input.",
  usage: "<text>",
  category: "Img",
  aliases: [""]
};

module.exports.run = async (bot, message, args) => {

  if(!args[0]) return message.reply("Silly, you must supply a message!");
  let waitMessage = await message.reply("Generating... please wait");
  let waitMessageid = waitMessage.id;
  
  let image = await api.imageGen.tweet(message.author.username, args.join(" "));
  message.channel.send({
    embed: {
        author: {
            name: "Tweet",
        },
        image: {
            url: image
        }, color: 55555
    }
  })
  .catch(e => console.log('Error: ' + e))
  message.channel.messages.fetch(waitMessageid).then(msg => msg.delete());


};