const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js')

module.exports = {
  name: "help",
  alias: ["ayuda"],

execute (client, message, args){

const embed = new Discord.MessageEmbed()

.setTitle("Menu comandos")
.setDescription(`

***prefix = P***

---***UTILIDAD***---
**help**|ayuda
Esto :V
**ping**
Muestra tu ping
**say [texto]**|decir 
Dice (texto)
**clear**|limpiar
Elimina mensajes
**avatar**
Muestra tu avatar
**avatar [@usuario]**
Muestra el avatar de usuario
**sorteo (canal) (duration+000) (winers) (producto ganador)**
Hace un sorteo
---***SOCIAL***---
**youtube**
crea youtube en un canal de voz
**chess**
juega ajedres en un canal de voz
**aburrido**|bored
￣へ￣
**feliz**|happy
ヾ(•ω•)o
**angry**|enfadado
╰（‵□′）╯
**triste**|sad
≡(▔﹏▔)≡
**aplausos**|claps
aplausos
**golpe**|blow
**boom**
BOOM!
**baile**
Te hace bailar
**wasted**
(+ _ +)
**trash**
le dice basura a {mencion}
**triggered**
ヽ（≧□≦）ノ
---***DIVERCION***---
**meme**|
muestra un memazo
**meme5**
muestra 5 memazos
**miau**|gato
muestra un gato
**guau**|
muestra un perro w(ﾟДﾟ)w
**8ball [pregunta]**
Te da una respuesta
**roll**
Lanza un dado de 10 caras
**nivel**
Muestra tu nivel de acuerdo a tus mensajes
**msg**
muestra la cantidad de mansajes que enviaste
---***MUSICA***---
**play [cancion/url]**
Busca y reproduce la *cancion*
**stop**|
Detiene la cancion
**queue**|
Muestra la lista de reproducion
**tag filtros**
Muestra filtros de sonido
**seek [numero]**
adelante la musica a *numero*


`)

message.channel.send(embed)


 }
}