const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('megadb');
const canald = new db.crearDB('canald');

module.exports = {
  name: "canald",
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR);
  if(!perms) return message.channel.send("No tienes permisos para fijar un canal de despedida!")

  const canal = message.mentions.channels.first();
  const canalservidor = message.guild.channels.resolve(canal)
  if(!canalservidor) return message.channel.send("Tienes que mencionar un canal, pana!")

  canald.establecer(message.guild.id, canal.id)
  message.channel.send(`El nuevo canal para las despedidas es **${canal.name}**.`)

 }

}