import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                        */import{f as y,i as v}from"./assets/vendor-77e16229.js";const t=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),r={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let m=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=e[0];o<=new Date?(v.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0,t.classList.remove("active")):(m=o,t.disabled=!1,t.classList.add("active"))}};y(d,p);t.addEventListener("click",S);function S(){t.disabled=!0,t.classList.remove("active"),d.disabled=!0;const e=setInterval(()=>{const s=m-new Date;if(s<=0){clearInterval(e),l(0,0,0,0),d.disabled=!1,t.disabled=!0,t.classList.remove("active");return}const{days:n,hours:u,minutes:c,seconds:i}=b(s);l(n,u,c,i)},1e3)}function b(e){const c=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:i,minutes:f,seconds:h}}function l(e,o,s,n){r.days.textContent=a(e),r.hours.textContent=a(o),r.minutes.textContent=a(s),r.seconds.textContent=a(n)}function a(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map