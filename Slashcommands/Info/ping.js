module.exports = {
  name:"ping",
  description:"š Show the bot ping",
  cooldown:15,
  run : async(interaction, client, args) => {
    await interaction.deferReply()
    let Latency = Date.now() - interaction.createdTimestamp
    interaction.editReply({content:"> <a:loading:958875394822529094> Loading..."}).then(() => 
      setTimeout(() => {
        interaction.editReply({content:`>>> ā | Latency : ${Latency}ms\nā±ļø | Api Latency : ${client.ws.ping}ms`})
      },2 * 1000)
      )
    
  } 
}
