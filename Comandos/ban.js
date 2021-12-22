const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
  name: "ban", 
  alias: ["bn"],

execute (client, message, args){

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send("No tengo permisos pa que paso ahí!")

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send("No tengo permisos pana que paso!")

  let user = message.mentions.members.first();

  let banReason = args.join(' ').slice(22);

  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send("No tienes permisos para usar este comando lo siento panaa.")

  if(!user) return message.channel.send("Debes mencionar a un mal pana pa banearlo")

  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return;

  if(user === message.author) return message.channel.send("Pana no te puedes banear a ti mismo")

  if(!banReason) return message.channel.send("Pana debes escribir una razon para banear a ese mal pana!")

  user.ban({ reason: banReason })

  message.channel.send(`El mal pana ${user} has sido baneado por${banReason} :hammer:`)
  }

} 