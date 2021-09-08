
    let formElement = document.querySelector('.form')

    let nameInput = document.querySelector('.form__input_heading');
    let jobInput = document.querySelector('.form__input_subheading')

    let closeButton = document.querySelector('.form__close-button');
    let profileButton = document.querySelector('.profile__info-button');
    let popup = document.querySelector('.popup_opened');


    function popupOpened () {
        popup.setAttribute('style', 'display: flex;');
        console.log('check_button1');
    }

    function popupClose() {
        popup.setAttribute('style', 'display: none;');
    }

    function formSubmitHandler (evt) {
        evt.preventDefault();
        let name = document.querySelector('.profile__info-heading');
        let job = document.querySelector('.profile__info-subheading');
        name.textContent = nameInput.value;
        job.textContent = jobInput.value;
        popupClose();
    }

    formElement.addEventListener('submit', formSubmitHandler);
    closeButton.addEventListener('click', popupClose);
    profileButton.addEventListener('click', popupOpened);