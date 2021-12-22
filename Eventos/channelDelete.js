const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs")

module.exports = async (client, channelDelete) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Canal eliminado, F en el chat!")
  .setDescription(`Nombre: **${channelDelete.name}**\nCategoria: **${channelDelete.parent}**\nID: **${channelDelete.id}**\nTipo: **${channelDelete.type}**.`)
  .setColor("ORANGE")
  .setTimestamp();

  const canal = await logs.obtener(channelDelete.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed] })
  
}