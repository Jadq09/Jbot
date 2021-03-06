const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs") 

module.exports = async (client, oldMessage, newMessage) => {

  if(oldMessage.author.id === '881445730018000937') return;
  if(newMessage.author.id === '881445730018000937') return;

  const embed = new Discord.MessageEmbed()
  .setTitle("Mensaje fachero editado!")
  .setDescription(`Antiguo mensaje: **${oldMessage}**\nNuevo mensaje: **${newMessage}**\nAuthor: **${newMessage.author.tag}**\nCanal: **${oldMessage.channel}**\nID: **${newMessage.id}**`)
  .setColor("ORANGE")

  const canal = await logs.obtener(newMessage.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed] })
  
}