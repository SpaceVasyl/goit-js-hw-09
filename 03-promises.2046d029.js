const e=document.querySelector(".form"),t=document.querySelector("button"),o={};function n(e,t,o){return new Promise(((n,i)=>{const s=Math.random()>.3;setTimeout((()=>{s&&n({position:e,delay:t,step:o}),i({position:e,delay:t,step:o})}),t+(e-1)*o)}))}e.addEventListener("input",(function(e){o[e.target.name]=e.target.value})),t.addEventListener("click",(function(e){e.preventDefault();for(let e=1;e<=o.amount;e++)e<=o.amount&&n(e,Number(o.delay),Number(o.step)).then((({position:e,delay:t,step:o})=>{console.log(`✅ Fulfilled promise ${e} in ${t+(e-1)*o}ms`)})).catch((({position:e,delay:t,step:o})=>{console.log(`❌ Rejected promise ${e} in ${t+(e-1)*o}ms`)}))}));
//# sourceMappingURL=03-promises.2046d029.js.map