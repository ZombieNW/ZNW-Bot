const Discord = require("discord.js");
const { NekoBot } = require("nekobot-api");
const api = new NekoBot();

module.exports.help = {
  name: "change-my-mind",
  description: "Generates a \"Change My Mind\" meme.",
  usage: "<text>",
  category: "Img",
  aliases: ["cmm"]
};

module.exports.run = async (bot, message, args) => {

  if(!args[0]) return message.reply("Silly, you must supply a message!");
  let waitMessage = await message.reply("Generating... please wait");
  let waitMessageid = waitMessage.id;
  
  let image = await api.imageGen.changemMyMind(args.join(" "));
  message.channel.send({
    embed: {
        author: {
            name: "Change My Mind",
        },
        image: {
            url: image
        }, color: 55555
    }
  })
  .catch(e => console.log('Error: ' + e))
  message.channel.messages.fetch(waitMessageid).then(msg => msg.delete());


};