const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs")

module.exports = async (client, messageDelete) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Mensaje eliminado paa!")
  .setDescription(`Mensaje: ${messageDelete}\nAuthor: ${messageDelete.author.tag}\nCanal: ${messageDelete.channel}\nID: ${messageDelete.id}`)
  .setColor("ORANGE")

  const canal = await logs.obtener(messageDelete.guild.id)

  client.channels.cache.get(canal).send({ embeds: [embed] })
}