const { readdirSync } = require("fs");
const { join } = require("path");

module.exports.help = {
	name: "restart",
	aliases: [""],
	description: "Restarts bot.",
	usage: "",
	category: "Developer",
};

module.exports.run = async (bot, message, args) => {

	//If sent by owner proceed, otherwise return
	if (!bot.config.owners.includes(message.author.id)) return;

	message.channel.send('Resetting...')
    process.exit(1);
};