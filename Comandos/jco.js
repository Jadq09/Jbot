const Discord = require('discord.js');

module.exports = {
  name: "jco", 
  alias: [],

execute (client, message, args){

  const embedC = new Discord.MessageEmbed()
  .setTitle("Comandos de contacto de Jbot!")
  .setColor("ORANGE")
  .setDescription("**J.reportbug**: Reporta un bug mío que te encuentres!\n\n**J.sugerenciaj**: Envía una sugerencia que tengas para mejorarme!")
  

  message.channel.send({ embeds: [embedC]})

 }

} 