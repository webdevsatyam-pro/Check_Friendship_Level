

const popupEl = document.getElementById("popup-div");

function test(){

  const name = prompt("Enter Your Name");
  const frname = prompt("Enter Your Friend Name");

  if(!name || !frname){
    alert("Please enter both names!");
    return;
  }

  const randomnum = Math.floor(Math.random() * 100) + 1;

  let message = "";

  if(randomnum >= 70){
    message = "Best Friends Forever ❤️";
  }
  else if(randomnum >= 50){
    message = "Good Friends 😊";
  }
  else if(randomnum >= 30){
    message = "Just Friends 🙂";
  }
  else{
    message = "Normal Friends 😅";
  }

  popupEl.innerHTML = `
    <h2>${name} ❤️ ${frname}</h2>
    <div class="percent">${randomnum}%</div>
    <div class="result-text">${message}</div>
    <button class="close-btn" onclick="closePopup()">Close</button>
  `;

  popupEl.classList.add("show");
}

function closePopup(){
  popupEl.classList.remove("show");
}



      
      