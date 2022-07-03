const { Client, Intents } = require('discord.js');
const Discord = require("discord.js");
const {token} = require("./config.json");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"]});

const prefix = "!";

const GUILD_ID = "991666189191364708"; // server id
const TEXT_CHANNEL_ID = "992051127929536532"; // dev
const VOICE_CHANNEL_ID = "991666189191364712" // General
const ALPHA_CHANNEL_ID = "992733754839814255" // アルファ
const BRAVO_CHANNEL_ID = "992733864483106826" // ブラボー

client.on("ready", () => {
    console.log("Ready!");
})


client.on("messageCreate", message => {
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
        
        const guild = client.guilds.cache.get(GUILD_ID);
        const channel = client.channels.cache.get(ALPHA_CHANNEL_ID);
        console.log(guild.memberCount);
        console.log(channel.members.size);

        for (let [key, value] of channel.members) {
            console.log("value");
            console.log(value.user.id);
            console.log(value.displayName);
        }
    }
});

// get state of voice channels
client.on("voiceStateUpdate", (oldState, newState) => {
    console.log("change");
    if (oldState && newState) {
        if (oldState.channelId === newState.channelId) {
            console.log("other");
        }
        if (oldState.channelId === null && newState.channelId != null) {
            console.log("connect");
        }
        if (oldState.channelId != null && newState.channelId === null) {
            console.log("disconnect");
        }
    }
});

// login("token")
// commitする前に絶対にtokenを各場所を変える！！！
client.login(token);