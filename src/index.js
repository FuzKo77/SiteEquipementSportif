// Script simple : tout est déclenché après le chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  // ----- Mode éco -----
  const ecoBtn = document.getElementById("bouton-mode-eco");
  const ecoCss = document.getElementById("style-mode-eco");
  const ecoOn = localStorage.getItem("ecoMode") === "true";
  if (ecoOn) {
    enableEco();
  }
  if (ecoBtn && ecoCss) {
    ecoBtn.addEventListener("click", () => {
      if (ecoCss.disabled) {
        enableEco();
      } else {
        disableEco();
      }
    });
  }
  function enableEco() {
    ecoCss.disabled = false;
    ecoBtn.classList.add("active");
    localStorage.setItem("ecoMode", "true");
  }
  function disableEco() {
    ecoCss.disabled = true;
    ecoBtn.classList.remove("active");
    localStorage.setItem("ecoMode", "false");
  }

  // ----- Menu burger -----
  const menuBtn = document.querySelector(".bouton-menu");
  const nav = document.querySelector(".menu-principal");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuBtn.setAttribute("aria-expanded", nav.classList.contains("active"));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ----- Formulaire de contact -----
  const form = document.getElementById("formulaire-contact");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document
        .querySelectorAll(".message-erreur")
        .forEach((m) => (m.textContent = ""));

      const nom = document.getElementById("nom");
      const prenom = document.getElementById("prenom");
      const email = document.getElementById("email");
      const tel = document.getElementById("telephone");
      const sujet = document.getElementById("sujet");
      const msg = document.getElementById("message");
      const rgpd = document.getElementById("rgpd");
      let ok = true;

      if (!nom.value.trim()) {
        showError("nom-erreur", "Le nom est requis");
        ok = false;
      }
      if (!prenom.value.trim()) {
        showError("prenom-erreur", "Le prénom est requis");
        ok = false;
      }

      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError("email-erreur", "L'email est requis");
        ok = false;
      } else if (!emailReg.test(email.value)) {
        showError("email-erreur", "Format d'email invalide");
        ok = false;
      }

      if (tel.value.trim()) {
        const telReg = /^[0-9+\s\-()]+$/;
        if (!telReg.test(tel.value)) {
          showError("telephone-erreur", "Format de téléphone invalide");
          ok = false;
        }
      }

      if (!sujet.value) {
        showError("sujet-erreur", "Veuillez sélectionner un sujet");
        ok = false;
      }
      if (!msg.value.trim()) {
        showError("message-erreur", "Le message est requis");
        ok = false;
      } else if (msg.value.trim().length < 10) {
        showError("message-erreur", "Au moins 10 caractères");
        ok = false;
      }

      if (!rgpd.checked) {
        showError("rgpd-erreur", "Cochez la case RGPD");
        ok = false;
      }

      if (!ok) return;

      // Sauvegarde simple dans localStorage
      const data = {
        nom: nom.value.trim(),
        prenom: prenom.value.trim(),
        email: email.value.trim(),
        telephone: tel.value.trim(),
        sujet: sujet.value,
        message: msg.value.trim(),
        date: new Date().toISOString(),
      };
      const list = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      list.push(data);
      localStorage.setItem("contactMessages", JSON.stringify(list));

      const success = document.getElementById("message-succes");
      success.textContent = "Merci ! Message envoyé.";
      success.classList.add("show");
      form.reset();
      setTimeout(() => success.classList.remove("show"), 5000);
    });
  }
  function showError(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

   // ----- Smooth scroll -----
   document.querySelectorAll('a[href^="#"]').forEach((link) => {
     link.addEventListener("click", (e) => {
       const href = link.getAttribute("href");
       if (!href || href === "#") {
         // Si c'est le bouton retour en haut
         if (link.classList.contains("bouton-retour-haut")) {
           e.preventDefault();
           window.scrollTo({ top: 0, behavior: "smooth" });
         }
         return;
       }
       const target = document.querySelector(href);
       if (target) {
         e.preventDefault();
         target.scrollIntoView({ behavior: "smooth", block: "start" });
       }
     });
   });

  // ----- Impression des CV -----
  const printBtn = document.getElementById("print-cv");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  // ----- FAQ Accordéon -----
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true";
      const faqItem = question.closest(".faq-item");

      // Fermer toutes les autres questions
      faqQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== question) {
          otherQuestion.setAttribute("aria-expanded", "false");
        }
      });

      // Ouvrir/fermer la question cliquée
      question.setAttribute("aria-expanded", !isExpanded);
    });
  });
});
