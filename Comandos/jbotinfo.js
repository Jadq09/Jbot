const Discord = require('discord.js');

module.exports = {
  name: "jbotinfo", 
  alias: [],

execute (client, message, args){

  const prefix = 'J.'

  const embed = new Discord.MessageEmbed()
  .setTitle(`Información fachera de ${client.user.tag}`)
  .setDescription("Este comando muestra la información sobre mí :)")
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true } ))
  .setColor("ORANGE")
  .addField("Nombre de usuario:", `${client.user.tag}`)
  .addField("Prefix:", `${prefix}`)
  .addField("Número de panas de que me usan:", `${client.users.cache.size}`)
  .addField("Número de servidores en donde estoy:", `${client.guilds.cache.size}`)
  .addField("Página web:", `No tengo :(`)

  message.channel.send({ embeds: [embed] })

 }

} 