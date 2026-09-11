/* =========================================================
   MAISON SÉSAME — script.js
   ========================================================= */

(function(){
  "use strict";

  const WHATSAPP_NUMBER = "221771234567"; // Numéro de démonstration fictif
  const WHATSAPP_MESSAGE = "Bonjour Maison Sésame, je souhaiterais réserver une table.";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  /* ---------------------------------------------------------
     DONNÉES DU MENU — plats sénégalais authentiques uniquement
  --------------------------------------------------------- */
  const MENU = [
    {
      id: "thieboudienne",
      name: "Thiéboudienne",
      subtitle: "Ceebu jën",
      price: 7000,
      cats: ["principaux", "poissons"],
      desc: "Riz au poisson mijoté dans une sauce tomate, accompagné de légumes traditionnels : carotte, chou, manioc et aubergine.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Senegalese_Thieboudienne.JPG"
    },
    {
      id: "mafe",
      name: "Mafé",
      subtitle: "Sauce à l'arachide",
      price: 6000,
      cats: ["principaux", "viandes"],
      desc: "Viande mijotée dans une onctueuse sauce à base d'arachide, servie avec du riz blanc et des légumes de saison.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mafe_SN.JPG"
    },
    {
      id: "yassa-poulet",
      name: "Yassa poulet",
      subtitle: "Poulet mariné",
      price: 6000,
      cats: ["principaux", "viandes"],
      desc: "Poulet mariné et grillé, servi avec une généreuse sauce aux oignons confits, citron et moutarde, accompagné de riz.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Poulet_Yassa.JPG"
    },
    {
      id: "yassa-poisson",
      name: "Yassa poisson",
      subtitle: "Poisson mariné",
      price: 6500,
      cats: ["principaux", "poissons"],
      desc: "Poisson grillé accompagné de la même sauce yassa aux oignons, citron et moutarde, servi avec du riz parfumé.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Le_yassa_au_poisson_09.jpg"
    },
    {
      id: "thiere",
      name: "Thiéré",
      subtitle: "Couscous de mil",
      price: 6500,
      cats: ["principaux", "accompagnements"],
      desc: "Couscous de mil sénégalais préparé selon la tradition, accompagné d'une sauce parfumée et de viande.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Thiere_Senegalese_couscous_with_lamb.jpg"
    },
    {
      id: "vermicelles",
      name: "Vermicelles à la sénégalaise",
      subtitle: "Vermicelles au poulet",
      price: 6000,
      cats: ["principaux", "accompagnements"],
      desc: "Vermicelles préparés à la sénégalaise, accompagnés de poulet et d'une sauce aux oignons parfumée.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Vermicelle_%C3%A0_la_S%C3%A9n%C3%A9galaise.jpg"
    },
    {
      id: "soupe-kandia",
      name: "Soupe kandia",
      subtitle: "Sauce gombo",
      price: 5500,
      cats: ["principaux", "poissons"],
      desc: "Plat traditionnel à base de gombo et d'huile de palme, mijoté avec poisson et fruits de mer, servi avec du riz.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Plat_s%C3%A9n%C3%A9galais_soupe_kandja.jpg"
    },
    {
      id: "thiakry",
      name: "Thiakry",
      subtitle: "Dessert au mil",
      price: 2000,
      cats: ["desserts"],
      desc: "Couscous de mil sucré, mélangé à du lait caillé et parfumé à la vanille — un dessert frais et gourmand.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Le_thiakry_%C3%A0_base_de_mangue_01.jpg"
    },
    {
      id: "bissap",
      name: "Bissap",
      subtitle: "Jus d'hibiscus",
      price: 1500,
      cats: ["boissons"],
      desc: "Boisson rafraîchissante à base de fleurs d'hibiscus, légèrement sucrée et parfumée à la menthe.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sirop_bissap_04.jpg"
    },
    {
      id: "bouye",
      name: "Jus de bouye",
      subtitle: "Jus de baobab",
      price: 1500,
      cats: ["boissons"],
      desc: "Boisson crémeuse et légèrement acidulée préparée à partir de la pulpe du fruit du baobab.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Jus_de_bouye,_gingembre_et_bissap_01.jpg"
    },
    {
      id: "gingembre",
      name: "Jus de gingembre",
      subtitle: "Boisson artisanale",
      price: 1500,
      cats: ["boissons"],
      desc: "Jus de gingembre frais, parfumé et légèrement pimenté, préparé chaque jour de façon artisanale.",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Jus_de_bouye,_gingembre_et_bissap_02.jpg"
    }
  ];

  /* ---------------------------------------------------------
     GALERIE
  --------------------------------------------------------- */
  const GALLERY = [
    { img: "https://commons.wikimedia.org/wiki/Special:FilePath/Senegalese_Thieboudienne.JPG", caption: "Thiéboudienne", tall: true },
    { img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&q=80&auto=format&fit=crop", caption: "Salle du restaurant" },
    { img: "https://commons.wikimedia.org/wiki/Special:FilePath/Poulet_Yassa.JPG", caption: "Yassa poulet" },
    { img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sirop_bissap_04.jpg", caption: "Bissap" },
    { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop", caption: "Ambiance chaleureuse", wide: true },
    { img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mafe_SN.JPG", caption: "Mafé", tall: true },
    { img: "https://commons.wikimedia.org/wiki/Special:FilePath/Le_thiakry_%C3%A0_base_de_mangue_01.jpg", caption: "Thiakry" },
    { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&auto=format&fit=crop", caption: "Détails de table" }
  ];

  /* ---------------------------------------------------------
     AVIS CLIENTS (fictifs, démonstration)
  --------------------------------------------------------- */
  const AVIS = [
    {
      name: "Aminata Diop",
      city: "Dakar",
      rating: 5,
      quote: "Une explosion de saveurs ! Le thiéboudienne était tout simplement délicieux. Je recommande à 100%."
    },
    {
      name: "Mamadou Fall",
      city: "Dakar",
      rating: 5,
      quote: "Un cadre magnifique et une cuisine authentique. On sent vraiment la passion dans chaque plat."
    },
    {
      name: "Fatou Sarr",
      city: "Dakar",
      rating: 5,
      quote: "Le meilleur restaurant sénégalais que j'ai testé. Le service est impeccable et les plats sont généreux."
    }
  ];

  /* ---------------------------------------------------------
     UTILITAIRES
  --------------------------------------------------------- */
  function formatPrice(n){
    return n.toLocaleString("fr-FR").replace(/ |,/g, " ") + " FCFA";
  }

  function initials(name){
    return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  }

  /* ---------------------------------------------------------
     WHATSAPP — tous les boutons pointent vers le même lien
  --------------------------------------------------------- */
  function initWhatsappLinks(){
    const ids = ["navWhatsapp", "navWhatsappMobile", "heroWhatsapp", "reservationWhatsapp", "contactWhatsapp"];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if(el) el.href = WHATSAPP_URL;
    });
  }

  /* ---------------------------------------------------------
     MENU — rendu + filtres par onglet
  --------------------------------------------------------- */
  function renderMenu(){
    const grid = document.getElementById("menuGrid");
    grid.innerHTML = MENU.map(item => `
      <article class="menu-card" data-cats="${item.cats.join(" ")}">
        <div class="menu-card-media">
          <img src="${item.img}" alt="${item.name} — ${item.subtitle}, cuisine sénégalaise traditionnelle" loading="lazy">
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <h3>${item.name}</h3>
            <span class="menu-card-price">${formatPrice(item.price)}</span>
          </div>
          <p class="menu-card-desc">${item.desc}</p>
        </div>
      </article>
    `).join("");
  }

  function initMenuTabs(){
    const tabs = document.querySelectorAll(".tab-btn");
    const cards = () => document.querySelectorAll(".menu-card");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        const filter = tab.dataset.filter;

        cards().forEach(card => {
          const cats = card.dataset.cats.split(" ");
          const show = filter === "tous" || cats.includes(filter);
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---------------------------------------------------------
     GALERIE
  --------------------------------------------------------- */
  function renderGallery(){
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = GALLERY.map(item => `
      <div class="gallery-item ${item.tall ? "tall" : ""} ${item.wide ? "wide" : ""}">
        <img src="${item.img}" alt="${item.caption}" loading="lazy">
        <span class="gallery-caption">${item.caption}</span>
      </div>
    `).join("");
  }

  /* ---------------------------------------------------------
     AVIS CLIENTS — carrousel
  --------------------------------------------------------- */
  function initAvis(){
    const track = document.getElementById("avisTrack");
    const dotsWrap = document.getElementById("avisDots");
    let current = 0;

    track.innerHTML = AVIS.map((a, i) => `
      <div class="avis-slide ${i === 0 ? "is-active" : ""}">
        <div class="avis-stars">${"★".repeat(a.rating)}${"☆".repeat(5 - a.rating)}</div>
        <p class="avis-quote">"${a.quote}"</p>
        <div class="avis-author">
          <span class="avis-avatar">${initials(a.name)}</span>
          <span class="avis-author-info"><strong>${a.name}</strong><span>📍 ${a.city}</span></span>
        </div>
      </div>
    `).join("");

    dotsWrap.innerHTML = AVIS.map((_, i) => `<span class="${i === 0 ? "is-active" : ""}" data-i="${i}"></span>`).join("");

    const slides = track.querySelectorAll(".avis-slide");
    const dots = dotsWrap.querySelectorAll("span");

    function goTo(i){
      slides[current].classList.remove("is-active");
      dots[current].classList.remove("is-active");
      current = (i + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dots[current].classList.add("is-active");
    }

    document.getElementById("avisNext").addEventListener("click", () => goTo(current + 1));
    document.getElementById("avisPrev").addEventListener("click", () => goTo(current - 1));
    dots.forEach(d => d.addEventListener("click", () => goTo(Number(d.dataset.i))));

    setInterval(() => goTo(current + 1), 7000);
  }

  /* ---------------------------------------------------------
     MENU MOBILE
  --------------------------------------------------------- */
  function initMobileMenu(){
    const overlay = document.getElementById("mobileOverlay");
    const nav = document.getElementById("mobileNav");
    function open(){ overlay.classList.add("is-open"); nav.classList.add("is-open"); document.body.style.overflow = "hidden"; }
    function close(){ overlay.classList.remove("is-open"); nav.classList.remove("is-open"); document.body.style.overflow = ""; }
    document.getElementById("burgerBtn").addEventListener("click", open);
    document.getElementById("mobileCloseBtn").addEventListener("click", close);
    overlay.addEventListener("click", close);
    nav.querySelectorAll(".mobile-nav-link").forEach(link => link.addEventListener("click", close));
  }

  /* ---------------------------------------------------------
     HEADER — ombre au scroll
  --------------------------------------------------------- */
  function initHeaderScroll(){
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      header.style.boxShadow = window.scrollY > 20 ? "0 8px 24px rgba(0,0,0,.25)" : "none";
    }, { passive: true });
  }

  /* ---------------------------------------------------------
     ANIMATIONS LÉGÈRES AU DÉFILEMENT
  --------------------------------------------------------- */
  function initScrollReveal(){
    const targets = document.querySelectorAll(".menu-card, .gallery-item, .stat, .histoire-content, .apropos-content");
    if(!("IntersectionObserver" in window)){ return; }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.animation = "fadeIn .6s ease both";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(t => observer.observe(t));
  }

  /* ---------------------------------------------------------
     INITIALISATION
  --------------------------------------------------------- */
  function init(){
    initWhatsappLinks();
    renderMenu();
    initMenuTabs();
    renderGallery();
    initAvis();
    initMobileMenu();
    initHeaderScroll();
    initScrollReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
