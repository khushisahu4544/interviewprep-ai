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
// DIFFERENT QUESTION SETS
let jsQuestions = [
  "What is JavaScript?",
  "What is closure?",
  "Difference between var, let, const?"
];

let hrQuestions = [
  "Tell me about yourself",
  "Why should we hire you?",
  "What are your strengths?"
];

let questions = [];
let index = 0;

// LOAD QUESTIONS BASED ON CATEGORY
window.onload = function () {

  let category = localStorage.getItem("category");

  if (category === "js") {
    questions = jsQuestions;
  } else {
    questions = hrQuestions;
  }

  document.getElementById("question").innerText = questions[index];
};

// NEXT BUTTON
function nextQuestion() {
  let userAnswer = document.getElementById("answer").value;

  console.log("User Answer:", userAnswer);

  index++;

  if (index < questions.length) {
    document.getElementById("question").innerText = questions[index];
    document.getElementById("answer").value = "";
  } else {
    document.getElementById("question").innerText = "🎉 Interview Completed!";
    document.getElementById("answer").style.display = "none";
  }
}

// BACK BUTTON
function goBack() {
  window.location.href = "index.html";
}