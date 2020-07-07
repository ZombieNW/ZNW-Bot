const Discord = require("discord.js");
const { readdirSync } = require("fs");

module.exports.help = {
	name: "list-help",
	aliases: [""],
	description: "Displays commands in a list.",
	usage: "",
	category: "Developer",
};


module.exports.run = (bot, message, args, prefix) => {

	if (!bot.config.owners.includes(message.author.id)) return;

	const embed = new Discord.MessageEmbed()
		.setColor(55555)
		.setAuthor(`${bot.user.username} Commands`, bot.user.displayAvatarURL)
		.setFooter(`${bot.user.username}`)
		.setTimestamp();
	const categories = readdirSync("./commands/");
	categories.forEach(category => {
		const dir = bot.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase());
		const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);

		try {
			if (bot.config.owners.includes(message.author.id)) embed.addField(`❯ ${capitalise}`, dir.map(c => `-${c.help.name + " " + c.help.usage + ", Description: " + c.help.description} <br>`).join("\n "));
			else if (category !== "Developer") embed.addField(`❯ ${capitalise}`, dir.map(c => `\`${c.help.name}\``).join(", "));
		}
		catch (e) {
			console.log(e);
		}
	});
	return message.channel.send(embed);
};
