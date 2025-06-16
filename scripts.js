
// -----------Preloader Section---------------------------
// Hide loader after 3 seconds and show content
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    document.body.style.overflow = 'auto';
  }, 1500);
});



// ------------hero animation part-----------------------------
// Buildings
const afghan = document.getElementById("afghan");

for (let i = 0; i < 20; i++) {
  let building = document.createElement("div");
  building.classList.add("building");

  let height = Math.floor(Math.random() * 250) + 150;
  building.style.height = height + "px";
  building.style.animationDelay = (i * 0.15) + "s";

  let numWindows = Math.floor(height / 12) * 3;

  for (let j = 0; j < numWindows; j++) {
    let windowDiv = document.createElement("div");
    windowDiv.classList.add("window");
    building.appendChild(windowDiv);
  }

  afghan.appendChild(building);
}

// Snow Particles
const particles = document.querySelector(".particles");

for (let i = 0; i < 80; i++) {
  let particle = document.createElement("div");
  particle.classList.add("particle");
  let size = Math.random() * 4 + 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = "-20vh";
  particle.style.animationDuration = (Math.random() * 5 + 5) + "s";
  particle.style.animationDelay = Math.random() * 10 + "s";
  particles.appendChild(particle);
}

// Clouds
const clouds = document.querySelector(".clouds");

for (let i = 0; i < 10; i++) {
  let cloud = document.createElement("div");
  cloud.classList.add("cloud");
  let size = Math.random() * 100 + 50;
  cloud.style.width = size + "px";
  cloud.style.height = size * 0.6 + "px";
  cloud.style.top = Math.random() * 100 + "px";
  cloud.style.left = Math.random() * window.innerWidth + "px";
  cloud.style.animationDuration = (Math.random() * 30 + 20) + "s";
  cloud.style.animationDelay = Math.random() * 30 + "s";
  clouds.appendChild(cloud);
}


// ---------------About us Section-----------------------------------------------------------
window.addEventListener('scroll', () => {
  const description = document.getElementById('about-description');
  const link = document.querySelector('.about-link');
  const featureCards = document.querySelectorAll('.feature-card');
  // const slidingParts = document.querySelectorAll('.slidingParts');

  const triggerBottom = window.innerHeight / 1.1;

  if (description.getBoundingClientRect().top < triggerBottom) {
    description.classList.add('visible');
  }

  // if (description.getBoundingClientRect().top < triggerBottom) {
  // slidingParts.classList.add('visible');
  // }

  if (link.getBoundingClientRect().top < triggerBottom) {
    link.classList.add('visible');
  }

  featureCards.forEach(card => {
    if (card.getBoundingClientRect().top < triggerBottom) {
      card.classList.add('visible');
    }
  });
});

    // ---------------------ideas section-------------------------
    
  const track = document.getElementById('messageTrack');
  const container = document.getElementById('sliderContainer');
  const totalMessages = track.children.length;

  let index = 0;
  let intervalId;

  function moveSlider() {
    index = (index + 1) % totalMessages;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function startAutoSlide() {
    intervalId = setInterval(moveSlider, 5000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  // Start sliding
  startAutoSlide();

  // Pause on hover
  container.addEventListener('mouseenter', stopAutoSlide);
  container.addEventListener('mouseleave', startAutoSlide);

//   // -------------------the team section-----------------------------
// AOS.init({
//   duration: 1000,
//   once: true
// });


// -------------------Download our app section--------------------
    const appSection = document.getElementById('app-section');
    const phone = document.getElementById('phone');
    const downloadIcon = document.getElementById('download-icon');
    const brandLogo = document.getElementById('brand-logo');

    let animationStarted = false;

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
      );
    }

    function checkVisibility() {
      if (!animationStarted && isInViewport(appSection)) {
        appSection.classList.add('visible');
        phone.style.animation = 'liftUp 1.8s ease forwards';

        setTimeout(() => {
          downloadIcon.style.animation = 'downloadIcon 3s ease forwards';
        }, 1800);

        setTimeout(() => {
          brandLogo.style.animation = 'showLogo 1.5s ease forwards, logoShine 2s 0s infinite ease-in-out';
        }, 4800);

        animationStarted = true;
      }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);
// -------------------news section---------------------------------
    const form = document.getElementById('subscribeForm');
    const successMessage = document.getElementById('successMessage');
    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (emailInput.value.trim() !== '') {
        successMessage.classList.add('show');
        emailInput.value = '';
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 3000);
      }
    });

    //   ----------------the footer section----------------------------
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




