const Discord = require('discord.js');

module.exports = {
  name: "serverinfo", 
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setTitle(`Información de ${message.guild.name}`)
  .setDescription("Un embed fachero para mostrar información de este server.")
  .setColor("ORANGE")
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .addField("Nombre del servidor:", `${message.guild.name}`)
  .addField("ID del servidor:", `${message.guild.id}`)
  .addField("Fecha de creación:", `${message.guild.createdAt}`)
  .addField("Dueño del servidor:", `<@${message.guild.ownerId}>`)
  .addField("Canales del servidor:", `[${message.guild.channels.cache.size}]`, `Categoría:`, `${message.guild.channels.cache.filter(x => x.type === "category").size} texto: ${message.guild.channels.cache.filter(x => x.type === "text").size} voz: ${message.guild.channels.cache.filter(x => x.type === "voice").size}`, true)
  .addField("Número de panas en el servidor:", `${message.guild.memberCount}`)
  .addField("Número de bots facheros en el servidor:", `${message.guild.members.cache.filter(m => m.user.bot).size}`)
  .addField("Boosters del servidor:", `${message.guild.premiumSubscriptionCount.toString()}`)
  .addField("Nivel de verificación:", `${message.guild.verificationLevel}`)
  .addField("Roles facheros del server:", `${message.guild.roles.cache.size}`)

  message.channel.send({ embeds: [embed] })

 }

}