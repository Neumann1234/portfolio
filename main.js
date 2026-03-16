// Burger menu
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
if (burger) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  a.classList.remove('active');
  if (a.getAttribute('href') === path) a.classList.add('active');
});

// Animate comp bars on scroll
const bars = document.querySelectorAll('.comp-bar');
if (bars.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width;
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => {
    const w = bar.style.width;
    bar.dataset.width = w;
    bar.style.width = '0';
    observer.observe(bar);
  });
}

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.project-card, .skill-card, .phase-card, .epreuve-card, .timeline-item');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, i * 80);
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
