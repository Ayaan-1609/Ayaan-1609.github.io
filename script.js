document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickBtn");

    // Array containing the traditional rainbow colors (ROYGBIV)
    const rainbowColors = [
        "#FF0000", // Red
        "#FF7F00", // Orange
        "#FFFF00", // Yellow
        "#00FF00", // Green
        "#0000FF", // Blue
        "#4B0082", // Indigo
        "#9400D3"  // Violet
    ];

    let currentColorIndex = -1;

    button.addEventListener("click", () => {
        // Increment and wrap around using modulo
        currentColorIndex = (currentColorIndex + 1) % rainbowColors.length;

        // Apply rainbow color to the background
        document.body.style.backgroundColor = rainbowColors[currentColorIndex];
    });
});
