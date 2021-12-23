const Discord = require("discord.js");
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents });
const ms = require("ms")

// Discord.js

const { MessageEmbed, MessageAttachment } = require("discord.js")

const { Permissions } = require('discord.js');

// const keepAlive = require('./server')

const config = require("./config.json");

const db = require('megadb')
const prefix_db = new db.crearDB('prefix')

const fs = require('fs');
let { readdirSync } = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Comandos').filter(file => file.endsWith('.js'));
//const christmascommandfiles = fs.readdirSync('./Comandos/Navidad').filter(file => file.endsWith('.js'));
//const musiccommandfiles = fs.readdirSync('./Comandos/Música').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./Comandos/${file}`);
    client.commands.set(command.name, command);
}

for (const file of readdirSync('./Eventos')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./Eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}

client.on('guildMemberAdd', async (member) => {

  const Discord = require('discord.js');
  const db = require('megadb');
  const canalb = new db.crearDB('canalb');
  const mensajeb = new db.crearDB('mensajeb');

  if(!canalb.tiene(member.guild.id)) return;
  if(!mensajeb.tiene(member.guild.id)) return;

  const canal = await canalb.obtener(member.guild.id);
  
  const mensaje = await mensajeb.obtener(member.guild.id)

  const mensajebueno = mensaje.replace(/{user}/, member).replace(/{usertag}/, member.tag).replace(/{servidor}/, member.guild.name).replace(/{memberCount}/, member.guild.memberCount)

  client.channels.cache.get(canal).send(mensajebueno)

});

client.on('guildMemberRemove', async (member) => {

  const Discord = require('discord.js');
  const db = require('megadb');
  const canald = new db.crearDB('canald');
  const mensajed = new db.crearDB('mensajed');

  if(!canald.tiene(member.guild.id)) return;
  if(!mensajed.tiene(member.guild.id)) return;

  const canal = await canald.obtener(member.guild.id);

  const mensaje = await mensajed.obtener(member.guild.id);

  const mensajededespedida = mensaje.replace(/{user.tag}/, member)

  client.channels.cache.get(canal).send(mensajededespedida)
  
})

client.on('messageCreate', async (message) => {

  let prefix = 'J.'

//  if(prefix_db.tiene(message.guild.id)) {
//    prefix = await prefix_db.obtener(message.guild.id)
//  } else {
//    prefix = 'J.'
//  }
  
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
    message.channel.send(`Mi prefix es **J.**, para mas información sobre mi usa el comando J.help.`)
  }

  if(message.channel.type === 'DM') return;
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(!message.member.roles.cache.has('895055836643217449')) return message.channel.send("Lo siento en estos momentos estoy en fase de prueba, por lo tanto solo los Testers podrán usar mis comandos. Si te preguntas cuando volvere a estar disponible para todo publico, te digo que será el 31 de Diciembre del 2021 a las 12:00am")

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'responde') {
    message.reply("Hola!")
  }

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command))
  if(cmd){
  cmd.execute(client, message, args)

}
});

client.on('ready', () => {
  console.log(`Listo ${client.user.tag} ta listo!`)
  client.user.setPresence({ activities: [{name: 'J.help'}] })
});

// keepAlive();
client.login(config.token);