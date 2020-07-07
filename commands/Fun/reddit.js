const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports.help = {
  name: "reddit",
  description: "Risplays post from given subreddit.",
  usage: "<query>",
  category: "Fun",
  aliases: [""]
};

module.exports.run = async (bot, message, args) => {

  async function postMeme(){ //Makes aysnc function
    let Subreddit = args[0]
    if(!Subreddit)return message.channel.send("Silly, you need to specify a subreddit!")
    try{
        let img = await randomPuppy(Subreddit)
        const redditEmbed = new Discord.MessageEmbed()
        .setTitle(`r/${Subreddit}`)
        .setColor(55555)
        .setImage(img)
        .setURL(`https://reddit.com/r/${Subreddit}`)
        if (img === undefined){
            message.reply("Silly, that's not a real subreddit!");
        }
        else{
            message.channel.send(redditEmbed)
        }
    }catch(err){
         console.log(err);
    }
}
postMeme();

};