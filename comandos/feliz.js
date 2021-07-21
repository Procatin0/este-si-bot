const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "feliz",
  alias: ["happy"],

execute (client, message, args){

var user1 = message.author.username
var user2 = message.author.username

var gifs = ["https://static.vix.com/es/sites/default/files/d/dragon-ball-felices.gif","https://pa1.narvii.com/6117/d3bbde806ddd85d1f0b47d7668c0dc7334fda799_hq.gif","https://pa1.narvii.com/6537/fbc9a0a0a4b6df27e93cd8c5fbed07d6f2ede856_hq.gif"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** esta bailando de Alegria! (☞ﾟヮﾟ)☞`)
.setImage(gifs[grandom])

message.channel.send(embeb)



 }
}