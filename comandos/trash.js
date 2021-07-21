const Discord = require('discord.js');
const  { Canvas } = require("canvacord")

module.exports = {
  name: "trash",
  alias: [],

async execute (client, message, args){

let mencion = message.mentions.users.first()

        let avatar =  mencion.displayAvatarURL({dynamic: false, format: "png"}) || message.author.displayAvatarURL({dynamic: false, format: "png"});// Decimos que la imagen sea estatica y no un gif

        //creamos un let        
        let image = await Canvas.trash(avatar); // llamamos al let avatar
        
        let trash = new Discord.MessageAttachment(image, "trash.png") //llamamos a la imagen "trash.png"
        message.channel.send(trash); // mandamos el mensaje
        
         


 }
}