export function setupModal(modalId, openButtonId, closeButtonId) {
  const modal = document.getElementById(modalId);
  const openButton = document.getElementById(openButtonId);
  const closeButton = document.getElementById(closeButtonId);

  openButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.addEventListener('keydown', handleEscapeKey);
  });

  closeButton.addEventListener('click', () => {
    closeModal();
  });

  modal.addEventListener('click', (event) => {
    if (window.innerWidth >= 768 && event.target === modal) {
      closeModal();
    }
  });

  function closeModal() {
    modal.style.display = 'none';
    document.removeEventListener('keydown', handleEscapeKey);
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
}

setupModal('modal-feedback', 'open-modal-feedback', 'modal-feedback-close');
setupModal('modal-call', 'open-modal-call', 'modal-call-close');