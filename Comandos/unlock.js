const Discord = require('discord.js');
const { Permissions } = require("discord.js")

module.exports = {
  name: "unlock", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS);
  if(!perms) return message.channel.send("No tienes permisos para desbloquear un canal, pana")

  var JbotPerms = message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS);
  if(!JbotPerms) return message.channel.send("No tengo permisos para desbloquear un canal, pana")

  message.channel.permissionOverwrites.create(message.channel.guild.roles.everyone, { SEND_MESSAGES: true })

  message.channel.send(`${message.channel} fue desbloqueado de manera correcta.`)

 }

}