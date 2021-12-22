const Discord = require('discord.js');
const { Permissions } = require('discord.js')
const db = require('megadb');
const votacionesdb = new db.crearDB('setvotaciones');''

module.exports = {
  name: "setvotaciones", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("No tienes permisos facheros para establecer un canal de votaciones.")

  const canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes de mencionar un canal para ser el nuevo canal de votaciones de Jbot! sheeesh!")

  message.channel.send(`Nice! el nuevo canal de votaciones es ${canal}`);

  votacionesdb.establecer(`${message.guild.id}`, `${canal.id}`);
  

  

  

 }

}