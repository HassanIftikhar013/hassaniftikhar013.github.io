const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
const links = Array.from(document.querySelectorAll('.nav-links a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const yearEl = document.getElementById('year');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

if (sections.length && links.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const currentId = entry.target.getAttribute('id');
        links.forEach((link) => {
          const active = link.getAttribute('href') === `#${currentId}`;
          link.classList.toggle('active', active);
        });
      });
    },
    {
      threshold: 0.35,
      rootMargin: '-10% 0px -30% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}
