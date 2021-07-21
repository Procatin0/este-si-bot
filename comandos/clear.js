const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "clear",
  alias: ["limpiar"],

execute (client, message, args){

  
const cantidad = args.join(' ')

if(message.author.id == "404421840912646144"){
  if(!cantidad) return message.channel.send("Debes escribir un cantidad")

if(cantidad == 0) return message.channel.send("Debes poner un numero mayor a 0")

if(cantidad >= 101) return message.channel.send("solo puedo eliminar asta 100 mensajes a la vez")

message.channel.bulkDelete(cantidad).then(() => {
  message.channel.send(cantidad + " mensajes eliminados correctamente")
})
}

let perms = message.member.hasPermission("MANAGE_MESSAGES")
if(!perms) return message.channel.send("nesesitas el permiso: gestionar mensajes")
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nesesito el permiso: gestionar mensajes")

if(!cantidad) return message.channel.send("Debes escribir un cantidad")

if(cantidad == 0) return message.channel.send("Debes poner un numero mayor a 0")

if(cantidad >= 101) return message.channel.send("solo puedo eliminar asta 100 mensajes a la vez")

message.channel.bulkDelete(cantidad).then(() => {
  message.channel.send(cantidad + " mensajes eliminados correctamente")
})



 }
}