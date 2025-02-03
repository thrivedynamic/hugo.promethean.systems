document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  document.querySelector('#dark-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', 
      document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  // Lazy loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
  });
});
