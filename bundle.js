(()=>{"use strict";var e={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".submit-btn",inactiveButtonClass:"submit-btn_disabled",inputErrorClass:"form__item_type_error",errorClass:"form__input-error_active"},t={popup:".popup_accept-delete-card",submitButtonSelector:".submit-btn_type_accept",inputSelector:!1,formSelector:".form-accept",hideInputSelector:".hide-input"},n={card:".card",like:".card__like",delete:".card__delete",picture:".card__picture",text:".card__text",counter:".card__like-counter",cardsContainer:".photo-cards"},r=document.querySelector(".submit-btn_avatar"),o=document.querySelector(".submit-btn_profile"),i=document.querySelector(".submit-btn_card"),a=document.querySelector(".form_type_avatar"),c=document.querySelector(".form_profile"),u=document.querySelector(".form_card"),s=document.querySelector(".profile__info-btn"),l=document.querySelector(".profile__add-btn"),f=c.querySelector(".form__item_input_name-profile"),p=c.querySelector(".form__item_input_job-profile"),h=document.querySelector(t.hideInputSelector),d=document.querySelector(n.cardsContainer);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._image=t.link,this._cardSelectors=r,this._likes=t.likes,this._ownerId=t.owner._id,this.cardId=t._id,this._template=n,this.handleClick=t.handleClick,this.deleteHandleClick=t.deleteHandleClick,this._userId=o,this._deleteLike=t.removeLike,this._setLike=t.setLike,this._handleLikesChanged=this._handleLikesChanged.bind(this)}var t,n;return t=e,(n=[{key:"_checkId",value:function(e){return this._likes.some((function(t){return e===t._id}))}},{key:"_handleLikesChanged",value:function(e){this._likes=e,this._renderLikeCounter(),this._renderLikeButton()}},{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(this._cardSelectors.card).cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this.likeButton=this._cardElement.querySelector(this._cardSelectors.like),this.deleteButton=this._cardElement.querySelector(this._cardSelectors.delete),this.cardPicture=this._cardElement.querySelector(this._cardSelectors.picture),this.carText=this._cardElement.querySelector(this._cardSelectors.text),this.counterLikes=this._cardElement.querySelector(this._cardSelectors.counter),this._setEventListeners(),this.cardPicture.src=this._image,this.cardPicture.alt=this._name,this.carText.textContent=this._name,this._cardElement}},{key:"_renderDeleteButton",value:function(){this._ownerId!==this._userId&&this.deleteButton.remove()}},{key:"_renderLikeButton",value:function(){this._checkId(this._userId)?this.likeButton.classList.add("card__like_active"):this.likeButton.classList.remove("card__like_active")}},{key:"_renderLikeCounter",value:function(){this.counterLikes.textContent=this._likes.length,0===this._likes.length?this.counterLikes.classList.add("card__like-counter_disabled"):this.counterLikes.classList.remove("card__like-counter_disabled")}},{key:"toggleLikeButton",value:function(){this._checkId(this._userId)?(this._deleteLike(this.cardId,this._handleLikesChanged),this.likeButton.classList.remove("card__like_active"),this._renderLikeCounter()):(this._setLike(this.cardId,this._handleLikesChanged),this.likeButton.classList.add("card__like_active"),this._renderLikeCounter())}},{key:"_setEventListeners",value:function(){var e=this;this.likeButton.addEventListener("click",(function(){e.toggleLikeButton()})),this.deleteButton.addEventListener("click",(function(){e.deleteHandleClick(e.cardId,e._cardElement)})),this.cardPicture.addEventListener("click",(function(){return e.handleClick(e._name,e._image)})),this._renderLikeCounter(),this._renderLikeButton(),this._renderDeleteButton()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this.hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"clearErrorMessages",value:function(){var e=this;this._inputList.forEach((function(t){e.hideInputError(t)})),this.toggleButtonState()}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data="",this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setData",value:function(e){this._data=e}},{key:"renderArray",value:function(){var e=this;this._data.forEach((function(t){var n=e._renderer(t);e._container.append(n)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.name),this._job=document.querySelector(t.job),this._avatar=document.querySelector(t.avatar),this._id="",this._handleClickAvatar=n}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"initUserLoad",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about,this._avatar.src=e.avatar,this._id=e._id}},{key:"setUserInfo",value:function(e){this._name.textContent=e.firstInput,this._job.textContent=e.secondInput,this._id=e._id}},{key:"setEventListeners",value:function(){this._avatar.addEventListener("click",this._handleClickAvatar)}},{key:"setAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"setUserId",value:function(e){this._id=e}},{key:"getUserId",value:function(){return this._id}}],n&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._handleCloseByEscape=this._handleCloseByEscape.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseByEscape)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseByEscape)}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("close-btn"))&&e.close()}))}},{key:"_handleCloseByEscape",value:function(e){"Escape"===e.key&&this.close()}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function P(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e.popup))._name=t.popup.querySelector(e.popupDescription),t._image=t.popup.querySelector(e.popupImage),t}return t=a,(n=[{key:"open",value:function(e,t){this._name.textContent=e,this._image.src=t,this._image.alt=e,O(B(a.prototype),"open",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function D(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e.popup))._form=n.popup.querySelector(e.formSelector),n._inputList=Array.from(n._form.querySelectorAll(e.inputSelector)),n._submitHandler=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListenersForm",value:function(){var e=this;R(V(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){R(V(a.prototype),"close",this).call(this),this._form.reset()}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers=n}var t,n;return t=e,(n=[{key:"_renderPromise",value:function(e){return e.then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))}},{key:"get",value:function(e){var t=fetch("".concat(this._url,"/").concat(e),{method:"GET",headers:this._headers});return this._renderPromise(t)}},{key:"post",value:function(e,t){var n=fetch("".concat(this._url,"/").concat(e),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link,image:t.image})});return this._renderPromise(n)}},{key:"patch",value:function(e,t){var n=fetch("".concat(this._url,"/").concat(e),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)});return this._renderPromise(n)}},{key:"delete",value:function(e){var t=fetch("".concat(this._url,"/").concat(e),{method:"DELETE",headers:this._headers});return this._renderPromise(t)}},{key:"put",value:function(e){var t=fetch("".concat(this._url,"/").concat(e),{method:"PUT",headers:this._headers});return this._renderPromise(t)}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._client=t}var t,n;return t=e,(n=[{key:"loadAllCards",value:function(){return this._client.get("cards")}},{key:"createCard",value:function(e){return this._client.post("cards",e)}},{key:"deleteCard",value:function(e){return this._client.delete("cards/".concat(e))}},{key:"getUserInfo",value:function(){return this._client.get("users/me")}},{key:"setUserInfo",value:function(e){return this._client.patch("users/me",{name:e.name,about:e.about})}},{key:"getAvatar",value:function(){return this._client.get("users/me/avatar")}},{key:"setAvatar",value:function(e){return this._client.patch("users/me/avatar",{avatar:e.avatar})}},{key:"useLike",value:function(e){return this._client.put("cards/".concat(e,"/likes"))}},{key:"removeLike",value:function(e){return this._client.delete("cards/".concat(e,"/likes"))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},K.apply(this,arguments)}function Q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function X(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(r);if(o){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e,t))._submitHandler=t,n._hideInput=n._form.querySelector(e.hideInputSelector),n.card=null,n}return t=a,(n=[{key:"_getInputValue",value:function(){return this._hideInput.value}},{key:"setEventListeners",value:function(){var e=this;K(Y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValue())}))}},{key:"setCard",value:function(e){this.card=e}},{key:"getCard",value:function(){return this.card}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(H),$=new J(new F("https://mesto.nomoreparties.co/v1/cohort-38",{authorization:"fc656d80-9f90-48b6-9907-1de866c0eaf7","Content-Type":"application/json",Accept:"application/json: charset=utf-8"})),ee=new m(e,c),te=new m(e,u),ne=new m({formSelector:".form_type_avatar",inputSelector:".form__item_input_link-avatar",submitButtonSelector:".submit-btn",inactiveButtonClass:"submit-btn_disabled",inputErrorClass:"form__item_type_error",errorClass:"form__input-error_active"},a),re=new q({popup:".popup_photo",popupDescription:".popup__photo-paragraph",popupImage:".popup__photo-image"}),oe=new S({name:".profile__name",job:".profile__job",avatar:".profile__avatar-image"},(function(){ce.open(),ne.clearErrorMessages()})),ie=new H({popup:".popup_profile",submitButtonSelector:".submit-btn_profile",inputSelector:".form__item",formSelector:".form_profile",hideInputSelector:!1},(function(e){!function(e){o.innerText="Сохранить...";var t={name:e.profileName,about:e.profileJob};$.setUserInfo(t).then((function(){$.getUserInfo().then((function(e){oe.setUserInfo({firstInput:e.name,secondInput:e.about,_id:e._id})}))})).then((function(){$.getUserInfo().then((function(e){oe.initUserLoad(e)})),ie.close()})).catch((function(e){console.log(e)})).finally((function(){o.innerText="Сохранить"}))}(e)})),ae=new H({popup:".popup_card",submitButtonSelector:".submit-btn_card",inputSelector:".form__item",formSelector:".form_card",hideInputSelector:!1},(function(e){!function(e){i.innerText="Создать...";var t={name:e.name,link:e.link,handleClick:fe,deleteHandleClick:pe,removeLike:de,setLike:he};$.createCard(t).then((function(e){var t=le(e);se.addItem(t),ae.close()})).catch((function(e){console.log(e)})).finally((function(){i.innerText="Создать"}))}(e)})),ce=new H({popup:".popup_avatar",submitButtonSelector:".submit-btn_avatar",inputSelector:".form__item",formSelector:".form_type_avatar"},(function(e){!function(e){r.innerText="Сохранить...",$.setAvatar(e).then((function(e){oe.initUserLoad(e),ce.close()})).catch((function(e){console.log(e)})).finally((function(){r.innerText="Сохранить"}))}(e)})),ue=new Z(t,(function(e){!function(e){$.deleteCard(e).then((function(){ue.getCard().remove(),ue.close()})).catch((function(e){console.log(e)}))}(e)})),se=new k({renderer:le},".photo-cards");function le(e){var t={name:e.name,link:e.link,_id:e._id,likes:e.likes,owner:e.owner,handleClick:fe,deleteHandleClick:pe,removeLike:de,setLike:he};return new y(t,".template-card",n,oe.getUserId()).generateCard()}function fe(e,t){re.open(e,t)}function pe(e,t){h.value=e,ue.setCard(t),ue.open()}function he(e,t){$.useLike(e).then((function(e){t(e.likes)})).catch((function(e){console.log(e)}))}function de(e,t){$.removeLike(e).then((function(e){t(e.likes)})).catch((function(e){console.log(e)}))}s.addEventListener("click",(function(){var e=oe.getUserInfo();f.value=e.name,p.value=e.job,ee.clearErrorMessages(),ie.open()})),l.addEventListener("click",(function(){ae.open(),te.clearErrorMessages()})),ee.enableValidation(),te.enableValidation(),ne.enableValidation(),re.setEventListeners(),ie.setEventListenersForm(),ue.setEventListeners(),ce.setEventListenersForm(),oe.setEventListeners(),oe.getUserId(),ae.setEventListenersForm(),d.innerHTML="",$.loadAllCards().then((function(e){se.setData(e),se.renderArray()})).catch((function(e){console.log(e)})),$.getUserInfo().then((function(e){oe.initUserLoad(e),oe.setUserId(e._id)})).catch((function(e){console.log(e)}))})();