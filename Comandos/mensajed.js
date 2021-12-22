const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('megadb');
const mensajed = new db.crearDB('mensajed');

module.exports = {
  name: "mensajed", 
  alias: [],

execute (client, message, args){

  if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("No tienes permisos para establecer un canal de bienvenida :]")

  const mensaje = args.join(" ")
  if(!mensaje) return message.channel.send("Tienes que escribir mensaje para despedir a los panas!")

  //{user.tag}

  mensajed.establecer(message.guild.id, mensaje);
  message.channel.send(`El nuevo mensaje para despedir a los panas que se vayan será ${mensaje}`)

 }

}