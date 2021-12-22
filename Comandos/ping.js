const Discord = require('discord.js');
const MessageEmbed = require("discord.js");

module.exports = {
  name: "ping", 
  alias: ["pg"],

execute (client, message, args){

  const pingEmbed = new Discord.MessageEmbed()
  .setTitle(`El ping de mi bot es ${client.ws.ping} milisegundos, gracias por consultarlo que te vaya bien pana!`)
  .setColor("ORANGE")
  .setAuthor(message.member.displayName, message.author.displayAvatarURL());
  message.channel.send({ embeds: [pingEmbed] })

 }

} 