const Discord = require('discord.js');

module.exports = {
  name: "jotros", 
  alias: [],

execute (client, message, args){

  const OtrosEmbed = new Discord.MessageEmbed()
  .setTitle("Otros comandos facheros de Jbot!")
  .setDescription("**J>emoji**:\nHaz que mande un mensaje con un emoji que pusiste mas grande!")
  .setColor("ORANGE")

  message.channel.send({ embeds: [OtrosEmbed] })

 }

} 