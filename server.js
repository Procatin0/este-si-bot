const express = require('express')
const server = express();
const Discord = require("discord.js")
const client = new Discord.Client()
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor Listo.');
    });
    return true;
}

const dreams = ["sugerencias no funciona"]

server.get("/", (request, response) => {
  response.sendFile(__dirname + "/pag/index.html");
}); 

server.get("/los-mayores-secretos-del-estado", (request, response) => {
  response.sendFile(__dirname + "/pag/rickroll.html");
}); 


server.get("/bola", (request, response) => {
  response.sendFile(__dirname + "/pag/bola.html");
}); 





server.use(express.static("public"));
server.get("/dreams", (request, response) =>{
  
  response.json(dreams)
  

client.on('ready', message =>{

message.channels.cache.get('771129827381477407').send(dream)
})
})

server.get("/avances/bot",function(request, response) {
  response.sendFile(__dirname + "/pag/avances.html")
})



