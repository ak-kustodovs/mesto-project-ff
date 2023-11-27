(()=>{"use strict";var e,t,o,n,r={579:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(75),r=o(670),c=o(635),a=o(858),i=document.querySelector(".places__list"),u=document.querySelector(".popup_type_image"),s=u.querySelector(".popup__image"),l=u.querySelector(".popup__caption"),f=document.querySelector(".popup_type_edit"),p=document.querySelector(".profile__edit-button"),d=document.forms["edit-profile"],m=d.elements.name,h=d.elements.description,_=d.querySelector(".popup__button"),v=document.querySelector(".profile__title"),y=document.querySelector(".profile__description"),S=document.querySelector(".profile__image"),b=document.querySelector(".popup_type_new-card"),g=document.querySelector(".profile__add-button"),k=document.forms["new-place"],C=k.elements["place-name"],q=k.elements.link,L=k.querySelector(".popup__button"),E=document.querySelector(".popup_type_delete"),x=document.forms["delete-form"],w=document.querySelector(".popup_type_update-avatar"),j=document.querySelector(".profile__image-container"),T=document.forms["update-avatar"],P=T.elements.link,A=T.querySelector(".popup__button"),M=await(0,n.vm)(),z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function D(e){x.dataset.id=e,(0,c.M)(E)}function O(e){s.src=e.target.src,s.alt=e.target.alt,l.textContent=e.target.alt,(0,c.M)(u)}function B(e){if(e.target.classList.contains("popup__close")){var t=e.target.closest(".popup");(0,c.j)(t)}}function N(e){e.preventDefault(),_.textContent="Сохранение...",(0,n.ck)(m.value,h.value).then((function(e){console.log(e),v.textContent=m.value,y.textContent=h.value,(0,c.j)(f),(0,a.T)(d,z)})).catch((function(e){console.log(e)})).finally((function(){_.textContent="Сохранить"}))}function J(e){e.preventDefault(),L.textContent="Сохранение...";var t=C.value,o=q.value;(0,n.YF)(t,o).then((function(){location.reload(),L.textContent="Сохранить"})).catch((function(e){console.log(e)}))}function F(e){e.preventDefault(),(0,n.f1)(x.dataset.id).then((function(){location.reload()})).catch((function(e){console.log(e)}))}function H(e){e.preventDefault(),A.textContent="Сохранение...",(0,n.n1)(P.value).then((function(){location.reload()})).catch((function(e){console.log(e)})).finally((function(){A.textContent="Сохранить"}))}Promise.all([n.vm,n.Ai]).then((function(){M.forEach((function(e){var t,o;t=e,o=(0,r.L)(t,D,r.q,O),i.append(o)})),(0,n.Ai)(v,y,S)})).catch((function(e){console.log(e)})),document.addEventListener("click",(function(e){B(e)})),p.addEventListener("click",(function(){m.value=v.textContent,h.value=y.textContent,(0,a.T)(d,z),(0,c.M)(f)})),d.addEventListener("submit",N),g.addEventListener("click",(function(){k.reset(),(0,a.T)(k,z),(0,c.M)(b)})),k.addEventListener("submit",J),x.addEventListener("submit",F),j.addEventListener("click",(function(){T.reset(),(0,a.T)(T,z),(0,c.M)(w)})),T.addEventListener("submit",H),(0,a.u)(z),t()}catch(V){t(V)}}),1)},75:(e,t,o)=>{function n(){return fetch("https://nomoreparties.co/v1/wff-cohort-1/cards",{headers:{authorization:"70406093-005e-40e7-aee9-7a5cf3c18ff0"}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(e){return e})).catch((function(e){console.log(e)}))}function r(e,t,o){return fetch("https://nomoreparties.co/v1/wff-cohort-1/users/me",{headers:{authorization:"70406093-005e-40e7-aee9-7a5cf3c18ff0"}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(n){e.textContent=n.name,t.textContent=n.about,o.style.backgroundImage="url('".concat(n.avatar,"')")})).catch((function(e){console.log(e)}))}function c(e,t){return fetch("https://nomoreparties.co/v1/wff-cohort-1/users/me",{method:"PATCH",headers:{authorization:"70406093-005e-40e7-aee9-7a5cf3c18ff0","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){console.log(e)}))}function a(e,t){return fetch("https://nomoreparties.co/v1/wff-cohort-1/cards",{method:"POST",headers:{authorization:"70406093-005e-40e7-aee9-7a5cf3c18ff0","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){console.log(e)}))}function i(e){return fetch("https://nomoreparties.co/v1/wff-cohort-1/cards/".concat(e),{method:"DELETE",headers:{authorization:"70406093-005e-40e7-aee9-7a5cf3c18ff0","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){console.log(e)}))}function u(e){return fetch("https://nomoreparties.co/v1/wff-cohort-1/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"70406093-005e-40e7-aee9-7a5cf3c18ff0","Content-Type":"application/json"}}).catch((function(e){console.log(e)}))}function s(e){return fetch("https://nomoreparties.co/v1/wff-cohort-1/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"70406093-005e-40e7-aee9-7a5cf3c18ff0","Content-Type":"application/json"}}).catch((function(e){console.log(e)}))}function l(e){return fetch("https://nomoreparties.co/v1/wff-cohort-1/users/me/avatar",{method:"PATCH",headers:{authorization:"70406093-005e-40e7-aee9-7a5cf3c18ff0","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){console.log(e)}))}o.d(t,{$x:()=>s,Ai:()=>r,YF:()=>a,ck:()=>c,f1:()=>i,n1:()=>l,un:()=>u,vm:()=>n})},670:(e,t,o)=>{o.d(t,{L:()=>a,q:()=>i});var n=o(75),r=document.querySelector("#card-template").content,c="3fd82b71a19a0c85d3b383ec";function a(e,t,o,n){var a=r.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__image"),u=a.querySelector(".card__title"),s=a.querySelector(".card__delete-button"),l=a.querySelector(".card__like-button"),f=a.querySelector(".card__like-count"),p=e._id;return i.src=e.link,i.alt=e.name,u.textContent=e.name,i.addEventListener("click",n),l.addEventListener("click",(function(){o(l,f,p)})),f.textContent=e.likes.length,e.owner._id!=c?s.style.display="none":s.addEventListener("click",(function(){t(p)})),a}function i(e,t,o){e.classList.contains("card__like-button_is-active")?(0,n.$x)(o).then((function(e){return e.json()})).then((function(o){e.classList.remove("card__like-button_is-active"),t.textContent=o.likes.length})).catch((function(e){console.log(e)})):(0,n.un)(o).then((function(e){return e.json()})).then((function(o){console.log(o),e.classList.add("card__like-button_is-active"),t.textContent=o.likes.length})).catch((function(e){console.log(e)}))}},635:(e,t,o)=>{function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c),document.addEventListener("mousedown",a)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c),document.removeEventListener("mousedown",a)}function c(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function a(e){e.target.classList.contains("popup_is-opened")&&r(document.querySelector(".popup_is-opened"))}o.d(t,{M:()=>n,j:()=>r})},858:(e,t,o)=>{function n(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,o,n,a,i){var u=Array.from(e.querySelectorAll(t)),s=e.querySelector(a);c(u,s,i),u.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,o,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?r(e,t,o,n):function(e,t,o,n,r){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n),c.textContent=o,c.classList.add(r)}(e,t,t.validationMessage,o,n)}(e,t,o,n),c(u,s,i)}))}))}(t,e.inputSelector,e.inputErrorClass,e.errorClass,e.submitButtonSelector,e.inactiveButtonClass)}))}function r(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o),r.textContent="",r.classList.remove(n)}function c(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(o):t.classList.add(o)}function a(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector));e.querySelector(t.submitButtonSelector).classList.add(t.inactiveButtonClass),o.forEach((function(o){r(e,o,t.inputErrorClass,t.errorClass)}))}o.d(t,{T:()=>a,u:()=>n})}},c={};function a(e){var t=c[e];if(void 0!==t)return t.exports;var o=c[e]={exports:{}};return r[e](o,o.exports,a),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(r,c,a)=>{var i;a&&((i=[]).d=-1);var u,s,l,f=new Set,p=r.exports,d=new Promise(((e,t)=>{l=t,s=e}));d[t]=p,d[e]=e=>(i&&e(i),f.forEach(e),d.catch((e=>{}))),r.exports=d,c((r=>{var c;u=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var c=[];c.d=0,r.then((e=>{a[t]=e,n(c)}),(e=>{a[o]=e,n(c)}));var a={};return a[e]=e=>e(c),a}}var i={};return i[e]=e=>{},i[t]=r,i})))(r);var a=()=>u.map((e=>{if(e[o])throw e[o];return e[t]})),s=new Promise((t=>{(c=()=>t(a)).r=0;var o=e=>e!==i&&!f.has(e)&&(f.add(e),e&&!e.d&&(c.r++,e.push(c)));u.map((t=>t[e](o)))}));return c.r?s:a()}),(e=>(e?l(d[o]=e):s(p),n(i)))),i&&i.d<0&&(i.d=0)},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(579)})();