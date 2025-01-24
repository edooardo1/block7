const contentDiv = document.querySelector('.content__about');
const contentInform = document.querySelector('.content__inform');
const content = document.querySelector('.content');
const toggleButton = document.getElementById('toggleButton');

const fullText = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким. Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.`;

const text1366 = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.`;

const text768_1366 = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера.`;

const text768 = `Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.`;

let isFullTextVisible = false;

export function updateText() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 1366) {
    contentDiv.innerHTML = text1366;
    contentDiv.style.height = 'auto';
    contentInform.style.height = '208px';
    content.style.height = 'auto';
    toggleButton.innerText = 'Скрыть';
    isFullTextVisible = true;
  } else if (screenWidth > 768) {
    if (!isFullTextVisible) {
      contentDiv.innerHTML = text768_1366;
      contentDiv.style.height = '160px';
      contentInform.style.height = '208px';
      content.style.height = 'auto';
      toggleButton.innerText = 'Показать все';
    }
  } else {
    if (!isFullTextVisible) {
      contentDiv.innerHTML = text768;
      contentDiv.style.height = '90px';
      contentInform.style.height = '146px';
      content.style.height = 'auto';
      toggleButton.innerText = 'Показать все';
    }
  }
}

export function toggleVisibility() {
  if (isFullTextVisible) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1366) {
      contentDiv.innerHTML = text1366;
      contentDiv.style.height = 'auto';
      contentInform.style.height = '208px';
    } else if (screenWidth > 768) {
      contentDiv.innerHTML = text768_1366;
      contentDiv.style.height = '160px';
      contentInform.style.height = '208px';
    } else {
      contentDiv.innerHTML = text768;
      contentDiv.style.height = '90px';
      contentInform.style.height = '146px';
    }
    toggleButton.innerText = 'Показать все';
    isFullTextVisible = false;
  } else {
    contentDiv.innerHTML = fullText;
    const fullHeight = contentDiv.scrollHeight;
    contentDiv.style.height = `${fullHeight}px`;
    contentInform.style.height = `${fullHeight + 30}px`;
    content.style.height = 'auto';
    toggleButton.innerText = 'Скрыть';
    isFullTextVisible = true;
  }
}

contentDiv.style.transition = 'height 0.3s ease-in-out';
contentInform.style.transition = 'height 0.3s ease-in-out';
content.style.transition = 'height 0.3s ease-in-out';

window.addEventListener('resize', updateText);
updateText();
