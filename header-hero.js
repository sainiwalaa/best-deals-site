const API =
"https://script.google.com/macros/s/AKfycbw36GYkYHmCWmCooX04kIBbXYoAvyFC-3WkP8zLGCa96ArhalMssxPgd6svBvqy3NFA/exec";

fetch(API)
.then(r=>r.json())
.then(d=>{

let h = `
<style>
#main-header{
  background:#131921;
  color:#fff;
  padding:15px;
}
#menu{
  display:flex;
  gap:15px;
  flex-wrap:wrap;
}
#menu a{
  color:#fff;
  text-decoration:none;
  font-weight:600;
}
#hero{
  background:#232f3e;
  color:#fff;
  padding:25px;
  text-align:center;
}
#hero img{
  max-width:100%;
  border-radius:12px;
  margin-top:15px;
}
</style>

<header id="main-header">
  <div id="menu"></div>
</header>

<section id="hero">
  <div id="heroText"></div>
  <div id="heroImg"></div>
</section>
`;

document.body.insertAdjacentHTML("afterbegin", h);

/* MENU */
d.menu.forEach(m=>{
  document.getElementById("menu").innerHTML +=
  `<a href="${m.link}">${m.text}</a>`;
});

/* HERO */
d.hero.forEach(x=>{
  if(x.type==="TITLE"){
    document.getElementById("heroText").innerHTML += `<h2>${x.text}</h2>`;
  }
  if(x.type==="NOTICE"){
    document.getElementById("heroText").innerHTML += `<p>${x.text}</p>`;
  }
  if(x.type==="SLIDE"){
    document.getElementById("heroImg").innerHTML +=
    `<img src="${x.image}">`;
  }
});
});
