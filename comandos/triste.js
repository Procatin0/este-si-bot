const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "triste",
  alias: ["sad"],

execute (client, message, args){

var user1 = message.author.username
var user2 = message.author.username

var gifs = ["https://i.pinimg.com/originals/85/ed/0d/85ed0d94de02c785cc249fc86fa49465.gif","https://media1.tenor.com/images/2a7ba80fbff50d0ffb61c280878c4559/tenor.gif","https://i.pinimg.com/originals/d9/d7/ad/d9d7addcfe87d7c82ed26a8a0bd64cfa.gif","https://i.gifer.com/C36R.gif"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** esta sad D´:`)
.setImage(gifs[grandom])

message.channel.send(embeb)






 }
}