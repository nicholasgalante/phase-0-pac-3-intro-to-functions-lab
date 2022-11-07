shout = (string) => string.toUpperCase();
whisper = (string) => string.toLowerCase();
logShout = (string) => console.log(string.toUpperCase());
logWhisper = (string) => console.log(string.toLowerCase());

sayHiToHeadphonedRoommate = (string) => {
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let\'s have dinner together!") {
        return "I would love to!";
    }
}

