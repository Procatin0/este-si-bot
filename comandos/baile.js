const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "baile",
  alias: ["dance"],

execute (client, message, args){

var user1 = message.author.username
var user2 = message.author.username

var gifs = ["https://media0.giphy.com/media/liFaAWEOa1uKc/giphy.gif","https://media.tenor.com/images/89c9f3115c73d7954050673d4a3e6e30/tenor.gif","https://64.media.tumblr.com/a9159df2395ea89a6a4469c393cb5462/tumblr_nf6hb62qwr1sp6e2vo1_r1_400.gifv"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** esta bailando (☞ﾟヮﾟ)☞`)
.setImage(gifs[grandom])

message.channel.send(embeb)



 }
}