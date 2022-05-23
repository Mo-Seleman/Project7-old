const alertBanner = document.querySelector("#alert-bar");
const alertBannerX = document.querySelector("#alert-bar-x");

alertBannerX.addEventListener("click", (e) => {
  const xTarget = e.target;
  if (xTarget.tagName === "BUTTON") {
    alertBanner.style.display = "none";
  }
});
