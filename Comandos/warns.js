const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warns", 
  alias: [],

async execute (client, message, args){

  if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send("No tienes permisos para ver los warns de un pana, lo siento :[!")
  let user = message.mentions.members.first()
  if(!user) return message.channel.send("Debes mencionar a un pana para ver sus warns!")

  let cantidad = await warns.obtener(`${message.guild.id}.${user.id}`)

  if(!warns.tiene(`${message.guild.id}.${user.id}`)){
    message.channel.send(`Ese pana no tiene warns, que pana mas fresco, la neta!`)

    return;
  }

  message.channel.send(`El pana ${user} tiene ${cantidad} warns!`)

 }

} 