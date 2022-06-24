const Discord = require("discord.js");
const ms = require("ms");

module.exports.help = {
  name: "giveaway",
  description: "Giveaways.",
  usage: "(time in miliseconds) ; (winner ammount) ; (prize)",
  category: "Utility",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args, prefix) => {
  nodes = args.join(" ").split(";");
  if (!nodes[0]) return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help giveaway)`);
  if (isNaN(nodes[0])) return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help giveaway)`);
  if (!nodes[1]) return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help giveaway)`);
  if (isNaN(nodes[1])) return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help giveaway)`);
  if (!nodes[2]) return message.reply(`Silly, you need to provide the valid arguments. (${prefix}help giveaway)`);


  
  bot.giveawaysManager.start(message.channel, {
    time: ms(nodes[0]),
    prize: nodes[2],
    winnerCount: parseInt(nodes[1]),
    messages: {
      giveaway: "**GIVEAWAY**",
      giveawayEnded: "**GIVEAWAY OVER** ",
      timeRemaining: "Time Left: **{duration}**!",
      inviteToParticipate: "React with 🎉 to enter!",
      winMessage: "Congrats {winners}! You won **{prize}**!",
      embedFooter: "Giveaway",
      noWinner: "Giveaway over, nobody entered :(",
      hostedBy: "Hosted By {user}",
      winners: "winner(s)",
      endedAt: "Ended: ",
      units: {
          seconds: "seconds",
          minutes: "minutes",
          hours: "hours",
          days: "days",
          pluralS: false
      }
  }
  });
};