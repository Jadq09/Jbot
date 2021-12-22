const Discord = require('discord.js');
const { Permissions } = require("discord.js");
const db = require('megadb');
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "muterol", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("No tienes permisos para establecer un rol para mutear a los panas!")

  let rol = message.mentions.roles.first();
  if(!rol) return message.channel.send("Debes mencionar un rol, para mutear a los panas!")

  muterol.establecer(message.guild.id, rol.id)

  message.channel.send(`Se ha establecido el rol **${rol}** para mutear a los panas!`)


 }

}