export function setupAsideModal(modalId, openButtonId, closeButtonId) {
    const aside = document.getElementById('aside-menu');
    const modal = aside.querySelector(`#${modalId}`);
    const openButton = aside.querySelector(`#${openButtonId}`);
    const closeButton = aside.querySelector(`#${closeButtonId}`);
    
    openButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
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
