// Define variables
let myName = "Jason Erlemeier";
let MyEmail = "jasonerlem@oru.edu";
let title = "Student";
let education = "Oral Roberts University";
let experience = "Resident Advisor, Teacher's Assistant, and Internship at 111 Consulting";
let skills = ["Drumming", "Golfing", "Financial Analysis"];
function showFunFact() {
 alert("Fun Fact: I love basketball!");
}

// Connect variables to the HTML (ligaments)
document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;
