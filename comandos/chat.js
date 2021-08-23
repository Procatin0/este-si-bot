const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
let chatbot = require("espchatbotapi")
chatbotpublico = new chatbot('publico')
chatbottoken = new chatbot('d9272eff-dbd3-4ee7-b657-cfc5bc465cb9')


module.exports = {
  name: "chat",
  alias: ["chatear"],

execute (client, message, args){

  

let minimo = 0.45
chatbottoken.obtener(args,true).then(respuesta => {
  if(respuesta[1] > minimo){ //Si el factor de fiabilidad es menor al minimo definido previamente usara la respuesta de la api publica
    message.channel.send(respuesta) //respuesta al texto(respuesta de tu propio bot)
  } else {
    chatbotpublico.obtener(args).then(respuesta => {
     message.channel.send(respuesta) //respuesta de la api publica
    }).catch(err => {
    console.log(err)
    })
  }

}).catch(err => {
  console.log(err) //Si ocurre un error
})


 }
}