/*! (c) Andrea Giammarchi (ISC) */var wickedElements=function(t){"use strict";var n;try{new Event("!"),n=Event}catch(e){try{new CustomEvent("!"),n=CustomEvent}catch(e){n=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}}var r,i=n;try{r=(new WeakSet).constructor}catch(e){try{(e=(r=new WeakMap&&function(){this.$=new WeakMap}).prototype).add=function(e){return this.$.set(e,0),this},e.has=function(e){return this.$.has(e)},e.delete=function(e){return this.$.delete(e)}}catch(e){var o=0;(e=(r=function(){this.$=["__",Math.random(),o++,"__"].join("ws")}).prototype).add=function(e){return this.has(e)||t.defineProperty(e,this.$,{value:!0,configurable:!0}),this},e.has=function(e){return this.hasOwnProperty.call(e,this.$)},e.delete=function(e){return delete e[this.$]}}}var d=r,a=t.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n]||{})t.hasOwnProperty(r)&&(e[r]=t[r]);return e},c=document.contains||function(e){for(;e&&e!==this;)e=e.parentNode;return this===e},u=[].indexOf,s="matches"in document.documentElement?function(e,t){return e.matches(t)}:function(e,t){return(e.matchesSelector||e.webkitMatchesSelector||e.khtmlMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||function(e){var t=this.parentNode;return!!t&&-1<u.call(t.querySelectorAll(e),this)}).call(e,t)};var e,l,h,f,v,m,g,p=!0,w=[],b=[],E={},y={},N={Event:i,WeakSet:d,assign:a,document:document,define:function(e,t){p&&(p=!1,function(t){try{new MutationObserver(S).observe(t,{subtree:!0,childList:!0})}catch(e){t.addEventListener("DOMNodeInserted",function(e){S([{addedNodes:[e.target]}])},!1)}"complete"!==t.readyState&&t.addEventListener("DOMContentLoaded",L,{once:!0})}(N.document));var n=typeof e;if("string"===n){if(-1<w.indexOf(e))throw new Error("duplicated: "+e);w.push(e),b.push(t||{}),L(),e in E&&(E[e](b[b.length-1]),delete E[e])}else{if("object"!==n||1!==e.nodeType)throw new Error("undefinable: "+e);D(e,t||{})}},get:function(e){var t=w.indexOf(e);return t<0?null:a({},b[t])},whenDefined:function(t){return Promise.resolve(N.get(t)||new Promise(function(e){E[t]=e}))}},M=(h="dis"+(l="connected"),f=(e=N).Event,v=e.WeakSet,m=!0,g=new v,function(e){return m&&(m=!m,function(t){var c=null;try{new MutationObserver(i).observe(t,{subtree:!0,childList:!0})}catch(e){var n=0,r=[],o=function(e){r.push(e),clearTimeout(n),n=setTimeout(function(){i(r.splice(n=0,r.length))},0)};t.addEventListener("DOMNodeRemoved",function(e){o({addedNodes:[],removedNodes:[e.target]})},!0),t.addEventListener("DOMNodeInserted",function(e){o({addedNodes:[e.target],removedNodes:[]})},!0)}function i(e){c=new u;for(var t,n=e.length,r=0;r<n;r++)a((t=e[r]).removedNodes,h,l),a(t.addedNodes,l,h);c=null}function a(e,t,n){for(var r,o=new f(t),i=e.length,a=0;a<i;1===(r=e[a++]).nodeType&&d(r,o,t,n));}function d(e,t,n,r){g.has(e)&&!c[n].has(e)&&(c[r].delete(e),c[n].add(e),e.dispatchEvent(t));for(var o=e.children||[],i=o.length,a=0;a<i;d(o[a++],t,n,r));}function u(){this[l]=new v,this[h]=new v}}(e.ownerDocument)),g.add(e),e}),O={attributechanged:function(e){var o=e.Event;return function(t,e){var n={attributes:!0,attributeOldValue:!0},r=e instanceof Array&&e.length;r&&(n.attributeFilter=e.slice(0));try{new MutationObserver(c).observe(t,n)}catch(e){n.handleEvent=r?d:i,t.addEventListener("DOMAttrModified",n,!0)}return t};function i(e){a(e.target,e.attrName,e.prevValue)}function a(e,t,n){var r=new o("attributechanged");r.attributeName=t,r.oldValue=n,r.newValue=e.getAttribute(t),e.dispatchEvent(r)}function c(e){for(var t,n=0,r=e.length;n<r;n++)a((t=e[n]).target,t.attributeName,t.oldValue)}function d(e){-1<this.attributeFilter.indexOf(e.attrName)&&i(e)}}(N),connected:M,disconnected:M};function S(e){for(var t=0,n=e.length;t<n;t++)$(e[t].addedNodes,!1)}function L(){w.length&&$(N.document.querySelectorAll(w),!0)}function k(e){$(e.querySelectorAll(w),!0);for(var t,n,r=0,o=w.length;r<o;r++)n=w[r],!(t=y[n]||(y[n]=new d)).has(e)&&s(e,w[r])&&(t.add(e),D(e,b[r]))}function $(e,t){for(var n,r=0,o=e.length;r<o;r++)n=e[r],(t||1===n.nodeType)&&k(n)}function A(e,t,n,r){var o=t["on"+n];o&&(O[n](e,t.attributeFilter).addEventListener(n,o,!1),r&&c.call(N.document,e)&&e.dispatchEvent(new i(n)))}function D(e,t){A(e,t,"attributechanged",!1),A(e,t,"disconnected",!1),A(e,t,"connected",!0)}var P="attributeFilter",T="observedAttributes",V="ondisconnected",W="onattributechanged",x=t.create,F=t.defineProperty,_=t.getOwnPropertyNames;function j(e,t,n){t in e||F(e,t,{value:n})}function q(e){var t="on"+e.type;t in this&&this[t](e)}function C(e){this.el=e.currentTarget}return x(N,{define:{value:function(e,r){var o=new d,t={onconnected:c},i="function"==typeof r,a=i?r.prototype:r;function c(e){var t=e.currentTarget,n=e.type;t.removeEventListener(n,c),o.has(t)||(o.add(t),function(e,t,n,r,o){for(var i,a=!1,c=_(t),d=0,u=c.length;d<u;d++)"on"===(i=c[d]).slice(0,2)&&(r.addEventListener(i.slice(2),e,!1),i===o&&(a=!a));e.init(n),a&&e.handleEvent(n)}(i?new r:x(a),a,e,t,"on"+n))}V in a&&(t[V]=c),W in a&&(t[W]=c,t[P]=(i?r[T]:a[T])||a[P]||[]),j(a,"init",C),j(a,"handleEvent",q),N.define(e,t)}}})}(Object);
