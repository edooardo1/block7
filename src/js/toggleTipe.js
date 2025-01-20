export function toggleTipe() {
    const hiddenContent = document.querySelectorAll('.button__hiden--tipe');
    const buttonText = document.getElementById('toggleTipe').innerText.trim();
    
    if (buttonText === 'Показать все') {
        hiddenContent.forEach(button => button.classList.remove('laptop__hiden--tipe', 'tablet__hiden--tipe'));
        document.getElementById('toggleTipe').innerText = 'Скрыть';
    } else {
        hiddenContent.forEach(button => button.classList.add('laptop__hiden--tipe', 'tablet__hiden--tipe'));
        document.getElementById('toggleTipe').innerText = 'Показать все';
    }
}

