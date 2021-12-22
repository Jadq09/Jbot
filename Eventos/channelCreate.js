const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs")

module.exports = async (client, channelCreate) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Nuevo canal fresco creado!")
  .setDescription(`Nombre: **${channelCreate.name}**\n\nCategoria: **${channelCreate.parent}**\nID: **${channelCreate.id}**\nTipo: **${channelCreate.type}**`)
  .setColor("ORANGE")
  .setTimestamp()

  const canal = await logs.obtener(channelCreate.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed]})
  
}