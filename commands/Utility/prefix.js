const Discord = require("discord.js");
const fs = require("fs");

module.exports.help = {
  name: "prefix",
  description: "Changes bot prefix for your server.",
  usage: "<new-prefix>",
  category: "Utility",
  aliases: [""]
};

module.exports.run = async (bot, message, log, args, prefix) => {
    if (message.member.hasPermission('ADMINISTRATOR')) { //If Sender Is Admin
      if(!args[0]){
          message.reply("Silly, you need to provide an prefix to change to!");
      }
      else{
          let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8")); //Loads prefixes.json
          prefixes[message.guild.id] = { //Change Prefix In Json
              prefixes: args[0]
          };
          fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => { //Writes Prefix Change To prefixes.json
              if (err){ //Catch Errors
                  log.warn(err);
              }
          })
          const prefixChangeEmbed = //Makes embed
      {
          "name": "Prefix Changed",
          "description": `Prefix Changed To ${args[0]}`, //Says prefix was changed to args
          "color": 32896
      };
  message.channel.send({ embed: prefixChangeEmbed }); //Send prefixChangeEmbed embed
      }
  }
  else{ //If Sender Isn't Admin
      message.reply("Silly, you need the `ADMINISTRATOR` perm to do that!");
  }

};