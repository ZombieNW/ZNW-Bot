const Discord = require("discord.js");

module.exports.help = {
  name: "magic-8-ball",
  description: "Returns a 'magic 8 ball' response.",
  usage: "",
  category: "Utility",
  aliases: ["8-ball", "8ball"]
};

module.exports.run = async (bot, message, log, args) => {
  const responses = [
		"It is certain",
		"It is decidedly so",
		"Without a doubt",
		"Yes – definitely",
		"You may rely on it",
		"As I see it",
		"yes",
		"Most Likely",
		"Outlook good",
		"Yes",
		"Signs point to yes"
	];

	const randomIndex = Math.floor(Math.random() * responses.length);
	message.reply(responses[randomIndex]);
};