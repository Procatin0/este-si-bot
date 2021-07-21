const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "shoot",
  alias: ["disparo"],

execute (client, message, args){


var user1 = message.author.username
var user2 = message.mentions.users.first()

if(!user2) return message.channel.send("debes mencionar a alguien")


var gifs = ["https://i.pinimg.com/originals/d0/25/bd/d025bda4bd288d52243d262e9626da11.gif","https://i.gifer.com/Ud80.gif","https://d.wattpad.com/story_parts/751730093/images/15ad045be1fda519294984018620.gif"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** dispró a **${user2.username}** (っ °Д °;)っ `)
.setImage(gifs[grandom])

message.channel.send(embeb)


 }
}