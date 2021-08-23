const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const db = require('megadb');
const messageb = new db.crearDB("messageb")

module.exports = {
  name: "mensajeb",
  alias: [""],

execute (client, message, args){

const perms = message.member.hasPermission("ADMINISTRADOR")
if(!perms) return message.channel.send("No tienes permisos suficientes")



const mensaje = args.join(" ")

if(!mensaje) return message.channel.send("Debes escribir un mensaje para dar las bienbenidas")


messageb.establecer(message.guild.id, mensaje)
message.channel.send("El mensaje de Bienbenida sera: " + mensaje )

 }
}