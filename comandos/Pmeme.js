const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const { meme } = require('memejs');
module.exports = {
  name: "meme",
  alias: [],

execute (client, message, args){

var memes = ["spanishmemes", "SpanishMeme"]
var random = Math.floor(Math.random()*memes.length)


var memes = ["spanishmemes", "SpanishMeme"]
var random = Math.floor(Math.random()*memes.length)


if(message.author.bot) return;
meme(memes[random], function(err, data) { 
if (err) return message.reply(err)
 //si hay un error se enviara un mensaje con tal error



 const embed2 = new Discord.MessageEmbed()
 .setDescription("los memes no son controlados por Proca-bot")
const embed = new Discord.MessageEmbed()
.setTitle(data.title)
.setColor("RANDOM")
.setImage(data.url) //el body de data contiene diferentes cosas pero para obtener la imagen necesitamos "url"
.setFooter("Por: " + data.author + " en " + data.subreddit)
message.channel.send(embed2)
    .then(m => {
      setTimeout(function() {
        m.edit(embed)
      }, 1000)
    })
})



 }
}