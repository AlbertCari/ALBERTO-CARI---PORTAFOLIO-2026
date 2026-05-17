let currentLanguage = "es";

const langButton =
  document.getElementById("lang-toggle");

function updateLanguage(lang) {

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.getAttribute("data-i18n");

      if (translations[lang][key]) {

        element.textContent =
          translations[lang][key];

      }

    });

}

if (langButton) {

  langButton.addEventListener(
    "click",
    () => {

      currentLanguage =
        currentLanguage === "es"
          ? "en"
          : "es";

      updateLanguage(currentLanguage);

      langButton.textContent =
        currentLanguage === "es"
          ? "EN"
          : "ES";

    }
  );

}