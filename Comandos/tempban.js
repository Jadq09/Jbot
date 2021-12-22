const Discord = require('discord.js');
const ms = require('ms')
const { Permissions } = require('discord.js');

module.exports = {
  name: "tempban", 
  alias: [],

async execute (client, message, args){

  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send("Pana no tienes permisos para usar este comando!")

  const member = message.mentions.members.first()
  if(!member) return message.channel.send("Debes mencionar a un mal pana para banearlo de forma temporal!")

  let time = args[1]
  if(!time) return message.channel.send("Debes de decir un tiempo para banear a ese mal pana!")
  let timer = ms(time)

  message.channel.send(`El usuario ${member} ha sido tempbaneado por Mod: ${message.author.tag} durante ${time}!`)

  await member.ban({ reason: `Usuario tempbaneado por ${message.author.tag} durante ${time}`})
  await setTimeout(async function () {
    await message.guild.members.unban(member.id)


    message.channel.send(`El usuario ${member} fue desbanedo!`)


  }, timer)

 }

}