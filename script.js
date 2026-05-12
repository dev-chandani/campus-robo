function speakText(message){

  const speech = new SpeechSynthesisUtterance();

  speech.text = message;

  speech.volume = 1;

  speech.rate = 0.9;

  speech.pitch = 0.7;

  speech.lang = "en-US";

  window.speechSynthesis.speak(speech);
}




function moveAlongPath(path, destinationName){

  const robo = document.getElementById("robo");
  const stepSound = document.getElementById("stepSound");

  robo.classList.remove("arrived");

  // SOUND START
  stepSound.currentTime = 0;
  stepSound.play();

  let i = 0;

  function step(){

    if(i < path.length){

      robo.style.top = path[i][0];
      robo.style.left = path[i][1];

      i++;

      setTimeout(step, 1000);

    }else{

      // SOUND STOP
      stepSound.pause();
      stepSound.currentTime = 0;

      // ARRIVED EFFECT
      robo.classList.add("arrived");


        // SPEAK
      speakText("Welcome to " + destinationName);
    }
  }

  step();
}


function goTo(place){


  const fullNames = {

  "Block-A": "Block A",
  "Block-B": "Block B",
  "Block-C": "Block C",
  "cse": "Computer Science Department",
  "Registrar": "Registrar Chamber",
  "admission": "Admission Cell",
  "Pro": "Pro Vice Chancellor Chamber",
  "account": "Account Section",
  "Cantine": "Canteen",
  "Conference Hall": "Conference Hall",
  "NCC": "NCC Ground",
  "AG": "Agriculture Ground",
  "parking": "Parking Area",
  "exam": "Exam Department",
  "play": "Play Ground",
  "uniform": "Uniform Department"
};



  const paths = {

    "Block-A": [
      ["48%","41.8%"],
      ["33%","41.8%"],
      ["30%","50%"],
      ["17.5%","57%"]
    ],
    "Block-B": [
        ["48%", "41.8%"],
        ["30%","41.8%"],
        ["25%", "30%"],
        ["18.5%", "26%"]
    ],
    "admission": [
        ["48%", "41.8%"],
        ["33%","41.8%"],
        ["25%", "30%"],
        ["21%", "26%"],
        ["21%", "21%"],
        ["18%","21%"]
    ],
    "Block-C": [
        ["48%", "41.8%"],
        ["23%","41.8%"]
    ],
    "cse": [
      ["48%","41.8%"],
      ["32%","41.8%"],
      ["30%","50%"],
      ["17.5%","57%"],
      ["19%","58%"],
      ["21%", "59%"],
      ["21%", "72%"],
      ["16%", "72%"]
    ],
    "Registrar": [
      ["48%", "41.8%"],
      ["33%","41.8%"],
      ["25%", "30%"],
      ["21%", "26%"],
      ["21%", "17%"],
      ["25.5%", "17%"]
    ],
    "Conference Hall": [
        ["48%", "41.8%"],
        ["33%","41.8%"],
        ["25%", "30%"],
        ["4%", "22.5%"]
    ],
    "NCC":[
        ["48%", "41.8%"],
        ["45%", "41.8%"],
        ["41%", "15%"]
    ],

    "play": [
      ["48%", "41.8%"],
      ["34%","41.8%"],
      ["34%", "35%"],
      ["34%", "0%"],
      ["28%", "0%"],
      ["0%", "0%"]
    ],

    "Cantine":[
      ["48%", "41.8%"],
      ["34%","41.8%"],
      ["34%", "50%"],
      ["34%", "75%"],
      ["34%", "84%"],
      ["27%", "84%"],
      ["4%", "84%"],
      ["2.5%", "79%"]
    ],
    "parking" :[
        ["48%", "41.8%"],
        ["45%", "43%"],
        ["41%", "55%"]
    ],
    "AG" :[
        ["48%", "41.8%"],
        ["45%", "43%"],
        ["43%", "75%"],
    ],
    "account" :[
        ["48%", "41.8%"],
        ["35%","43%"],
        ["35%", "73%"],
        ["33%","73%"],
        ["27.5%", "73.5%"]
    ],
    "Pro" :[
     ["48%","41.8%"],
      ["32%","41.8%"],
      ["30%","50%"],
      ["17.5%","57%"],
      ["19%","58%"],
      ["21%","66%"],
      ["25%", "66%"]
    ],
    
    "exam" :[
      ["48%","41.8%"],
      ["32%","41.8%"],
      ["30%","50%"],
      ["17.5%","57%"],
      ["19%","58%"],
      ["21%", "59%"],
      ["21%", "70%"],
      ["21%", "78%"],
      ["25%", "78%"]
    ],


    "uniform" :[
      ["48%","41.8%"],
      ["33%","41.8%"],
      ["30%","50%"],
      ["17.5%","57%"],
      ["10%", "57%"],
      ["10%", "65%"],
      ["10%", "69%"],
      ["3%", "69%"] 
    ]

    

  };

  if(paths[place]){
    moveAlongPath(paths[place], fullNames[place]);
  }

}

function resetRobo(){

  const robo = document.getElementById("robo");

  /* remove effects */
  robo.classList.remove("arrived");

  /* initial position */
  robo.style.top = "48%";
  robo.style.left = "41.8%";

  document.getElementById("info").innerHTML =
    "🤖 Robo Reset To Initial Position";
}


window.onload = function(){

  const robo = document.getElementById("robo");

  robo.classList.add("arrived");
}