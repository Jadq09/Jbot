const Discord = require('discord.js');
const { Permissions } = require('discord.js')
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warn", 
  alias: [],

execute (client, message, args){

  if(!message.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send("Pana! no tengo permisos para usar este comando!")

  var perms = message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)
  if(!perms) return message.channel.send("No tienes permisos para este comando!")

  let persona = message.mentions.members.first();
  if(persona === message.member) return message.channel.send("No te puedes warnea a ti mismo, pana")
  if(!persona) return message.channel.send("<a:nosheeesh:893733544306827284> Debes mencionar a un pana para advertir!")

  var razon = args.slice(1).join(" ")
  if(!razon){
    razon = 'No especificada!'
  }

  if(!warns.tiene(`${message.guild.id}.${persona.id}`))
  warns.establecer(`${message.guild.id}.${persona.id}`, 0)

  warns.sumar(`${message.guild.id}.${persona.id}`, 1)

  message.channel.send(`<a:sheeesh:893733544348766209> El pana ${persona} fue warneado por el Mod: ${message.author.tag}.`)

  persona.send(`<:Discord_warning:893736912030949406> Has sido warneado en el servidor fachero de ${message.guild.name}, por ${razon}, por el mod : ${message.author.tag}.`)
 }

} 