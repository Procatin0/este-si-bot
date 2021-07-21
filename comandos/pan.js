const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "pan",
  alias: ["pan"],

execute (client, message, args){

let mencion = message.mentions.users.first() 

if(!mencion){
  var img = ["https://novaescuela.edu.pe/wp-content/uploads/2020/05/nova-escuela-pan-de-yema-receta-nova-de-hoy.jpg","https://www.recetasdepan.net/wp-content/uploads/2019/05/Receta-de-pan-baguette.jpg","https://www.recetasdesbieta.com/wp-content/uploads/2018/08/pan-frances-1.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_JczQk0fVsXDR6dokT6s2m8Apy_8f2MHgw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RLmWuF3dXfthtnEn_QhLZjjMMyl8vLdjcg&usqp=CAU","https://www.recetasderechupete.com/wp-content/uploads/2020/03/Pan-f%C3%A1cil-y-r%C3%A1pido-sin-amasado.jpg"]
var imgrandom = Math.floor(Math.random()*(img.length))
  const embed = new Discord.MessageEmbed()
  .setTitle("Pan👍")
  .setImage(img[imgrandom])
  message.channel.send(embed)
}else{
    var img = ["https://novaescuela.edu.pe/wp-content/uploads/2020/05/nova-escuela-pan-de-yema-receta-nova-de-hoy.jpg","https://www.recetasdepan.net/wp-content/uploads/2019/05/Receta-de-pan-baguette.jpg","https://www.recetasdesbieta.com/wp-content/uploads/2018/08/pan-frances-1.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_JczQk0fVsXDR6dokT6s2m8Apy_8f2MHgw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RLmWuF3dXfthtnEn_QhLZjjMMyl8vLdjcg&usqp=CAU","https://www.recetasderechupete.com/wp-content/uploads/2020/03/Pan-f%C3%A1cil-y-r%C3%A1pido-sin-amasado.jpg"]
var imgrandom = Math.floor(Math.random()*(img.length))
  const embed = new Discord.MessageEmbed()
  .setTitle( message.author.username + " le dio un pan a: " + mencion.username)
  .setImage(img[imgrandom])
  message.channel.send(embed)
}


 }
}