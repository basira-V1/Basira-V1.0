// ============================================================================
// تطبيق بَصيرة - Basira JavaScript
// جميع الحقوق محفوظة © FS0CIETY CORP 2026
// ============================================================================

// ============================================================================
// 1. Configure the application when loading the page
// ============================================================================
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initHeaderEffects();
    initActiveMenu();
    initParallaxEffects();
    initNeuralEffects();
    initParticleSystem();
    initIntersectionObserver();
});

// ============================================================================
// 2. (Mobile Menu)
// ============================================================================
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!mobileMenuToggle || !mobileNav) return;


    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });


    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });


    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
}

// ============================================================================
// 3.(Smooth Scrolling)
// ============================================================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            

            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================================================
// 4. (Header Effects)
// ============================================================================
function initHeaderEffects() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrolled = window.pageYOffset;
        
        if (scrolled > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============================================================================
// 5. Highlight the active item in the list
// ============================================================================
function initActiveMenu() {
    function updateActiveMenuItem() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
        
        let currentSection = '';
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
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

    window.addEventListener('scroll', updateActiveMenuItem);
    window.addEventListener('load', updateActiveMenuItem);
}

// ============================================================================
// 6. (Parallax Effects)
// ============================================================================
function initParallaxEffects() {
    window.addEventListener('scroll', () => {
        const shapes = document.querySelectorAll('.shape');
        const scrolled = window.pageYOffset;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.3;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// ============================================================================
// 7. (Neural Effects)
// ============================================================================
function initNeuralEffects() {
    const neuralLines = document.querySelectorAll('.neural-line');
    
    if (neuralLines.length === 0) return;
    
    setInterval(() => {
        neuralLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'scaleX(1.2)';
                setTimeout(() => {
                    line.style.opacity = '0.2';
                    line.style.transform = 'scaleX(0.5)';
                }, 200);
            }, index * 300);
        });
    }, 2000);
}

// ============================================================================
// 8. (Particle System)
// ============================================================================
function initParticleSystem() {

    function createQuantumParticle() {
        const particle = document.createElement('div');
        

        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;

        const colors = ['#00ff55ff', '#00ff80ff', '#fffb00ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100vh';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.boxShadow = `0 0 10px ${randomColor}`;
        

        document.body.appendChild(particle);
        

        const duration = Math.random() * 3000 + 2000;
        const drift = (Math.random() - 0.5) * 200;
        
        const animation = particle.animate([
            { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
            { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
        ], {
            duration: duration,
            easing: 'ease-out'
        });
        

        animation.onfinish = () => particle.remove();
    }
    

    setInterval(createQuantumParticle, 1500);
}

// ============================================================================
// 9. (Intersection Observer)
// ============================================================================
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);


    document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// ============================================================================
// 10. (Form Submission)
// ============================================================================
function initFormEffects() {
    const submitBtn = document.querySelector('.submit-btn');
    
    if (!submitBtn) return;
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        

        this.innerHTML = 'TRANSMITTING...';
        this.style.background = 'linear-gradient(45deg, #00ffd5ff, #ffe600ff)';

        setTimeout(() => {
            this.innerHTML = 'TRANSMISSION COMPLETE';
            this.style.background = 'linear-gradient(45deg, #fffb00ff, rgba(0, 255, 149, 1))';
            

            setTimeout(() => {
                this.innerHTML = 'TRANSMIT TO MATRIX';
                this.style.background = 'linear-gradient(45deg, #3cff00ff, #00ffd5ff)';
            }, 2000);
        }, 1500);
    });
}

// ============================================================================
// 11. (Helper Functions)
// ============================================================================


function checkAnimationSupport() {
    return 'animate' in document.documentElement;
}

if (checkAnimationSupport()) {
    console.log('المتصفح يدعم Web Animations API');
}

// ============================================================================
// 12. تهيئة إضافية للتحميل
// ============================================================================
window.addEventListener('load', function() {

    console.log('تطبيق بَصيرة تم تحميله بنجاح!');
 
    initFormEffects();
});