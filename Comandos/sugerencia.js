const Discord = require('discord.js');

module.exports = {
  name: "sugerenciaj", 
  alias: ["st"],

execute (client, message, args){

  const sugerencia = args.join(" ")
  if(!sugerencia) return message.channel.send("Debes escribir la sugerencia fachera que tienes para mejorarme pana!")

  const embedS = new Discord.MessageEmbed()
  .setTitle("Nueva sugerencia!")
  .setThumbnail(client.user.displayAvatarURL())
  .setColor("ORANGE")
  .setDescription(`El usuario super fachero de ${message.author.username} ha hecho una sugerencia cool desde el servidor super fachero de ${message.guild.name}.\n\nSugerencia: ${sugerencia}`)

  client.channels.cache.get("895434338521448458").send({ embeds: [embedS] }).then(async msg => {
    await msg.react('893733544348766209')
    await msg.react('893733544306827284')
  });

 }

} 