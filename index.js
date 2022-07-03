const { Client, Intents } = require('discord.js');
const Discord = require("discord.js");
const {token} = require("./config.json");

const voiceChannelStateClass = require("./VoiceChannelState");
const moveCommandClass = require("./MoveCommand");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"]});

client.on("ready", () => {
    console.log("Ready!");
})

const moveCommand = new moveCommandClass(client);
moveCommand.doCommand();

// get state of voice channels
const voiceChannelState = new voiceChannelStateClass(client);
voiceChannelState.getState();

client.login(token);