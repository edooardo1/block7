import '../scss/style.scss'
import './burger.js';
import './modal.js';
import './scriptSwiper.js';
import './toggleRepair.js';
import './toggleTipe.js';
import './toggleContent.js';
import {updateText, toggleVisibility } from './toggleContent.js';
document.addEventListener('DOMContentLoaded', () => {
    window.toggleVisibility = toggleVisibility;
    updateText(); 
  });
import { toggleTipe } from './toggleTipe.js';
document.addEventListener('DOMContentLoaded', () => {
    window.toggleTipe = toggleTipe;
});
import { toggleRepair } from './toggleRepair.js';
document.addEventListener('DOMContentLoaded', () => {
    window.toggleRepair = toggleRepair;
});
import { setupModal } from './modal.js';
document.addEventListener('DOMContentLoaded', () => {
    window.setupModal = setupModal;
});
import { initializeAsideModals } from './asideModal.js';
document.addEventListener('DOMContentLoaded', () => {
    initializeAsideModals();
});

console.log('Works!')
