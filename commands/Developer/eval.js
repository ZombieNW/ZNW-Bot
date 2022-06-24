const Discord = require("discord.js");
const client = require('nekos.life'); // Nekos life
const neko = new client();
const randomPuppy = require('random-puppy');
const fetch = require('node-fetch');
const giveMeAJoke = require('discord-jokes');
const pixabay = require("pixabay-api");
const urban = require("urban");

module.exports.help = {
	name: "eval",
	aliases: [""],
	description: "Evaluates given argument.",
	usage: "<thing-to-eval.",
	category: "Developer",
};

module.exports.run = async (bot, message, log, args, eco) => {

	if (!bot.config.owners.includes(message.author.id)) return;
	try {
		const code = args.join(" ");
		let evaled = await eval(code);
   
		if (typeof evaled !== "string")
		  evaled = require("util").inspect(evaled);
   
		message.channel.send(evaled, {code:"xl"});
	  } catch (err) {
		message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
	  }
};