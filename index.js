const Discord = require('discord.js');
const client = new Discord.Client();
client.config = require('./config.js');
const fs = require("fs")

const db = require('megadb');

const canalb = new db.crearDB("canab")
const messageb = new db.crearDB("messageb")



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




client.comandos = new Discord.Collection(); 
let { readdirSync } = require('fs'); 

for(const file of readdirSync('./comandos/')) { 

  //Esta condición evitara que los archivos que no son tengan la extención .js no sean listado:
  if(file.endsWith(".js")) { 

  //Elimina los últimos tres caracteres nombre del archivo para
  //deshacerse de la extensión .js y solo quedarnos con el nombre del comando:
  let fileName = file.substring(0, file.length - 3); 

  //Define una nueva varible 'fileContents' de la exportación del comando 
  //dentro de la carpeta comandos:
  let fileContents = require(`./comandos/${file}`); 

  //Agrega el nombre del comando a la colección client.commands con un 
  //valor de sus exportaciones respectivas.
  client.comandos.set(fileName, fileContents);
  }
}










for(const file of readdirSync('./eventos/')) { 

  //Esto condicion evitara que los archivos que no son archivos .js no coleccione:
  if(file.endsWith(".js")){

  //Elimina los últimos tres caracteres nombre del archivo para
  //deshacerse de la extensión .js y solo quedarnos con el nombre del evento:
  let fileName = file.substring(0, file.length - 3); 

  //Define una nueva variable 'fileContents' de la exportación del evento dentro de la carpeta eventos:
  let fileContents = require(`./eventos/${file}`); 
  
  // Cuando el evento se activa o es solicitada exportamos la función con 
  // el nombre del evento vinculada y tambien el parametro client.
  client.on(fileName, fileContents.bind(null, client)); 
		
  // Elimina la memoria caché del archivo requerido para facilitar la recarga y no 
  // tener más memoria de la necesaria.
 
  }
}


























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

let estados = new db.crearDB ('estados-info');

client.on('message', async (message) => {

letdfdf = "Pestado"

  const args = message.content.slice("Pestado").trim().split(/ +/g);  
  const command = args.shift().toLowerCase()
  const args2 = args.join(" ")
  
  if(message.content.startsWith("Pestado")){
if(message.channel.type === 'dm'){

var id = message.author.id


  if(!estados.tiene(`${id}`)){
    message.channel.send("Debes añadir amigos primero, usar Pamigo añadir [mencion] en un servidor")
  }

  var amigo1 = await estados.obtener(`${id}.amigo1`)
  var amigo2 = await estados.obtener(`${id}.amigo2`)
  var amigo3 = await estados.obtener(`${id}.amigo3`)
  var amigo4 = await estados.obtener(`${id}.amigo4`)
  var amigo5 = await estados.obtener(`${id}.amigo5`)
  var amigo6 = await estados.obtener(`${id}.amigo6`)
  var amigo7 = await estados.obtener(`${id}.amigo7`)
  var amigo8 = await estados.obtener(`${id}.amigo8`)
  var amigo9 = await estados.obtener(`${id}.amigo9`)
  var amigo10 = await estados.obtener(`${id}.amigo10`)
  var amigo11 = await estados.obtener(`${id}.amigo11`)
  var amigo12 = await estados.obtener(`${id}.amigo12`)
  var amigo13 = await estados.obtener(`${id}.amigo13`)
  var amigo14 = await estados.obtener(`${id}.amigo14`)
  var amigo15 = await estados.obtener(`${id}.amigo15`)
  var amigo16 = await estados.obtener(`${id}.amigo16`)
  var amigo17 = await estados.obtener(`${id}.amigo17`)
  var amigo18 = await estados.obtener(`${id}.amigo18`)
  var amigo19 = await estados.obtener(`${id}.amigo19`)
  var amigo20 = await estados.obtener(`${id}.amigo20`)


if (message.content.includes('wav'||"mp3"||'mp4'||"avi"||"mkv")){
  var embed2 = "Estado de " + message.author.username + "\n" + message.content

if(amigo1 >> 0) client.users.cache.get(amigo1).send(embed2)
if(amigo2 >> 0) client.users.cache.get(amigo2).send(embed2)
if(amigo3 >> 0) client.users.cache.get(amigo3).send(embed2)
if(amigo4 >> 0) client.users.cache.get(amigo4).send(embed2)
if(amigo5 >> 0) client.users.cache.get(amigo5).send(embed2)
if(amigo6 >> 0) client.users.cache.get(amigo6).send(embed2)
if(amigo7 >> 0) client.users.cache.get(amigo7).send(embed2)
if(amigo8 >> 0) client.users.cache.get(amigo8).send(embed2)
if(amigo9 >> 0) client.users.cache.get(amigo9).send(embed2)
if(amigo10 >> 0) client.users.cache.get(amigo10).send(embed2)
if(amigo11 >> 0) client.users.cache.get(amigo11).send(embed2)
if(amigo12 >> 0) client.users.cache.get(amigo12).send(embed2)
if(amigo13 >> 0) client.users.cache.get(amigo13).send(embed2)
if(amigo14 >> 0) client.users.cache.get(amigo14).send(embed2)
if(amigo15 >> 0) client.users.cache.get(amigo15).send(embed2)
if(amigo16 >> 0) client.users.cache.get(amigo16).send(embed2)
if(amigo17 >> 0) client.users.cache.get(amigo17).send(embed2)
if(amigo18 >> 0) client.users.cache.get(amigo18).send(embed2)
if(amigo19 >> 0) client.users.cache.get(amigo19).send(embed2)
if(amigo20 >> 0) client.users.cache.get(amigo20).send(embed2)
 

}else{

const embed = new Discord.MessageEmbed()
.setTitle("Estado de " + message.author.username)
.setColor("RANDOM")
.setDescription(args2)
.setImage(args2)
.setFooter(message.author.avatarURL())
message.channel.send(embed)


if(amigo1 >> 0) client.users.cache.get(amigo1).send(embed)
if(amigo2 >> 0) client.users.cache.get(amigo2).send(embed)
if(amigo3 >> 0) client.users.cache.get(amigo3).send(embed)
if(amigo4 >> 0) client.users.cache.get(amigo4).send(embed)
if(amigo5 >> 0) client.users.cache.get(amigo5).send(embed)
if(amigo6 >> 0) client.users.cache.get(amigo6).send(embed)
if(amigo7 >> 0) client.users.cache.get(amigo7).send(embed)
if(amigo8 >> 0) client.users.cache.get(amigo8).send(embed)
if(amigo9 >> 0) client.users.cache.get(amigo9).send(embed)
if(amigo10 >> 0) client.users.cache.get(amigo10).send(embed)
if(amigo11 >> 0) client.users.cache.get(amigo11).send(embed)
if(amigo12 >> 0) client.users.cache.get(amigo12).send(embed)
if(amigo13 >> 0) client.users.cache.get(amigo13).send(embed)
if(amigo14 >> 0) client.users.cache.get(amigo14).send(embed)
if(amigo15 >> 0) client.users.cache.get(amigo15).send(embed)
if(amigo16 >> 0) client.users.cache.get(amigo16).send(embed)
if(amigo17 >> 0) client.users.cache.get(amigo17).send(embed)
if(amigo18 >> 0) client.users.cache.get(amigo18).send(embed)
if(amigo19 >> 0) client.users.cache.get(amigo19).send(embed)
if(amigo20 >> 0) client.users.cache.get(amigo20).send(embed)
}    
  }else{
    message.channel.send("jajaj si")
  }

 
  
  }

if(message.content.startsWith("Pamigo añadir")){
  const argss = message.content.slice("Pamigo añadir").trim().split(/ +/g);  
  const command = args.shift().toLowerCase()
  const argss2 = args.join(" ")
var id = message.author.id
let adamigo = message.mentions.users.first()
var idamigo = adamigo.id
  estados.establecer(id, {amigo1:0,amigo2:0,amigo3:0,amigo4:0,amigo5:0,amigo6:0,amigo7:0,amigo8:0,amigo9:0,amigo10:0,amigo11:0,amigo12:0,amigo13:0,amigo14:0,amigo15:0,amigo16:0,amigo17:0,amigo18:0,amigo19:0,amigo20:0})
  estados.establecer(`${message.author.id}.amigo1`, idamigo)
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

client.login("NzY3NzUwMjI4MDQ4MjE2MDg0.X42dHg.vgnEQ3Ci8f0hcjKNDkKeuz8bmqo")
  .then(() => { 
    console.log(`Estoy listo, soy ${client.user.tag}`);

  })
.catch((err) => {

    //Si se produce un error al iniciar sesión, se le indicará en la consola.
    console.error("Error al iniciar sesión: " + err);





  });


