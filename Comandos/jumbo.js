const Discord = require('discord.js');

module.exports = {
  name: "emoji", 
  alias: [],

execute (client, message, args){

  if(!args[0]) return message.channel.send("Pana debes decirme un emoji!")

  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
  if(!emoji) return message.channel.send("Lo siento pana pero ese emoji no es valido en mi sistema fachero!")

  const embedE = new Discord.MessageEmbed()

  .setTitle("Emoji!")
  .setImage(emoji.url)
  .setColor("ORANGE")

  message.channel.send({ embeds: [embedE] })


 }

} 