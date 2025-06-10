document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks.querySelectorAll('a');

  // Toggle menu for mobile
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Handle active link styling
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Optional: close menu on click (for small screens)
      if (window.innerWidth <= 1024) {
        navLinks.classList.remove('show');
      }
    });
  });
});




 const data = [
    {
      title: "SHAKER KITCHEN DOORS: TOP STYLES AND COLOURS TO CONSIDER",
      image: "./assets/k1.jpg"
    },
    {
      title: "SHAKER KITCHEN DESIGN: INSPIRING IDEAS FOR YOUR NEXT RENOVATION",
      image: "./assets/k2.jpg"
    },
    {
      title: "CREAM SHAKER KITCHEN STYLES: TRANSFORM YOUR COOKING SPACE",
      image: "./assets/k5.jpg"
    },
    {
      title: "SHAKER KITCHEN IDEAS: MODERN DESIGNS AND DECOR INSPIRATION",
      image: "./assets/k6.jpg"
    }
  ];

  function changeFeature(index) {
    const bg = document.querySelector(".feature-section");
    const title = document.getElementById("feature-title");
    const links = document.querySelectorAll(".feature-links li");

    if (index < 0 || index >= data.length) return;

    // Change background image for whole section
    bg.style.backgroundImage = `url('${data[index].image}')`;

    // Change title text
    title.textContent = data[index].title;

    // Update active link style
    links.forEach(link => link.classList.remove("active"));
    if (links[index]) {
      links[index].classList.add("active");
    }
  }

  // Initialize default feature on page load
  window.addEventListener("DOMContentLoaded", () => {
    changeFeature(0);
  });



  document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});
