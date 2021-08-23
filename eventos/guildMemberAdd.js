const Discord = require('discord.js');
const db = require('megadb');
const canalb = new db.crearDB("canab")
const messageb = new db.crearDB("messageb")
const imagenb = new db.crearDB("imagenb")

module.exports = async (client, member) => {

  if(!canalb.tiene(member.guild.id)) return
if(!messageb.tiene(member.guild.id)) return



const canal = await canalb.obtener(member.guild.id)
const mensaje = await messageb.obtener(member.guild.id)


const msgbueno = mensaje.replace("{user}", member.user.username).replace("{usertag}", member.tag).replace("{servidor}", member.guild.name).replace("{memberCount}", member.guild.memberCount)
client.channels.cache.get(canal).send(msgbueno)

if(!imagenb.tiene(member.guild.id)) return

const imagen = await imagenb.obtener(member.guild.id)

client.channels.cache.get(canal).send(imagen)

}