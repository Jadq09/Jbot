const Discord = require('discord.js');
const db = require("megadb")
const logs = new db.crearDB("logs")

module.exports = async (client, roleCreate) => {

  const embed = new Discord.MessageEmbed()

  .setTitle("Rol fachero creado!")
  .setDescription(`Nombre: ${roleCreate}\nID: ${roleCreate.id}\nColor: ${roleCreate.hexColor}\nMencionable: ${roleCreate.mentionable}`)
  .setColor("ORANGE")

  const canal = await logs.obtener(roleCreate.guild.id);

  client.channels.cache.get(canal).send({ embeds: [embed] })
  
  
}