const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const db = require('megadb');
const imagenb = new db.crearDB("imagenb")


module.exports = {
  name: "imagenb",
  alias: [""],

execute (client, message, args){

const perms = message.member.hasPermission("ADMINISTRADOR")
if(!perms) return message.channel.send("No tienes permisos suficientes")



const mensaje = args.join(" ")

if(!mensaje) return message.channel.send("Debes escribir un mensaje para dar las bienbenidas")

if(!message.content.endsWith(".jpg")) return message.channel.send("tu enlace de imagen debe terminar en .jpg o .png")

imagenb.establecer(message.guild.id, mensaje)
message.channel.send("La imagen de bienvenida sera: " + mensaje )

 }
}