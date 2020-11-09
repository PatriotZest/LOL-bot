const Discord = require('discord.js');
module.exports = {

    name: 'say',
    description: "says the command from bot",
     async run(client, message , args){
     function emoji (id) {
        return client.emojis.cache.get(id).toString()
    }
     if(!message.member.roles.cache.has("775226834685919252")) return message.channel.send('You are not the Great Patriot so you cannot use this command.' + emoji('766605727392727062'))
     const sayMessage = args.join(" ");
     message.delete().catch(err => console.log(err));
     message.channel.send(sayMessage);

}
}