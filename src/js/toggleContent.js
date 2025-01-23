const contentDiv = document.querySelector('.content__about');
const toggleButton = document.getElementById('toggleButton');

const fullText = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.`;

const text1366 = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.`;

const text768_1366 = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера.`;

const text768 = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.`;

export function updateText() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1366) {
    contentDiv.innerHTML = text1366;
    contentDiv.style.height = 'auto'; 
    toggleButton.style.display = 'none'; 
  } else if (screenWidth > 768) {
    contentDiv.innerHTML = text768_1366;
    contentDiv.style.height = '160px'; 
    toggleButton.style.display = 'inline-block';
    toggleButton.innerText = 'Показать все';
  } else {
    contentDiv.innerHTML = text768;
    contentDiv.style.height = '90px'; 
    toggleButton.style.display = 'inline-block'; 
    toggleButton.innerText = 'Показать все';
  }
}

export function toggleVisibility() {
  if (contentDiv.innerHTML === fullText) {
    updateText(); 
  } else {
    contentDiv.innerHTML = fullText; 
    contentDiv.style.height = 'auto'; 
    toggleButton.innerText = 'Скрыть';
  }
}

window.addEventListener('resize', updateText);

updateText();