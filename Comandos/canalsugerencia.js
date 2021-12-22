const Discord = require('discord.js');
const db = require('megadb');
const canalsgr = new db.crearDB('canalsugerencias')
const { Permissions } = require('discord.js');

module.exports = {
  name: "canalsugerencias", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("Debes de tener permisos altos paa, lo siento!");

  const canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes de mencionar un canal pa las sugerencias!")

  message.channel.send(`Nice! las sugerencias para este servidor se enviáran al canal ${canal}`)
  
  canalsgr.establecer(`${message.guild.id}`, `${canal.id}`)

 }

} 