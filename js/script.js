(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  const slider = document.querySelector('[data-slider]');
  if (slider) {
    const slides = [...slider.querySelectorAll('.testimonial-card')];
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    let index = 0;
    let intervalId;

    const showSlide = (newIndex) => {
      slides[index].classList.remove('active');
      index = (newIndex + slides.length) % slides.length;
      slides[index].classList.add('active');
    };

    const startAuto = () => {
      intervalId = setInterval(() => showSlide(index + 1), 5000);
    };

    const resetAuto = () => {
      clearInterval(intervalId);
      startAuto();
    };

    prev?.addEventListener('click', () => {
      showSlide(index - 1);
      resetAuto();
    });

    next?.addEventListener('click', () => {
      showSlide(index + 1);
      resetAuto();
    });

    slider.addEventListener('mouseenter', () => clearInterval(intervalId));
    slider.addEventListener('mouseleave', startAuto);
    startAuto();
  }
})();
