!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var r=i("iU1Pc"),u=document.querySelector(".form"),a=document.querySelector("button"),c={};function l(e,t,n){return new Promise((function(o,i){var r=Math.random()>.3;setTimeout((function(){r&&o({position:e,delay:t,step:n}),i({position:e,delay:t,step:n})}),t+(e-1)*n)}))}u.addEventListener("input",(function(e){c[e.target.name]=e.target.value})),a.addEventListener("click",(function(t){t.preventDefault();for(var n=1;n<=c.amount;n++)n<=c.amount&&l(n,Number(c.delay),Number(c.step)).then((function(t){var n=t.position,o=t.delay,i=t.step;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o+(n-1)*i,"ms"))})).catch((function(t){var n=t.position,o=t.delay,i=t.step;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o+(n-1)*i,"ms"))}))}))}();
//# sourceMappingURL=03-promises.ef4b0e6e.js.map