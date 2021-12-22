const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const { MessageEmbed } = new Discord.MessageEmbed();

module.exports = {
  name: "kick", 
  alias: ["kic"],

execute (client, message, args){

  if(!message.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send()

  var perms = message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)
  if(!perms) return message.channel.send("No tienes permisos xdd! Epic fail!")

  const user = message.mentions.members.first()
  if(!user) return message.channel.send("Necesitas mencionar a alguien pa kickearlo!")

  if(user === message.author) return message.channel.send("No te puedes banear a ti mismo!")

  var razon = args.slice(1).join(' ')
  if(!razon){
    razon = 'No especificado!'
  }

  user.kick(razon)

  const kickEmbed = new Discord.MessageEmbed()
  .setTitle(`<a:sheeesh:893733544348766209> Usuario **${user}** ha sido kickeado :]!`)
  .addField("Razón:", `${razon}`)
  .setColor("ORANGE")
  .addField("Mod:", `${message.author.tag}`)
  message.channel.send({ embeds: [kickEmbed] })
  
 }

} 