const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "aburrido",
  alias: ["bored"],

execute (client, message, args){
 
var user1 = message.author.username
var user2 = message.author.username

var gifs = ["https://i.pinimg.com/originals/a5/7c/2f/a57c2f1ceb7740475f2420cd0d5c4c7d.gif","https://pa1.narvii.com/6241/4efa522adffffdef0676398f0243c6f5581af854_hq.gif","https://64.media.tumblr.com/453d81df166a7782ae06b5525cd050e8/tumblr_pci1nnhxiN1w1utt6o1_500.gif","https://pa1.narvii.com/6311/1fc46648215038eaa64e5dc4bd3e1326d22cc23f_hq.gif","https://i.pinimg.com/originals/3b/48/73/3b487309af4dc9953ac24b3ca3ba088f.gif"]
var grandom = Math.floor(Math.random()*(gifs.length))
const embeb = new Discord.MessageEmbed()
.setTitle(`**${user1}** esta aburrido (ˉ﹃ˉ)`)
.setImage(gifs[grandom])

message.channel.send(embeb)
 }
}