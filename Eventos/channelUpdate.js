const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs");

module.exports = async (client, oldChannel, newChannel) => {

  const embed = new Discord.MessageEmbed()
  
  .setTitle("Canal fresco actualizado!")
  .setDescription(`Antiguo nombre: **${oldChannel.name}**\nNuevo nombre: **${newChannel.name}**\nCategoria: **${newChannel.parent}**\nID: **${newChannel.id}**\nTipo: **${newChannel.type}**`)
  .setColor("ORANGE")
  .setTimestamp()

  const canal = await logs.obtener(newChannel.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed]})
  
}