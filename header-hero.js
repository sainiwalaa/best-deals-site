const API =
"https://script.google.com/macros/s/AKfycbxajNF_583kuHsHZuky-oolW6vumnUtdy6t3OU_Rj94C5aYe8RDxO-qPhHR-0hixzjxuA/exec";

fetch(API)
.then(res => res.json())
.then(data => {

  /* ========== HEADER MENU ========== */
  const menuBox = document.getElementById("menu");
  if(menuBox && data.menu){
    data.menu.forEach(m=>{
      menuBox.innerHTML += `
        <a href="${m.link}">${m.text}</a>
      `;
    });
  }

  /* ========== HERO TITLE ========== */
  const titleRow = data.hero.find(x => x.type === "TITLE");
  if(titleRow){
    document.getElementById("hero-title").innerText = titleRow.text;
  }

  /* ========== TAGS ========== */
  const tagBox = document.getElementById("hero-tags");
  data.hero.filter(x => x.type === "TAG")
    .forEach(t=>{
      tagBox.innerHTML += `<div class="catbox">${t.text}</div>`;
    });

  /* ========== NOTICE ========== */
  const noticeRow = data.hero.find(x => x.type === "NOTICE");
  if(noticeRow){
    document.getElementById("hero-notice").innerText = noticeRow.text;
  }

  /* ========== SLIDER ========== */
  const slides = data.hero
    .filter(x => x.type === "SLIDE")
    .map(x => x.image);

  let i = 0;
  const img = document.getElementById("sliderImg");

  if(slides.length){
    img.src = slides[0];
    setInterval(()=>{
      i = (i + 1) % slides.length;
      img.src = slides[i];
    },3000);
  }

})
.catch(err=>{
  console.error("Header-Hero API Error", err);
});
