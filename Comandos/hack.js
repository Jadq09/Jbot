const Discord = require('discord.js');

module.exports = {
  name: "hack", 
  alias: ["dox", "expose"],

execute (client, message, args){

  let user = message.mentions.members.first()

  if(user.id === client.user.id){
      return message.channel.send(`${message.author} no me puedes hackear!`)
  }

  let fakeData = require("faker");

  let fakeName = fakeData.name.findName();
  let fakeEmail = fakeData.internet.email();
  let fakeAddress = fakeData.address.streetAddress();
  let fakePhone = fakeData.phone.phoneNumber();

  const embed = new Discord.MessageEmbed()
  .setTitle(`Hackeado ${user}!`)
  .setDescription(`Nombre: ${fakeName}\nEmail: ${fakeEmail}\nDirreción: ${fakeAddress}\nNúmero de telefono: ${fakePhone}`)
  .setColor("ORANGE")

  message.channel.send({ embeds: [embed] })

 }

}