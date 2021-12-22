const Discord = require('discord.js');
const { Permissions } = require('discord.js')

module.exports = {
  name: "clear", 
  alias: [],

execute (client, message, args){

  var perms = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("No tienes permisos para usar este comando!")

  const cantidad = args.join(" ");

  if(isNaN(cantidad)) return message.channel.send("Debes mencionar un número!")
  if(cantidad === 0) return message.channel.send("Debes escribir un numero mayor que 0 pana!")
  if(!cantidad) return message.channel.send("Debes mencionar una cantidad de mensaje para poder eliminar pana!")

  message.channel.bulkDelete(cantidad).then(() => {
    message.channel.send(`${cantidad} mensajes eliminados correctamente sheesh!`)
  })

 }

}