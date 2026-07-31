// Wait for the web page content to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the button and message paragraph from the DOM using their IDs
    const magicBtn = document.getElementById('magic-btn');
    const magicText = document.getElementById('magic-text');

    // Add an event listener to detect when the student/visitor clicks the button
    magicBtn.addEventListener('click', () => {
        // Dynamically update the text content and style
        magicText.textContent = "🎉 You activated JavaScript! Great job setting up your site.";
        magicText.style.color = "#2e7d32";
        magicText.style.fontWeight = "bold";
        magicText.style.marginTop = "1rem";
    });

});
// Wait for the web page content to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // Select elements from the DOM using their IDs
    const magicBtn = document.getElementById('magic-btn');
    const magicText = document.getElementById('magic-text');
    
    // NEW: Select our new background toggle button
    const bgBtn = document.getElementById('bg-btn');

    // Original event listener for the first button
    magicBtn.addEventListener('click', () => {
        magicText.textContent = "🎉 You activated JavaScript! Great job setting up your site.";
        magicText.style.color = "#2e7d32";
        magicText.style.fontWeight = "bold";
        magicText.style.marginTop = "1rem";
    });

    // Array of preset color choices to loop through on each click
    const colors = ['#f4f7f6', '#ffe0b2', '#e1bee7', '#c8e6c9', '#bbdefb', '#fff9c4'];
    let currentColorIndex = 0;

    // NEW: Event listener to change the background color when clicking the new button
    bgBtn.addEventListener('click', () => {
        // Move to the next color in our list
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        
        // Apply the new background color directly to the body tag
        document.body.style.backgroundColor = colors[currentColorIndex];
    });

});
