const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "enfadado",
  alias: ["angry"],

execute (client, message, args){

var user1 = message.author.username
var user2 = message.author.username

var gifs = ["https://esbarrio.com/wp-content/uploads/2017/10/enojado.gif","https://2.bp.blogspot.com/-MONpUhy8-tE/U_HYrzKfk_I/AAAAAAAADAM/X722gU7PJg4/s1600/708736.gif","https://thumbs.gfycat.com/HeartySpanishDuck-size_restricted.gif","https://i.gifer.com/281L.gif","https://gifimage.net/wp-content/uploads/2017/07/angry-anime-gif-23.gif"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** esta enfadado ╚(•⌂•)╝`)
.setImage(gifs[grandom])

message.channel.send(embeb)



 }
}