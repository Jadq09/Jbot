const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs")

module.exports = async (client, emojiCreate) => {

  const embed = new Discord.MessageEmbed()
  
  .setTitle("Emoji fachero creado!")
  .setDescription(`Nombre: **${emojiCreate.name}**\nID: **${emojiCreate.id}**\nEmoji: <:${emojiCreate.name}:${emojiCreate.id}>`)
  .setColor("ORANGE")
  .setTimestamp()

  const canal = await logs.obtener(emojiCreate.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed] })
  
}