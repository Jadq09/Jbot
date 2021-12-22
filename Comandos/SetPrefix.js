const Discord = require('discord.js');
const db = require('megadb');
const prefix_db = new db.crearDB('prefix');
const { Permissions } = require('discord.js');

module.exports = {
  name: "setprefix", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("No tienes permisos para utilizar este comando.")

  if(!args[0]) return message.channel.send("Elije mi nuevo prefix facha!")

  prefix_db.establecer(message.guild.id, args[0])

  message.channel.send(`Mi nuevo prefix super facha es **${args[0]}**`)

 }

} 