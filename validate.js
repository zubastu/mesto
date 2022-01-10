
/*
formElementProfile
formElementCard
submitButtonProfile
submitButtonCard






 */

/* Задание
Профиль:
1. Оба поля обязательны ***
2. В поле Имя 2+ и 40- символов ***
3. В поле о себе 2+ и 200- символов ***
4. Используются стандартные браузерные типы ошибок

Новое место:
1. Не нужна проверка длинны текста у ссылки ***
2. Нужна проверка того что введена именно ссылка ***
3. Оба поля обязательны ***
4. В поле Название 2+ и 30- символов ***
5. В поле ссылка должен быть тип url ***

Попап:
1. Закрытие по клику на оверлей ****
2. Закрытие на кнопку 'Esc' ****
3.

Общее условие:
1. Если одно из полей не прошло проверку - то кнопка 'сабмит' не активна
2. Если оба поля проходят валидацию - активной
3. Функции построены так, что выполняют одно действие

Валидация форм:
1. Код валидации разбит на функции и вызывается одной функцией enableValidate
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
 */

const enableValidation = () => {

}