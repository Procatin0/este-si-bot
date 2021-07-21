const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const { meme } = require('memejs');
module.exports = {
  name: "miau",
  alias: ["gato"],

execute (client, message, args){

meme('cats', function(err, data) { 
if (err) return message.reply(err) //si hay un error se enviara un mensaje con tal error
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(data.url) //el body de data contiene diferentes cosas pero para obtener la imagen necesitamos "url"
message.channel.send(embed)
})



 }
}