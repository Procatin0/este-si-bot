const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "rickroll",
  alias: ["rickroll"],

execute (client, message, args){


const embeb = new Discord.MessageEmbed()
.setTitle("Usalo con Sabiduria😉")
.setDescription("https://este-si-bot.procatin0.repl.co/los-mayores-secretos-del-estado")
message.channel.send(embeb)
 }
}