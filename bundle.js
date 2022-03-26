(()=>{"use strict";var e={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".submit-btn",inactiveButtonClass:"submit-btn_disabled",inputErrorClass:"form__item_type_error",errorClass:"form__input-error_active"},t={popup:".popup_accept-delete-card",submitButtonSelector:".submit-btn_type_accept",inputSelector:!1,formSelector:".form-accept",hideInputSelector:".form__item_type_hide"},n={card:".card",like:".card__like",delete:".card__delete",picture:".card__picture",text:".card__text",counter:".card__like-counter"},r=document.querySelector(".form_profile"),o=document.querySelector(".form_card"),i=document.querySelector(".profile__info-btn"),c=document.querySelector(".profile__add-btn"),a=r.querySelector(".form__item_input_name-profile"),u=r.querySelector(".form__item_input_job-profile"),s=document.querySelector(t.hideInputSelector),l=document.querySelector(".photo-cards");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._image=t.link,this._cardSelectors=r,this._likes=t.likes,this._ownerId=t.owner._id,this.cardId=t._id,this._owner=t.owner,this._template=n,this.handleClick=t.handleClick,this.deleteHandleClick=t.deleteHandleClick}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(this._cardSelectors.card).cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this.likeButton=this._cardElement.querySelector(this._cardSelectors.like),this.deleteButton=this._cardElement.querySelector(this._cardSelectors.delete),this.cardPicture=this._cardElement.querySelector(this._cardSelectors.picture),this.carText=this._cardElement.querySelector(this._cardSelectors.text),this.counterLikes=this._cardElement.querySelector(this._cardSelectors.counter),this._setEventListeners(),this.cardPicture.src=this._image,this.cardPicture.alt=this._name,this.carText.textContent=this._name,this._cardElement}},{key:"toggleLikeButton",value:function(){this._likes.length>0?this.counterLikes.textContent=this._likes.length:0===this._likes.length&&(this.likeButton.classList.remove("card__like_active"),this.counterLikes.textContent=this._likes.length),this._renderLikeButton()}},{key:"_renderDeleteButton",value:function(){"a0e0e6e678e900e95b68fbd5"!==this._ownerId&&this.deleteButton.remove()}},{key:"_renderLikeButton",value:function(){0===this._likes.length?this.counterLikes.classList.add("card__like-counter_disabled"):this.counterLikes.classList.remove("card__like-counter_disabled")}},{key:"_setEventListeners",value:function(){var e=this;this.likeButton.addEventListener("click",(function(){e.toggleLikeButton()})),this.deleteButton.addEventListener("click",(function(){e.deleteHandleClick(e.cardId)})),this.cardPicture.addEventListener("click",(function(){return e.handleClick(e._name,e._image)})),this.toggleLikeButton(),this._renderDeleteButton()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this.hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"clearErrorMessages",value:function(){var e=this;this._inputList.forEach((function(t){e.hideInputError(t)})),this.toggleButtonState()}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderArray",value:function(){var e=this;this._data.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.name),this._job=document.querySelector(t.job),this._avatar=document.querySelector(t.avatar),this._id=null,this._handleClickAvatar=n}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"initUserLoad",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about,this._id=e._id}},{key:"setUserInfo",value:function(e){this._name.textContent=e.firstInput,this._job.textContent=e.secondInput,this._id=e._id}},{key:"setEventListeners",value:function(){this._avatar.addEventListener("click",this._handleClickAvatar)}}],n&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._handleCloseByEscape=this._handleCloseByEscape.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseByEscape)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseByEscape)}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("close-btn"))&&e.close()}))}},{key:"_handleCloseByEscape",value:function(e){"Escape"===e.key&&this.close()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function O(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e.popup))._name=t.popup.querySelector(e.popupDescription),t._image=t.popup.querySelector(e.popupImage),t}return t=c,(n=[{key:"open",value:function(e,t){this._name.textContent=e,this._image.src=t,this._image.alt=e,S(j(c.prototype),"open",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(k);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function R(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e.popup))._form=n.popup.querySelector(e.formSelector),n._inputList=Array.from(n._form.querySelectorAll(e.inputSelector)),n._submitHandler=t,n}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;B(x(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){B(x(c.prototype),"close",this).call(this),this._form.reset()}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(k);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers=n}var t,n;return t=e,(n=[{key:"_renderPromise",value:function(e){return e.then((function(e){if(e.ok)return e.json();throw"Error in GET promise"})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"get",value:function(e){var t=fetch("".concat(this._url,"/").concat(e),{method:"GET",headers:this._headers});return this._renderPromise(t)}},{key:"post",value:function(e,t){var n=fetch("".concat(this._url,"/").concat(e),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link,image:t.image})});return this._renderPromise(n)}},{key:"delete",value:function(e,t){var n=fetch("".concat(this._url,"/").concat(e,"/").concat(t),{method:"DELETE",headers:this._headers});return this._renderPromise(n)}},{key:"patch",value:function(e,t){var n=fetch("".concat(this._url,"/").concat(e),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)});return this._renderPromise(n)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._client=t}var t,n;return t=e,(n=[{key:"loadAllCards",value:function(){return this._client.get("cards")}},{key:"createCard",value:function(e){return this._client.post("cards",e)}},{key:"deleteCard",value:function(e){return this._client.delete("cards",e)}},{key:"getUserInfo",value:function(){return this._client.get("users/me")}},{key:"setUserInfo",value:function(e){return this._client.patch("users/me",{name:e.name,about:e.about})}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},J(e,t)}function G(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e,t))._submitHandler=t,n._hideInput=n._form.querySelector(e.hideInputSelector),n}return t=c,(n=[{key:"_getInputValue",value:function(){return this._hideInput.value}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),console.log(e._hideInput),e._submitHandler(e._getInputValue())}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(A),K=new H(new D("https://mesto.nomoreparties.co/v1/cohort-38",{authorization:"fc656d80-9f90-48b6-9907-1de866c0eaf7","Content-Type":"application/json",Accept:"application/json: charset=utf-8"})),Q=new d(e,r),W=new d(e,o),X=new L({popup:".popup_photo",popupDescription:".popup__photo-paragraph",popupImage:".popup__photo-image"}),Y=new v({name:".profile__name",job:".profile__job",avatar:".profile__avatar-image"},(function(){ee.open()}),K.getUserInfo().then((function(e){Y.initUserLoad(e)}))),Z=new A({popup:".popup_profile",submitButtonSelector:".submit-btn_profile",inputSelector:".form__item",formSelector:".form_profile",hideInputSelector:!1},(function(e){!function(e){var t={name:e.profileName,about:e.profileJob};K.setUserInfo(t).then((function(){Z.close(),K.getUserInfo().then((function(e){Y.setUserInfo({firstInput:e.name,secondInput:e.about})}))})).then((function(){K.getUserInfo().then((function(e){Y.initUserLoad(e)}))}))}(e)})),$=new A({popup:".popup_card",submitButtonSelector:".submit-btn_card",inputSelector:".form__item",formSelector:".form_card",hideInputSelector:!1},(function(e){!function(e){var t={name:e.name,link:e.link,handleClick:oe,deleteHandleClick:ie};K.createCard(t).then((function(){ne(),$.close()}))}(e)})),ee=new A({popup:".popup_avatar",submitButtonSelector:".submit-btn_avatar",inputSelector:".form__item",formSelector:".form_type_avatar"},(function(e){!function(e){console.log(e),ee.close()}(e)})),te=new F(t,(function(e){K.deleteCard(e).then((function(){te.close(),ne()}))}));function ne(){l.innerHTML="",K.loadAllCards().then((function(e){new _({items:e,renderer:re},".photo-cards").renderArray()}))}function re(e){var t={name:e.name,link:e.link,_id:e._id,likes:e.likes,owner:e.owner,handleClick:oe,deleteHandleClick:ie};return new p(t,".template-card",n).generateCard()}function oe(e,t){X.open(e,t)}function ie(e){s.value=e,te.open()}i.addEventListener("click",(function(){var e=Y.getUserInfo();a.value=e.name,u.value=e.job,Q.clearErrorMessages(),Z.open()})),c.addEventListener("click",(function(){$.open(),W.clearErrorMessages()})),Q.enableValidation(),W.enableValidation(),X.setEventListeners(),te.setEventListeners(),Z.setEventListeners(),ee.setEventListeners(),Y.setEventListeners(),$.setEventListeners(),ne()})();