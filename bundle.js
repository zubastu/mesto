(()=>{"use strict";var e={408:(e,t,n)=>{e.exports=n.p+"images/defaultAvatar.8956535360557f88ab7f.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".submit-btn",inactiveButtonClass:"submit-btn_disabled",inputErrorClass:"form__item_type_error",errorClass:"form__input-error_active"},t={popup:".popup_accept-delete-card",submitButtonSelector:".submit-btn_type_accept",inputSelector:!1,formSelector:".form-accept",hideInputSelector:".hide-input"},r={card:".card",like:".card__like",delete:".card__delete",picture:".card__picture",text:".card__text",counter:".card__like-counter",cardsContainer:".photo-cards"},o=document.querySelector(".profile__avatar-image"),i=document.querySelector(".submit-btn_type_accept"),a=document.querySelector(".submit-btn_avatar"),c=document.querySelector(".submit-btn_profile"),u=document.querySelector(".submit-btn_card"),s=document.querySelector(".form_type_avatar"),l=document.querySelector(".form_profile"),f=document.querySelector(".form_card"),p=document.querySelector(".profile__info-btn"),h=document.querySelector(".profile__add-btn"),d=l.querySelector(".form__item_input_name-profile"),_=l.querySelector(".form__item_input_job-profile"),y=document.querySelector(t.hideInputSelector),v=document.querySelector(r.cardsContainer),m=n(408);function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._image=t.link,this._cardSelectors=r,this._likes=t.likes,this._ownerId=t.owner._id,this.cardId=t._id,this._template=n,this.handleClick=t.handleClick,this.deleteHandleClick=t.deleteHandleClick,this._userId=o,this._deleteLike=t.removeLike,this._setLike=t.setLike,this._handleLikesChanged=this._handleLikesChanged.bind(this)}var t,n;return t=e,(n=[{key:"_checkId",value:function(e){return this._likes.some((function(t){return e===t._id}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(this._cardSelectors.card).cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this.likeButton=this._cardElement.querySelector(this._cardSelectors.like),this.deleteButton=this._cardElement.querySelector(this._cardSelectors.delete),this.cardPicture=this._cardElement.querySelector(this._cardSelectors.picture),this.carText=this._cardElement.querySelector(this._cardSelectors.text),this.counterLikes=this._cardElement.querySelector(this._cardSelectors.counter),this._setEventListeners(),this.cardPicture.src=this._image,this.cardPicture.alt=this._name,this.carText.textContent=this._name,this._renderLikeCounter(),this._renderLikeButton(),this._renderDeleteButton(),this._cardElement}},{key:"_renderDeleteButton",value:function(){this._ownerId!==this._userId&&this.deleteButton.remove()}},{key:"_renderLikeButton",value:function(){this._checkId(this._userId)?this.likeButton.classList.add("card__like_active"):this.likeButton.classList.remove("card__like_active")}},{key:"_renderLikeCounter",value:function(){this.counterLikes.textContent=this._likes.length,0===this._likes.length?this.counterLikes.classList.add("card__like-counter_disabled"):this.counterLikes.classList.remove("card__like-counter_disabled")}},{key:"toggleLikeButton",value:function(){this._checkId(this._userId)?this._deleteLike(this.cardId,this._handleLikesChanged).catch((function(e){console.log(e)})):this._setLike(this.cardId,this._handleLikesChanged).catch((function(e){console.log(e)}))}},{key:"_handleLikesChanged",value:function(e){this._likes=e,this._renderLikeCounter(),this._renderLikeButton()}},{key:"_setEventListeners",value:function(){var e=this;this.likeButton.addEventListener("click",(function(){e.toggleLikeButton()})),this.deleteButton.addEventListener("click",(function(){e.deleteHandleClick(e)})),this.cardPicture.addEventListener("click",(function(){return e.handleClick(e._name,e._image)}))}},{key:"delete",value:function(){this._cardElement.remove()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this.hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"clearErrorMessages",value:function(){var e=this;this._inputList.forEach((function(t){e.hideInputError(t)})),this.toggleButtonState()}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data="",this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setData",value:function(e){this._data=e}},{key:"renderArray",value:function(){var e=this;this._data.forEach((function(t){var n=e._renderer(t);e._container.append(n)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.name),this._job=document.querySelector(t.job),this._avatar=document.querySelector(t.avatar),this._id="",this._handleClickAvatar=n}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"initUserLoad",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about,this._avatar.src=e.avatar,this._id=e._id}},{key:"setUserInfo",value:function(e){this._name.textContent=e.firstInput,this._job.textContent=e.secondInput,this._id=e._id}},{key:"setEventListeners",value:function(){this._avatar.addEventListener("click",this._handleClickAvatar)}},{key:"setAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"setUserId",value:function(e){this._id=e}},{key:"getUserId",value:function(){return this._id}}],n&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._handleCloseByEscape=this._handleCloseByEscape.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseByEscape)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseByEscape)}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("close-btn"))&&e.close()}))}},{key:"_handleCloseByEscape",value:function(e){"Escape"===e.key&&this.close()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function x(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e.popup))._name=t.popup.querySelector(e.popupDescription),t._image=t.popup.querySelector(e.popupImage),t}return t=a,(n=[{key:"open",value:function(e,t){this._name.textContent=e,this._image.src=t,this._image.alt=e,B(R(a.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(j);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function F(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e.popup))._form=n.popup.querySelector(e.formSelector),n._inputList=Array.from(n._form.querySelectorAll(e.inputSelector)),n._submitHandler=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListenersForm",value:function(){var e=this;V(N(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){V(N(a.prototype),"close",this).call(this),this._form.reset()}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(j);function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers=n}var t,n;return t=e,(n=[{key:"_renderPromise",value:function(e){return e.then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))}},{key:"get",value:function(e){var t=fetch("".concat(this._url,"/").concat(e),{method:"GET",headers:this._headers});return this._renderPromise(t)}},{key:"post",value:function(e,t){var n=fetch("".concat(this._url,"/").concat(e),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link,image:t.image})});return this._renderPromise(n)}},{key:"patch",value:function(e,t){var n=fetch("".concat(this._url,"/").concat(e),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)});return this._renderPromise(n)}},{key:"delete",value:function(e){var t=fetch("".concat(this._url,"/").concat(e),{method:"DELETE",headers:this._headers});return this._renderPromise(t)}},{key:"put",value:function(e){var t=fetch("".concat(this._url,"/").concat(e),{method:"PUT",headers:this._headers});return this._renderPromise(t)}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._client=t}var t,n;return t=e,(n=[{key:"loadAllCards",value:function(){return this._client.get("cards")}},{key:"createCard",value:function(e){return this._client.post("cards",e)}},{key:"deleteCard",value:function(e){return this._client.delete("cards/".concat(e))}},{key:"getUserInfo",value:function(){return this._client.get("users/me")}},{key:"setUserInfo",value:function(e){return this._client.patch("users/me",{name:e.name,about:e.about})}},{key:"getAvatar",value:function(){return this._client.get("users/me/avatar")}},{key:"setAvatar",value:function(e){return this._client.patch("users/me/avatar",{avatar:e.avatar})}},{key:"useLike",value:function(e){return this._client.put("cards/".concat(e,"/likes"))}},{key:"removeLike",value:function(e){return this._client.delete("cards/".concat(e,"/likes"))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(){return X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},X.apply(this,arguments)}function Y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=te(e)););return e}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function ee(e,t){if(t&&("object"===Q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},te(e)}var ne=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=te(r);if(o){var n=te(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ee(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e,t))._submitHandler=t,n._hideInput=n._form.querySelector(e.hideInputSelector),n.card=null,n}return t=a,(n=[{key:"_getInputValue",value:function(){return this._hideInput.value}},{key:"setEventListeners",value:function(){var e=this;X(te(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValue())}))}},{key:"setCard",value:function(e){this.card=e}},{key:"getCard",value:function(){return this.card}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(J),re=new K(new z("https://mesto.nomoreparties.co/v1/cohort-38",{authorization:"fc656d80-9f90-48b6-9907-1de866c0eaf7","Content-Type":"application/json",Accept:"application/json: charset=utf-8"})),oe=new w(e,l),ie=new w(e,f),ae=new w({formSelector:".form_type_avatar",inputSelector:".form__item_input_link-avatar",submitButtonSelector:".submit-btn",inactiveButtonClass:"submit-btn_disabled",inputErrorClass:"form__item_type_error",errorClass:"form__input-error_active"},s),ce=new A({popup:".popup_photo",popupDescription:".popup__photo-paragraph",popupImage:".popup__photo-image"}),ue=new C({name:".profile__name",job:".profile__job",avatar:".profile__avatar-image"},(function(){fe.open(),ae.clearErrorMessages()})),se=new J({popup:".popup_profile",submitButtonSelector:".submit-btn_profile",inputSelector:".form__item",formSelector:".form_profile",hideInputSelector:!1},(function(e){!function(e){c.innerText="Сохранить...";var t={name:e.profileName,about:e.profileJob};re.setUserInfo(t).then((function(e){ue.setUserInfo({firstInput:e.name,secondInput:e.about,_id:e._id}),ue.initUserLoad(e)})).then((function(){se.close()})).catch((function(e){console.log(e)})).finally((function(){c.innerText="Сохранить"}))}(e)})),le=new J({popup:".popup_card",submitButtonSelector:".submit-btn_card",inputSelector:".form__item",formSelector:".form_card",hideInputSelector:!1},(function(e){!function(e){u.innerText="Создать...";var t={name:e.name,link:e.link,handleClick:_e,deleteHandleClick:ye,removeLike:me,setLike:ve};re.createCard(t).then((function(e){var t=de(e);he.addItem(t),le.close()})).catch((function(e){console.log(e)})).finally((function(){u.innerText="Создать"}))}(e)})),fe=new J({popup:".popup_avatar",submitButtonSelector:".submit-btn_avatar",inputSelector:".form__item",formSelector:".form_type_avatar"},(function(e){!function(e){a.innerText="Сохранить...",re.setAvatar(e).then((function(e){ue.initUserLoad(e),fe.close()})).catch((function(e){console.log(e)})).finally((function(){a.innerText="Сохранить"}))}(e)})),pe=new ne(t,(function(e){!function(e){i.innerText="Да...",re.deleteCard(e).then((function(){pe.getCard().delete(),pe.close()})).catch((function(e){console.log(e)})).finally((function(){i.innerText="Да"}))}(e)})),he=new E({renderer:de},".photo-cards");function de(e){var t={name:e.name,link:e.link,_id:e._id,likes:e.likes,owner:e.owner,handleClick:_e,deleteHandleClick:ye,removeLike:me,setLike:ve};return new k(t,".template-card",r,ue.getUserId()).generateCard()}function _e(e,t){ce.open(e,t)}function ye(e){y.value=e.cardId,pe.setCard(e),pe.open()}function ve(e,t){return re.useLike(e).then((function(e){t(e.likes)}))}function me(e,t){return re.removeLike(e).then((function(e){t(e.likes)}))}p.addEventListener("click",(function(){var e=ue.getUserInfo();d.value=e.name,_.value=e.job,oe.clearErrorMessages(),se.open()})),h.addEventListener("click",(function(){le.open(),ie.clearErrorMessages()})),oe.enableValidation(),ie.enableValidation(),ae.enableValidation(),ce.setEventListeners(),se.setEventListenersForm(),pe.setEventListeners(),fe.setEventListenersForm(),ue.setEventListeners(),le.setEventListenersForm(),o.src=m,re.getUserInfo().then((function(e){ue.initUserLoad(e),ue.setUserId(e._id),v.innerHTML="",re.loadAllCards().then((function(e){console.log(e),he.setData(e),he.renderArray()})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})()})();