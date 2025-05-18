document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
  
    // Mobile menu toggle
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li");
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("toggle");
    });
  
    // Close mobile menu when clicking a link
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        burger.classList.remove("toggle");
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Scroll spy to highlight active section in nav
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-links li a");
  
    function highlightNav() {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
  
      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", highlightNav);
  
    // Parallax effect
    const parallaxBg = document.querySelector(".parallax-bg");
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
  
    // Animate elements when they come into view
    const animateOnScroll = function () {
      const elements = document.querySelectorAll(".fade-in");
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
  
        if (elementPosition < screenPosition) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    };
  
    // Initialize animation state
    document.querySelectorAll(".fade-in").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
  
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once on load
  
    // Form submission
    const contactForm = document.querySelector(".contact-form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {});
    }
  
    // Typewriter effect for hero section
    const typewriter = function () {
      const titleElement = document.querySelector(".title");
      if (!titleElement) return;
  
      const titles = [
        "I build things for the web & cloud.",
        "I develop robust backend systems.",
        "I design scalable architectures.",
        "I engineer data solutions.",
        "I explore machine learning.",
      ];
  
      let currentTitleIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
  
      function type() {
        const currentTitle = titles[currentTitleIndex];
  
        if (isDeleting) {
          titleElement.textContent = currentTitle.substring(
            0,
            currentCharIndex - 1
          );
          currentCharIndex--;
          typingSpeed = 50;
        } else {
          titleElement.textContent = currentTitle.substring(
            0,
            currentCharIndex + 1
          );
          currentCharIndex++;
          typingSpeed = 100;
        }
  
        if (!isDeleting && currentCharIndex === currentTitle.length) {
          isDeleting = true;
          typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentTitleIndex = (currentTitleIndex + 1) % titles.length;
          typingSpeed = 500; // Pause before typing next word
        }
  
        setTimeout(type, typingSpeed);
      }
  
      // Start typing after a delay
      setTimeout(type, 1000);
    };
  
    typewriter();
  
    // Project card hover effects
    const projectCards = document.querySelectorAll(".project-card");
  
    projectCards.forEach((card) => {
      const links = card.querySelectorAll(".project-links a");
  
      card.addEventListener("mouseenter", () => {
        links.forEach((link) => {
          link.style.transform = "translateY(0)";
          link.style.opacity = "1";
        });
      });
  
      card.addEventListener("mouseleave", () => {
        links.forEach((link, index) => {
          link.style.transform = `translateY(${10 * (index + 1)}px)`;
          link.style.opacity = "0";
        });
      });
  
      // Initialize state
      links.forEach((link, index) => {
        link.style.transform = `translateY(${10 * (index + 1)}px)`;
        link.style.opacity = "0";
        link.style.transition = `transform 0.3s ${index * 0.1}s, opacity 0.3s ${
          index * 0.1
        }s`;
      });
    });
  
    // Skill category animation
    const skillCategories = document.querySelectorAll(".skill-category");
  
    skillCategories.forEach((category, index) => {
      category.style.transitionDelay = `${index * 0.1}s`;
    });
  
    // Dark mode toggle (optional)
    //   const darkModeToggle = document.createElement("div");
    //   darkModeToggle.className = "dark-mode-toggle";
    //   darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    //   darkModeToggle.style.position = "fixed";
    //   darkModeToggle.style.bottom = "30px";
    //   darkModeToggle.style.right = "30px";
    //   darkModeToggle.style.zIndex = "100";
    //   darkModeToggle.style.cursor = "pointer";
    //   darkModeToggle.style.fontSize = "24px";
    //   darkModeToggle.style.color = "var(--lightest)";
    //   darkModeToggle.style.backgroundColor = "var(--secondary-light)";
    //   darkModeToggle.style.width = "50px";
    //   darkModeToggle.style.height = "50px";
    //   darkModeToggle.style.borderRadius = "50%";
    //   darkModeToggle.style.display = "flex";
    //   darkModeToggle.style.justifyContent = "center";
    //   darkModeToggle.style.alignItems = "center";
    //   darkModeToggle.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    //   document.body.appendChild(darkModeToggle);
  
    //   darkModeToggle.addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
  
    //     if (document.body.classList.contains("light-mode")) {
    //       darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    //       document.documentElement.style.setProperty(
    //         "--primary",
    //         "var(--primary-dark)"
    //       );
    //       document.documentElement.style.setProperty("--secondary", "#f8f9fa");
    //       document.documentElement.style.setProperty("--lightest", "#212529");
    //       document.documentElement.style.setProperty("--light", "#495057");
    //       document.documentElement.style.setProperty(
    //         "--secondary-light",
    //         "#e9ecef"
    //       );
    //     } else {
    //       darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    //       document.documentElement.style.setProperty("--primary", "#64ffda");
    //       document.documentElement.style.setProperty("--secondary", "#0a192f");
    //       document.documentElement.style.setProperty("--lightest", "#ccd6f6");
    //       document.documentElement.style.setProperty("--light", "#a8b2d1");
    //       document.documentElement.style.setProperty(
    //         "--secondary-light",
    //         "#112240"
    //       );
    //     }
    //   });
  });
  
  