const Discord = require('discord.js');
const db = require("megadb")
const logs = new db.crearDB("logs")

module.exports = {
  name: "setlogs", 
  alias: [],

execute (client, message, args){

  const id = args[0]
  if(!id) return message.channel.send("Ese no es un canal válido :[")

  const canal = message.mentions.channels.first() || client.channels.cache.get(id)
  if(!canal) return message.channel.send("Ese no es un canal válido :[")

  let canalservidor = message.guild.channels.resolve(canal.id);
  if(!canalservidor) return message.channel.send("Pana, tienes que mencionar un canal fresco de este servidor!")

  logs.establecer(message.guild.id, canal.id)

  message.channel.send(`Se han establecido los logs para el canal fachero de **${canal.name}**`)

 }

}