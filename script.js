document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickBtn");

    // Array of colors to cycle through
    const colors = [
        "#f3f4f6", // Default light grey
        "#fef3c7", // Soft yellow
        "#d1fae5", // Soft green
        "#e0f2fe", // Soft blue
        "#fce7f3", // Soft pink
        "#f3e8ff"  // Soft purple
    ];

    let currentColorIndex = 0;

    button.addEventListener("click", () => {
        // Move to the next index in the array
        currentColorIndex = (currentColorIndex + 1) % colors.length;

        // Apply the new background color to the main container or body
        document.body.style.backgroundColor = colors[currentColorIndex];
    });
});
