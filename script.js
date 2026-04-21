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