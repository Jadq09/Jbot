const Discord = require('discord.js');

module.exports = {
  name: "userinfo", 
  alias: [""],

execute (client, message, args){

  const member = message.mentions.members.first() || message.member;

  const embedinfo = new Discord.MessageEmbed()

  .setTitle("Información de un pana fachero!")
  .setDescription("Este embed fachero muestra la información de un pana!")
  .addField("**Nombre**:", `**${member.user.tag}**`)
  .addField("**ID**:", `${member.user.id}`)
  .addField("**Apodo fachero**:", `${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}`)
  .addField("Unión a este server fachero:", `**${member.joinedAt}**`)
  .addField("**Roles**:", `${member.roles.cache.map(roles => `\`${roles.name}\``).join(",")}`)
  .addField("**Boosts:**", member.premiumSince ? 'Usuario booster' : 'Usuario no booster')
  .setThumbnail(member.user.displayAvatarURL( {dynamic: true} ))
  .setColor("ORANGE")

  message.channel.send({ embeds: [embedinfo] })

 }

}