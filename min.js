/*! (c) Andrea Giammarchi - ISC */var wickedElements=function(e){"use strict";var o={};try{o.WeakSet=WeakSet}catch(e){!function(t){var n=new t,e=r.prototype;function r(e){n.set(this,new t),e&&e.forEach(this.add,this)}e.add=function(e){return n.get(this).set(e,1),this},e.delete=function(e){return n.get(this).delete(e)},e.has=function(e){return n.get(this).has(e)},o.WeakSet=r}(WeakMap)}var t,d=o.WeakSet,n={};function r(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}n.CustomEvent="function"==typeof CustomEvent?CustomEvent:(r[t="prototype"]=new r("").constructor[t],r);var i,a=n.CustomEvent,c=e.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n]||{})t.hasOwnProperty(r)&&(e[r]=t[r]);return e},u=(i=[].indexOf,"matches"in document.documentElement?function(e){return this.matches(e)}:function(e){var t=this;return(t.matchesSelector||t.webkitMatchesSelector||t.khtmlMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||function(e){var t=this.parentNode;return!!t&&-1<i.call(t.querySelectorAll(e),this)}).call(t,e)});var s,l,f,h,v,p,m,y,b,g={Event:a,WeakSet:d},E=document.contains||function(e){for(;e&&e!==this;)e=e.parentNode;return this===e},w=!0,O=[],S=[],N={},M={},L={define:function(e,t){w&&(w=!1,function(t){try{new MutationObserver(W).observe(t,{subtree:!0,childList:!0})}catch(e){t.addEventListener("DOMNodeInserted",function(e){W([{addedNodes:[e.target]}])},!1)}"complete"!==t.readyState&&t.addEventListener("DOMContentLoaded",F,{once:!0})}(document));var n=typeof e;if("string"==n){if(x(e))throw new Error("duplicated: "+e);if(O.push(e),S.push(t||{}),F(),e in N){var r=x(e);r&&(N[e](r),delete N[e])}}else{if("object"!=n||1!==e.nodeType)throw new Error("undefinable: "+e);I(e,t||{})}},get:x,whenDefined:function(t){return Promise.resolve(x(t)||new Promise(function(e){N[t]=e}))}},k=(f="dis"+(l="connected"),h=(s=g).Event,v=s.WeakSet,p=!0,m=new v,function(e){return p&&(p=!p,function(t){var c=null;try{new MutationObserver(i).observe(t,{subtree:!0,childList:!0})}catch(e){var n=0,r=[],o=function(e){r.push(e),clearTimeout(n),n=setTimeout(function(){i(r.splice(n=0,r.length))},0)};t.addEventListener("DOMNodeRemoved",function(e){o({addedNodes:[],removedNodes:[e.target]})},!0),t.addEventListener("DOMNodeInserted",function(e){o({addedNodes:[e.target],removedNodes:[]})},!0)}function i(e){c=new d;for(var t,n=e.length,r=0;r<n;r++)a((t=e[r]).removedNodes,f,l),a(t.addedNodes,l,f);c=null}function a(e,t,n){for(var r,o=new h(t),i=e.length,a=0;a<i;1===(r=e[a++]).nodeType&&u(r,o,t,n));}function u(e,t,n,r){m.has(e)&&!c[n].has(e)&&(c[r].delete(e),c[n].add(e),e.dispatchEvent(t));for(var o=e.children||[],i=o.length,a=0;a<i;u(o[a++],t,n,r));}function d(){this[l]=new v,this[f]=new v}}(e.ownerDocument)),m.add(e),e}),C={attributechanged:(y=g,b=y.Event,function(t,e){var n={attributes:!0,attributeOldValue:!0},r=e instanceof Array&&e.length;r&&(n.attributeFilter=e.slice(0));try{new MutationObserver(D).observe(t,n)}catch(e){n.handleEvent=r?P:A,t.addEventListener("DOMAttrModified",n,!0)}return t}),connected:k,disconnected:k};function A(e){T(e.target,e.attrName,e.prevValue)}function T(e,t,n){var r=new b("attributechanged");r.attributeName=t,r.oldValue=n,r.newValue=e.getAttribute(t),e.dispatchEvent(r)}function D(e){for(var t,n=0,r=e.length;n<r;n++)T((t=e[n]).target,t.attributeName,t.oldValue)}function P(e){-1<this.attributeFilter.indexOf(e.attrName)&&A(e)}function W(e){for(var t=0,n=e.length;t<n;t++)q(e[t].addedNodes,!1)}function x(e){var t=O.indexOf(e);return t<0?null:c({},S[t])}function F(){O.length&&q(document.querySelectorAll(O),!0)}function V(e){q(e.querySelectorAll(O),!0);for(var t,n,r=0,o=O.length;r<o;r++)n=O[r],!(t=M[n]||(M[n]=new d)).has(e)&&u.call(e,O[r])&&(t.add(e),I(e,S[r]))}function q(e,t){for(var n,r=0,o=e.length;r<o;r++)n=e[r],!t&&1!==n.nodeType||V(n)}function j(e,t,n,r){var o=t["on"+n];o&&(C[n](e,t.attributeFilter).addEventListener(n,o,!1),r&&E.call(document,e)&&e.dispatchEvent(new a(n)))}function I(e,t){j(e,t,"attributechanged",!1),j(e,t,"disconnected",!1),j(e,t,"connected",!0)}var z="ondisconnected",R="onattributechanged",B=e.create,G=e.defineProperty,H=e.getOwnPropertyNames,J=e.getPrototypeOf,K=e.hasOwnProperty,Q=e.prototype;function U(e,t,n){t in e||G(e,t,{value:n})}function X(e){var t="on"+e.type;t in this&&this[t](e)}function Y(e){this.el=e.currentTarget}return B(L,{define:{value:function(e,r){var o=new d,t={onconnected:u},i="function"==typeof r,a=i?r.prototype:r,c=function(e){var t=[];for(;e&&e!==Q;){for(var n=H(e),r=0,o=n.length;r<o;){var i=n[r++];"on"===i.slice(0,2)&&"Options"!==i.slice(-7)&&t.push({type:i.slice(2),options:e[i+"Options"]||!1})}e=J(e)}return t}(a);function u(e){var t=e.currentTarget,n=e.type;t.removeEventListener(n,u,!1),o.has(t)||(o.add(t),function(e,t,n,r,o){var i=!1,a=0,c=t.length;for(;a<c;){var u=t[a++];r.addEventListener(u.type,e,u.options),i=i||u.type===o}e.init(n),i&&e.handleEvent(n)}(i?new r:B(a),c,e,t,n))}z in a&&(t[z]=u),R in a&&(t[R]=u,t.attributeFilter=(i?r.observedAttributes:a.observedAttributes)||a.attributeFilter||[]),U(a,"init",Y),U(a,"handleEvent",X),L.define(e,t),K.call(r,"style")&&function(e){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.textContent=e;(document.head||document.querySelector("head")).appendChild(t)}(r.style)}}})}(Object);
