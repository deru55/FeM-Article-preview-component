const html = document.documentElement;
const shareBtn = document.querySelector("[data-share-btn]");
const authorInfo = document.querySelector("[data-author]");
const shareMenu = document.querySelector("[data-share-menu]");
const toggleBtn = document.querySelector("[data-theme-toggle]");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

// 1. Cargar preferencia guardada si existe
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || savedTheme === "light") {
  html.style.colorScheme = savedTheme;
}

// 2. Alternar entre claro y oscuro al hacer clic
toggleBtn?.addEventListener("click", () => {
  const currentScheme = html.style.colorScheme;
  const isDark = currentScheme === "dark" || (!currentScheme && systemDark.matches);

  const nextTheme = isDark ? "light" : "dark";

  html.style.colorScheme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

shareBtn.addEventListener("click", () => {
  const isShareMenuExpanded = shareBtn.getAttribute("aria-expanded") === "true";

  shareBtn.setAttribute("aria-expanded", !isShareMenuExpanded);
});
