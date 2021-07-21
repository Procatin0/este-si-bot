const Discord = require('discord.js');
const  { Canvas } = require("canvacord")



module.exports = {
  name: "affect",
  alias: [],

async execute (client, message, args){



  const user =  message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; //definimos al usuario 

const avatar = user.displayAvatarURL({dynamic: false, format: 'png', size: 2048}) // sacamos el avatar del user

const image = await Canvas.affect(avatar)//aqu� usamos el m�dulo para hacer la magia

const affect = new Discord.MessageAttachment(image, `affect.png`) //Convertimos en un attachment la "image"

message.channel.send(affect)


 }
}