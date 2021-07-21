const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "aplausos",
  alias: ["claps"],

execute (client, message, args){


var user1 = message.author.username
var user2 = message.author.username

var gifs = ["https://pa1.narvii.com/6103/1858d87e01db348caa219211af596d1a9aa852dc_hq.gif","https://www.gratistodo.com/wp-content/uploads/2017/02/Aplausos-4.gif","https://i.pinimg.com/originals/ee/93/55/ee93557df12e3053043f73ab34053f7d.gif","https://pa1.narvii.com/6081/f2de4d0bbb12add3b9a2a3f67d650940342204ca_hq.gif"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** esta sad plaudiendo ヾ(•ω•)o`)
.setImage(gifs[grandom])

message.channel.send(embeb)


 }
}