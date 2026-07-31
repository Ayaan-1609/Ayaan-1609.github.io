// Wait for the web page content to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the button and message paragraph from the DOM using their IDs
    const magicBtn = document.getElementById('magic-btn');
    const magicText = document.getElementById('magic-text');

    // Add an event listener to detect when the student/visitor clicks the button
    magicBtn.addEventListener('click', () => {
        // Dynamically update the text content and style
        magicText.textContent = "🎉 You activated JavaScript! Great job setting up your site.";
        magicText.textContent = "Change Color";
        magicText.style.color = "#2e7d32";
        magicText.style.fontWeight = "bold";
        magicText.style.marginTop = "1rem";
    });

});
