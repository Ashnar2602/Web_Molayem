// Translations
const translations = {
    it: {
        'hero.title': 'Augmented Data Analytics',
        'hero.subtitle': 'Soluzioni avanzate di analisi dati per istituzioni governative e federali',
        'construction.title': 'UNDER CONSTRUCTION',
        'construction.message': 'Stiamo lavorando per portarvi la migliore esperienza di analytics',
        'features.analytics': 'Analytics Avanzati',
        'features.government': 'Settore Governativo',
        'features.insights': 'Data Insights',
        'footer.rights': 'Tutti i diritti riservati.'
    },
    en: {
        'hero.title': 'Augmented Data Analytics',
        'hero.subtitle': 'Advanced data analysis solutions for government and federal institutions',
        'construction.title': 'UNDER CONSTRUCTION',
        'construction.message': 'We are working to bring you the best analytics experience',
        'features.analytics': 'Advanced Analytics',
        'features.government': 'Government Sector',
        'features.insights': 'Data Insights',
        'footer.rights': 'All rights reserved.'
    }
};

// Current language
let currentLang = 'it';

// DOM elements
const langButtons = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-translate]');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set default language
    updateLanguage('it');
    
    // Add event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            updateLanguage(lang);
        });
    });
    
    // Add animations
    addAnimations();
    
    // Update progress bar
    animateProgressBar();
});

// Update language function
function updateLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update text content
    translatableElements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Add animations
function addAnimations() {
    // Floating dots animation
    const dots = document.querySelectorAll('.floating-dots span');
    dots.forEach((dot, index) => {
        dot.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Hero title typing effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.classList.add('typing-effect');
        }, 500);
    }
}

// Animate progress bar
function animateProgressBar() {
    const progressBar = document.querySelector('.progress');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = '65%';
        }, 1000);
    }
}

// Smooth scrolling for future navigation
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Console welcome message
console.log('%c🚀 Molayem Strategic - Augmented Data Analytics', 'color: #00aaff; font-size: 16px; font-weight: bold;');
console.log('%cWebsite under construction. Coming soon with advanced features!', 'color: #ffdd00; font-size: 12px;');
