const Discord = require("discord.js");

module.exports.help = {
	name: "say",
	aliases: [""],
	description: "Reloads code for specified command.",
	usage: "<command-name>",
	category: "Developer",
};

module.exports.run = (bot, message, log, args) => {

	//Organises message and checks if it's valid.
	if (!bot.config.owners.includes(message.author.id)) return;
	let MSG = args.join(" ");
	if(!MSG)return message.reply(`Silly, you need to specify a mesage to send!`);
	
	//Sends MSG
    message.channel.send(MSG);
    message.delete();
};