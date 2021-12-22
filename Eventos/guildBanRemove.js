const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs")

module.exports = async (client, guild, user) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Pana desbaneado, sheeesh!")
  .setDescription(`Usuario: **${user}**`)
  .setTimestamp()
  .setColor("ORANGE")

  const canal = await logs.obtener(user.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed] })
  
}