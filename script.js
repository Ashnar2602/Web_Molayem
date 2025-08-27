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
        'footer.rights': 'Tutti i diritti riservati.',
        'nav.home': 'Home',
        'nav.solutions': 'Soluzioni',
        'nav.about': 'Chi Siamo',
        'nav.clients': 'Clienti',
        'nav.contact': 'Contatti',
        // Solutions page
        'solutions.title': 'Le Nostre Soluzioni',
        'solutions.subtitle': 'Tecnologie avanzate di analisi dati per il settore pubblico',
        'solutions.construction': 'Stiamo sviluppando le nostre soluzioni di analytics per il settore governativo',
        'solutions.predictive': 'Analisi Predittiva',
        'solutions.predictive.desc': 'Algoritmi avanzati per prevedere trend e comportamenti',
        'solutions.realtime': 'Analytics Real-Time',
        'solutions.realtime.desc': 'Monitoraggio e analisi dei dati in tempo reale',
        'solutions.security': 'Sicurezza Avanzata',
        'solutions.security.desc': 'Protocolli di sicurezza per dati sensibili governativi',
        // About page
        'about.title': 'Chi Siamo',
        'about.subtitle': 'Esperti in Augmented Data Analytics per il settore pubblico',
        'about.construction': 'Stiamo preparando la presentazione del nostro team e della nostra storia',
        'about.mission': 'La Nostra Missione',
        'about.mission.desc': 'Trasformare i dati in insights strategici per il settore pubblico',
        'about.vision': 'La Nostra Visione',
        'about.vision.desc': 'Diventare il leader nell\'analytics per le istituzioni governative',
        'about.values': 'I Nostri Valori',
        'about.values.desc': 'Innovazione, sicurezza, trasparenza e eccellenza',
        // Clients page
        'clients.title': 'I Nostri Clienti',
        'clients.subtitle': 'Istituzioni governative e federali che si fidano di noi',
        'clients.construction': 'Stiamo preparando la showcase dei nostri clienti e case studies',
        'clients.government': 'Enti Governativi',
        'clients.government.desc': 'Ministeri e agenzie governative centrali',
        'clients.federal': 'Istituzioni Federali',
        'clients.federal.desc': 'Organismi federali e sovranazionali',
        'clients.public': 'Settore Pubblico',
        'clients.public.desc': 'Amministrazioni pubbliche locali e regionali',
        // Contact page
        'contact.title': 'Contattaci',
        'contact.subtitle': 'Siamo qui per supportare le vostre esigenze di analytics',
        'contact.construction': 'Stiamo finalizzando il nostro sistema di contatto e supporto',
        'contact.email': 'Email',
        'contact.email.desc': 'Contattaci via email per informazioni dettagliate',
        'contact.phone': 'Telefono',
        'contact.phone.desc': 'Supporto telefonico dedicato per i clienti',
        'contact.office': 'Uffici',
        'contact.office.desc': 'Incontri presso le nostre sedi o la vostra'
    },
    en: {
        'hero.title': 'Augmented Data Analytics',
        'hero.subtitle': 'Advanced data analysis solutions for government and federal institutions',
        'construction.title': 'UNDER CONSTRUCTION',
        'construction.message': 'We are working to bring you the best analytics experience',
        'features.analytics': 'Advanced Analytics',
        'features.government': 'Government Sector',
        'features.insights': 'Data Insights',
        'footer.rights': 'All rights reserved.',
        'nav.home': 'Home',
        'nav.solutions': 'Solutions',
        'nav.about': 'About Us',
        'nav.clients': 'Clients',
        'nav.contact': 'Contact',
        // Solutions page
        'solutions.title': 'Our Solutions',
        'solutions.subtitle': 'Advanced data analysis technologies for the public sector',
        'solutions.construction': 'We are developing our analytics solutions for the government sector',
        'solutions.predictive': 'Predictive Analytics',
        'solutions.predictive.desc': 'Advanced algorithms to predict trends and behaviors',
        'solutions.realtime': 'Real-Time Analytics',
        'solutions.realtime.desc': 'Real-time data monitoring and analysis',
        'solutions.security': 'Advanced Security',
        'solutions.security.desc': 'Security protocols for sensitive government data',
        // About page
        'about.title': 'About Us',
        'about.subtitle': 'Experts in Augmented Data Analytics for the public sector',
        'about.construction': 'We are preparing the presentation of our team and our story',
        'about.mission': 'Our Mission',
        'about.mission.desc': 'Transform data into strategic insights for the public sector',
        'about.vision': 'Our Vision',
        'about.vision.desc': 'Become the leader in analytics for government institutions',
        'about.values': 'Our Values',
        'about.values.desc': 'Innovation, security, transparency and excellence',
        // Clients page
        'clients.title': 'Our Clients',
        'clients.subtitle': 'Government and federal institutions that trust us',
        'clients.construction': 'We are preparing the showcase of our clients and case studies',
        'clients.government': 'Government Entities',
        'clients.government.desc': 'Ministries and central government agencies',
        'clients.federal': 'Federal Institutions',
        'clients.federal.desc': 'Federal and supranational organizations',
        'clients.public': 'Public Sector',
        'clients.public.desc': 'Local and regional public administrations',
        // Contact page
        'contact.title': 'Contact Us',
        'contact.subtitle': 'We are here to support your analytics needs',
        'contact.construction': 'We are finalizing our contact and support system',
        'contact.email': 'Email',
        'contact.email.desc': 'Contact us via email for detailed information',
        'contact.phone': 'Phone',
        'contact.phone.desc': 'Dedicated phone support for clients',
        'contact.office': 'Offices',
        'contact.office.desc': 'Meetings at our offices or yours'
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
    
    // Mobile menu functionality
    initializeMobileMenu();
    
    // Add animations
    addAnimations();
    
    // Update progress bar
    animateProgressBar();
});

// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
}

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
