const Discord = require('discord.js');

module.exports = {
  name: "avatar", 
  alias: [],

execute (client, message, args){

  let usuario = message.mentions.members.first() || message.member;

  const embedA = new Discord.MessageEmbed()
  .setTitle(`Avatar del asombroso pana **${usuario.user.username}**`)
  .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png'}))
  .setColor("ORANGE")

  message.channel.send({embeds: [embedA]})

 }

} 