// =========================
// Part 1: Basics
// =========================

// Variables, conditionals, and output
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

// Conditional logic
if (userAge >= 18) {
  document.getElementById("greeting").textContent =
    `Hello ${userName}, you are an adult.`;
} else {
  document.getElementById("greeting").textContent =
    `Hello ${userName}, you are still young.`;
}

// =========================
// Part 2: Functions
// =========================

// Function 1: Calculate total
function showTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent =
    `The total of ${a} and ${b} is ${total}.`;
}

// Function 2: Format a string
function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(formatName("jAVaScRIPt")); // Test in console

// =========================
// Part 3: Loops
// =========================

// Example 1: For loop
function listFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; // Clear old list

  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
  }
}

// Example 2: While loop (countdown)
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// =========================
// Part 4: DOM Manipulation
// =========================

// Example 1: Toggle text visibility
let toggleBtn = document.getElementById("toggleBtn");
let toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
  } else {
    toggleText.style.display = "none";
  }
});

// Example 2: Change text color dynamically
toggleText.addEventListener("mouseover", () => {
  toggleText.style.color = "red";
});
toggleText.addEventListener("mouseout", () => {
  toggleText.style.color = "black";
});

// Example 3: Create a new element on the fly
let newElement = document.createElement("p");
newElement.textContent = "This paragraph was added using JavaScript!";
document.body.appendChild(newElement);
