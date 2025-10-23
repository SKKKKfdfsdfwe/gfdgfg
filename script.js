document.addEventListener('DOMContentLoaded', () => {
  // Получаем элемент шапки и его высоту (если есть)
  const header = document.querySelector('.header');
  const offset = header ? header.offsetHeight : 0;

  // Дополнительный сдвиг для прокрутки (можно менять)
  const extraOffset = 1050; // Например, 20 или -30

  // Находим все якорные ссылки (href начинаются с '#')
  const anchors = document.querySelectorAll('a[href^="#about"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      if (!targetElement) return; // Если элемент не найден, выходим

      // Вычисляем позицию прокрутки с учётом offset и extraOffset
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset + extraOffset;

      // Запускаем плавный скролл с длительностью 1000 мс
      smoothScrollTo(targetPosition, 200);
    });
  });

  // Функция плавного скролла с заданной длительностью
  function smoothScrollTo(targetY, duration) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const run = easeInOutQuad(timeElapsed, startY, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetY); // Фиксируем позицию в конце
      }
    }

    requestAnimationFrame(animation);
  }

  // easing функция для плавности
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
});













document.addEventListener('DOMContentLoaded', () => {
  // Получаем элемент шапки и его высоту (если есть)
  const header = document.querySelector('.header');
  const offset = header ? header.offsetHeight : 0;

  // Дополнительный сдвиг для прокрутки (можно менять)
  const extraOffset = 2800; // Например, 20 или -30

  // Находим все якорные ссылки (href начинаются с '#')
  const anchors = document.querySelectorAll('a[href^="#cont"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      if (!targetElement) return; // Если элемент не найден, выходим

      // Вычисляем позицию прокрутки с учётом offset и extraOffset
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset + extraOffset;

      // Запускаем плавный скролл с длительностью 1000 мс
      smoothScrollTo(targetPosition, 200);
    });
  });

  // Функция плавного скролла с заданной длительностью
  function smoothScrollTo(targetY, duration) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const run = easeInOutQuad(timeElapsed, startY, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetY); // Фиксируем позицию в конце
      }
    }

    requestAnimationFrame(animation);
  }

  // easing функция для плавности
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
});






document.addEventListener('DOMContentLoaded', () => {
  // Получаем элемент шапки и его высоту (если есть)
  const header = document.querySelector('.header');
  const offset = header ? header.offsetHeight : 0;

  // Дополнительный сдвиг для прокрутки (можно менять)
  const extraOffset = 2000; // Например, 20 или -30

  // Находим все якорные ссылки (href начинаются с '#')
  const anchors = document.querySelectorAll('a[href^="#uslugi"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      if (!targetElement) return; // Если элемент не найден, выходим

      // Вычисляем позицию прокрутки с учётом offset и extraOffset
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset + extraOffset;

      // Запускаем плавный скролл с длительностью 1000 мс
      smoothScrollTo(targetPosition, 200);
    });
  });

  // Функция плавного скролла с заданной длительностью
  function smoothScrollTo(targetY, duration) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const run = easeInOutQuad(timeElapsed, startY, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetY); // Фиксируем позицию в конце
      }
    }

    requestAnimationFrame(animation);
  }

  // easing функция для плавности
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
});