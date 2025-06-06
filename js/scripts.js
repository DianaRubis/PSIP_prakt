  (function () {
    'use strict';

    // Форма "Получить КП"
    const businessForm = document.getElementById('businessForm');
    if (businessForm) {
      businessForm.addEventListener('submit', function (event) {
        if (!businessForm.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        businessForm.classList.add('was-validated');
      }, false);
    }

    // Форма "Сотрудничество"
    const collabForm = document.getElementById('collabForm');
    if (collabForm) {
      collabForm.addEventListener('submit', function (event) {
        if (!collabForm.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        collabForm.classList.add('was-validated');
      }, false);
    }

    const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, // Зацикливание слайдов
  autoplay: {
    delay: 3000, // Интервал в миллисекундах (3 секунды)
    disableOnInteraction: false, // Продолжать автопрокрутку после ручного переключения
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


(function () {
  'use strict';

  // Попап "Каталог"
  const catalogLink = document.getElementById('openCatalogForm');
  const popup = document.getElementById('catalogPopup');

  if (catalogLink && popup) {
    catalogLink.addEventListener('click', e => {
      e.preventDefault();
      popup.classList.toggle('d-none');
    });

    document.addEventListener('click', e => {
      if (!popup.contains(e.target) && !catalogLink.contains(e.target))
        popup.classList.add('d-none');
    });
  }
})();

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('catalogForm');

    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  });
  

    const toTopBtn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      toTopBtn.classList.add("show");
    } else {
      toTopBtn.classList.remove("show");
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


const logoLink = document.querySelector('a.d-flex');

logoLink.addEventListener('mouseenter', () => {
  const logos = logoLink.querySelectorAll('img');
  
  // Анимация разлета
  gsap.to(logos, {
    x: () => Math.random() * 30 - 15,
    y: () => Math.random() * 30 - 15,
    rotation: () => Math.random() * 360,
    duration: 0.5,
    ease: "power2.out"
  });
  
  // Возвращение на место через секунду
  setTimeout(() => {
    gsap.to(logos, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
  }, 1000);
});
  })();
