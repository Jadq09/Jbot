const Discord = require('discord.js');

module.exports = {
  name: "qrcode", 
  alias: [],

async execute (client, message, args){

  let text = args.join(" ");
  if(!text) {
      return message.channel.send("Debes especificar un texto para convertirlo a código QR, pana!")
  }

  let pleaseWait = await message.channel.send("Espera un momento, pana...")

  let embed = new Discord.MessageEmbed()
  .setTitle(`Código QR de ${text}`)
  .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(" ", "g"))}`)
  .setColor("ORANGE");

message.channel.send({ embeds: [embed] }).then(() => pleaseWait.delete());

 }

}