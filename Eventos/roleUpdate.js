const Discord = require('discord.js');
const db = require("megadb");
const logs = new db.crearDB("logs")

module.exports = async (client, oldRole, newRole) => {

  if(oldRole !== newRole.name){
    const embed = new Discord.MessageEmbed()

    .setTitle("Rol actualizado sheesh!")
    .setDescription(`Antiguo nombre: **${oldRole.name}**\nNuevo nombre: **${newRole}**\nColor: ${newRole.hexColor}`)
    .setColor("ORANGE")

    const canal = await logs.obtener(newRole.guild.id)

    client.channels.cache.get(canal).send({ embeds: [embed] })
  }

  if(oldRole.position !== newRole.position){
    const embed = new Discord.MessageEmbed()

    .setTitle("Posición actualizada sheeeesh!")
    .setDescription(`Rol: ${newRole}\nAntigua posición: **${oldRole.position}**\nNueva posición: **${newRole.position}**\nColor: ${newRole.hexColor}`)
    .setColor("ORANGE")

    const canal = await logs.obtener(newRole.guild.id)

    client.channels.cache.get(canal).send({ embeds: [embed] })
  }

  if(oldRole.hexColor !== newRole.hexColor){
    const embed = new Discord.MessageEmbed()

    .setTitle("Color de un rol fachero actualizado!")
    .setDescription(`Rol: ${newRole}\nAntiguo color: **${oldRole.hexColor}**\nNuevo color: **${newRole.hexColor}**`)
    .setColor("ORANGE")

    const canal = await logs.obtener(newRole.guild.id)

    client.channels.cache.get(canal).send({ embeds: [embed] })
  }
  
}