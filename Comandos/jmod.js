const Discord = require('discord.js');

module.exports = {
  name: "jmod", 
  alias: [],

execute (client, message, args){

  const embedM = new Discord.MessageEmbed()
  .setTitle("Comandos de moderación facheros de Jbot!")
  .setColor("ORANGE")
  .setDescription("**J.ban**:\n\nBanea a un pana mencionado!\n\n**J.kick**:\n\nKickea a un usuario mencionado!\n\n**J.tempban**:\n\nBanea por un tiempo predeterminado a un pana 0% fresco\n\n**J.warn**:\n\nWarnea a un usuario en tu servidor!\n\n**J.warns**:\n\nVe el numero de warns de un pana!\n\n**J.unwarn**:\n\nDeswarnea a un pana en tu server!")

  message.channel.send({ embeds: [embedM] })
 }

}