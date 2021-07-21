const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "avatar",
  alias: ["avatar"],

execute (client, message, args){

let user = message.mentions.users.first()

if(!user){
const embed = new Discord.MessageEmbed()
.setTitle("Avatar de " + message.author.tag)
.setImage(message.author.displayAvatarURL())

message.channel.send(embed)
}else{
  const embed2 = new Discord.MessageEmbed()
  .setTitle("Avatar de " + user.tag)
  .setImage(user.displayAvatarURL())
  message.channel.send(embed2)
}


 }
}