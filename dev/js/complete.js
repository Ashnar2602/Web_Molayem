// Complete pages JavaScript functionality
// Multilingual support and enhanced interactions for Molayem Strategic

class MolayemComplete {
    constructor() {
        this.currentLang = 'it';
        this.translations = {};
        this.init();
    }
    
    init() {
        this.loadTranslations();
        this.setupEventListeners();
        this.setupMobileMenu();
        this.setupScrollAnimations();
        this.setupCounterAnimations();
        this.setupFormValidation();
    }
    
    loadTranslations() {
        this.translations = {
            it: {
                // Navigation
                'nav.home': 'Home',
                'nav.solutions': 'Solutions',
                'nav.about': 'About',
                'nav.clients': 'Clients',
                'nav.contact': 'Contact',
                
                // Footer
                'footer.tagline': 'Augmented Data Analytics per il Settore Pubblico',
                'footer.rights': 'Tutti i diritti riservati.',
                'footer.disclaimer': 'Specialisti in Data Analytics per Istituzioni Governative e Federali',
                
                // Home page
                'home.hero.title': 'Augmented Data Analytics per il Settore Pubblico',
                'home.hero.subtitle': 'Trasformiamo i dati delle istituzioni governative in intelligence strategica attraverso AI avanzata e machine learning, garantendo sicurezza, compliance e risultati misurabili.',
                'home.hero.cta.demo': 'Richiedi Demo',
                'home.hero.cta.case': 'Vedi Case Studies',
                
                'home.overview.title': 'Perché Molayem Strategic',
                'home.overview.subtitle': 'La prima scelta per istituzioni governative e federali che vogliono modernizzare i processi decisionali',
                
                'home.approach.title': 'Il Nostro Approccio',
                'home.approach.subtitle': 'Metodologia consolidata per garantire successo e ROI misurabili',
                
                'home.stats.projects': 'Progetti Governativi',
                'home.stats.data': 'Miliardi di Record Processati',
                'home.stats.roi': 'ROI Medio',
                'home.stats.compliance': 'Tasso Compliance',
                
                // Solutions page
                'solutions.hero.title': 'Soluzioni per il Settore Pubblico',
                'solutions.hero.subtitle': 'Piattaforme di Data Analytics progettate specificamente per le esigenze uniche delle istituzioni governative e degli enti pubblici',
                
                'solutions.core.title': 'Soluzioni Core',
                'solutions.core.subtitle': 'Le nostre piattaforme principali per trasformare i dati in valore strategico',
                
                'solutions.specialized.title': 'Soluzioni Specializzate',
                'solutions.specialized.subtitle': 'Applicazioni verticali per settori specifici del mondo pubblico',
                
                'solutions.tech.title': 'Technology Stack',
                'solutions.tech.subtitle': 'Infrastruttura tecnologica all\'avanguardia per massime performance e sicurezza',
                
                'solutions.process.title': 'Processo di Implementazione',
                'solutions.process.subtitle': 'Metodologia strutturata per garantire successo del progetto',
                
                // About page
                'about.hero.title': 'Chi Siamo',
                'about.hero.subtitle': 'Leaders europei nell\'Augmented Data Analytics per istituzioni governative e federali, con oltre 15 anni di esperienza nel settore pubblico',
                
                'about.mission.title': 'La Nostra Missione',
                'about.mission.content': 'Democratizzare l\'accesso a insights avanzati di data analytics per le istituzioni pubbliche, permettendo decisioni più informate, processi più efficienti e servizi migliori per i cittadini.',
                
                'about.timeline.title': 'La Nostra Storia',
                'about.timeline.subtitle': '15 anni di innovazione continua nel settore pubblico',
                
                'about.team.title': 'Il Nostro Team',
                'about.team.subtitle': 'Esperti multidisciplinari con esperienza consolidata nel settore pubblico e privato',
                
                'about.certifications.title': 'Certificazioni e Partnership',
                'about.certifications.subtitle': 'Standard internazionali e partnership strategiche per garantire eccellenza',
                
                'about.stats.title': 'Molayem Strategic in Numeri',
                
                // Clients page
                'clients.hero.title': 'I Nostri Clienti',
                'clients.hero.subtitle': 'Istituzioni governative e federali di tutta Europa si affidano a Molayem Strategic per trasformare i loro dati in valore strategico',
                
                'clients.sectors.title': 'Settori di Competenza',
                'clients.sectors.subtitle': 'Esperienza consolidata in diversi ambiti del settore pubblico e delle istituzioni governative',
                
                'clients.success.title': 'Case Studies di Successo',
                'clients.success.subtitle': 'Progetti che hanno generato risultati misurabili e valore concreto per le istituzioni pubbliche',
                
                'clients.testimonials.title': 'Cosa Dicono di Noi',
                
                'clients.partnership.title': 'Modello di Partnership',
                'clients.partnership.subtitle': 'Collaborazioni strutturate per garantire successo e valore a lungo termine',
                
                'clients.why.title': 'Perché il Settore Pubblico Sceglie Molayem',
                
                'clients.cta.title': 'Diventa il Nostro Prossimo Success Story',
                'clients.cta.subtitle': 'Unisciti alle istituzioni che hanno già trasformato i loro dati in vantaggio competitivo con le soluzioni Molayem Strategic',
                
                // Contact page
                'contact.hero.title': 'Contattaci',
                'contact.hero.subtitle': 'Pronti a trasformare i tuoi dati in vantaggio strategico? Parliamo del tuo progetto con i nostri esperti di data analytics',
                
                'contact.info.title': 'Inizia la Conversazione',
                'contact.phone.title': 'Chiamaci',
                'contact.email.title': 'Email',
                'contact.office.title': 'Sede Centrale',
                'contact.europe.title': 'Uffici Europei',
                
                'contact.form.title': 'Richiedi Informazioni',
                'contact.form.subtitle': 'Compila il form per una consulenza gratuita',
                'contact.form.organization': 'Istituzione/Ente',
                'contact.form.firstName': 'Nome',
                'contact.form.lastName': 'Cognome',
                'contact.form.role': 'Ruolo/Posizione',
                'contact.form.email': 'Email',
                'contact.form.phone': 'Telefono',
                'contact.form.sector': 'Settore di Interesse',
                'contact.form.interest': 'Area di Interesse',
                'contact.form.budget': 'Budget Indicativo',
                'contact.form.timeline': 'Timeline Progetto',
                'contact.form.message': 'Descrizione del Progetto',
                'contact.form.privacy': 'Accetto il trattamento dei dati personali secondo la Privacy Policy GDPR',
                'contact.form.newsletter': 'Voglio ricevere aggiornamenti su soluzioni e case studies',
                'contact.form.submit': 'Invia Richiesta',
                'contact.form.response': 'Ti risponderemo entro 24 ore con una proposta personalizzata',
                
                'contact.offices.title': 'Le Nostre Sedi',
                'contact.offices.subtitle': 'Presenza capillare in Europa per supporto locale e partnership strategiche',
                
                'contact.meeting.title': 'Opzioni di Incontro',
                'contact.support.title': 'Supporto e SLA',
                'contact.support.subtitle': 'Garanzie di servizio e supporto dedicato per le istituzioni pubbliche',
                
                'contact.final.title': 'Iniziamo Insieme il Tuo Progetto',
                'contact.final.subtitle': 'Il primo passo verso la trasformazione digitale della tua istituzione inizia con una semplice conversazione',
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.solutions': 'Solutions',
                'nav.about': 'About',
                'nav.clients': 'Clients',
                'nav.contact': 'Contact',
                
                // Footer
                'footer.tagline': 'Augmented Data Analytics for the Public Sector',
                'footer.rights': 'All rights reserved.',
                'footer.disclaimer': 'Specialists in Data Analytics for Government and Federal Institutions',
                
                // Home page
                'home.hero.title': 'Augmented Data Analytics for the Public Sector',
                'home.hero.subtitle': 'We transform government institutions\' data into strategic intelligence through advanced AI and machine learning, ensuring security, compliance and measurable results.',
                'home.hero.cta.demo': 'Request Demo',
                'home.hero.cta.case': 'View Case Studies',
                
                'home.overview.title': 'Why Molayem Strategic',
                'home.overview.subtitle': 'The first choice for government and federal institutions looking to modernize decision-making processes',
                
                'home.approach.title': 'Our Approach',
                'home.approach.subtitle': 'Proven methodology to guarantee success and measurable ROI',
                
                'home.stats.projects': 'Government Projects',
                'home.stats.data': 'Billions of Records Processed',
                'home.stats.roi': 'Average ROI',
                'home.stats.compliance': 'Compliance Rate',
                
                // Solutions page
                'solutions.hero.title': 'Solutions for the Public Sector',
                'solutions.hero.subtitle': 'Data Analytics platforms designed specifically for the unique needs of government institutions and public entities',
                
                'solutions.core.title': 'Core Solutions',
                'solutions.core.subtitle': 'Our main platforms to transform data into strategic value',
                
                'solutions.specialized.title': 'Specialized Solutions',
                'solutions.specialized.subtitle': 'Vertical applications for specific sectors of the public world',
                
                'solutions.tech.title': 'Technology Stack',
                'solutions.tech.subtitle': 'State-of-the-art technological infrastructure for maximum performance and security',
                
                'solutions.process.title': 'Implementation Process',
                'solutions.process.subtitle': 'Structured methodology to ensure project success',
                
                // About page
                'about.hero.title': 'About Us',
                'about.hero.subtitle': 'European leaders in Augmented Data Analytics for government and federal institutions, with over 15 years of experience in the public sector',
                
                'about.mission.title': 'Our Mission',
                'about.mission.content': 'Democratize access to advanced data analytics insights for public institutions, enabling more informed decisions, more efficient processes and better services for citizens.',
                
                'about.timeline.title': 'Our Story',
                'about.timeline.subtitle': '15 years of continuous innovation in the public sector',
                
                'about.team.title': 'Our Team',
                'about.team.subtitle': 'Multidisciplinary experts with consolidated experience in the public and private sectors',
                
                'about.certifications.title': 'Certifications and Partnerships',
                'about.certifications.subtitle': 'International standards and strategic partnerships to guarantee excellence',
                
                'about.stats.title': 'Molayem Strategic in Numbers',
                
                // Clients page
                'clients.hero.title': 'Our Clients',
                'clients.hero.subtitle': 'Government and federal institutions across Europe rely on Molayem Strategic to transform their data into strategic value',
                
                'clients.sectors.title': 'Areas of Expertise',
                'clients.sectors.subtitle': 'Consolidated experience in various areas of the public sector and government institutions',
                
                'clients.success.title': 'Success Case Studies',
                'clients.success.subtitle': 'Projects that have generated measurable results and concrete value for public institutions',
                
                'clients.testimonials.title': 'What They Say About Us',
                
                'clients.partnership.title': 'Partnership Model',
                'clients.partnership.subtitle': 'Structured collaborations to ensure long-term success and value',
                
                'clients.why.title': 'Why the Public Sector Chooses Molayem',
                
                'clients.cta.title': 'Become Our Next Success Story',
                'clients.cta.subtitle': 'Join institutions that have already transformed their data into competitive advantage with Molayem Strategic solutions',
                
                // Contact page
                'contact.hero.title': 'Contact Us',
                'contact.hero.subtitle': 'Ready to transform your data into strategic advantage? Let\'s talk about your project with our data analytics experts',
                
                'contact.info.title': 'Start the Conversation',
                'contact.phone.title': 'Call Us',
                'contact.email.title': 'Email',
                'contact.office.title': 'Headquarters',
                'contact.europe.title': 'European Offices',
                
                'contact.form.title': 'Request Information',
                'contact.form.subtitle': 'Fill out the form for a free consultation',
                'contact.form.organization': 'Institution/Entity',
                'contact.form.firstName': 'First Name',
                'contact.form.lastName': 'Last Name',
                'contact.form.role': 'Role/Position',
                'contact.form.email': 'Email',
                'contact.form.phone': 'Phone',
                'contact.form.sector': 'Sector of Interest',
                'contact.form.interest': 'Area of Interest',
                'contact.form.budget': 'Indicative Budget',
                'contact.form.timeline': 'Project Timeline',
                'contact.form.message': 'Project Description',
                'contact.form.privacy': 'I accept the processing of personal data according to GDPR Privacy Policy',
                'contact.form.newsletter': 'I want to receive updates on solutions and case studies',
                'contact.form.submit': 'Send Request',
                'contact.form.response': 'We will respond within 24 hours with a personalized proposal',
                
                'contact.offices.title': 'Our Offices',
                'contact.offices.subtitle': 'Extensive presence in Europe for local support and strategic partnerships',
                
                'contact.meeting.title': 'Meeting Options',
                'contact.support.title': 'Support and SLA',
                'contact.support.subtitle': 'Service guarantees and dedicated support for public institutions',
                
                'contact.final.title': 'Let\'s Start Your Project Together',
                'contact.final.subtitle': 'The first step towards your institution\'s digital transformation starts with a simple conversation',
            }
        };
    }
    
    setupEventListeners() {
        // Language switcher
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    setupMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navbar = document.querySelector('.navbar');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
                document.body.classList.toggle('mobile-menu-open');
            });
            
            // Close mobile menu when clicking on links
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.classList.remove('mobile-menu-open');
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbar.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.classList.remove('mobile-menu-open');
                }
            });
        }
        
        // Header scroll effect
        let lastScrollTop = 0;
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            
            if (scrollTop > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Trigger counter animations
                    if (entry.target.classList.contains('stat-item')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.service-card, .stat-item, .team-member, .timeline-item').forEach(el => {
            observer.observe(el);
        });
    }
    
    setupCounterAnimations() {
        this.countersAnimated = new Set();
    }
    
    animateCounter(element) {
        const numberElement = element.querySelector('.stat-number');
        if (!numberElement || this.countersAnimated.has(element)) return;
        
        this.countersAnimated.add(element);
        const finalValue = numberElement.textContent;
        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 50;
            const suffix = finalValue.replace(/[\d]/g, '');
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    numberElement.textContent = finalValue;
                    clearInterval(timer);
                } else {
                    numberElement.textContent = Math.floor(currentValue) + suffix;
                }
            }, 30);
        }
    }
    
    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
            
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove previous error styling
        this.clearFieldError(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Questo campo è obbligatorio';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Inserisci un indirizzo email valido';
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Inserisci un numero di telefono valido';
            }
        }
        
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    showFieldError(field, message) {
        field.classList.add('error');
        
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }
    
    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        let isValid = true;
        
        // Validate all required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        // Special validation for contact form
        if (form.id === 'contactForm') {
            const interests = formData.getAll('interest');
            if (interests.length === 0) {
                alert(this.currentLang === 'it' ? 
                    'Seleziona almeno un\'area di interesse' : 
                    'Select at least one area of interest');
                isValid = false;
            }
            
            if (!formData.get('privacy')) {
                alert(this.currentLang === 'it' ? 
                    'Devi accettare la Privacy Policy per continuare' : 
                    'You must accept the Privacy Policy to continue');
                isValid = false;
            }
        }
        
        if (isValid) {
            this.submitForm(form, formData);
        }
    }
    
    submitForm(form, formData) {
        const submitButton = form.querySelector('[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = this.currentLang === 'it' ? 
            'Invio in corso... ⏳' : 'Sending... ⏳';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success message
            const message = this.currentLang === 'it' ? 
                'Richiesta inviata con successo! Ti contatteremo entro 24 ore.' :
                'Request sent successfully! We will contact you within 24 hours.';
            
            alert(message);
            
            // Reset form
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Clear any errors
            form.querySelectorAll('.error').forEach(field => {
                this.clearFieldError(field);
            });
            
        }, 2000);
    }
    
    switchLanguage(lang) {
        if (lang === this.currentLang) return;
        
        this.currentLang = lang;
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[lang][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'submit' || element.type === 'button') {
                        element.value = translation;
                    } else {
                        element.placeholder = translation;
                    }
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Save language preference
        localStorage.setItem('molayem_language', lang);
    }
    
    // Load saved language preference
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('molayem_language');
        if (savedLang && this.translations[savedLang]) {
            this.switchLanguage(savedLang);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new MolayemComplete();
    app.loadSavedLanguage();
    
    // Global functions
    window.scrollToForm = function() {
        const form = document.querySelector('.contact-form-container');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Add loading states for interactive elements
    document.querySelectorAll('button').forEach(btn => {
        if (!btn.type === 'submit') {
            btn.addEventListener('click', function() {
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            });
        }
    });
    
    // Enhanced scroll effects
    window.addEventListener('scroll', () => {
        const scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        document.documentElement.style.setProperty('--scroll-progress', scrollProgress);
    });
    
    // Performance optimization: lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
