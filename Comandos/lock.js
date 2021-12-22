const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
  name: "lock", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS);
  if(!perms) return message.channel.send("No tienes permisos para bloquear un canal, pana")

  var JbotPerms = message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS);
  if(!JbotPerms) return message.channel.send("No tengo permisos para bloquear un canal :(")

  message.channel.permissionOverwrites.create(message.channel.guild.roles.everyone, { SEND_MESSAGES: false })

  message.channel.send(`${message.channel} fue bloqueado de manera correcta.`)

 }

}