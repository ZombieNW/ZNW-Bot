const Discord = require("discord.js");
const eco = require('discord-economy');

module.exports.help = {
  name: "gamble",
  description: "Gambles given money for a chance for more.",
  usage: "<ammount>",
  category: "Economy",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args, prefix) => {
  if(!args[0] && args[0] !== "all" && args[0] !== "max"){
    return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help gamble)`);
  }
  else{
    if(isNaN(args[0])) {
      return message.channel.send(`Silly, you must provide a valid amount.`);
    } 
    if(args[0] === "0") {
      return message.channel.send(`Silly, you **need** money in order to gamble it!.`);  
    }
    else{
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
      var output = await eco.FetchBalance(message.author.id)
      if (output.balance > args[0] - 1){
        var random = getRandomInt(0,args[0]*2);
        var gain = random-args[0];       
        if (Math.sign(gain) === 1){
          var ammountGained = "+" + gain;
        }
        else{
          var ammountGained = gain;
        }
        eco.SubtractFromBalance(message.author.id, args[0])
        eco.AddToBalance(message.author.id, parseInt(random))
        var output = await eco.FetchBalance(message.author.id)
        const gambleEmbed ={
            "title": bot.user.username +  ` Balance (${ammountGained} :coin:)`,
            "description": `${output.balance} :coin:`,
            "color": 32896
        };
        message.channel.send({ embed: gambleEmbed });
      }
      else{
        return message.reply("Sorry, you don't have the funds to do that!");
      }
    }
  }
};