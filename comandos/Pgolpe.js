const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "golpe",
  alias: ["blow"],

execute (client, message, args){
var img = ["https://media3.giphy.com/media/zOxgIxfVwPxJe/giphy.gif","https://media0.giphy.com/media/3ohhwFYbsKoLUOgSfC/giphy.gif","https://i.pinimg.com/originals/65/ad/d9/65add9483a450f1d66d08e29b5b9ab4d.gif"]
var emgs = Math.floor(Math.random()*(img.length))

let golpeado = message.mentions.users.first()
  if(!golpeado) {
    
    const embed = new Discord.MessageEmbed()
    .setTitle("No se a mencionado ningun usuario para golpear")
    .setColor("RANDOM")
    
    message.channel.send(embed)
  } else {
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(message.author.username + " golpeo a: " + golpeado.username)
    .setColor("RANDOM")
    .setImage(img[emgs])
    message.channel.send(embed2)
    
    
    
  }


 }
}