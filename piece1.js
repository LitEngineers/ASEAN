const header = document.querySelector("header");

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
  });
  
  ScrollReveal().reveal('.home-text h5', { origin:'top' });
  ScrollReveal().reveal('.home-text h1, .home-text p', { origin:'bottom' });