let currentLang = "en";

function toggleLang() {
  const enElements = document.querySelectorAll("[data-en]");
  const arElements = document.querySelectorAll("[data-ar]");

  if (currentLang === "en") {
    enElements.forEach((e) => (e.style.display = "none"));
    arElements.forEach((e) => (e.style.display = "block"));
    document.body.style.direction = "rtl";
    currentLang = "ar";
  } else {
    enElements.forEach((e) => (e.style.display = "block"));
    arElements.forEach((e) => (e.style.display = "none"));
    document.body.style.direction = "ltr";
    currentLang = "en";
  }
}
