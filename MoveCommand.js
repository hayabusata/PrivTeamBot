class MoveCommand {
    constructor(client) {
        this.client = client;
    }

    doCommand() {
        const prefix = "!";

        const GUILD_ID = "991666189191364708"; // server id
        const TEXT_CHANNEL_ID = "992051127929536532"; // dev
        const VOICE_CHANNEL_ID = "991666189191364712" // General
        const ALPHA_CHANNEL_ID = "992733754839814255" // アルファ
        const BRAVO_CHANNEL_ID = "992733864483106826" // ブラボー

        this.client.on("messageCreate", message => {
            if (message.author.bot) return;
            if (!message.content.startsWith(prefix)) return;
        
            // input command processing
            const commandBody = message.content.slice(prefix.length);
            const args = commandBody.split(' ');
            const command = args.shift().toLowerCase();
        
            if (command === "move") {
                const timeTaken = Date.now() - message.createdTimestamp;
                message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
        
                // const voiceChannel = Guild.channels.cache.get(VOICE_CHANNEL_ID);
                // console.log(Discord.GuildMember.voiceChannel.members);
                
                const guild = this.client.guilds.cache.get(GUILD_ID);
                const channel = this.client.channels.cache.get(ALPHA_CHANNEL_ID);
                console.log(guild.memberCount);
                console.log(channel.members.size);
        
                for (let [key, value] of channel.members) {
                    console.log("value");
                    console.log(value.user.id);
                    console.log(value.displayName);
                }
            }
        });
    }
}

module.exports = MoveCommand;

