const Discord = require("discord.js");
const { readdirSync } = require("fs");

module.exports.help = {
	name: "help",
	aliases: ["h"],
	description: "Displays all commands and how to use them.",
	usage: "(command name)",
	category: "Utility",
};


module.exports.run = (bot, message, log, args, prefix) => {

	const embed = new Discord.MessageEmbed()
		.setColor(32896)
		.setAuthor(`${bot.user.username} Commands`, bot.user.displayAvatarURL)
		.setFooter(`${bot.user.username}`)
		.setTimestamp();
	if (args[0]) {
		let command = args[0];
		let cmd;
		if (bot.commands.has(command)) {
			cmd = bot.commands.get(command);
		}
		else if (bot.aliases.has(command)) {
			cmd = bot.commands.get(bot.aliases.get(command));
		}
		if(!cmd) return message.channel.send(embed.setTitle("Silly, that is an invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`));
		command = cmd.help;
		embed.setTitle(`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} command help`);
		embed.setDescription([
			`❯ **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}`,
			`❯ **Description:** ${command.description || "No Description provided."}`,
			`❯ **Usage:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"} `,
			`❯ **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None"}`,
			`❯ **Category:** ${command.category ? command.category : "General" || "Misc"}`,
		].join("\n"));

		return message.channel.send(embed);
	}
	const categories = readdirSync("./commands/");
	embed.setDescription([
		`The bot prefix is **${prefix}**`,
		"Do `" + prefix + "help (command name)` for information about each command.",
	].join("\n"));
	categories.forEach(category => {
		const dir = bot.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase());
		const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);

		try {
			if (dir.size === 0) return;
			if (bot.config.owners.includes(message.author.id)) embed.addField(`❯ ${capitalise}`, dir.map(c => `\`${c.help.name}\``).join(", "));
			else if (category !== "Developer") embed.addField(`❯ ${capitalise}`, dir.map(c => `\`${c.help.name}\``).join(", "));
		}
		catch (e) {
			log.warn(e);
		}
	});
	return message.channel.send(embed);
};
