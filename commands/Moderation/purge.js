const Discord = require("discord.js");

module.exports.help = {
  name: "purge",
  description: "Removes past given ammount of messages.",
  usage: "<number>",
  category: "Moderation",
  aliases: ["clear"]
};

module.exports.run = async (bot, message, log, args) => {
  if (message.member.hasPermission('MANAGE_MESSAGES')) { //If Sender Can Mannage Messages
    if(isNaN(args[0]) || !args[0]){ //If args IS NOT a number
      message.reply(`Silly, you need to provide the valid arguments. (${prefix}help purge)`);
    }
    var amount = parseInt(args[0], 10) + 1;
    if (amount > 100) return message.reply('Silly, you can\'t delete more than 100 messages.'); // Checks if the `amount` integer is bigger than 100
    if (amount < 1) return message.reply('Silly, you got to at least delete one messages!'); // Checks if the `amount` integer is smaller than 1
    
    await message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
        message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
    )});
}
else{ //If Sender Can't Manage Messages
    message.reply("Silly, you need the `MANAGE_MESSAGES` perm to do that!");
}
};