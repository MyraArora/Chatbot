function addChat(input,product){
  const messagesContainer=document.getElementById("messages");
  let userDiv=document.createElement("div")
  userDiv.id="user";
  userDiv.className="user response";
  userDiv.innerHTML=`<img src="https://cliply.co/wp-content/uploads/2019/09/391909180_THINKING_FACE_400px.gif" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);
  let botDiv=document.createElement("div")
  let botImg=document.createElement("img")
  let botText=document.createElement("span")
  botImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpz5h49_1CBYw6MBGlw8CNX-_U-BxVkBMLfQ&usqp=CAU"
  botImg.className="avatar";
  botDiv.className="bot response"
  botText.innerText="Typing..."
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  messagesContainer.scrollTop=messagesContainer.scrollHeight-messagesContainer.clientHeight;
  setTimeout(timeOut,2000);
  function timeOut(){
  botText.innerText=`${product}`;
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
  document.getElementById("myBtn").addEventListener("click", function() {
    let input = inputField.value;
      inputField.value = "";
      output(input);
});
});

function output(input){
  let product;
  let text=input;
  // console.log("please please its r u".replace("please", "_").replace("please", " ").replace("its"," ").replace("r u","are you"));
  text=text.replace(/I feel/gi," ").replace(/whats/gi,"what is");
  text=text.replace(/please/gi," ").replace(/its/gi, " ").replace(/r u/gi, "are you");
  if (text<10){
    product="Your CRP level is completely normal. ";
  }  
  if (text<27 & text>10){
    product="You have mild inflamation. We advice you to consult a doctor immediately.";
  }  
  if (text>26){
    product="Very high degree of inflamation. You need to consult a doctor urgently. This should be followed by an HRCT scan to determine the level of lung infection. Treatment with steroids may be needed on the advice of the doctor.";
  }  
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
