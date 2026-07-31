// Wait until the HTML document is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
  // Grab references to the HTML elements
  const colorBtn = document.getElementById("color-btn");
  const colorCodeText = document.getElementById("color-code-text");

  // Preset array of vibrant background colors
  const colorPalette = [
    "#f0f4f8", // Light Soft Blue
    "#ffadad", // Pastel Red
    "#ffd6a5", // Pastel Orange
    "#fdffb6", // Pastel Yellow
    "#caffbf", // Pastel Green
    "#9bf6ff", // Pastel Sky Blue
    "#a0c4ff", // Soft Periwinkle
    "#bdb2ff", // Lavender
    "#ffc6ff"  // Soft Pink
  ];

  // Index variable to cycle through array colors sequentially
  let currentColorIndex = 0;

  // Add event listener to trigger color change on click
  colorBtn.addEventListener("click", () => {
    // Advance to the next index in the array (loops back to 0 at the end)
    currentColorIndex = (currentColorIndex + 1) % colorPalette.length;

    // Grab new hex color
    const newColor = colorPalette[currentColorIndex];

    // Apply color to body element background
    document.body.style.backgroundColor = newColor;

    // Update text content to reflect current hex color code
    colorCodeText.textContent = `Current Color: ${newColor}`;
  });
});
