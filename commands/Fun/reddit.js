const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.help = {
  name: "reddit",
  description: "Displays post from given subreddit.",
  usage: "<subreddit name>",
  category: "Fun",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args) => {

  async function postMeme(){ //Makes aysnc function
    let Subreddit = args[0]
    if(!Subreddit)return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help reddit)`);
    try{
        let img = await randomPuppy(Subreddit)
        const redditEmbed = new Discord.MessageEmbed()
        .setTitle(`r/${Subreddit}`)
        .setColor(32896)
        .setImage(img)
        .setURL(`https://reddit.com/r/${Subreddit}`)
        if (img === undefined){
            message.reply("Silly, that's not a real subreddit!");
        }
        else{
            message.channel.send(redditEmbed)
        }
    }catch(err){
         log.warn(err);
    }
}
postMeme();

};