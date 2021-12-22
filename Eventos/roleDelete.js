const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs");

module.exports = async (client, roleDelete) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Rol eliminado :[")
  .setDescription(`Nombre: ${roleDelete.name}\nID: ${roleDelete.id}\nColor: ${roleDelete.hexColor}`)
  .setColor("ORANGE")
  
  const canal = await logs.obtener(roleDelete.guild.id)
  
  client.channels.cache.get(canal).send({ embeds: [embed] })
}