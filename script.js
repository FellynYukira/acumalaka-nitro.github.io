const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const discordPopup = document.getElementById('discord-popup');

openPopupButton.addEventListener('click', () => {
    discordPopup.classList.add('show');
});

closePopupButton.addEventListener('click', () => {
    discordPopup.querySelector('.popup-content').classList.add('hide');

    discordPopup.classList.add('hide');
    setTimeout(() => {
        discordPopup.classList.remove('show');
        discordPopup.classList.remove('hide');
        discordPopup.querySelector('.popup-content').classList.remove('hide');
    }, 200);
});

discordPopup.addEventListener('click', (event) => {
    if (event.target === discordPopup) {
        closePopupButton.click();
    }
});