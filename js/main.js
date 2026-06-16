/**
 * Saihasoft Interactive Script Engine
 * Handles Custom Cursors, Nav draw control, tabs, numbers counter, and form validations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursors();
  initSideNavigation();
  initStickyHeader();
  initServicesTabs();
  initMilestonesCounters();
  initTiltCards();
  initContactForm();
  initYearUpdater();
});

/**
 * 1. Custom Cursors
 */
function initCustomCursors() {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  
  if (!cursor || !follower) return;

  let posX = 0, posY = 0;
  let mouseX = 0, mouseY = 0;

  // Track mouse coordinates
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Core dot cursor aligns exactly with mouse
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  // Follower lags slightly for smooth inertia
  function animateFollower() {
    posX += (mouseX - posX) / 6;
    posY += (mouseY - posY) / 6;
    
    follower.style.left = `${posX}px`;
    follower.style.top = `${posY}px`;
    
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover states
  const hoverableElements = document.querySelectorAll('a, button, .tab-btn, .project-slide-card, .client-logo-item, .tv-knob');
  
  hoverableElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      follower.style.transform = 'translate(-50%, -50%) scale(1.3)';
      follower.style.borderColor = 'var(--primary)';
      follower.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.borderColor = 'var(--accent-cyan)';
      follower.style.backgroundColor = 'transparent';
    });
  });

  // Unique hover for blog posts
  const blogCards = document.querySelectorAll('.blog-card');
  blogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      follower.style.width = '80px';
      follower.style.height = '80px';
      follower.style.borderColor = 'var(--secondary)';
      follower.style.backgroundColor = 'rgba(249, 115, 22, 0.15)';
      follower.querySelector('span').textContent = 'READ BLOG';
      follower.querySelector('span').style.display = 'block';
    });
    
    card.addEventListener('mouseleave', () => {
      follower.style.width = '40px';
      follower.style.height = '40px';
      follower.style.borderColor = 'var(--accent-cyan)';
      follower.style.backgroundColor = 'transparent';
      follower.querySelector('span').style.display = 'none';
    });
  });

  // Unique hover for projects
  const projectCards = document.querySelectorAll('.project-slide-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      follower.style.width = '90px';
      follower.style.height = '90px';
      follower.style.borderColor = 'var(--primary)';
      follower.style.backgroundColor = 'rgba(168, 85, 247, 0.15)';
      follower.querySelector('span').textContent = 'VIEW PROJECT';
      follower.querySelector('span').style.display = 'block';
    });
    
    card.addEventListener('mouseleave', () => {
      follower.style.width = '40px';
      follower.style.height = '40px';
      follower.style.borderColor = 'var(--accent-cyan)';
      follower.style.backgroundColor = 'transparent';
      follower.querySelector('span').style.display = 'none';
    });
  });
}

/**
 * 2. Sticky Header Scrolled State
 */
function initStickyHeader() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * 3. Side drawer navigation & Sub-menu toggles
 */
function initSideNavigation() {
  const menuBtn = document.querySelector('.menu-toggle');
  const sideNav = document.querySelector('.side-nav');
  const submenuHeader = document.querySelector('.submenu-header');
  const submenuArrow = document.querySelector('.submenu-arrow');
  const submenuList = document.querySelector('.submenu-list');

  if (menuBtn && sideNav) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      sideNav.classList.toggle('open');
    });

    // Close side drawer when clicking menu links (excluding submenu links)
    const navLinks = document.querySelectorAll('.side-nav-menu > li > a:not(.submenu-trigger)');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        sideNav.classList.remove('open');
      });
    });
  }

  // Accordion submenu toggle
  if (submenuHeader && submenuList) {
    submenuHeader.addEventListener('click', (e) => {
      e.preventDefault();
      submenuList.classList.toggle('open');
      submenuArrow.classList.toggle('rotate');
    });
  }
}

/**
 * 4. Interactive Tabs selector (What we do section)
 */
function initServicesTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      // Update buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panels
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.getAttribute('id') === tabId) {
          panel.classList.add('active');
        }
      });
    });
  });
}

/**
 * 5. Milestones numbers increments animation on viewport entry
 */
function initMilestonesCounters() {
  const milestoneSection = document.querySelector('.milestones-section');
  if (!milestoneSection) return;

  const milestoneBoxes = document.querySelectorAll('.milestone-box');
  let animated = false;

  const animateCounters = () => {
    milestoneBoxes.forEach(box => {
      const counterElement = box.querySelector('.counter-val');
      const targetVal = parseInt(counterElement.getAttribute('data-target'), 10);
      let currentVal = 0;
      const duration = 2000; // 2 seconds
      const stepTime = Math.max(Math.floor(duration / targetVal), 15);
      
      const interval = setInterval(() => {
        currentVal += 1;
        counterElement.textContent = currentVal;
        
        if (currentVal >= targetVal) {
          counterElement.textContent = targetVal + '+';
          clearInterval(interval);
        }
      }, stepTime);
    });
  };

  const checkViewport = () => {
    const rect = milestoneSection.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    
    if (isVisible && !animated) {
      animateCounters();
      animated = true;
      window.removeEventListener('scroll', checkViewport);
    }
  };

  window.addEventListener('scroll', checkViewport);
  checkViewport(); // Initial check
}

/**
 * 6. Testimonial cards mouse movement tilt emulation
 */
function initTiltCards() {
  const cards = document.querySelectorAll('.testimonial-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position inside element
      const y = e.clientY - rect.top;  // y position inside element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((centerY - y) / centerY) * 10; // max 10deg tilt
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/**
 * 7. Contact Form Neon validations & simulated loaders
 */
function initContactForm() {
  const form = document.getElementById('myForm');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.btn-modal-close');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple verification simulation
    const name = document.getElementById('name').value;
    const phone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !phone || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Submit button loading animation
    const submitBtn = form.querySelector('.btn-send');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate Server Request (2 seconds)
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Clear form
      form.reset();
      
      // Trigger SweetAlert popup mockup
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }, 1800);
  });

  // Modal dismiss click
  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

/**
 * 8. Automatic Footer Copyright Year updater
 */
function initYearUpdater() {
  const yearSpan = document.querySelector('.current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
