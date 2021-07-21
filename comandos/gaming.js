const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "jugando",
  alias: ["gaming"],

execute (client, message, args){

var user1 = message.author.username
var user2 = message.author.username

var gifs = ["https://lh4.ggpht.com/_nVeIKqRuiso/S740ApXfuWI/AAAAAAAAD_U/S1i50XrgK0c/s1600/GATO%5B2%5D.gif","https://gifsanimados.de/img-gifsanimados.de/c/computadoras/computadora-anime-chica-31.gif","https://gifsanimados.de/img-gifsanimados.de/c/computadoras/computadora-tecleando-33.gif","https://i.pinimg.com/originals/bb/cf/be/bbcfbe9eb33bedfcac02bf66c350fa6f.gif","https://acegif.com/wp-content/uploads/cat-typing-2.gif","https://pbs.twimg.com/media/EXKq_cTWsAIh3wM.jpg"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** esta jugando. ඞ`)
.setImage(gifs[grandom])

message.channel.send(embeb)




 }
}