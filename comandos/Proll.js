const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "roll",
  alias: ["dado"],

execute (client, message, args){

  var numeros = ["1","2","3","4","5","6","7","8","9","10","11","12"];
  var nr = Math.floor(Math.random()*(numeros.length));
  message.channel.send(numeros[nr]);



 }
}