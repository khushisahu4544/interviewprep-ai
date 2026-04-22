function start(){
    alert("Interview Started");
}
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
 

let questions = [];
let index = 0;
let score = 0;

// LOAD QUESTIONS
window.onload = function () {

  let category = localStorage.getItem("category");

  if (category === "js") {
    questions = jsQuestions;
  } else {
    questions = hrQuestions;
  }

  if (document.getElementById("question")) {
    document.getElementById("question").innerText = questions[index].q;
  }
  //shuffle question 
  questions=questions.sort(()=>0.5- Math.random());

  // RESULT PAGE
  if (document.getElementById("scoreText")) {
    let finalScore = localStorage.getItem("score");
    document.getElementById("scoreText").innerText = 
      "Your Score: " + finalScore;
  }
};

// NEXT BUTTON
function nextQuestion() {
  let userAnswer = document.getElementById("answer").value.toLowerCase();

  let correctAnswer = questions[index].a.toLowerCase();
  let progress = ((index) / questions.length) * 100;
document.getElementById("progressBar").style.width = progress + "%";

  // Simple matching
  if (correctAnswer && userAnswer.includes(correctAnswer)) {
    score++;
  }

  index++;

  if (index < questions.length) {
    document.getElementById("question").innerText = questions[index].q;
    document.getElementById("answer").value = "";
  } else {
    // SAVE SCORE
    localStorage.setItem("score", score);

    // GO TO RESULT PAGE
    window.location.href = "result.html";
  }
}

// BACK
function goBack() {
  window.location.href = "index.html";
}

// RESTART
function restart() {
  localStorage.clear();
  window.location.href = "index.html";
}