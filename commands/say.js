const Discord = require('discord.js');
module.exports = {

    name: 'say',
    description: "says the command from bot",
     async run(client, message , args){
     if(!message.member.roles.cache.has("775226834685919252")) return message.channel.send('You are not the Great Patriot so you cannot use this command.')
     const sayMessage = args.join(" ");
     message.delete().catch(err => console.log(err));
     message.channel.send(sayMessage);

}
}