export function setupAsideModal(modalId, openButtonId, closeButtonId) {
    const aside = document.getElementById('aside-menu');
    const modal = aside.querySelector(`#${modalId}`);
    const openButton = aside.querySelector(`#${openButtonId}`);
    const closeButton = aside.querySelector(`#${closeButtonId}`);

    function closeModal() {
        modal.style.display = 'none';
        document.removeEventListener('keydown', handleEscapeKey);
    }
    function handleEscapeKey(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    openButton.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.addEventListener('keydown', handleEscapeKey);
    });

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

export function initializeAsideModals() {
    setupAsideModal('modal-feedback', 'open-modal-feedback', 'modal-feedback-close');
    setupAsideModal('modal-call', 'open-modal-call', 'modal-call-close');
}

document.addEventListener('DOMContentLoaded', () => {
    initializeAsideModals();
});