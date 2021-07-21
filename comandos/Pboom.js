const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "boom",
  alias: ["boom"],

execute (client, message, args){

var user1 = message.author.username
var user2 = message.author.username

var gifs = ["https://i.pinimg.com/originals/c3/19/f3/c319f3886d4966fb077214abfc9a956d.gif","https://i.pinimg.com/originals/c3/19/f3/c319f3886d4966fb077214abfc9a956d.gif","https://i.gifer.com/RyAW.gif"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** explotó （*゜ー゜*）`)
.setImage(gifs[grandom])

message.channel.send(embeb)



 }
}