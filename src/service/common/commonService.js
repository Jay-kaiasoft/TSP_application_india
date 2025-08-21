import { TextToSpeech } from '@capacitor-community/text-to-speech';

export async function playBeep() {
    try {
        const audio = new Audio('/audio/public-domain-beep-sound.mp3');
        console.log("audio", audio)
        audio.preload = 'auto';
        audio.currentTime = 0; // restart if already playing
        await audio.play();
    } catch (err) {
        console.warn("Beep playback failed:", err);
    }
}

export const speakMessage = async (message) => {
    try {
        const { voices } = await TextToSpeech.getSupportedVoices();

        console.log("Available voices:", voices);

        // Example: Pick the first female English voice
        const femaleVoice = voices.find(
            (v) => v.lang === "en-GB" && v.name.includes("Google UK English Female")
        );        
        await TextToSpeech.speak({
            text: message,
            lang: femaleVoice.lang,
            voice: femaleVoice.voiceURI,  // use selected voice
            rate: 0.8,
            pitch: 1.0,
            volume: 1.0
        });
    } catch (err) {
        console.error("TTS error:", err);
    }
}


// import { Capacitor } from '@capacitor/core';
// import { NativeAudio } from '@capacitor-community/native-audio';

// // A variable to track whether the audio is ready to play.
// let isBeepReady = false;

// // Function to preload the audio on app startup or a similar initial event.
// export async function setupBeep() {
//     if (Capacitor.isNativePlatform()) {
//         try {
//             // Await the preload promise to ensure the file is loaded.
//             await NativeAudio.preload({
//                 assetId: 'beep',
//                 assetPath: 'http://localhost:3000/audio/public-domain-beep-sound.mp3',
//                 isUrl: true
//             });
//             console.log('Beep audio preloaded successfully.');
//             isBeepReady = true;
//         } catch (e) {
//             console.error('Failed to preload native beep:', e);
//         }
//     }
// }

// // Function to play the audio, called only when the app needs the sound.
// export async function playBeep() {
//     if (Capacitor.isNativePlatform() && isBeepReady) {
//         try {
//             await NativeAudio.play({ assetId: 'beep' });
//         } catch (e) {
//             console.error('Native beep play error:', e);
//         }
//     } else {
//         // Fallback to web Audio
//         const audio = new Audio('/audio/beep.mp3');
//         audio.currentTime = 0;
//         audio.play().catch(() => { });
//     }
// }
