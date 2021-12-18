const synth=window.speechSynthesis;
const textToSpeech=(string)=>{
  let voice=new SpeechSynthesisUtterance(string);
  voice.text=string;
  voice.lang="en-US";
  voice.volume=1;
  voice.pitch=1;
  voice.rate=0.7;
  synth.speak(voice);
}