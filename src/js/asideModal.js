// Функция для настройки модального окна в aside
export function setupAsideModal(modalId, openButtonId, closeButtonId) {
    const aside = document.getElementById('aside-menu');
    if (!aside) {
        console.error('Ошибка: Контейнер "aside-menu" не найден.');
        return;
    }

    const modal = aside.querySelector(`#${modalId}`);
    const openButton = aside.querySelector(`#${openButtonId}`);
    const closeButton = aside.querySelector(`#${closeButtonId}`);

    if (!modal) {
        console.error(`Ошибка: Модальное окно с ID "${modalId}" не найдено в aside.`);
        return;
    }
    if (!openButton) {
        console.error(`Ошибка: Кнопка открытия с ID "${openButtonId}" не найдена в aside.`);
        return;
    }
    if (!closeButton) {
        console.error(`Ошибка: Кнопка закрытия с ID "${closeButtonId}" не найдена в aside.`);
        return;
    }

    // Открытие модального окна
    openButton.addEventListener('click', () => {
        modal.style.display = 'flex'; // Показываем окно
    });

    // Закрытие модального окна
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Скрываем окно
    });

    // Закрытие окна при клике на фон
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Инициализация всех модальных окон в aside
export function initializeAsideModals() {
    setupAsideModal('modal-feedback', 'open-modal-feedback', 'modal-feedback-close');
    setupAsideModal('modal-call', 'open-modal-call', 'modal-call-close');
}

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    initializeAsideModals();
});
