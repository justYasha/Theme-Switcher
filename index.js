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