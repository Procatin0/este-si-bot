const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')
const talkedRecently = new Set();
module.exports = {
  name: "ping",
  alias: ["ping"],

execute (client, message, args){
  if (talkedRecently.has(message.author.id)) {
            message.channel.send("Tienes que esperar 10 segundos antes de ejecutar el comando nuevamente. - " + message.author.username);
    } else {
 let ping = Math.floor(message.client.ws.ping);
 message.channel.send(':ping_pong: `'+ping+' ms.` desde replit.com'); 


         

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 10000);
    }



 }
}