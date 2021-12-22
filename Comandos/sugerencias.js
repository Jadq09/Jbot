const Discord = require('discord.js');
const db = require('megadb')
const sugerencia = new db.crearDB('canalsugerencias')

module.exports = {
  name: "sugerencia", 
  alias: [],

async execute (client, message, args){

  const canal = await sugerencia.obtener(`${message.guild.id}`, `${message.channel.id}`)
  const canalsugerencia = client.channels.cache.get(canal)

  if(!sugerencia.tiene(`${message.guild.id}`, `${message.channel.id}`)){
    message.channel.send("Este server no tiene un canal pa sugerencias :[")

    return;
  }

  const usuario = message.author;

  const sugerenciaT = args.join(" ")
  if(!sugerenciaT) return message.channel.send("Debes escribir una sugerencia pa el server!")

  const SugerenciaEmbed = new Discord.MessageEmbed()

  .setTitle("Ha llegado una sugerencia fachera!")
  .setAuthor(usuario.tag, message.author.displayAvatarURL())
  .setDescription(`${sugerenciaT}`)
  .setColor("ORANGE")
  .setFooter("Escribe J.sugerencia para mandar una sugerencia!")

  const EmbedNice = new Discord.MessageEmbed()

  .setTitle("Todo ha salido bien!")
  .setDescription("La sugerencia se mando en el canal chido!")
  .setColor("ORANGE")

  message.channel.send({ embeds: [EmbedNice] })

  canalsugerencia.send({ embeds: [SugerenciaEmbed] }).then(async msg => {
    await msg.react('893733544348766209')
    await msg.react('893733544306827284')
  })

 }

} 