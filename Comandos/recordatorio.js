const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
  name: "recordatorio", 
  alias: [],

execute (client, message, args){

   let tiempo = args[0]
   if(!tiempo) return message.channel.send("Debes decir un tiempo!")
   let time = ms(tiempo)

   let cosa = args.slice(1).join(" ")
   if(!cosa) return message.channel.send("Tienes que poner lo que quieres recordar!")

   message.channel.send("EL recordatorio se activo!")
 
   setTimeout(() => {
     message.author.send(`${message.author}, recuerda ${cosa}, de nada pana!`)
   }, time)

 }

} 