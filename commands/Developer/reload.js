const { readdirSync } = require("fs");
const { join } = require("path");

module.exports.help = {
	name: "reload",
	aliases: [""],
	description: "Reloads code for specified command.",
	usage: "<command-name>",
	category: "Developer",
};

module.exports.run = (bot, message, log, args) => {

	//If sent by owner proceed, otherwise return
	if (!bot.config.owners.includes(message.author.id)) return;

	//If argument is invalid, return
	if (!args[0]) return message.channel.send("Silly, you need to provide a command to reload!");

	//Establish what command is being searched and if it is valid.
	const commandName = args[0].toLowerCase();
	const command = bot.commands.get(commandName) || bot.commands.get(bot.aliases.get(commandName));
	if (!command) return message.reply("Silly, that command doesn't exist. Try again.");

	//Searches for commands
	readdirSync(join(__dirname, "..")).forEach(f => {
		const files = readdirSync(join(__dirname, "..", f));
		if (files.includes(`${commandName}.js`)) {
			const file = `../${f}/${commandName}.js`;
			try {
				//Attempts to reload command
				delete require.cache[require.resolve(file)];
				bot.commands.delete(commandName);
				const pull = require(file);
				bot.commands.set(commandName, pull);
				return message.channel.send(`Successfully reloaded ${commandName}.js!`);
			}
			catch (err) {
				//Command reload fails
				message.channel.send(`Could not reload: ${args[0].toUpperCase()}\``);
				return log.warn(err.stack || err);
			}
		}
	});
};