const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let l=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}d.disabled=!0,t.addEventListener("click",(()=>{e.style.backgroundColor=r(),t.disabled=!0,d.disabled=!1;l=setInterval((()=>{e.style.backgroundColor=r()}),1e3)})),d.addEventListener("click",(()=>{clearInterval(l),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.de33b0dd.js.map