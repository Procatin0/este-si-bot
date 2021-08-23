const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
let chatbot = require("espchatbotapi")
chatbotpublico = new chatbot('publico')
chatbottoken = new chatbot('fbec123c-399e-4890-a82b-abc08ca97b75')

module.exports = {
  name: "enseñar",
  alias: ["aprender"],

execute (client, message, args){

//if(!message.author.id("404421840912646144")) return message.channel.send("Mi creador me dijo que ustedes me pueden enseñar cosas malas")

const argsi = args[0].replace(".", " ").replace(".", " ").replace(".", " ").replace(".", " ")

const args2 = args.slice(1).join(' ')

const argsii = args2.replace(".", " ")

chatbottoken.enseñar(argsi, args.slice(1).join(' ')).then(r => {
  console.log(r)
  message.channel.send(r)
  message.channel.send(argsi)
    message.channel.send(argsii)
  
   //deberia decirte que se enseño correctamente
}).catch(err => {
  console.log(err) //Si ocurre un error
})





 }
}