const btnInfos = document.querySelector(".btnInfos");
const infosPlus = document.querySelector(".infosPlus");

btnInfos.addEventListener("click", () => {
  const isVisible = infosPlus.classList.toggle("visible");

  // Changer le texte du bouton selon la visibilité
  btnInfos.textContent = isVisible ? "Moins d'infos" : "Mieux me connaître";

  // Mise à jour des attributs ARIA pour l'accessibilité
  btnInfos.setAttribute("aria-expanded", isVisible);
  infosPlus.setAttribute("aria-hidden", !isVisible);
});
