const Discord = require('discord.js');

module.exports = {
  name: "jinfo", 
  alias: [],

execute (client, message, args){

  const embedI = new Discord.MessageEmbed()
  .setTitle("Comandos de inforamción de Jbot!")
  .setColor("ORANGE")
  .setDescription("**J.avatar**:\n\nVe el avatar de un pana mencionado!")
  

  message.channel.send({ embeds: [embedI] })

 }

} 