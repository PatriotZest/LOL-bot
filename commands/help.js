﻿const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`;kick`', 'Kicks a member from your server via mention or ID [BETA not available rn sorry]')
        .addField('`;ban`', 'Bans a member from your server via mention or ID')
        .addField('`;clear`', 'Purges messages [BETA not available rn sorry]')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`;meme`', 'Generates a random meme')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`;ping`', 'Get the bot\'s ping')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}