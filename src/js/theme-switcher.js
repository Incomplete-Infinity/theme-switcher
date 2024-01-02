const { body, documentElement, getElementsByName } = document;
const getThemeElements = () => document.getElementsByName("theme");
const saveSelectedTheme = (string) => localStorage.setItem("theme", string);
const getSavedTheme = () => localStorage.getItem("theme");
const mode = documentElement.getAttribute("data-bs-theme");
const getUserPreferences = () => {
  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
  return matches ? "dark" : "light";
};
const getAppliedMode = () => {
  const isDark = () => (mode >= 5);
  console.log(isDark() ? "dark" : "light")
  return isDark() ? "dark" : "light";
};
/**
 * Function to get the currently selected theme
 * @returns {string} The selected theme
 */
const getSelectedTheme = () => {
  const themeElements = getThemeElements();
  let selectedValue;
 
  for (const element of themeElements)
  {
    if (element.checked)
    {
      selectedValue = element.value;
      break;
    }
  }
  return selectedValue;
  
};

/** 
 * Function to change the theme
 */
const applySelectedTheme = (theme) => {
  const attribute = "data-theme";
  // Change the content of the header to match the selected theme
  //documentElement.removeAttribute(attribute);
  documentElement.setAttribute(attribute, theme);

  // Save the theme choice to localStorage
  saveSelectedTheme(theme);
};

// Check if a theme choice is saved in localStorage
const savedTheme = getSavedTheme();

// If a saved theme exists, load it; otherwise, do nothing
(savedTheme) && applySelectedTheme(savedTheme);

document.getElementsByName("theme").forEach((element) => {
  element.addEventListener("click", () => {
    console.log("A theme was selected.");
    applySelectedTheme(getSelectedTheme());
  });
});
