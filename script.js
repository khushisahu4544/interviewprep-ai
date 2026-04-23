
// START BUTTON
function start() {
  let category = document.getElementById("category").value;

  // Save selected category
  localStorage.setItem("category", category);

  // Go to next page
  window.location.href = "interview.html";
}

// BACK BUTTON
function goBack() {
  window.location.href = "index.html";
}
// JAVASCRIPT QUESTIONS
let jsQuestions = [
  { q: "What is JavaScript?", a: "programming language" },
  { q: "What is closure?", a: "function with memory" },
  { q: "Difference between var, let, const?", a: "scope" },
  { q: "What is DOM?", a: "document object model" },
  { q: "What is event bubbling?", a: "propagation" },
  { q: "What is hoisting?", a: "moving declarations" },
  { q: "What is arrow function?", a: "short function" },
  { q: "What is async/await?", a: "asynchronous" },
  { q: "What is callback function?", a: "function passed" },
  { q: "What is promise?", a: "async result" }
];


// HR QUESTIONS
let hrQuestions = [
  { q: "Tell me about yourself", a: "" },
  { q: "Why should we hire you?", a: "" },
  { q: "What are your strengths?", a: "" },
  { q: "What are your weaknesses?", a: "" },
  { q: "Where do you see yourself in 5 years?", a: "" },
  { q: "Why do you want this job?", a: "" },
  { q: "Describe a challenge you faced", a: "" },
  { q: "What motivates you?", a: "" },
  { q: "How do you handle pressure?", a: "" },
  { q: "What are your goals?", a: "" }
];
 //variable

let questions = [];
let index = 0;
let score = 0;
let timeLeft=15;
let timer;
let isProcessing=false;

// LOAD page
window.onload = function () {

  let category = localStorage.getItem("category");

  if (category === "js") {
    questions = jsQuestions;
  } else {
    questions = hrQuestions;
  }
  //shuffle question 
  questions=questions.sort(()=>0.5- Math.random());

    //load first question
  if (document.getElementById("question")) {
    document.getElementById("question").innerText = questions[index].q;
    startTimer();
  }
  
  // load score on RESULT PAGE
  if (document.getElementById("scoreText")) {
    let finalScore = localStorage.getItem("score");
    document.getElementById("scoreText").innerText = 
      "Your Score: " + finalScore;
  }
  

};


// TIMER FUNCTION


function startTimer() {
    
  clearInterval(timer);//stop older time
  timeLeft=15; //fixed time for every question
  isProcessing=false;

  let timerText = document.getElementById("timer");

  timer = setInterval(() => {

    if (timerText) {

      timerText.innerText = "⏱ Time: " + timeLeft + "s";

    }

    timeLeft--;
    //when time ends

    if (timeLeft < 0 && !isProcessing) {
      isProcessing=true;
      clearInterval(timer);

      showBubble("⏰ Time Up!", "wrong");
    // auto move to next question
      setTimeout(() => {

        nextQuestion();

      }, 800);

    }

  }, 1000);
};


// NEXT QUESTION



function nextQuestion() {
  clearInterval(timer);
  let answerBox=document.getElementById("answer");
  let userAnswer = document.getElementById("answer").value.toLowerCase();
  let correctAnswer = questions[index].a.toLowerCase();
  
  // CHECK ANSWER

  if (correctAnswer && userAnswer.includes(correctAnswer)) {

    score++;

    showBubble("✅ Correct!", "correct");

  } else {

    showBubble("❌ Wrong!", "wrong");

  }

  index++;

  // UPDATE PROGRESS BAR

  let progress = (index / questions.length) * 100;

  let bar = document.getElementById("progressBar");

  if (bar) {

    bar.style.width = progress + "%";

  }

  // NEXT OR END

  if (index < questions.length) {

    document.getElementById("question").innerText = questions[index].q;

    answerBox.value='';
     setTimeout(startTimer,500);
}
  else {

    localStorage.setItem("score", score);

    window.location.href = "result.html";

  }

}



// BUBBLE FUNCTION



function showBubble(message, type) {

  let bubble = document.getElementById("bubble");

  if (!bubble) return;

  bubble.innerText = message;
  bubble.className=type;
  bubble.style.display='none';


  setTimeout(() => {

    bubble.style.display = "none";

  }, 1500);

}

// NAVIGATION
function goBack() {

  window.location.href = "index.html";

}

function restart() {

  localStorage.clear();

  window.location.href = "index.html";

}
