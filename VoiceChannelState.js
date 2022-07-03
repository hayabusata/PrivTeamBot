

class VoiceChannelState {
    constructor(client) {
        this.client = client;
    }
    
    // get state of voice channels
    getState() {
        this.client.on("voiceStateUpdate", (oldState, newState) => {
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
    }
    
}

module.exports = VoiceChannelState;

