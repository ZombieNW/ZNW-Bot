const Discord = require("discord.js");

module.exports.help = {
  name: "rock-paper-scissors",
  description: "Play rock paper scissors against zBot.",
  usage: "<either 'rock', 'paper', or 'scissors'>",
  category: "Fun",
  aliases: ["rps"]
};

module.exports.run = async (bot, message, log, args) => {

  pattack = args[0]
  if (pattack == "rock"){
    pattack = "r";
    game();
  }
  else if (pattack == "paper"){
    pattack = "p";
    game();
  }
  else if (pattack == "scissors"){
    pattack = "s";
    game();
  }
  else if (pattack == "r"){
    pattack = "r";
    game();
  }
  else if (pattack == "p"){
    pattack = "p";
    game();
  }
  else if (pattack == "s"){
    pattack = "s";
    game();
  }
  else{
    message.reply(`Silly, you need to provide the valid arguments. (${prefix}help rock-paper-scissors)`);
  }
  function game(){
    cattack = Math.floor(Math.random() * (4 - 1)) + 1;
    if(cattack == 1){
      cattack = "r";
    }
    if(cattack == 2){
      cattack = "p";
    }
    if(cattack == 3){
      cattack = "s";
    }
    // break
    if(cattack == "r" && pattack == "r"){
      message.reply("Computer chose rock, you tied.");
    }
    if(cattack == "r" && pattack == "p"){
      message.reply("Computer chose rock, you win.");
    }
    if(cattack == "r" && pattack == "s"){
      message.reply("Computer chose rock, you loose.");
    }
    if(cattack == "p" && pattack == "r"){
      message.reply("Computer chose paper, you loose.");
    }
    if(cattack == "p" && pattack == "p"){
      message.reply("Computer chose paper, you tied.");
    }
    if(cattack == "p" && pattack == "s"){
      message.reply("Computer chose paper, you win.");
    }
    if(cattack == "s" && pattack == "r"){
      message.reply("Computer chose scissors, you win.");
    }
    if(cattack == "s" && pattack == "p"){
      message.reply("Computer chose scissors, you loose.");
    }
    if(cattack == "s" && pattack == "s"){
      message.reply("Computer chose scissors, you tied.");
    }
  }
};