const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
console.log("Estou iniciando...")

client.on("ready", () => {
    console.log('iniciei com sucesso!')
})

client.login(config.token)