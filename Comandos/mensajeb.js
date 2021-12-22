const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('megadb');
const mensajeb = new db.crearDB('mensajeb')

module.exports = {
  name: "mensajeb", 
  alias: [],

execute (client, message, args){

  if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("No tienes permisos para establecer un mensaje para recibir a los nuevos panas!")

  const mensaje = args.join(" ")
  if(!mensaje) return message.channel.send("Debes escribir un nuevo mensaje para recibir a los nuevos panas!");

  //{user}
  //{user.tag}
  //{servidor}
  //{memberCount}

  mensajeb.establecer(message.guild.id, mensaje);
  message.channel.send(`El nuevo mensaje para recibir a los nuevos panas que se unan al server será\n\n**${mensaje}**`)

 }

}