const Discord = require('discord.js');
module.exports = {

    name: 'say',
    description: "says the command from bot",
     async execute(client, message , args){
     const sayMessage = args.join(" ");
     message.delete().catch(err => console.log(err));
     message.channel.send(sayMessage);

}
}