const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs")

module.exports = async (client, oldEmoji, newEmoji) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Emoji actualizado sheeeesh!")
  .setDescription(`Antiguo nombre: **${oldEmoji.name}**\nNuevo nombre: **${newEmoji.name}**\nID: **${newEmoji.id}**\nEmoji: <:${newEmoji.name}:${newEmoji.id}>`)
  .setColor("ORANGE")
  .setTimestamp()

  const canal = await logs.obtener(newEmoji.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed]})


  
}