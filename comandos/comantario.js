const Discord = require('discord.js');
const  { Canvas } = require("canvacord")

module.exports = {
  name: "coment",
  alias: [""],

async execute (client, message, args){


const acomentar = args.join(''); // definimos el comentario a poner
if(!acomentar) return message.channel.send(`Pon un comentario!`) // si el usuario no indica ningun comentario dice que lo pongas ;)
try {    
let yt = await Canvas.youtube({"avatar":message.author.displayAvatarURL({format: "png"}),"username":message.author.username, "content":args.join(" ")}) // generamos la foto, podemos canviar el user a lo que queramos
let enviar = new Discord.MessageAttachment(yt, 'comentario.png') // generamos el Attachment para enviarlo
message.channel.send(enviar) // finalmente lo enviamos, se puede puede poner en embed si lo deseas.
}catch(err) { // si hay un error lo loguea en la consola
  console.log("[comentario] hubo un error" + err) // logeamos en caso de error
}


 }
}