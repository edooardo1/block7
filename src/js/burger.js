document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const closeBtn = document.getElementById('close-btn');
    const asideMenu = document.getElementById('aside-menu');
    const overlay = document.getElementById('overlay');
  
    burgerBtn.addEventListener('click', () => {
      asideMenu.classList.add('open');
      overlay.classList.add('active');
    });
  
    closeBtn.addEventListener('click', () => {
      asideMenu.classList.remove('open');
      overlay.classList.remove('active');
    });
  
    overlay.addEventListener('click', () => {
      asideMenu.classList.remove('open');
      overlay.classList.remove('active');
    });
  });
  