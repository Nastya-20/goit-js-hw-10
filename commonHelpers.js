import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                        */import{f as y,i as p}from"./assets/vendor-77e16229.js";const a=document.querySelector("[data-start]"),u=document.querySelector("#datetime-picker"),r={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let m;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(p.error({title:"Error",message:"Please choose a date in the future"}),a.disabled=!0):(m=t,a.disabled=!1)}};y(u,S);a.addEventListener("click",D);function D(){a.disabled=!0,u.disabled=!0;const e=setInterval(()=>{const n=m-new Date;if(n<=0){clearInterval(e),l(0,0,0,0),u.disabled=!1;return}const{days:o,hours:i,minutes:c,seconds:d}=T(n);l(o,i,c,d)},1e3)}function T(e){const c=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:f,seconds:h}}function l(e,t,n,o){r.days.textContent=s(e),r.hours.textContent=s(t),r.minutes.textContent=s(n),r.seconds.textContent=s(o)}function s(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map