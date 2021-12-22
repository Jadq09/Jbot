const Discord = require('discord.js');
const { inspect } = require("util")

module.exports = {
  name: "eval", 
  alias: [],

execute (client, message, args){

  if(message.member.id !== '766803081828368436') return message.channel.send("Lo siento pero este comando no esta disponible para ti, pana!");

  const command = args.join(" ")
  if(!command) return message.channel.send("Debes escribir un comando!")

  try {
    const evaled = eval(command)
    let palabras = ["token", "destroy"]
    if(palabras.some(word => message.content.toLowerCase().includes(word))){
      return message.channel.send("Esas palabras no están permitidas, sorry :[!")
    }
    const embed = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setTitle("Evaluado correctamente <a:sheeesh:893733544348766209> sheeesh!")
    .addField("**Tipo**:", `\`\`\`prolog\n${typeof(evaled)}\`\`\``)
    .addField("**Evaluado en:**", `\`\`\`yaml\n${Date.now() - message.createdTimestamp}ms\`\`\``)
    .addField("**Entrada**", `\`\`\`js\n${command}\`\`\``, true)
    .addField("**Salida**", `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)

    message.channel.send({ embeds: [embed] })
  } catch (error){
    const embedfallo = new Discord.MessageEmbed()

    .setColor("RED")
    .setTitle("Error, nooosssshhhh <a:nosheeesh:893733544306827284> :[!")
    .addField(`Entrada`, `\`\`\`js\n${command}\`\`\``)
    .addField(`Error:`, `\`\`\`js\n${error}\`\`\``)

    message.channel.send({ embeds: [embedfallo] })
  }

 }

}