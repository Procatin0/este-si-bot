const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const { meme } = require('memejs');
const talkedRecently = new Set();

module.exports = {
  name: "meme5",
  alias: [""],

execute (client, message, args){


 
 if (talkedRecently.has(message.author.id)) {
            message.channel.send("Tienes que esperar 20 segundos antes de ejecutar el comando nuevamente. - " + message.author.username);
    } else {

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








        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 20000);
    }

 }
}