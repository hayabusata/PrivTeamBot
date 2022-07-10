const captureImageClass = require("./CaptureImage");
const {GUILD_ID,  ALPHA_CHANNEL_ID, BRAVO_CHANNEL_ID} = require("./config.json");

class MoveCommand {
    constructor(client) {
        this.client = client;
    }

    doCommand() {
        const prefix = "!";

        this.client.on("messageCreate", message => {
            if (message.author.bot) return;
            if (!message.content.startsWith(prefix)) return;
        
            // input command processing
            const commandBody = message.content.slice(prefix.length);
            const args = commandBody.split(' ');
            const command = args.shift().toLowerCase();
        
            if (command === "move") {
                const captureImage = new captureImageClass();
                captureImage.capture();

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
                    console.log("user data--------------");
                    console.log(value);
                }
            }
        });
    }
}

module.exports = MoveCommand;

