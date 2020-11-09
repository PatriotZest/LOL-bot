const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "Buy an item from the store",

    async run (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Please provide an item to buy')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'crown' || 'Crown'){
            if(amount < 600000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 600000);
            db.push(message.author.id, "Crown");
            message.channel.send('Successfully bought one Crown')
        }
        if(purchase === 'pink phallic Object' || 'Pink Phallic Object' || 'pink'){
            if(amount < 15) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 15);
            db.push(message.author.id, "Pink Phallic Object");
            message.channel.send('Successfully bought one Pink Phallic Object')
        }
        if(purchase === 'Zesty lime' || 'zest'|| 'zest lime'){
            if(amount < 1250) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 1250);
            db.push(message.author.id, "Zesty lime");
            message.channel.send('Successfully bought one Zesty lime')
        }
    }
}