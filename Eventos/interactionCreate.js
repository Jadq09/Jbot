const Discord = require("discord.js")

module.exports = async(client, interaction) => {

    if(!interaction.isCommand()) return
    
    const cmds1 = client.slashcommand.get(interaction.commandName)

    if(!cmds1) return

    try {
        await cmds1.run(client, interaction)
    }catch (e){
        console.error(e)
        return interaction.reply({ content: `La interación fachera a fallado :[`})
    }
}