# samannoyb-bot

Commands: hello,hi,how are you,what's my lucky number,thank you,you are very well mannered,what's your age,what's your gender,sb tell commands

this is not case-sensitive. but please add the special characters in the commands. :)

this version of samannoyb-bot is not copyrighted.

usage of logic will be posted sooner or later.


please note:  Samannoyb shall not be responsible for any violation on this usage.

 have a good time!
 
 # Usage Of Logic In Your Own Project

Please Add This HTML in your project --

`<script src="https://kit.fontawesome.com/9f6ace1107.js"></script></head>
<body>
    <div class="wrapper">
        <div class="recipient">
            <img src="bot.png" alt="">
            <span>SamannoyB Bot</span>
        </div>
        <div id="comments-section">  
        </div>
        <div class="message-area">
          <input type="text" >
          <i class="fa fa-paper-plane"></i>
        </div></div></body></html>`

And please add this script inside your project -- 
`const textVal = document.querySelector(".message-area input"),
   sendBtn = document.querySelector(".message-area i");

   function replyMessage(myMess)
   {
       let message = ''

       message = `<br><h1 style='float:right;'>${myMess}</h1>`;
       $("#comments-section").append(message);

      const commands = ["hello","hi","how are you","what's my lucky number","thank you","you are very well mannered","what's your age","what's your gender","sb tell commands"];
      const responses = ["hi! How Can I Help You Today?","I am fine, what about you?","It was fun with you! Have a good time!","thanks for the feedback!"];

      if(myMess == commands[0] || myMess == commands[1]){
       

      
        let bot = ''
        bot = `<br><h1 style='background-color:#123;'>${responses[0]}</h1>`;
      
$("#comments-section").append(bot);
let text = `${responses[0]}`;
let utterance = new SpeechSynthesisUtterance(text);
//voices = window.speechSynthesis.getVoices();
//utterance.voice = voices[4];
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
      else if(myMess == commands[7]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>I am a male bot</h1>`;
$("#comments-section").append(bot);
let text = `I am a male bot`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }  
       else if(myMess == commands[6]){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>I am a minute old.</h1>`;
$("#comments-section").append(bot);
let text = `I am a minute old.`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
      else if(myMess == "who created you"){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>SamannoyB, find him at lichess, discord, and his website -- sbworld.in</h1>`;
$("#comments-section").append(bot);
let text = `SamannoyB, find him at lichess, discord, and his website -- sbworld.in`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
      }
      else if(myMess == "sb tell commands"){
        let bot = ''

bot = `<br><h1 style='background-color:#123;'>hello,hi,how are you,what's my lucky number,thank you,you are very well mannered,what's your age,what's your gender,sb tell commands</h1>`;
$("#comments-section").append(bot);
let text = `hello,hi,how are you,what's my lucky number,thank you,you are very well mannered,what's your age,what's your gender,sb tell commands`;
let utterance = new SpeechSynthesisUtterance(text);
voices = window.speechSynthesis.getVoices();
utterance.voice = voices[4];
speechSynthesis.speak(utterance);
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
       let trimmedText = textVal.value.toLowerCase();
       textVal.value = "";
       replyMessage(trimmedText);
   });`
   
   If You Want To Add More Commands Or Remove Any More, Please Do So bBy Adding More Strings Here -- 
   `  const commands = ["hello","hi","how are you","what's my lucky number","thank you","you are very well mannered","what's your age","what's your gender","sb tell commands"];`
   
     If You Want To Add More Responses Or Remove Any More, Please Do So bBy Adding More Strings Here -- 
     `const responses = ["hi! How Can I Help You Today?","I am fine, what about you?","It was fun with you! Have a good time!","thanks for the feedback!"];`
     
     NOTE: there are many in-between commands and responses inside the loops. Kindly commit them.
