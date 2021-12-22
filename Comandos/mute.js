const Discord = require('discord.js');
const { Permissions } = require("discord.js");
const db = require("megadb");
const muterol = new db.crearDB("muterol");
const ms = require('ms');

module.exports = {
  name: "mute", 
  alias: [],

async execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)
  if(!perms) return message.channel.send("No tienes permisos para mutear a los panas!")

  let time = args[1]
  if(!time) return message.channel.send("Debes decir un tiempo para mutear a este pana!")
  let timer = ms(time)

  let mencionado = message.mentions.members.first()
  if(!mencionado) return message.channel.send("Debes mencionar a un usuario!")

  var razon = args[2]
  if(!razon){
    razon = 'razón no especificada'
  }

  if(!muterol.tiene(message.guild.id)) return message.channel.send("Este servidor no tiene un rol para mutear :[")

  let rol = await muterol.obtener(message.guild.id)

  if(mencionado.roles.cache.has(rol)) return message.channel.send("Ese pana ya estaba muteado!")

  mencionado.roles.add(rol)

  message.channel.send(`El pana **${mencionado}** ha sido muteado durante **${time}** por **${razon}**`)

  mencionado.send(`Te han advertido en **${message.guild.name}** el moderador ${message.author.tag} durante **${time}** por **${razon}**`)

  await setTimeout(async function() {

    await mencionado.roles.remove(rol)

    await message.channel.send(`Se acabo el tiempo de mute para ${mencionado}`).catch(error => {
      message.channel.send(`Hubo un error inesperado: **${error}**.`)
    })
  }, timer)

 }

}