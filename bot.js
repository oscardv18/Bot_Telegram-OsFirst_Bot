const Telegraf = require("telegraf") // Constante de telegraf para poder generar una clase

// Nuevo bot colocando el token dado por el Bot Father de Telegram
const bot = new Telegraf('1026806806:AAFurZIx1183sVkyEzyI-FMuAik0oEflDbI')

bot.start((ctx)=> { // Comando para Iniciar el Bot
  
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)

    // ctx.reply("Welcome!! " + ctx.from.first_name + " " + ctx.from.last_name);
    ctx.reply(ctx.chat.id, `Bienvenidos ${ctx.from.first_name}. Haz enviado un ${ctx.updateSubTypes[0]}`)
    bot.telegram.sendMessage(`Bienvenidos ${ctx.from.first_name}. Haz enviado un ${ctx.updateSubTypes[0]}`)
    // Para escribir las comillas invertidas se usa AltGr + La tecla que estás abajo de la tecla +
})

bot.help((ctx)=> { // Comando para la ayuda de el Bot
  
    ctx.reply("Help!!!");

})


bot.settings((ctx)=> { // Comando para configuración de el Bot
  
    ctx.reply("Settings");

})

bot.command(['mycommand', 'MyCommand', 'Mycommand', 'MYCOMMAND'], (ctx) => {

    // EL Array que está dentro de los argumentos del método del bot es los posibles nombres que el usuario peda usar para invocar el comando

    ctx.reply("My Custom command!!!");

})

// bot.hears es para hacer que el bot "escuche" cuando el usuario está tipiando algo

bot.hears('computer', (ctx) => {
    ctx.reply("Hey I am selling computer");
})

// Evento de cuando el usuario scriba algún texto

// bot.on('text', (ctx) => {

//     ctx.reply("Estás Texteando");

// })

bot.on('sticker', (ctx) => {
    ctx.reply("Oh! You Like stickers");
})

bot.mention("BotFather", (ctx) => {

    ctx.reply("Tu mensionaste a alguien");

})

bot.phone('+58 424 827 5260', (ctx) => {

    ctx.reply("Oh! Ese es tu número de Teléfono");

})

bot.hashtag("programming", (ctx) => {

    ctx.reply("Oh! is a Hashtag");

})

// Para que se ejecute el comando usamos launch

bot.launch()

// 895804320
// 011793403
