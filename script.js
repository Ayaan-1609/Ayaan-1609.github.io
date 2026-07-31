// Wait until the HTML document is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
  // Grab references to the HTML elements using their IDs
  const magicBtn = document.getElementById("magic-btn");
  const magicText = document.getElementById("magic-text");

  // Add an event listener to respond when the button is clicked
  magicBtn.addEventListener("click", () => {
    // Change the text content dynamically
    magicText.textContent = "🎉 You clicked the button! Your JS dynamic code is working!";
    magicText.style.color = "#319795";
    magicText.style.fontWeight = "bold";
  });
});
