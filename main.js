// ---------- Íconos (sprite SVG compartido por las dos páginas) ----------
const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-bed" viewBox="0 0 24 24"><path d="M3 18V7m0 7h18v4m0-4v-2a3 3 0 0 0-3-3h-7v5M7 11h.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-bath" viewBox="0 0 24 24"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Zm2 0V6a2 2 0 0 1 4 0M7 19l-1 2m11-2 1 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-area" viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5m11-5v5h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-car" viewBox="0 0 24 24"><path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-door" viewBox="0 0 24 24"><path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18M15 12h.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2" fill="currentColor"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" stroke-width="2"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 5 5 9-10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-key" viewBox="0 0 24 24"><circle cx="8" cy="15" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="m11 12 9-9m-3 3 3 3m-6 0 2 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-home" viewBox="0 0 24 24"><path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Zm0 0v5h5M9 13h6m-6 4h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20V10m6 10V4m6 16v-7m4 7H2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-share" viewBox="0 0 24 24"><circle cx="18" cy="5" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="19" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="m8.2 10.8 7.6-4.6m-7.6 7 7.6 4.6" stroke="currentColor" stroke-width="2"/></symbol>
  <symbol id="i-camera" viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/></symbol>
  <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 10h16M9 3v4m6-4v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></symbol>
</svg>`;
document.body.insertAdjacentHTML("afterbegin", SPRITE);

// ---------- Utilidades ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const OPERACION = { venta: "Venta", alquiler: "Alquiler", temporario: "Temporario" };
const TIPO = { casa: "Casa", departamento: "Departamento", duplex: "Dúplex", terreno: "Terreno", oficina: "Oficina" };

const fmtNum = (n) => new Intl.NumberFormat("es-AR").format(n);
const fmtPrice = (p) =>
  `${p.moneda === "USD" ? "USD" : "$"} ${fmtNum(p.precio)}${p.precioSufijo ? ` ${p.precioSufijo}` : p.operacion === "alquiler" ? " / mes" : ""}`;

// Para ordenar por precio mezclando monedas usamos un tipo de cambio de referencia.
const USD_ARS = 1200;
const priceInArs = (p) => (p.moneda === "USD" ? p.precio * USD_ARS : p.precio);

// Favoritos: preferencia por visitante, no es crítico si el storage falla.
const FAV_KEY = "cerro-favs";
const getFavs = () => {
  try { return new Set(JSON.parse(localStorage.getItem(FAV_KEY)) || []); } catch { return new Set(); }
};
const toggleFav = (id) => {
  const favs = getFavs();
  favs.has(id) ? favs.delete(id) : favs.add(id);
  try { localStorage.setItem(FAV_KEY, JSON.stringify([...favs])); } catch {}
  return favs.has(id);
};

// ---------- Aviso de demo ----------
let toastTimer;
function toast(msg) {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.append(el);
  }
  el.innerHTML = `<b>Demo</b> ${msg}`;
  el.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 4200);
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-demo]");
  if (!trigger) return;
  e.preventDefault();
  toast(trigger.dataset.demo);
});

$$("form[data-demo-form]").forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toast(form.dataset.demoForm);
    form.reset();
  })
);

// ---------- Header y menú ----------
const header = $("#header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navToggle = $(".nav-toggle");
navToggle.addEventListener("click", () => {
  const open = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open);
});
$$("#nav a").forEach((a) => a.addEventListener("click", () => {
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

// ---------- Tarjeta de propiedad ----------
function cardHTML(p) {
  const favs = getFavs();
  const specs = [
    p.supCubierta ? `<li><svg class="icon"><use href="#i-area"/></svg>${p.supCubierta} m²</li>` : `<li><svg class="icon"><use href="#i-area"/></svg>${fmtNum(p.supTotal)} m² lote</li>`,
    p.dormitorios ? `<li><svg class="icon"><use href="#i-bed"/></svg>${p.dormitorios} dorm.</li>` : p.ambientes ? `<li><svg class="icon"><use href="#i-door"/></svg>${p.ambientes} amb.</li>` : "",
    p.banos ? `<li><svg class="icon"><use href="#i-bath"/></svg>${p.banos} baño${p.banos > 1 ? "s" : ""}</li>` : "",
    p.cocheras ? `<li><svg class="icon"><use href="#i-car"/></svg>${p.cocheras}</li>` : ""
  ].join("");

  return `
    <article class="pcard">
      <a class="pcard__media" href="propiedad.html?id=${p.id}">
        <img src="${IMG(p.fotos[0], 800)}" alt="${p.titulo}" loading="lazy" />
        <span class="badge pcard__op badge--${p.operacion}">${OPERACION[p.operacion]}</span>
        <span class="pcard__photos"><svg class="icon"><use href="#i-camera"/></svg>${p.fotos.length}</span>
      </a>
      <button class="pcard__fav ${favs.has(p.id) ? "is-fav" : ""}" data-fav="${p.id}" aria-label="Guardar en favoritas" aria-pressed="${favs.has(p.id)}">
        <svg class="icon"><use href="#i-heart"/></svg>
      </button>
      <div class="pcard__body">
        <p class="pcard__price">${fmtPrice(p)}</p>
        ${p.expensas ? `<p class="pcard__exp">+ $ ${fmtNum(p.expensas)} expensas</p>` : ""}
        <h3><a href="propiedad.html?id=${p.id}">${p.titulo}</a></h3>
        <p class="pcard__loc"><svg class="icon"><use href="#i-pin"/></svg>${p.localidad}</p>
        <ul class="pcard__specs">${specs}</ul>
      </div>
    </article>`;
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-fav]");
  if (!btn) return;
  const on = toggleFav(btn.dataset.fav);
  btn.classList.toggle("is-fav", on);
  btn.setAttribute("aria-pressed", on);
  document.dispatchEvent(new CustomEvent("favs-changed"));
});

// ---------- Home ----------
if ($("#catalog")) {
  const localidades = [...new Set(PROPIEDADES.map((p) => p.localidad))].sort();
  $$("[data-localidades]").forEach((sel) =>
    sel.insertAdjacentHTML("beforeend", localidades.map((l) => `<option>${l}</option>`).join(""))
  );

  $("#featured").innerHTML = PROPIEDADES.filter((p) => p.destacada).map(cardHTML).join("");

  // Filtros del catálogo
  const filters = $("#filters");
  const state = { op: "", tipo: "", localidad: "", dormitorios: 0, orden: "recientes", soloFavs: false };

  function render() {
    const favs = getFavs();
    let list = PROPIEDADES.filter((p) =>
      (!state.op || p.operacion === state.op) &&
      (!state.tipo || p.tipo === state.tipo) &&
      (!state.localidad || p.localidad === state.localidad) &&
      p.dormitorios >= state.dormitorios &&
      (!state.soloFavs || favs.has(p.id))
    );
    if (state.orden === "menor") list.sort((a, b) => priceInArs(a) - priceInArs(b));
    if (state.orden === "mayor") list.sort((a, b) => priceInArs(b) - priceInArs(a));
    if (state.orden === "superficie") list.sort((a, b) => b.supTotal - a.supTotal);
    if (state.orden === "recientes") list.sort((a, b) => b.id.localeCompare(a.id));

    $("#catalog").innerHTML = list.map(cardHTML).join("");
    $("#results-count").textContent = `${list.length} propiedad${list.length === 1 ? "" : "es"} encontrada${list.length === 1 ? "" : "s"}`;
    $("#empty").hidden = list.length > 0;
  }

  function setOp(op) {
    state.op = op;
    $$(".chip", filters).forEach((c) => c.classList.toggle("is-active", c.dataset.op === op));
  }

  filters.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    setOp(chip.dataset.op);
    render();
  });
  filters.addEventListener("change", (e) => {
    const { name, value } = e.target;
    state[name] = name === "dormitorios" ? Number(value) : value;
    render();
  });
  $("#fav-toggle").addEventListener("click", (e) => {
    state.soloFavs = !state.soloFavs;
    e.currentTarget.setAttribute("aria-pressed", state.soloFavs);
    e.currentTarget.classList.toggle("is-active", state.soloFavs);
    render();
  });
  document.addEventListener("favs-changed", () => state.soloFavs && render());

  function resetFilters() {
    Object.assign(state, { op: "", tipo: "", localidad: "", dormitorios: 0, soloFavs: false });
    filters.reset();
    setOp("");
    $("#fav-toggle").classList.remove("is-active");
    $("#fav-toggle").setAttribute("aria-pressed", "false");
  }
  $("#clear-filters").addEventListener("click", () => { resetFilters(); render(); });

  // Buscador del hero: copia los valores al catálogo y baja hasta él
  const hero = $("#hero-search");
  let heroOp = "venta";
  $$(".search__tab", hero).forEach((tab) =>
    tab.addEventListener("click", () => {
      heroOp = tab.dataset.op;
      $$(".search__tab", hero).forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", t === tab);
      });
    })
  );
  hero.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(hero);
    resetFilters();
    setOp(heroOp);
    ["tipo", "localidad", "dormitorios"].forEach((k) => {
      filters.elements[k].value = data.get(k);
      state[k] = k === "dormitorios" ? Number(data.get(k)) : data.get(k);
    });
    render();
    $("#propiedades").scrollIntoView({ behavior: "smooth" });
  });

  $$("[data-quick-op]").forEach((a) =>
    a.addEventListener("click", () => { resetFilters(); setOp(a.dataset.quickOp); render(); })
  );

  render();

  // Emprendimiento
  const E = EMPRENDIMIENTO;
  $("#project-img").src = IMG(E.foto, 1000);
  $("#project-name").textContent = E.nombre;
  $("#project-loc").textContent = E.ubicacion;
  $("#project-units").textContent = E.unidades;
  $("#project-date").textContent = E.entrega;
  $("#project-price").textContent = `USD ${fmtNum(E.desde)}`;
  $("#project-progress-label").textContent = `${E.avance}%`;
  $("#project-amenities").innerHTML = E.amenities.map((a) => `<li>${a}</li>`).join("");

  // Animaciones al entrar en pantalla (contadores y barra de avance)
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      if (entry.target.id === "project-progress") {
        entry.target.style.width = `${E.avance}%`;
        return;
      }
      const el = entry.target;
      const end = Number(el.dataset.count);
      const start = performance.now();
      const step = (t) => {
        const k = Math.min((t - start) / 1400, 1);
        const v = Math.round(end * (1 - Math.pow(1 - k, 3)));
        el.textContent = `${el.dataset.plus !== undefined ? "+" : ""}${fmtNum(v)}${el.dataset.suffix || ""}`;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });
  $$("[data-count]").forEach((el) => io.observe(el));
  io.observe($("#project-progress"));
}

// ---------- Ficha de propiedad ----------
if ($("#detail")) {
  const id = new URLSearchParams(location.search).get("id");
  const p = PROPIEDADES.find((x) => x.id === id) || PROPIEDADES[0];

  document.title = `${p.titulo} · Cerro Propiedades`;
  $("#bc-op").textContent = `${TIPO[p.tipo]} en ${OPERACION[p.operacion].toLowerCase()}`;
  $("#bc-title").textContent = p.id;
  $("#d-title").textContent = p.titulo;
  $("#d-address").textContent = `${p.direccion} · ${p.localidad}`;
  $("#d-badges").innerHTML =
    `<span class="badge badge--${p.operacion}">${OPERACION[p.operacion]}</span><span class="badge badge--soft">${TIPO[p.tipo]}</span>` +
    (p.antiguedad === 0 && p.tipo !== "terreno" ? `<span class="badge badge--soft">A estrenar</span>` : "");
  $("#d-op-label").textContent = p.operacion === "venta" ? "Precio de venta" : p.operacion === "alquiler" ? "Alquiler mensual" : "Tarifa";
  $("#d-price").textContent = fmtPrice(p);
  $("#d-exp").textContent = p.expensas ? `+ $ ${fmtNum(p.expensas)} de expensas` : "Sin expensas";
  $("#d-code").textContent = p.id;
  $("#d-desc").textContent = p.descripcion;
  $("#d-features").innerHTML = p.caracteristicas.map((c) => `<li>${c}</li>`).join("");
  $("#d-zone").textContent = `${p.localidad}, Mendoza. La ubicación exacta se informa al coordinar la visita.`;
  $("#lead-msg").value = `Hola, me interesa la propiedad ${p.id} (${p.titulo}). ¿Sigue disponible?`;

  const specs = [
    ["i-area", `${fmtNum(p.supTotal)} m²`, "totales"],
    p.supCubierta && ["i-home", `${p.supCubierta} m²`, "cubiertos"],
    p.ambientes && ["i-door", p.ambientes, "ambientes"],
    p.dormitorios && ["i-bed", p.dormitorios, "dormitorios"],
    p.banos && ["i-bath", p.banos, p.banos > 1 ? "baños" : "baño"],
    p.cocheras && ["i-car", p.cocheras, p.cocheras > 1 ? "cocheras" : "cochera"]
  ].filter(Boolean);
  $("#d-specs").innerHTML = specs
    .map(([icon, v, l]) => `<li><svg class="icon"><use href="#${icon}"/></svg><b>${v}</b><span>${l}</span></li>`)
    .join("");

  const rows = [
    ["Operación", OPERACION[p.operacion]],
    ["Tipo", TIPO[p.tipo]],
    ["Superficie total", `${fmtNum(p.supTotal)} m²`],
    ["Superficie cubierta", p.supCubierta ? `${p.supCubierta} m²` : "—"],
    ["Ambientes", p.ambientes || "—"],
    ["Dormitorios", p.dormitorios || "—"],
    ["Baños", p.banos || "—"],
    ["Cocheras", p.cocheras || "—"],
    ["Antigüedad", p.tipo === "terreno" ? "—" : p.antiguedad ? `${p.antiguedad} años` : "A estrenar"],
    ["Apto crédito", p.operacion === "venta" ? "Sí" : "—"]
  ];
  $("#d-table").innerHTML = rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  const d = 0.012;
  $("#d-map").src = `https://www.openstreetmap.org/export/embed.html?bbox=${p.lng - d}%2C${p.lat - d * 0.7}%2C${p.lng + d}%2C${p.lat + d * 0.7}&layer=mapnik&marker=${p.lat}%2C${p.lng}`;

  // Galería + lightbox
  let current = 0;
  const thumbs = $("#g-thumbs");
  const lb = $("#lightbox");
  const show = (i) => {
    current = (i + p.fotos.length) % p.fotos.length;
    $("#g-main-img").src = IMG(p.fotos[current], 1600);
    $("#g-main-img").alt = `${p.titulo}, foto ${current + 1}`;
    $$("button", thumbs).forEach((b, j) => b.classList.toggle("is-active", j === current));
    $("#lb-img").src = IMG(p.fotos[current], 2000);
    $("#lb-count").textContent = `${current + 1} / ${p.fotos.length}`;
  };
  thumbs.innerHTML = p.fotos
    .map((f, i) => `<button aria-label="Foto ${i + 1}"><img src="${IMG(f, 400)}" alt="" loading="lazy" /></button>`)
    .join("");
  $$("button", thumbs).forEach((b, i) => b.addEventListener("click", () => show(i)));
  $("#g-count").textContent = `${p.fotos.length} fotos`;
  show(0);

  const openLb = () => { lb.hidden = false; document.body.style.overflow = "hidden"; };
  const closeLb = () => { lb.hidden = true; document.body.style.overflow = ""; };
  $("#g-main").addEventListener("click", openLb);
  $(".lightbox__close").addEventListener("click", closeLb);
  $(".lightbox__nav--prev").addEventListener("click", () => show(current - 1));
  $(".lightbox__nav--next").addEventListener("click", () => show(current + 1));
  lb.addEventListener("click", (e) => e.target === lb && closeLb());
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // Favorito y compartir
  const favBtn = $("#d-fav");
  const paintFav = () => {
    const on = getFavs().has(p.id);
    favBtn.classList.toggle("is-active", on);
    $("span", favBtn).textContent = on ? "Guardada" : "Guardar";
  };
  favBtn.addEventListener("click", () => { toggleFav(p.id); paintFav(); });
  paintFav();

  $("#d-share").addEventListener("click", async () => {
    if (navigator.share) {
      try { await navigator.share({ title: p.titulo, url: location.href }); } catch {}
      return;
    }
    try { await navigator.clipboard.writeText(location.href); toast("Copiamos el link de la propiedad."); }
    catch { toast("Copiá el link desde la barra del navegador."); }
  });

  $("#lead-form").addEventListener("submit", (e) => {
    e.preventDefault();
    toast(`Recibimos tu consulta por ${p.id}. Laura te contacta hoy mismo.`);
    e.target.elements.nombre.value = "";
    e.target.elements.tel.value = "";
  });

  // Simulador de crédito (solo en ventas)
  const calc = $(".calc");
  if (p.operacion !== "venta") {
    calc.remove();
  } else {
    const inputs = ["c-down", "c-years", "c-rate"].map((x) => $(`#${x}`));
    const update = () => {
      const [down, years, rate] = inputs.map((i) => Number(i.value));
      $("#c-down-v").textContent = `${down}% · USD ${fmtNum(Math.round(p.precio * down / 100))}`;
      $("#c-years-v").textContent = `${years} años`;
      $("#c-rate-v").textContent = `${rate}%`;
      const capital = p.precio * (1 - down / 100);
      const r = rate / 100 / 12;
      const n = years * 12;
      const cuota = capital * r / (1 - Math.pow(1 + r, -n));
      $("#c-result").textContent = `USD ${fmtNum(Math.round(cuota))} / mes`;
    };
    inputs.forEach((i) => i.addEventListener("input", update));
    update();
  }

  // Similares: misma operación primero, después misma localidad
  const similar = PROPIEDADES.filter((x) => x.id !== p.id)
    .map((x) => ({ x, score: (x.operacion === p.operacion ? 2 : 0) + (x.localidad === p.localidad ? 1 : 0) + (x.tipo === p.tipo ? 1 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ x }) => x);
  $("#similar").innerHTML = similar.map(cardHTML).join("");
}
