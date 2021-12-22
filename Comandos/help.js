const Discord = require('discord.js');

module.exports = {
  name: "help", 
  alias: [],

execute (client, message, args){

  const HelpEmbed = new Discord.MessageEmbed()

  .setTitle("Comand help de Jbot!")
  .setDescription("**J.jmod**:\nComandos de mods!\n\n**J.jinfo**:\nComandos de información de Jbot!\n\n**J.jco**:\nComandos de contacto\n\n**J.jotros**:\nOtros comandos facheros de Jbot!")
  .setColor("ORANGE")
  .setTimestamp()
  
  message.channel.send({ embeds: [HelpEmbed] })

 }

} 