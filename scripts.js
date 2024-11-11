// Получаем все элементы аудио на странице
const audioElements = document.querySelectorAll('audio');

audioElements.forEach((audio, index) => {
  // Слушаем событие начала воспроизведения на каждом аудио элементе
  audio.addEventListener('play', () => {
    // При начале воспроизведения аудио, останавливаем все другие
    audioElements.forEach((otherAudio, otherIndex) => {
      if (otherIndex !== index) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
      }
    });
  });
});
// Находим все ссылки на странице
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      // Проверяем, если это внутренняя ссылка
      if (link.hostname === window.location.hostname) {
        event.preventDefault();
        
        // Добавляем класс для анимации исчезновения
        document.body.classList.add('fade-out');
        
        // Ожидаем окончания анимации и перенаправляем
        setTimeout(() => {
          window.location.href = link.href;
        }, 500); // Время должно совпадать с длительностью анимации fadeOut
      }
    });
  });
  
  // Добавляем класс `fade-in` для плавного появления при загрузке
  window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
  });
  