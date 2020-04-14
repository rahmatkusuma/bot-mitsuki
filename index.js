const Discord = require ("discord.js");
const PREFIX = "!!" // Prefix

var bot = new Discord.Client();

// Events
bot.on("ready", function() {
    bot.user.setGame("Hi, Saya Asal Konoha");
    console.log(`${bot.user.username} sudah di Hidupkan!`);    
});

bot.on("message", function(message) {
    if(message.author.bot) return; // ini
    if(!message.guild) return; // ini juga
    if(!message.content.startWith(PREFIX)) return; // dan ini juga

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();

// Commands
    if(command == "ping") {
        message.channel.send(":ping_pong **PONG**");
    }
});

// bot login
bot.login("Njk5NDUyNjUyMDkzNzAyMjQ0.XpUmQg.TdIJQckVOUh84WI8pjm6tt1gF1g");
bot.login(process.env.TOKEN)
