const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const ms = require('ms'); 

module.exports = {
  name: "sorteo",
  alias: [""],

execute (client, message, args, manager){

 let channel = message.mentions.channels.first()

 if(!channel) return message.channel.send("Debes menciona un canal")
 let giveawayDuration = args[1]
 if(!giveawayDuration) return message.channel.send("debes dicir la duracion del sorteo")
 let giveawayWinners = args[2]
 if(!giveawayWinners) return message.channel.send("debes decir cuantos ganadores tendra")
 let giveawayPrice = args.slice(3).join(' ')
 if(!giveawayPrice) return message.channel.send("Debes decir que vas a sortear")


client.giveawaysManager.start(channel, {
  time: ms(giveawayDuration),
  prize: giveawayPrice,
  winnerCount: giveawayWinners,
  hostedBy: message.author.username
})

 }
}