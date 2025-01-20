export function setupModal(modalId, openButtonId, closeButtonId) {
  const modal = document.getElementById(modalId);
  const openButton = document.getElementById(openButtonId);
  const closeButton = document.getElementById(closeButtonId);

  openButton.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (event) => {
    if (window.innerWidth >= 768 && event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

setupModal('modal-feedback', 'open-modal-feedback', 'modal-feedback-close');
setupModal('modal-call', 'open-modal-call', 'modal-call-close');