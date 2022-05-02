import{o as u,c as p,a as i,t as f,b as d,d as h,e as g}from"./vendor.5e942115.js";const v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};v();var _="./vcard.svg";const y={class:"max-w-2xl mx-auto mx-4 px-4 mt-10"},x=i("h1",{class:"font-normal leading-tight text-3xl mb-10"},"Marko Markovi\u0107",-1),w=i("section",{class:"flex items-center mb-5 leading-none"},[i("div",{class:"min-w-5 min-h-5 mr-4 i-tabler-map-pin"}),i("p",null,[d("is currently in "),i("b",null,"Dubai"),d(", United Arab Emirates")])],-1),k={class:"flex items-center mb-5 leading-none"},A=i("div",{class:"min-w-5 min-h-5 mr-4 i-tabler-hourglass"},null,-1),D=h('<section class="flex items-center mb-5 leading-none"><div class="min-w-5 min-h-5 mr-4 i-tabler-language"></div><p>speaks <b>Serbian</b>, <b>English</b>, and <b>German</b></p></section><section class="flex items-center mb-5 leading-none"><div class="min-w-5 min-h-5 mr-4 i-tabler-mail"></div><p> uses <a href="mailto:okram@civokram.com"><b>okram@civokram.com</b></a> as a primary email address </p></section><section class="flex items-center mb-5 leading-none"><div class="min-w-5 min-h-5 mr-4 i-tabler-phone"></div><p> or on <a href="tel:+971502526569"><b><abbr title="United Arab Emirates">+971</abbr> 50 252 6569</b></a> when in UAE </p></section><section class="flex items-center mb-5 leading-none"><div class="min-w-5 min-h-5 mr-4 i-tabler-phone"></div><p> can be reached on <a href="tel:+38162200512"><b><abbr title="Serbia">+381</abbr> 62 200 512</b></a> phone number when in Serbia </p></section><section class="flex items-center mb-5 leading-none"><div class="min-w-5 min-h-5 mr-4 i-tabler-brand-github"></div><p> codes on <a href="https://github.com/markomarkovic/">GitHub: <b>markomarkovic</b></a></p></section><section class="flex items-center mb-5 leading-none"><div class="min-w-5 min-h-5 mr-4 i-tabler-history"></div><p> touches up his <a href="https://markomarkovic.github.io/cv/"><abbr title="Curriculum Vitae"><b>CV</b></abbr></a> only when looking for work </p></section><section class="flex items-center mb-5 leading-none"><div class="min-w-5 min-h-5 mr-4 i-tabler-id"></div><p> and offers a <a href="/marko-markovic.vcard"><b>VCard for download</b></a> or scan below </p></section><img src="'+_+'" alt="VCard" class="my-10"><footer><div class="pt-5 text-gray-300 text-right text-sm"> Last update: 2022-05-02 </div></footer>',9),E={setup(b){function r(o=1980,s=6,e=17){const t=new Date(o,s-1,e),n=new Date;let m=n.getFullYear()-t.getFullYear(),a=n.getMonth()-t.getMonth(),l=n.getDate()-t.getDate();a<0&&(m--,a+=12),l<0&&(a=Math.max(0,a-1),l+=30);let c=`${m} years`;return a!==0&&(c+=`, ${a} months`),l!==0&&(c+=`, ${l} days`),c+=" old",c}return(o,s)=>(u(),p("div",y,[x,w,i("section",k,[A,i("p",null," is "+f(r()),1)]),D]))}};g(E).mount("#app");
