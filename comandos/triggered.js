const Discord = require('discord.js');
const  { Canvas } = require("canvacord")

module.exports = {
  name: "triggered",
  alias: [],

async execute (client, message, args){

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        message.channel.send(attachment);


 }
}