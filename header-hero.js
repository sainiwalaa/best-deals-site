const API =
"https://script.google.com/macros/s/AKfycbw36GYkYHmCWmCooX04kIBbXYoAvyFC-3WkP8zLGCa96ArhalMssxPgd6svBvqy3NFA/exec";

fetch(API)
.then(r => r.json())
.then(d => {

  /* ===== HEADER + MARQUEE ===== */
  document.body.insertAdjacentHTML("afterbegin", `
  <style>
  #sw-header{background:#131921;color:#fff}
  #sw-top{display:flex;justify-content:space-between;align-items:center;padding:14px 20px}
  #sw-logo{font-size:22px;font-weight:700}
  #sw-menu a{color:#fff;margin:0 10px;text-decoration:none;font-weight:600}
  #sw-marquee{background:#ff9900;color:#000;padding:8px;overflow:hidden}
  #sw-marquee span{display:inline-block;white-space:nowrap;animation:mar 16s linear infinite}
  @keyframes mar{from{transform:translateX(100%)}to{transform:translateX(-100%)}}
  </style>

  <header id="sw-header">
    <div id="sw-top">
      <div id="sw-logo">SAINIWALAA</div>
      <nav id="sw-menu"></nav>
    </div>
    <div id="sw-marquee"><span></span></div>
  </header>

  <section id="sw-hero"></section>
  `);

  /* MENU (STATIC for now if needed later from sheet) */
  const menu = document.getElementById("sw-menu");
  menu.innerHTML = `
    <a href="index.html">🏠 Home</a>
    <a href="amazon.html">🔥 Amazon Deals</a>
    <a href="jaipurkurti.html">👗 Jaipur Kurtis</a>
  `;

  /* MARQUEE */
  if(d.marquee){
    document.querySelector("#sw-marquee span").innerText =
      d.marquee.filter(x=>x.SHOW==="YES").map(x=>x.TEXT).join("  |  ");
  }

  /* ===== HERO SLIDER ===== */
  const hero = document.getElementById("sw-hero");
  hero.innerHTML = `
  <style>
  #sw-hero{position:relative;height:320px;overflow:hidden}
  .slide{position:absolute;inset:0;display:none}
  .slide img{width:100%;height:100%;object-fit:cover}
  .cap{
    position:absolute;bottom:20px;left:20px;
    background:rgba(0,0,0,.6);color:#fff;
    padding:14px;border-radius:10px
  }
  .cap a{
    display:inline-block;margin-top:8px;
    background:#ff9900;color:#000;
    padding:6px 14px;border-radius:6px;
    text-decoration:none;font-weight:700
  }
  </style>
  `;

  d.hero.filter(x=>x.SHOW==="YES").forEach(x=>{
    hero.innerHTML += `
    <div class="slide">
      <img src="${x.IMAGE_URL}">
      <div class="cap">
        <h3>${x.TITLE||""}</h3>
        <p>${x.SUB_TITLE||""}</p>
        ${x.BUTTON_TEXT ? `<a href="${x.BUTTON_LINK}">${x.BUTTON_TEXT}</a>` : ``}
      </div>
    </div>`;
  });

  let slides=document.querySelectorAll(".slide"),i=0;
  if(slides.length){
    slides[0].style.display="block";
    setInterval(()=>{
      slides[i].style.display="none";
      i=(i+1)%slides.length;
      slides[i].style.display="block";
    },3500);
  }

})
.catch(e=>console.error("API ERROR",e));
