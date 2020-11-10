const channelId = '775302318564442132'
const check = '✅'
module.exports{
    commands: ['ticket','support'],
    minArgs: 1,
    expectedArgs: '<message>',
    callback: (userMessage, arguments, text) =>{
        const {guild,member} = userMessage
        const channel = guild.channels.cache.get(channelId)
        message.channel.send(`A new ticket has been created by <@${member.id}>
        
        "${text}"
        
        Click the ${check} icon when finished :)`)
        .then(textMessage =>{
            message.react(check)
        })
    },
}