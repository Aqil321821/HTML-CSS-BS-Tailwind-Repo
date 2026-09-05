(() => {
  "use strict";

  const getStoredTheme = () => localStorage.getItem("theme");

  const setStoredTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  };

  // Initial theme
  const storedTheme = getStoredTheme();

  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    setTheme("light");
  }

  // Select all theme buttons
  const themeButtons = document.querySelectorAll("[data-bs-theme-value]");

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.getAttribute("data-bs-theme-value");

      setStoredTheme(theme);
      setTheme(theme);
    });
  });
})();
