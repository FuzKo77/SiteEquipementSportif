// ============================================
// Gestion du mode éco-responsable (RGESN)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const ecoModeToggle = document.getElementById('eco-mode-toggle');
    const ecoModeStylesheet = document.getElementById('eco-mode-stylesheet');
    
    // Vérifier si le mode éco est déjà activé (localStorage)
    const isEcoModeActive = localStorage.getItem('ecoMode') === 'true';
    
    if (isEcoModeActive) {
        activateEcoMode();
    }
    
    if (ecoModeToggle) {
        ecoModeToggle.addEventListener('click', function() {
            toggleEcoMode();
        });
    }
    
    function toggleEcoMode() {
        if (ecoModeStylesheet.disabled) {
            activateEcoMode();
        } else {
            deactivateEcoMode();
        }
    }
    
    function activateEcoMode() {
        if (ecoModeStylesheet) {
            ecoModeStylesheet.disabled = false;
            ecoModeToggle.classList.add('active');
            localStorage.setItem('ecoMode', 'true');
        }
    }
    
    function deactivateEcoMode() {
        if (ecoModeStylesheet) {
            ecoModeStylesheet.disabled = true;
            ecoModeToggle.classList.remove('active');
            localStorage.setItem('ecoMode', 'false');
        }
    }
});

// ============================================
// Menu mobile
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Fermer le menu en cliquant sur un lien
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

// ============================================
// Validation du formulaire de contact
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Réinitialiser les messages d'erreur
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => {
                msg.textContent = '';
            });
            
            let isValid = true;
            
            // Validation du nom
            const nom = document.getElementById('nom');
            if (!nom.value.trim()) {
                showError('nom-error', 'Le nom est requis');
                isValid = false;
            }
            
            // Validation du prénom
            const prenom = document.getElementById('prenom');
            if (!prenom.value.trim()) {
                showError('prenom-error', 'Le prénom est requis');
                isValid = false;
            }
            
            // Validation de l'email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError('email-error', 'L\'email est requis');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                showError('email-error', 'Format d\'email invalide');
                isValid = false;
            }
            
            // Validation du téléphone (optionnel mais format si rempli)
            const telephone = document.getElementById('telephone');
            if (telephone.value.trim()) {
                const phoneRegex = /^[0-9+\s\-()]+$/;
                if (!phoneRegex.test(telephone.value)) {
                    showError('telephone-error', 'Format de téléphone invalide');
                    isValid = false;
                }
            }
            
            // Validation du sujet
            const sujet = document.getElementById('sujet');
            if (!sujet.value) {
                showError('sujet-error', 'Veuillez sélectionner un sujet');
                isValid = false;
            }
            
            // Validation du message
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                showError('message-error', 'Le message est requis');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError('message-error', 'Le message doit contenir au moins 10 caractères');
                isValid = false;
            }
            
            // Validation RGPD
            const rgpd = document.getElementById('rgpd');
            if (!rgpd.checked) {
                showError('rgpd-error', 'Vous devez accepter l\'utilisation de vos données');
                isValid = false;
            }
            
            if (isValid) {
                // Afficher le message de succès
                const successMessage = document.getElementById('form-success');
                successMessage.textContent = 'Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.';
                successMessage.classList.add('show');
                
                // Réinitialiser le formulaire
                contactForm.reset();
                
                // Masquer le message après 5 secondes
                setTimeout(function() {
                    successMessage.classList.remove('show');
                }, 5000);
            }
        });
    }
    
    function showError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
});

// ============================================
// Smooth scroll pour les ancres
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

