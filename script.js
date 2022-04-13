   const textVal = document.querySelector(".message-area input"),
   sendBtn = document.querySelector("#send-btn");

 

   function replyMessage(myMess)
   {

    const words = myMess.split(" ");
       let message = ''

       message = `<br><h1 style='float:right;'>${myMess}</h1>`;
       $("#comments-section").append(message);

      const commands = ["hello","hi","how are you","what's my lucky number","thank you","you are very well mannered","what's your age","who created you","what's your gender","sb tell commands","sb sing a song","sb go to"];
      const responses = ["hi! How Can I Help You Today?","I am fine, what about you?","It was fun with you! Have a good time!","thanks for the feedback!","I am a male bot","I am a minute old.","SamannoyB, find him at lichess, discord, and his website -- sbworld.in","hello,hi,how are you,what's my lucky number,thank you,you are very well mannered,what's your age,what's your gender,sb tell commands","SONG BY"];

      if(myMess == commands[0] || myMess == commands[1]){
       

      
        let bot = ''
        bot = `<br><h1 style='background-color:#123;'>${responses[0]}</h1>`;
      
$("#comments-section").append(bot);
let text = `${responses[0]}`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      
  
      }
      else if (myMess == commands[2]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>${responses[1]}</h1>`;
$("#comments-section").append(bot);
let text = `${responses[1]}`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
      else if(myMess == commands[3]){
        const options = ['1','2','3','4','5','6','7','8','9','0'];
        var a = options[Math.floor(Math.random()*10)];
        var b = options[Math.floor(Math.random()*10)];
        var sum = a + b;
        let bot = ''

bot = "<br><h1 style='background-color:#123;'> Your Lucky Number Is "+ sum + "</h1>";
$("#comments-section").append(bot);
let text = "Your Lucky Number Is " + sum;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[5];
speechSynthesis.speak(utterance);
      }
      else if(myMess == commands[4]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>${responses[2]}</h1>`;
$("#comments-section").append(bot);
let text = `${responses[2]}`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
      else if(myMess == commands[5]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>${responses[3]}</h1>`;
$("#comments-section").append(bot);
let text = `${responses[3]}`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
      else if(myMess == commands[8]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>I am a male bot</h1>`;
$("#comments-section").append(bot);
let text = `${responses[4]}`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }  
       else if(myMess == commands[6]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>I am a minute old.</h1>`;
$("#comments-section").append(bot);
let text = `${responses[5]}`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
      else if(myMess == commands[7]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>SamannoyB, find him at lichess, discord, and his website -- sbworld.in</h1>`;
$("#comments-section").append(bot);
let text = `${responses[6]}`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
      else if(myMess == commands[9]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>hello,hi,how are you,what's my lucky number,thank you,you are very well mannered,what's your age,what's your gender,sb tell commands</h1>`;
$("#comments-section").append(bot);
let text = `${responses[7]}`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
      else if (myMess == commands[10]){
        

        const sounds = ['sound1.mp3','sound2.mp3'];
         const music = sounds[Math.floor(Math.random()*sounds.length)]

        let bot = ''
        let text = `Song Playing `;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
bot = `<br><h1 style="background='#eee'"><audio src='${music}' controls autoplay></audio></h1>`;
$("#comments-section").append(bot);
      }
      else if(myMess.includes("sb go to")){
console.log(`${words[0]}` + `${words[1]}` + `${words[2]}` + `${words[3]}`);

 window.open(`https://${words[3]}`);

let bot = ''

bot = `<br><h1 style='background-color:#123;'>Opening Site ${words[3]}</h1>`;
$("#comments-section").append(bot);
}
else if(myMess.includes("sb search for")){
console.log(`${words[0]}` + `${words[1]}` + `${words[2]}` + `${words[3]}`);


  window.open(`https://google.com/search?q=${words[3]}`);

let bot = ''

bot = `<br><h1 style='background-color:#123;'>Searching For ${words[3]}</h1>`;
$("#comments-section").append(bot);

}
      else {
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>Sorry Can't Understand You!</h1>`;
$("#comments-section").append(bot);
let text = `Sorry Can't Understand You!`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
    }

   sendBtn.addEventListener("click", e => {
     if(textVal.value != ""){
      let trimmedText = textVal.value.toLowerCase();
       textVal.value = "";
       replyMessage(trimmedText);
     }
     else {
       alert("Message Panel Cannot Be Empty");
     }
   });
   var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var content = ''

recognition.continuous = true

recognition.onstart = function () {
    alert("Voice Recognition Is On")
}



recognition.onerror = function (){
    alert("Try Again")
}

recognition.onresult = function (event) {
         var current = event.resultIndex;

         var transcript = event.results[current][0].transcript

         content += transcript

         textbox.val(content)
}
$("#stop-btn").click(function (event) {
  recognition.stop()
  $("#stop-btn").css("display","none")
  $("#start-btn").css("display","flex")
})
$("#start-btn").click(function (event) {
  let userAgent = navigator.userAgent;
  
  

    if(content.length) {
        content += ''
    }

    recognition.start()
})
