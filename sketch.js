function addChat(input,product){
  const messagesContainer=document.getElementById("messages");
  let userDiv=document.createElement("div");
  userDiv.id="user";
  userDiv.className="user response";
  userDiv.innerHTML=`<img src="https://cliply.co/wp-content/uploads/2019/09/391909180_THINKING_FACE_400px.gif" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);
  let botDiv=document.createElement("div");
  let botImg=document.createElement("img");
  let botText=document.createElement("span");
  botImg.src="bot-mini.png";
  botImg.className="avatar";
  botDiv.className="bot response";
  botDiv.id="bot";
  botText.innerText="Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight-messagesContainer.clientHeight;
  setTimeout(timeOut,2000);
  function timeOut(){
  botText.innerText=`${product}`;
  textToSpeech(product);
}
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input){
  let product;
  let text=input.toLowerCase().replace(/[^\w\s]/gi,"").replace(/[\d]/gi,"").trim();
  // console.log("please please its r u".replace("please", "_").replace("please", " ").replace("its"," ").replace("r u","are you"));
  text=text.replace(/I feel/gi," ").replace(/whats/gi,"what is");
  text=text.replace(/please/gi," ").replace(/its/gi, " ").replace(/r u/gi, "are you");
  console.log(text);
  if (compare(prompts, replies, text)){
    product=compare(prompts,replies,text);
  }  else if (text.match(/thank/gi)){
    product="You are welcome";
  }  else if (text.match(/birthday/gi)){
    product = "I was  created on 4th December 2021";
  }  else if (text.match(/love/gi)){
    product="As heart-breaking as it is, I have no feelings 😥";
  }
  else{
    product=alternatives[Math.floor(Math.random()*alternatives.length)];
  }
  console.log(`-${product}`);
  addChat(input,product);
}

function compare(p,r,t){
  let replyAbc;
  let replyFoundAbc=false;
  for (let x=0;x<p.length;x++){
    for (let y=0;y<p[x].length;y++){
      if(p[x][y]===t){
        let repliesAbc = r[x];
        replyAbc=repliesAbc[Math.floor(Math.random()*repliesAbc.length)];
        replyFoundAbc=true;
        console.log(replyAbc);
        break;
      }
    }
    if (replyFoundAbc){
      break;
    }
  }
  return replyAbc;
}