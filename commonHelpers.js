import{i as u,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(o){const s="https://pixabay.com/api/",r="43229281-da9ce3bce46360bd3cf91ebb8",i=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:l})=>`<li class="list-item">
      <a class="item-link" href="${r}">
      <img src="${s}" alt="${i}"></a>
      <div class="img-desc">
        <h2 class="title">Likes <p class="p">${e}</p></h2>
        <h2 class="title">Views <p class="p">${t}</p></h2>
        <h2 class="title">Comments <p class="p">${n}</p></h2>
        <h2 class="title">Downloads <p class="p">${l}</p></h2>
      </div>
      
      </li>`).join("")}const p=document.querySelector(".js-form"),c=document.querySelector(".preloader"),a=document.querySelector(".js-list");p.addEventListener("submit",h);function h(o){o.preventDefault(),a.innerHTML="";const s=o.currentTarget.elements.query.value.trim().toLowerCase();c.classList.remove("is-hidden"),f(s).then(r=>{if(!r.hits.length){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"#fff"});return}a.innerHTML=m(r.hits),new d(".gallery a",{captionDelay:250}),a.refresh()}).catch(r=>r.statusText).finally(()=>c.classList.add("is-hidden")),o.currentTarget.reset()}
//# sourceMappingURL=commonHelpers.js.map
