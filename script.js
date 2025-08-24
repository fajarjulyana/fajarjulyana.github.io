// Global variables
let currentLanguage = 'id';
let isLanguageDropdownOpen = false;

// Data structures
const experienceData = [
  {
    id: 'fajarmandiri',
    titleKey: 'fajarmandiriOwner',
    descKey: 'fajarmandiriDesc',
    period: '2020 - present',
    skills: ['entrepreneurship', 'businessManagement', 'customerService']
  },
  {
    id: 'qware',
    titleKey: 'qwareFounder',
    descKey: 'qwareDesc',
    period: '2021 - present',
    skills: ['softwareDevelopment', 'umkmSolutions', 'productManagement']
  },
  {
    id: 'ptkuassa',
    titleKey: 'ptKuassaApplication',
    descKey: 'ptKuassaDesc',
    period: '2021',
    skills: ['audioProgramming', 'juceFramework', 'professionalGrowth']
  },
  {
    id: 'arvin',
    titleKey: 'arvinStudio',
    descKey: 'arvinStudioDesc',
    period: '2019 - 2020',
    skills: ['multimediaProduction', 'creativeProjects', 'technicalSkills']
  },
  {
    id: 'hurtrock',
    titleKey: 'hurtrockMusic',
    descKey: 'hurtrockDesc',
    period: '2018 - 2019',
    skills: ['operations', 'musicIndustry', 'organization']
  }
];

const skillsData = [
  {
    titleKey: 'programming',
    icon: 'fas fa-code',
    colorClass: 'programming',
    skills: [
      { nameKey: 'webDevelopment', level: 85 },
      { nameKey: 'audioProgramming', level: 70 }
    ]
  },
  {
    titleKey: 'businessSkills',
    icon: 'fas fa-briefcase',
    colorClass: 'business',
    skills: [
      { nameKey: 'entrepreneurship', level: 95 },
      { nameKey: 'umkmSolutions', level: 90 },
      { nameKey: 'projectManagement', level: 80 }
    ]
  },
  {
    titleKey: 'creative',
    icon: 'fas fa-palette',
    colorClass: 'creative',
    skills: [
      { nameKey: 'customerRelations', level: 85 },
      { nameKey: 'problemSolving', level: 90 },
      { nameKey: 'innovation', level: 80 }
    ]
  }
];

const projectsData = [
  {
    id: 'pos-cpp-sqlite-cups',
    titleKey: 'posSystemCpp',
    descKey: 'posSystemCppDesc',
    tech: ['cpp', 'sqlite', 'cups'],
    categories: ['pos', 'desktop', 'database', 'printing'],
    githubUrl: 'https://github.com/fajarjulyana/pos-cpp-sqlite-cups',
    demoUrl: null
  },
  {
    id: 'guitar-tuner-juce',
    titleKey: 'guitarTunerJuce',
    descKey: 'guitarTunerJuceDesc',
    tech: ['cpp', 'juce', 'fft'],
    categories: ['audio', 'desktop', 'microphone'],
    githubUrl: 'https://github.com/fajarjulyana/Guitar-Tuner-Generic-JUCE',
    demoUrl: null
  },
  {
    id: 'business-management',
    titleKey: 'businessManagementSystem',
    descKey: 'businessManagementSystemDesc',
    tech: ['python', 'flask', 'sqlite'],
    categories: ['business', 'web', 'database'],
    githubUrl: 'https://github.com/fajarjulyana/business-management-system',
    demoUrl: null
  },
  {
    id: 'jago-nabung',
    titleKey: 'jagoNabung',
    descKey: 'jagoNabungDesc',
    tech: ['python', 'flask', 'sqlite'],
    categories: ['business', 'web', 'database'],
    githubUrl: 'https://github.com/fajarjulyana/JagoNabung',
    demoUrl: null
  },
  {
    id: 'catatan-hutang',
    titleKey: 'catatanHutang',
    descKey: 'catatanHutangDesc',
    tech: ['python', 'flask', 'sqlite'],
    categories: ['business', 'web', 'database'],
    githubUrl: 'https://github.com/fajarjulyana/catatan-hutang',
    demoUrl: null
  },
  {
    id: 'kasir-app',
    titleKey: 'kasirApp',
    descKey: 'kasirAppDesc',
    tech: ['python', 'flask', 'html', 'css'],
    categories: ['pos', 'web', 'business'],
    githubUrl: 'https://github.com/fajarjulyana/KasirApp',
    demoUrl: null
  },
  {
    id: 'qware-synthesizer',
    titleKey: 'qwareSynthesizer',
    descKey: 'qwareSynthesizerDesc',
    tech: ['cpp', 'juce'],
    categories: ['audio', 'synthesizer', 'desktop'],
    githubUrl: 'https://github.com/fajarjulyana/QWare-Synthesizer',
    demoUrl: null
  },
  {
    id: 'circular-nav',
    titleKey: 'circularNav',
    descKey: 'circularNavDesc',
    tech: ['html', 'css'],
    categories: ['web', 'navigation'],
    githubUrl: 'https://github.com/fajarjulyana/circular-navigation-menu',
    demoUrl: 'https://fajarjulyana.github.io/circular-navigation-menu/'
  },
  {
    id: 'audio-player',
    titleKey: 'audioPlayer',
    descKey: 'audioPlayerDesc',
    tech: ['html', 'css', 'javascript'],
    categories: ['audio', 'web', 'playlist'],
    githubUrl: 'https://github.com/fajarjulyana/simple-audio-player',
    demoUrl: 'https://fajarjulyana.github.io/simple-audio-player/'
  },
  {
    id: 'fajarmandiri-store',
    titleKey: 'fajarmandiriStore',
    descKey: 'fajarmandiriStoreDesc',
    tech: ['html', 'css', 'javascript'],
    categories: ['business', 'web'],
    githubUrl: 'https://github.com/fajarjulyana/fajarmandiri.store',
    demoUrl: 'https://fajarmandiri.store'
  }
];

// Utility functions
function getCurrentTranslation() {
  return window.translations[currentLanguage];
}

function translate(key) {
  const t = getCurrentTranslation();
  return t[key] || key;
}

function updatePageLanguage() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translatedText = translate(key);
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translatedText;
    } else {
      element.textContent = translatedText;
    }
  });
  
  // Update document language and direction
  document.documentElement.lang = currentLanguage;
  if (currentLanguage === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
  
  // Update current language display
  const currentLangElement = document.getElementById('current-language');
  if (currentLangElement) {
    currentLangElement.textContent = currentLanguage.toUpperCase();
  }
  
  // Re-render dynamic content
  renderExperience();
  renderSkills();
  renderProjects();
}

// Language switching
function initLanguageSwitcher() {
  const languageBtn = document.getElementById('language-btn');
  const languageDropdown = document.getElementById('language-dropdown');
  const languageOptions = document.querySelectorAll('.language-option');
  
  if (languageBtn && languageDropdown) {
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isLanguageDropdownOpen = !isLanguageDropdownOpen;
      languageDropdown.classList.toggle('active', isLanguageDropdownOpen);
    });
  }
  
  languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      const newLang = e.target.getAttribute('data-lang');
      if (newLang && newLang !== currentLanguage) {
        currentLanguage = newLang;
        localStorage.setItem('preferred-language', currentLanguage);
        updatePageLanguage();
      }
      isLanguageDropdownOpen = false;
      languageDropdown.classList.remove('active');
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    if (isLanguageDropdownOpen) {
      isLanguageDropdownOpen = false;
      languageDropdown.classList.remove('active');
    }
  });
  
  // Load saved language preference
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && window.translations[savedLang]) {
    currentLanguage = savedLang;
  }
}

// Navigation handling
function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerOffset = 70;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if open
      if (navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
  
  // Update active navigation link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  const scrollPosition = window.pageYOffset + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Render functions
function renderExperience() {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;
  
  const t = getCurrentTranslation();
  
  timeline.innerHTML = experienceData.map(exp => `
    <div class="timeline-item fade-in">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-title">${t[exp.titleKey] || exp.titleKey}</h3>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-description">${t[exp.descKey] || exp.descKey}</p>
        <div class="timeline-skills">
          ${exp.skills.map(skill => `
            <span class="timeline-skill">${t[skill] || skill}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) return;
  
  const t = getCurrentTranslation();
  
  skillsGrid.innerHTML = skillsData.map(category => `
    <div class="skill-category fade-in">
      <div class="skill-header">
        <div class="skill-icon ${category.colorClass}">
          <i class="${category.icon}"></i>
        </div>
        <h3 class="skill-title">${t[category.titleKey] || category.titleKey}</h3>
      </div>
      <ul class="skill-list">
        ${category.skills.map(skill => `
          <li class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${t[skill.nameKey] || skill.nameKey}</span>
              <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 0%" data-level="${skill.level}"></div>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
  
  // Animate skill bars when they come into view
  setTimeout(() => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = `${level}%`;
    });
  }, 500);
}

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  const t = getCurrentTranslation();
  
  projectsGrid.innerHTML = projectsData.map(project => `
    <div class="project-card fade-in">
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${t[project.titleKey] || project.titleKey}</h3>
        </div>
        <p class="project-description">${t[project.descKey] || project.descKey}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `
            <span class="tech-tag">${t[tech] || tech}</span>
          `).join('')}
        </div>
        <div class="project-actions">
          <a href="${project.githubUrl}" class="project-link primary" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            ${t.viewOnGithub || 'View on GitHub'}
          </a>
          ${project.demoUrl ? `
            <a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-external-link-alt"></i>
              ${t.liveDemo || 'Live Demo'}
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  animatedElements.forEach(el => observer.observe(el));
}

// Navbar scroll effect
function initNavbarScrollEffect() {
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initNavigation();
  initNavbarScrollEffect();
  
  // Initial render
  updatePageLanguage();
  
  // Initialize scroll animations after a short delay
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
  
  // Add loading class removal
  document.body.classList.remove('loading');
  
  // Performance optimization: Lazy load non-critical animations
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Additional non-critical initializations can go here
    });
  }
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // Re-initialize animations when page becomes visible
    const elements = document.querySelectorAll('.fade-in:not(.visible)');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }
});

// Error handling for missing elements
window.addEventListener('error', (e) => {
  console.warn('Portfolio script error:', e.message);
});

// Expose some functions globally for debugging
window.portfolioDebug = {
  changeLanguage: (lang) => {
    if (window.translations[lang]) {
      currentLanguage = lang;
      updatePageLanguage();
    }
  },
  getCurrentLanguage: () => currentLanguage,
  getTranslations: () => window.translations,
  rerenderAll: () => {
    renderExperience();
    renderSkills();
    renderProjects();
  }
};