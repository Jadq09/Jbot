const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('megadb');
const warns = new db.crearDB('warns')

module.exports = {
  name: "unwarn", 
  alias: [],

async execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("No tienes permisos para usar este comando epic fail xdd!")

  const user = message.mentions.members.first()
  if(!user) return message.channel.send("Debes mencionar a un pana para removerle un warn!")

  if(!warns.tiene(`${message.guild.id}.${user.id}`)){
    warns.establecer(`${message.guild.id}.${user.id}`, 0)

    message.channel.send("Este pana tan fresco no tiene ningún warn!")
  }

  const cantidad = await warns.obtener(`${message.guild.id}.${user.id}`)

  if(cantidad < 1) return message.channel.send("Este pana no tiene warns!")

  warns.restar(`${message.guild.id}.${user.id}`, 1)

  message.channel.send(`El Mod: ${message.author.username} le ha unwarneado a el usuario ${user}`)

 }

} 