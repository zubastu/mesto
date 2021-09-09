
    let formElement = document.querySelector('.form')

    let nameInput = document.querySelector('.form__input_heading');
    let jobInput = document.querySelector('.form__input_subheading')

    let closeButton = document.querySelector('.form__close-button');
    let profileButton = document.querySelector('.profile__info-btn');
    let popup = document.querySelector('.popup');


    function popupOpened () {
        popup.setAttribute('style', 'display: flex;');
    }

    function popupClose() {
        popup.setAttribute('style', 'display: none;');
    }

    function formSubmitHandler (evt) {
        evt.preventDefault();
        let name = document.querySelector('.profile__info-content_heading');
        let job = document.querySelector('.profile__info-content_subheading');
        name.textContent = nameInput.value;
        job.textContent = jobInput.value;
        popupClose();
    }

    formElement.addEventListener('submit', formSubmitHandler);
    closeButton.addEventListener('click', popupClose);
    profileButton.addEventListener('click', popupOpened);