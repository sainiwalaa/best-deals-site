<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' name='viewport'/>
  <title>Sainiwalaa – Premium Experience</title>

  <!-- Premium Typography (Outfit & Plus Jakarta Sans) -->
  <link href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap' rel='stylesheet'/>

  <b:skin><![CDATA[
    /* ==========================================
       PREMIUM COLOR PALETTE & DESIGN SYSTEM
       ========================================== */
    :root { 
      --bg-dark: #0a0c10;
      --card-bg: rgba(255, 255, 255, 0.03);
      --border-light: rgba(255, 255, 255, 0.08);
      --primary-accent: #ff9900;
      --primary-gradient: linear-gradient(135deg, #180306 0%, #3d0c11 50%, #0a0c10 100%);
      --gold-gradient: linear-gradient(135deg, #ffe082 0%, #ffb300 100%);
      --text-main: #ffffff;
      --text-muted: #94a3b8;
      --glass-bg: rgba(10, 12, 16, 0.75);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Plus Jakarta Sans', sans-serif; }
    body { background: var(--bg-dark); color: var(--text-main); overflow-x: hidden; }

    /* ==========================================
       PREMIUM GLASS HEADER
       ========================================== */
    #main-header {
      background: var(--glass-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 5%;
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid var(--border-light);
    }

    /* Brand Logo */
    .brand-logo {
      font-family: 'Outfit', sans-serif;
      font-size: 1.6rem;
      font-weight: 900;
      letter-spacing: 1.5px;
      background: var(--gold-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .brand-logo::after {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background: var(--primary-accent);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--primary-accent);
    }

    /* Navigation Links */
    #menu { display: flex; gap: 28px; align-items: center; }
    #menu a { 
      color: var(--text-muted); 
      text-decoration: none; 
      font-weight: 600; 
      font-size: 0.95rem; 
      transition: all 0.3s ease;
      position: relative;
    }
    #menu a:hover { color: #ffffff; }
    #menu a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -6px;
      left: 0;
      background: var(--gold-gradient);
      transition: all 0.3s ease;
      border-radius: 2px;
    }
    #menu a:hover::after { width: 100%; }

    /* Mobile Hamburger */
    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
      z-index: 1002;
    }
    .menu-toggle span {
      width: 26px;
      height: 2px;
      background: #ffffff;
      transition: 0.3s ease;
    }

    /* ==========================================
       HERO SECTION
       ========================================== */
    #hero-sainiwalaa {
      background: var(--primary-gradient);
      position: relative;
      padding: 90px 5% 70px;
      overflow: hidden;
      border-bottom: 1px solid var(--border-light);
    }

    /* Glow Background Elements */
    #hero-sainiwalaa::before {
      content: '';
      position: absolute;
      top: -100px;
      left: -100px;
      width: 350px;
      height: 350px;
      background: rgba(255, 153, 0, 0.12);
      filter: blur(120px);
      border-radius: 50%;
      pointer-events: none;
    }

    .hero-wrap {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 50px;
      align-items: center;
    }

    .hero-left { color: var(--text-main); }

    /* Hero Title */
    #hero-title {
      font-family: 'Outfit', sans-serif;
      font-size: 3.2rem;
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 20px;
      letter-spacing: -0.5px;
      background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Notice Bar */
    .notice-wrapper {
      margin-bottom: 24px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 8px 16px;
      border-radius: 30px;
      backdrop-filter: blur(10px);
    }
    .notice-tag {
      background: var(--gold-gradient);
      color: #000;
      font-size: 0.75rem;
      font-weight: 800;
      padding: 2px 8px;
      border-radius: 12px;
      text-transform: uppercase;
    }
    #hero-notice {
      font-size: 0.9rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    /* Tags / Categories */
    #hero-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 30px;
    }
    .catbox {
      background: var(--card-bg);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      padding: 10px 20px;
      border-radius: 14px;
      font-weight: 600;
      font-size: 0.88rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      backdrop-filter: blur(8px);
    }
    .catbox:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--primary-accent);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    }

    /* ==========================================
       SLIDER FRAME
       ========================================== */
    .slider-frame {
      width: 100%;
      max-width: 320px;
      height: 420px;
      margin-left: auto;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 12px;
      border-radius: 28px;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
      transition: all 0.4s ease;
      position: relative;
    }
    .slider-frame:hover {
      transform: translateY(-8px);
      border-color: rgba(255, 179, 0, 0.4);
      box-shadow: 0 35px 70px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 153, 0, 0.15);
    }
    .slider-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      display: block;
      transition: opacity 0.5s ease;
    }

    /* ==========================================
       RESPONSIVE DESIGN
       ========================================== */
    @media (max-width: 900px) {
      .hero-wrap {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
      }
      #hero-title { font-size: 2.3rem; }
      .notice-wrapper { justify-content: center; }
      #hero-tags { justify-content: center; }
      .slider-frame { margin: 0 auto; }
      
      .menu-toggle { display: flex; }
      #menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 75%;
        height: 100vh;
        background: #0a0c10;
        flex-direction: column;
        padding: 100px 30px;
        transition: 0.4s ease;
        border-left: 1px solid var(--border-light);
      }
      #menu.active { right: 0; }
      #menu a { font-size: 1.1rem; width: 100%; }
    }
  ]]></b:skin>
</head>
<body>

  <!-- HEADER -->
  <header id='main-header'>
    <div class='brand-logo' onclick="location.href='/'">SAINIWALAA</div>
    
    <div class='menu-toggle' id='mobile-menu-btn'>
      <span/>
      <span/>
      <span/>
    </div>

    <nav id='menu'/>
  </header>

  <!-- HERO SECTION -->
  <section id='hero-sainiwalaa'>
    <div class='hero-wrap'>
      <div class='hero-left'>
        
        <div class='notice-wrapper'>
          <span class='notice-tag'>Updates</span>
          <span id='hero-notice'>Loading details...</span>
        </div>

        <h1 id='hero-title'>Welcome to Sainiwalaa</h1>
        
        <div id='hero-tags'/>
      </div>

      <div class='hero-right'>
        <div class='slider-frame'>
          <img alt='Slider' id='sliderImg' src='https://via.placeholder.com/320x420?text=Sainiwalaa'/>
        </div>
      </div>
    </div>
  </section>

  <!-- HIDDEN BLOGGER POSTS CONTAINER -->
  <div style='display:none;'>
    <b:section id='main' showaddelement='yes'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'/>
    </b:section>
  </div>

  <!-- SCRIPT API LOGIC -->
  <script type='text/javascript'>
    //<![CDATA[
    // Mobile Navigation Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('menu');

    if(menuBtn) {
      menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    // Header-Hero API Logic
    const API = "https://script.google.com/macros/s/AKfycbxajNF_583kuHsHZuky-oolW6vumnUtdy6t3OU_Rj94C5aYe8RDxO-qPhHR-0hixzjxuA/exec";

    fetch(API)
    .then(res => res.json())
    .then(data => {

      /* ========== HEADER MENU ========== */
      const menuBox = document.getElementById("menu");
      if(menuBox && data.menu){
        menuBox.innerHTML = "";
        data.menu.forEach(m => {
          menuBox.innerHTML += `<a href="${m.link}">${m.text}</a>`;
        });
      }

      /* ========== HERO TITLE ========== */
      const titleRow = data.hero ? data.hero.find(x => x.type === "TITLE") : null;
      if(titleRow && document.getElementById("hero-title")){
        document.getElementById("hero-title").innerText = titleRow.text;
      }

      /* ========== TAGS ========== */
      const tagBox = document.getElementById("hero-tags");
      if(tagBox && data.hero){
        tagBox.innerHTML = "";
        data.hero.filter(x => x.type === "TAG")
          .forEach(t => {
            tagBox.innerHTML += `<div class="catbox">${t.text}</div>`;
          });
      }

      /* ========== NOTICE ========== */
      const noticeRow = data.hero ? data.hero.find(x => x.type === "NOTICE") : null;
      if(noticeRow && document.getElementById("hero-notice")){
        document.getElementById("hero-notice").innerText = noticeRow.text;
      }

      /* ========== SLIDER ========== */
      if(data.hero) {
        const slides = data.hero
          .filter(x => x.type === "SLIDE")
          .map(x => x.image);

        let i = 0;
        const img = document.getElementById("sliderImg");

        if(slides.length && img){
          img.src = slides[0];
          setInterval(() => {
            i = (i + 1) % slides.length;
            img.style.opacity = '0.3';
            setTimeout(() => {
              img.src = slides[i];
              img.style.opacity = '1';
            }, 200);
          }, 3500);
        }
      }

    })
    .catch(err => {
      console.error("Header-Hero API Error:", err);
    });
    //]]>
  </script>
</body>
</html>
