const Discord = require('discord.js');
const MessageEmbed = new Discord.MessageEmbed()

module.exports = {
  name: "reportbug", 
  alias: ["rg"],

execute (client, message, args){

  const reporte = args.join(" ")
  if(!reporte) return message.channel.send(`Pana ${message.author.username} debes decir un bug porfa`)

  const rgembed = new Discord.MessageEmbed()
  .setTitle("Reporte!")
  .setColor("ORANGE")
  .setDescription(`El pana super fresco **${message.author.username}** ha hecho un apreciado reporte desde el servidor fachero **${message.guild.name}**.\n\nBug:**${reporte}**.`)
  

  client.users.cache.get('766803081828368436').send({ embeds: [rgembed] })
  
 }

} 