// =================================
// NAVBAR GSAP ANIMATIONS
// =================================

document.addEventListener('DOMContentLoaded', () => {
  // GSAP Entrance Animation for Header
  if (typeof gsap !== 'undefined') {
    gsap.from('.navbar', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.logo', {
      x: -20,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power2.out'
    });

    gsap.from('.nav-item', {
      y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.4,
      ease: 'power2.out'
    });

    gsap.from('.header-actions', {
      x: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out'
    });
  }
});


// =================================
// HERO BANNER GSAP ANIMATIONS
// =================================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-section', {
      opacity: 0,
      scale: 0.98,
      duration: 1.2,
      delay: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.slide-btn', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: 'power3.out'
    });
  }
});


// =================================
// SECTION 03 — SERVICES GSAP ANIMATIONS
// =================================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    gsap.from('.section-header', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 75%'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }
});


// =================================
// SECTION 04 — PORTFOLIO GSAP ANIMATIONS
// =================================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    gsap.from('.portfolio-card', {
      scrollTrigger: {
        trigger: '.portfolio-section',
        start: 'top 75%'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }
});


// =================================
// GSAP & SCROLLTRIGGER ANIMATIONS
// =================================
document.addEventListener('DOMContentLoaded', () => {
  // Check if GSAP is loaded
  if (typeof gsap !== 'undefined') {
    
    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // SECTION 07 — Reviews Fade-In Animation Fix
    const reviewCards = document.querySelectorAll('.review-card');
    if (reviewCards.length > 0) {
      if (typeof ScrollTrigger !== 'undefined') {
        gsap.from(reviewCards, {
          scrollTrigger: {
            trigger: '.reviews-section',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          clearProps: 'all' // Animation khatam hone ke baad opacity issues ko reset kar dega
        });
      } else {
        // Fallback agar ScrollTrigger load na hua ho
        gsap.from(reviewCards, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          clearProps: 'all'
        });
      }
    }

  }
});

