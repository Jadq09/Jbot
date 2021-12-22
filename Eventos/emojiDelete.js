const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs")

module.exports = async (client, emojiDelete) => {

  const embed = new Discord.MessageEmbed()
  .setTitle("Emoji eliminado F!")
  .setDescription(`Nombre: **${emojiDelete.name}**\nID: **${emojiDelete.id}**`)
  .setColor("ORANGE")
  .setTimestamp()

  const canal = await logs.obtener(emojiDelete.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed] })
  
}