const Discord = require('discord.js');
const db = require('megadb');
const votacionesdb = new db.crearDB('votacionesdb')

module.exports = {
  name: "votacion", 
  alias: [],

async execute (client, message, args){

  const canal = await votacionesdb.obtener(`${message.guild.id}`, `${canal.id}`)
  const canalvotaciones = client.channels.cache.get(canal)

  if(!canal.tiene(`${message.guild.id}`, `${canal.id}`)){
    message.channel.send("Este servidor no tiene un canal de votaciones establecido, pa!")
  }

  const usuario = message.author;

  const votacion = args.join(" ")
  if(!votacion) return message.channel.send("Debes escribir una propuesta para una votación, pana!")

  const VotacionEmbed = new Discord.MessageEmbed()

  .setTitle

 }

} 