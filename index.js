const Discord = require('discord.js');
const client = new Discord.Client();
client.config = require('./config.js');
const fs = require("fs")

const db = require('megadb');

require('discord-buttons')(client);


const { GiveawaysManager } = require('discord-giveaways');

const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    updateCountdownEvery: 10000,
    hasGuildMembersIntent: false,
    default: {
        botsCanWin: false,
        exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
        embedColor: '#FF0000',
        reaction: '🎉'
    }
});
client.giveawaysManager = manager;
client.comandos = new Discord.Collection()
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
  const commands = require(`./comandos/${file}`);
  client.comandos.set(commands.name, commands)
}

client.on('message', async message =>{
  if(message.content.startsWith("P8ball")){
    var rpta = ["si","muy probable","matemáticamente si","no, por feo","no","matemáticamente imposible"]
    var rptar = Math.floor(Math.random()*(rpta.length))
  
    message.channel.send(rpta[rptar])



  }
})


async function createApiMessage(interaction, content){
    const apiMessage = await APIMessage.create(client.channels.resolve(interaction.channel_id), content)
    .resolveData()
    .resolveFiles()

    return { ...apiMessage.data, files : apiMessage.files };

}

client.on("ready", async () => {
  client.api.applications(client.user.id).commands.post({
    data: {
      name:"ping",
      description: "Muestra tu ping"
    }

   });
});

client.ws.on("INTERACTION_CREATE", async (interaction) => {
 
 const command = interaction.data.name.toLowerCase();
 const args = interaction.data.options;
 const ping = Math.floor(interaction.client.ws.ping);



 if(command = "ping"){
client.api.interactions(interaction.id, interaction.token).callback.post({
  data: {
    type: 4,
    data:{
      content: ':ping_pong: `'+ping+' ms.` desde replit.com'
    }
  }


  });


 }

});





let prefixs = new db.crearDB('prefixdat');

client.on('message', async message =>{
  if(message.content.startsWith("Pinvite")){
    message.channel.send("https://este-si-bot.procatin0.repl.co/")
  }
})


client.on('message', async (message) => {

if(message.channel.type === 'dm') return

if(message.author.bot){
  return;
}




var idserv = message.guild.id

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()
 


var prefixerv = await prefixs.obtener(`${idserv}.prefix`)
if(!prefixerv) {
prefixs.establecer(idserv, {prefix: "P"})
}
if(!message.content.startsWith(prefixerv)) {
  return
}
let cmd = client.comandos.find((c) => c.name === command || c.alias && c.alias.includes(command))
if(cmd){
  cmd.execute(client, message, args, command, manager)

}

})

client.on('message', async message =>{
  if(message.content.startsWith("Proll")){
    var rpta = ["1","2","3","4","5","6","7","8","9","10"]
    var rptar = Math.floor(Math.random()*(rpta.length))
  
    message.channel.send(rpta[rptar])
  }
});



const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === 'Pyoutube') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
               const embed = new Discord.MessageEmbed()
               .setDescription(`**Tu enlace** 👉 ${invite.code}`)
               .setColor("BLUE")
                return message.channel.send(embed); // Click the blue link !
            });
        }else{
          const embeb = new Discord.MessageEmbed()
        .setDescription("Primero debes estar en un canal de voz")
        .setColor("RED")
          return message.channel.send(embeb)
        };
    };
});
client.on('message', async message => {
    if (message.content === 'Pchess') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
               
               const embed = new Discord.MessageEmbed()
               .setColor("BLUE")
               .setDescription("**Tu enlace** 👉 " + invite.code)
                return message.channel.send(embed); // Click the blue link !
            });
        }else{
            const embeb = new Discord.MessageEmbed()
        .setDescription("Primero debes estar en un canal de voz")
        .setColor("RED")
          return message.channel.send(embeb)
        };;
    };
});



require("dotenv").config();
const keepAlive = require('./server');
const Monitor = require('ping-monitor');
keepAlive();
const monitor = new Monitor({
  website: 'https://este-si-bot.procatin0.repl.co/',
  title: 'Secundario',
  interval: 15 // minutes
});

client.login("NzY3NzUwMjI4MDQ4MjE2MDg0.X42dHg.ZGYgcSaJtF9zt1PDQ7M_baqlZF4")
  .then(() => { 
    console.log(`Estoy listo, soy ${client.user.tag}`);

  })
.catch((err) => {

    //Si se produce un error al iniciar sesión, se le indicará en la consola.
    console.error("Error al iniciar sesión: " + err);





  });


