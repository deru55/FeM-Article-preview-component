const shareBtn = document.querySelector("[data-share-btn]");
const authorInfo = document.querySelector("[data-author]");
const shareMenu = document.querySelector("[data-share-menu]");

shareBtn.addEventListener("click", () => {
  const isShareMenuExpanded = shareBtn.getAttribute("aria-expanded") === "true";

  shareBtn.setAttribute("aria-expanded", !isShareMenuExpanded);

  /* authorInfo.hidden = !isShareMenuExpanded;
  shareMenu.hidden = isShareMenuExpanded; */
});
