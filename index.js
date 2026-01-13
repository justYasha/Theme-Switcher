const themeButtons = document.querySelectorAll(".theme-btn");
const body = document.body;
const currentThemeDisplay = document.getElementById("currentTheme");

const themes = ["light", "dark", "colorful","neon"]

function switchTheme(newTheme) {
    themes.forEach(theme => {
        body.classList.remove(theme)
    })
    body.classList.add(newTheme);

    const themeName = newTheme.charAt(0).toUpperCase() + newTheme.slice(1)
    currentThemeDisplay.textContent = `Current Theme: ${themeName}`
    updateActiveButton(newTheme);
    console.log(`ThemeChanget to: ${newTheme}`);
}

function updateActiveButton(activeTheme) {
    themeButtons.forEach(button => {
        button.classList.remove("active");
    })
    const activeButton = document.querySelector(`[data-theme="${activeTheme}"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

themeButtons.forEach(button => {
    button.addEventListener("click", function() {
        const selectedTheme = this.getAttribute("data-theme");
        switchTheme(selectedTheme);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    switchTheme("dark");
});
document.addEventListener("DOMContentLoaded", function(event) {
    const keyMap = {
        "1": "light",
        "2": "dark",
        "3": "colorful",
        "4": "neon"
    }
    if (keyMap[event.key]) {
        switchTheme(keyMap[event.key]);
        2
    }
});