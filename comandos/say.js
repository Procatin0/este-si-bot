const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "say",
  alias: ["decir"],

execute (client, message, args){

var perms = message.member.hasPermission("SEND_TTS_MESSAGES")
if(!perms) return message.channel.send("ERROR permiso requerido: SEND_TTS_MESSAGES ")
let texto = args.join(' ')
if(!texto) return message.channel.send("debes escribir un texto!")
message.channel.send(texto)


 }
}