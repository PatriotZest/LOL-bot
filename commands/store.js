const Discord = require('discord.js');

module.exports = {
    name: "store",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`Crown - 600000 coins \n Pink Phallic Object - 15 coins \n Zesty lime - 1250 coins`)
        .setTimestamp();

        message.channel.send(embed);
    }
}