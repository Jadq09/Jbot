const Discord = require('discord.js');
const { Permissions } = require("discord.js");

module.exports = {
  name: "say-channel", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("Necesitas tener permisos para usar este comando, sorry :[")

  let canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes mencionar un canal fachero para que mande un mensaje.")

  let texto = args.slice(1).join(" ")
  if(!texto) return message.channel.send("Debes escribir un texto!")

  canal.send(texto)

 }

}