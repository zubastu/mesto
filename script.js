
    const formElement = document.querySelector('.form')

    const nameInput = document.querySelector('.form__item_input_name');
    const jobInput = document.querySelector('.form__item_input_job');
    const name = document.querySelector('.profile__name');
    const job = document.querySelector('.profile__job');

    const closeButton = document.querySelector('.form__close-button');
    const profileButton = document.querySelector('.profile__info-btn');
    const popup = document.querySelector('.popup');
    const popupOpen = document.querySelector('.popup_opened');
    const nameString = document.querySelector('.profile__name');
    const jobString = document.querySelector('.profile__job')


    function popupOpened () {
        document.querySelector('.popup').classList.add('popup_opened');
    }

    function popupClose() {
        document.querySelector('.popup').classList.remove('popup_opened');
    }

   

    function formSubmitHandler (evt) {
        evt.preventDefault();
        let name = document.querySelector('.profile__name');
        let job = document.querySelector('.profile__job');
        name.textContent = nameInput.value;
        job.textContent = jobInput.value;
        popupClose();
    }

    function profileOpenCoppy () {
        let name = document.querySelector('.form__item_input_name');
        let job = document.querySelector('.form__item_input_job');
        let nameInput = document.querySelector('.profile__name');
        let jobInput = document.querySelector('.profile__job');
        name.value = nameInput.textContent;
        job.value = jobInput.textContent;
        popupOpened();
    }

    nameString.onclick = function() {
        profileOpenCoppy();
    }
    jobString.onclick = function() {
        profileOpenCoppy();
    }

    formElement.addEventListener('submit', formSubmitHandler);
    closeButton.addEventListener('click', popupClose);
    profileButton.addEventListener('click', profileOpenCoppy);
    
   

    