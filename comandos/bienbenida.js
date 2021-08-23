const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const db = require('megadb');
const canalb = new db.crearDB("canab")

module.exports = {
  name: "canalb",
  alias: [""],

execute (client, message, args){

const perms = message.member.hasPermission("ADMINISTRADOR")
if(!perms) return message.channel.send("No tienes permisos suficientes")

const canal = message.mentions.channels.first()
const canalservidor = message.guild.channels.resolve(canal.id)

if(!canalservidor) return message.channel.send("Debes mencionar un canal")


canalb.establecer(message.guild.id, canal.id)
message.channel.send("El canal para dar las bienbenidas sera " + canal.name)

 }
}