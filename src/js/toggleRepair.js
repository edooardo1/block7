export function toggleRepair() {
    const hiddenContent = document.querySelectorAll('.button__hiden--repair');
    const buttonText = document.getElementById('toggleRepair').innerText.trim();
    
    if (buttonText === 'Показать все') {
        hiddenContent.forEach(button => button.classList.remove('laptop__hiden--repair', 'tablet__hiden--repair'));
        document.getElementById('toggleRepair').innerText = 'Скрыть';
    } else {
        hiddenContent.forEach(button => button.classList.add('laptop__hiden--repair', 'tablet__hiden--repair'));
        document.getElementById('toggleRepair').innerText = 'Показать все';
    }
}
