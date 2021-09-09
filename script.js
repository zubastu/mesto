
    let formElement = document.querySelector('.form')

    let nameInput = document.querySelector('.form__content_input_heading');
    let jobInput = document.querySelector('.form__content_input_subheading')

    let closeButton = document.querySelector('.form__close-button');
    let profileButton = document.querySelector('.profile__info-btn');
    let popup = document.querySelector('.popup');
    let popupOpen = document.querySelector('.popup_opened');


    function popupOpened () {
        document.querySelector('.popup').classList.add('popup_opened');
    }

    function popupClose() {
        document.querySelector('.popup').classList.remove('popup_opened');
        document.getElementById('profile__form').reset();
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
    