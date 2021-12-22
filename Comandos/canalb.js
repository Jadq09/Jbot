const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('megadb');
const canalb = new db.crearDB('canalb')

module.exports = {
  name: "canalb", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("No tienes lo permisos necesarios, pana!")

  const canal = message.mentions.channels.first()
  const canalservidor = message.guild.channels.resolve(canal);
  if(!canalservidor) return message.channel.send("Debes elegir un canal fachero para este servidor, pana!")

  canalb.establecer(message.guild.id, canal.id)
  message.channel.send(`El nuevo canal fachero para dar las bienvenidas será **${canal.name}**.
  `)

 }

}