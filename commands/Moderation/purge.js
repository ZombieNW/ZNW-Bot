const Discord = require("discord.js");

module.exports.help = {
  name: "purge",
  description: "Removes past given ammount of messages.",
  usage: "<number>",
  category: "Moderation",
  aliases: [""]
};

module.exports.run = async (bot, message, args) => {
  if (message.member.hasPermission('MANAGE_MESSAGES')) { //If Sender Can Mannage Messages
    if(isNaN(args[0])){ //If args IS NOT a number
        message.reply("Silly, your arguement needs to be a number!");
    }
    else{ //If args IS a number
        message.delete();
        async function purge(){ //Makes async function
            var numArgs = parseInt(args[0], 10); //args to number
            const fetched = await message.channel.messages.fetch({limit: numArgs}); //Fetches numArgs
            message.channel.bulkDelete(fetched) //Deletes Messages
                .catch(error => message.channel.send(`Error: ${error}` )); //Catches Errors
        }
        purge();
    }
}
else{ //If Sender Can't Manage Messages
    message.reply("Silly, you need the `MANAGE_MESSAGES` perm to do that!");
}
};