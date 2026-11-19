/* =========================================================================
   CONFIGURACIÓN DEL NEGOCIO — edita aquí nombre, precios, colores, número
   ========================================================================= */

// --- Número de WhatsApp del negocio -------------------------------------
// VARIABLE A REEMPLAZAR: usa formato internacional sin signos, ej. "5215512345678"
const WHATSAPP_NUMBER = "525547698638"; // WhatsApp: 55 4769 8638

// --- Fotografías (salen de tu catálogo en PDF) --------------------------
// >>> CARPETA DE LAS FOTOS DEL CATÁLOGO: si la moviste, cambia SOLO esta línea (debe terminar con "/")
const CAT_DIR = "img/catalogo/";
const PHOTOS = {
  girasol:CAT_DIR + "girasol.jpg", rosa:CAT_DIR + "rosa.jpg", lili:CAT_DIR + "lili.jpg",
  tulipan:CAT_DIR + "tulipan.jpg", amapola_grande:CAT_DIR + "amapola_grande.jpg",
  amapola_chica:CAT_DIR + "amapola_chica.jpg", ibizco:CAT_DIR + "ibizco.jpg",
  flor_cerezo:CAT_DIR + "flor_cerezo.jpg", follaje:CAT_DIR + "follaje.jpg",
  rapunzel:CAT_DIR + "rapunzel.jpg", ramo_sandra:CAT_DIR + "ramo_sandra.jpg",
  ramo_snoopy:CAT_DIR + "ramo_snoopy.jpg", ramo_mel:CAT_DIR + "ramo_mel.jpg",
  ramo_kar:CAT_DIR + "ramo_kar.jpg", ramo_ibizco_amapolas:CAT_DIR + "ramo_ibizco_amapolas.jpg",
  caja_lotzo:CAT_DIR + "caja_lotzo.jpg", girasol_azul:CAT_DIR + "girasol_azul.jpg",
  girasol_amarillo:CAT_DIR + "girasol_amarillo.jpg", ramo_mariana:CAT_DIR + "ramo_mariana.jpg"
};

const BOUQUET_PHOTOS = [
  { src: "img/ramo-1.jpg", caption: "Ramo rojo con mariposas doradas" },
  { src: "img/ramo-2.jpg", caption: "Ramo de lilis rojas con chocolates" },
  { src: "img/ramo-3.jpg", caption: "Ramo de lilis rosa, envoltura crema" },
  { src: "img/ramo-4.jpg", caption: "Ramo de tulipanes rosa" },
  { src: "img/ramo-5.jpg", caption: "Ramo de girasoles y tulipanes con luces" },
];

// --- Flores individuales (precios de tu catálogo) --------------------------
const FLOWERS = [
  { id:"girasol", name:"Girasol grande", price:100, petals:14, petalRatio:.92, centerRatio:.62, shape:"round", centerColor:"#4A2412", tag:"Grande y luminosa", desc:"Catorce pétalos de chenille alrededor de un centro mullido. Una sola flor ya es protagonista: ideal para un regalo sencillo pero lleno de luz." },
  { id:"rosa", name:"Rosa", price:45, petals:9, petalRatio:.9, centerRatio:.6, centerShade:-14, shape:"round", tag:"La clásica", desc:"Pétalos suaves y enrollados que forman una rosa que nunca se marchita. Perfecta sola o como corazón de un ramo." },
  { id:"lili", name:"Lili china", price:45, petals:6, petalRatio:1.15, centerRatio:.16, shape:"round", centerColor:"#E7C15A", tag:"La más elegante", desc:"Seis pétalos largos con borde delicado y estambres dorados. Da elegancia y movimiento a cualquier ramo." },
  { id:"tulipan", name:"Tulipán", price:40, shape:"tulip", tag:"Tierna y delicada", desc:"Una copa de pétalos curvos sobre su tallo con hojas. Su forma limpia la vuelve la favorita para combinar." },
  { id:"amapola_grande", name:"Amapola grande", price:45, petals:8, petalRatio:.8, centerRatio:.6, centerColor:"#FFFFFF", shape:"round", tag:"Llena de volumen", desc:"Pétalos ondulados con centro blanco y estambres amarillos. Aporta volumen y color vibrante." },
  { id:"amapola_chica", name:"Amapola chica", price:30, petals:5, petalRatio:.66, centerRatio:.5, centerColor:"#F3E4C8", shape:"round", tag:"Pequeña y dulce", desc:"La versión compacta de la amapola: perfecta para rellenar y darle ternura al ramo." },
  { id:"ibizco", name:"Ibizco", price:45, petals:5, petalRatio:.88, centerRatio:.3, centerColor:"#F4C20D", shape:"round", tag:"Tropical y vibrante", desc:"Cinco pétalos amplios con su pistilo amarillo al centro. Un toque exótico y lleno de color." },
  { id:"flor_cerezo", name:"Flor de cerezo", price:15, petals:5, petalRatio:.58, centerRatio:.24, centerColor:"#F6EAD9", shape:"round", tag:"Delicada y ligera", desc:"Florecitas con centro de perla, ideales para acompañar y rellenar cualquier ramo." },
  { id:"follaje", name:"Follaje verde", price:15, shape:"rizo", tag:"El toque final", desc:"Hojas rizadas de chenille verde que dan textura y hacen que todas las flores resalten." }
];

// --- Ramos y arreglos ya armados (precios de tu catálogo) --------------------
const PRODUCTS = [
  { id:"ramo_sandra", name:"Ramo Sandra", price:500, items:["4 Lilis","Flor de cerezo","Follaje verde","2 Tulipanes","Mariposas","Luz LED"] },
  { id:"ramo_snoopy", name:"Ramo personalizado Snoppy", price:450, items:["6 Snoppy's en limpiapipa","Flor de cerezo","Mariposas"] },
  { id:"ramo_mel", name:"Ramo Mel", price:500, items:["2 Girasoles","4 Tulipanes","2 Rosas","2 Lisis naturales","Flor de cerezo","Follaje verde"] },
  { id:"ramo_kar", name:"Ramo Kar", price:480, items:["12 Tulipanes","Flor de cerezo"] },
  { id:"ramo_ibizco_amapolas", name:"Ramo Ibizco y Amapolas", price:600, items:["2 Amapolas grandes","2 Amapolas chicas","2 Ibizcos","1 Rosa","2 Lilis","Follaje","Flor de cerezo"] },
  { id:"caja_lotzo", name:"Caja Lotzo", price:600, items:["Base caja de papel corrugado","Chocolates","4 Lilis grandes","3 Margaritas","4 Tulipanes","Follaje","Flor de cerezo","Oso Lotzo"] },
  { id:"girasol_azul", name:"Girasol personalizado (azul)", price:180, items:["Girasol","Luz LED","Mariposas","Follaje"] },
  { id:"girasol_amarillo", name:"Girasol personalizado (amarillo)", price:180, items:["Girasol","Luz LED","Mariposas","Follaje"] },
  { id:"ramo_mariana", name:"Ramo Mariana", price:700, items:["4 Lilis chinas","8 Tulipanes","Follaje verde","Flor de cerezo","Mariposas","Luz LED","Chocolates"] },
  { id:"rapunzel", group:"flor", name:"Flor de Rapunzel", price:300, items:["Flor de Rapunzel","Pascal en limpiapipa"] }
];

// --- Colores disponibles ---------------------------------------------------
const COLORS = [
  { id:"rojo",      name:"Rojo",      hex:"#C0463A" },
  { id:"rosa",      name:"Rosa",      hex:"#D98A9B" },
  { id:"blanco",    name:"Blanco",    hex:"#FBF7EF" },
  { id:"amarillo",  name:"Amarillo",  hex:"#E7B23A" },
  { id:"azul",      name:"Azul",      hex:"#6E8FAE" },
  { id:"morado",    name:"Morado",    hex:"#9B7EBD" },
  { id:"naranja",   name:"Naranja",   hex:"#DD8A4B" },
  { id:"verde",      name:"Verde",     hex:"#6FA04A" }
];

// --- Opciones de envoltura y su costo --------------------------------------
const WRAPS = [
  { id:"kraft",      name:"Papel kraft",      price:30, hex:"#C4A57B" },
  { id:"blanco",     name:"Papel blanco",     price:35, hex:"#F7F2E6" },
  { id:"rosa",       name:"Papel rosa",       price:35, hex:"#EAC7D2" },
  { id:"decorativo", name:"Papel decorativo", price:40, hex:"#D9B8DE" }
];

/* ========================================================================= */

function flowerById(id){ return FLOWERS.find(f => f.id === id); }
function colorById(id){ return COLORS.find(c => c.id === id); }
function wrapById(id){ return WRAPS.find(w => w.id === id); }

/* ---------- generador de flores en SVG (representación artesanal) ---------- */
function petalPath(cx, cy, r, angleDeg, len, width){
  const rad = angleDeg * Math.PI / 180;
  const tipX = cx + Math.cos(rad) * len;
  const tipY = cy + Math.sin(rad) * len;
  const perpX = Math.cos(rad + Math.PI/2) * width;
  const perpY = Math.sin(rad + Math.PI/2) * width;
  const baseX1 = cx + perpX, baseY1 = cy + perpY;
  const baseX2 = cx - perpX, baseY2 = cy - perpY;
  const ctrlX = cx + Math.cos(rad) * len * 0.55;
  const ctrlY = cy + Math.sin(rad) * len * 0.55;
  return `M${baseX1},${baseY1} Q${ctrlX + perpX*1.4},${ctrlY + perpY*1.4} ${tipX},${tipY} Q${ctrlX - perpX*1.4},${ctrlY - perpY*1.4} ${baseX2},${baseY2} Z`;
}

function svgRoundFlower(flower, colorHex, size){
  const cx = size/2, cy = size/2;
  const r = size*0.18;
  const len = size * (flower.petalRatio*0.42);
  const petals = flower.petals;
  let paths = "";
  for(let i=0;i<petals;i++){
    const angle = (360/petals)*i;
    paths += `<path d="${petalPath(cx,cy,r,angle,len,size*0.075)}" fill="${colorHex}" stroke="rgba(0,0,0,0.08)" stroke-width="0.6"/>`;
  }
  const centerColor = flower.centerShade != null ? shadeColor(colorHex, flower.centerShade) : (flower.centerColor || "#8a6b3a");
  const centerR = size*flower.centerRatio*0.32;
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${paths}<circle cx="${cx}" cy="${cy}" r="${centerR}" fill="${centerColor}"/></svg>`;
}

function spiralPath(cx, cy, r, turns){
  const points = 44;
  let d = "";
  for(let i=0;i<=points;i++){
    const t = i/points;
    const angle = t*turns*2*Math.PI;
    const radius = t*r;
    const x = cx + radius*Math.cos(angle);
    const y = cy + radius*Math.sin(angle);
    d += (i===0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1) + " ";
  }
  return d;
}

function svgTulipFlower(flower, colorHex, size){
  const cx = size/2, topY = size*0.14, baseY = size*0.62;
  const w = size*0.30;
  const petalL = `M${cx-w},${baseY} C ${cx-w*1.15},${topY+size*0.14} ${cx-w*0.4},${topY} ${cx},${topY+size*0.06} L${cx},${baseY} Z`;
  const petalR = `M${cx+w},${baseY} C ${cx+w*1.15},${topY+size*0.14} ${cx+w*0.4},${topY} ${cx},${topY+size*0.06} L${cx},${baseY} Z`;
  const petalC = `M${cx-w*0.55},${baseY} C ${cx-w*0.6},${topY*1.2} ${cx+w*0.6},${topY*1.2} ${cx+w*0.55},${baseY} Q${cx},${baseY+size*0.05} ${cx-w*0.55},${baseY} Z`;
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
    <path d="${petalL}" fill="${shadeColor(colorHex,-8)}" stroke="rgba(0,0,0,0.08)" stroke-width="0.6"/>
    <path d="${petalR}" fill="${shadeColor(colorHex,-8)}" stroke="rgba(0,0,0,0.08)" stroke-width="0.6"/>
    <path d="${petalC}" fill="${colorHex}" stroke="rgba(0,0,0,0.08)" stroke-width="0.6"/>
  </svg>`;
}

function svgRizoFlower(flower, colorHex, size){
  // Hoja rizada: coils de chenille, como en tu foto de referencia
  const coils = [
    { cx:size*0.36, cy:size*0.34, r:size*0.17 },
    { cx:size*0.63, cy:size*0.24, r:size*0.15 },
    { cx:size*0.56, cy:size*0.56, r:size*0.16 }
  ];
  const paths = coils.map(c => `<path d="${spiralPath(c.cx,c.cy,c.r,2.3)}" fill="none" stroke="${colorHex}" stroke-width="${size*0.09}" stroke-linecap="round"/>`).join("");
  const stem = `<path d="M${size*0.18},${size*0.86} L${size*0.48},${size*0.5}" stroke="${shadeColor(colorHex,-15)}" stroke-width="${size*0.05}" stroke-linecap="round" fill="none"/>`;
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${stem}${paths}</svg>`;
}

function shadeColor(hex, percent){
  const num = parseInt(hex.replace("#",""),16);
  let r = (num>>16) + percent*2.55;
  let g = ((num>>8)&0x00FF) + percent*2.55;
  let b = (num&0x0000FF) + percent*2.55;
  r = Math.max(0,Math.min(255,r)); g = Math.max(0,Math.min(255,g)); b = Math.max(0,Math.min(255,b));
  return "#" + (0x1000000 + Math.round(r)*0x10000 + Math.round(g)*0x100 + Math.round(b)).toString(16).slice(1);
}

function flowerSVG(flowerId, colorId, size){
  const flower = flowerById(flowerId);
  const color = colorById(colorId);
  const hex = flower.forceColor || (color ? color.hex : "#C0463A");
  if(flower.shape === "tulip") return svgTulipFlower(flower, hex, size);
  if(flower.shape === "rizo") return svgRizoFlower(flower, hex, size);
  return svgRoundFlower(flower, hex, size);
}

/* ---------- estado del ramo ---------- */
let bouquet = [
  { flower:"lili", color:"rosa", qty:3 },
  { flower:"tulipan", color:"rosa", qty:2 }
];
try {
  const saved = JSON.parse(localStorage.getItem("michuBouquet") || "null");
  if(saved && Array.isArray(saved.b)){
    const ok = saved.b.filter(c => c && flowerById(c.flower) && colorById(c.color) && c.qty > 0);
    if(ok.length) bouquet = ok;
  }
} catch(e){}
let selectedWrap = "kraft";
try { const sv = JSON.parse(localStorage.getItem("michuBouquet") || "null"); if(sv && wrapById(sv.w)) selectedWrap = sv.w; } catch(e){}

/* ---------- render: catálogo ---------- */
const prodCard = p => `
  <article class="prod-card">
    <div class="prod-img"><img src="${PHOTOS[p.id]}" alt="${p.name}" loading="lazy"></div>
    <div class="prod-body">
      <h3>${p.name}</h3>
      <ul>${p.items.map(i=>`<li>${i}</li>`).join("")}</ul>
      <div class="prod-foot"><span class="price">$${p.price} MXN</span>
        <button class="btn-view" type="button" data-act="add-prod" data-id="${p.id}">Agregar al carrito</button></div>
    </div>
  </article>`;
function renderCatalog(){
  const grid = document.getElementById("catalogGrid");
  if(grid) grid.innerHTML = FLOWERS.map(f => `
    <div class="flower-card" data-id="${f.id}">
      <div class="art"><img src="${PHOTOS[f.id]}" alt="${f.name} artesanal hecha con limpiapipas" loading="lazy"></div>
      <h3>${f.name}</h3>
      <div class="colors-line">Personalizable en varios colores</div>
      <div class="swatches">${COLORS.filter(c=>c.id!=="verde").map(c=>`<span class="swatch" style="background:${c.hex}" title="${c.name}"></span>`).join("")}</div>
      <div class="price">$${f.price} MXN c/u</div>
      <button class="btn-view" type="button">Ver detalles</button>
    </div>`).join("") + PRODUCTS.filter(p=>p.group==="flor").map(prodCard).join("");
  const rg = document.getElementById("ramosGrid");
  if(rg) rg.innerHTML = PRODUCTS.filter(p=>p.group!=="flor").map(prodCard).join("");
}

/* ---------- render: constructor (izquierda) ---------- */
function renderBuilder(){
  const list = document.getElementById("comboList");
  list.innerHTML = "";
  bouquet.forEach((combo, index) => {
    const row = document.createElement("div");
    row.className = "combo";
    row.innerHTML = `
      <div class="combo-thumb"><img src="${PHOTOS[combo.flower]}" alt="${flowerById(combo.flower).name}" loading="lazy"></div>
      <div class="field">
        <label for="flowerSel${index}">Tipo de flor</label>
        <select id="flowerSel${index}" data-index="${index}" data-field="flower">
          ${FLOWERS.map(f=>`<option value="${f.id}" ${f.id===combo.flower?"selected":""}>${f.name} — $${f.price}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label for="colorSel${index}">Color</label>
        <select id="colorSel${index}" data-index="${index}" data-field="color">
          ${COLORS.map(c=>`<option value="${c.id}" ${c.id===combo.color?"selected":""}>${c.name}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label>Cantidad</label>
        <div class="qty-control">
          <button type="button" class="qty-btn" data-index="${index}" data-action="dec" aria-label="Reducir cantidad">−</button>
          <span class="qty-value">${combo.qty}</span>
          <button type="button" class="qty-btn" data-index="${index}" data-action="inc" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>
      <button type="button" class="remove-combo" data-index="${index}" ${bouquet.length===1?"disabled style='opacity:.35;cursor:not-allowed;'":""}>Eliminar</button>
    `;
    list.appendChild(row);
  });

  list.querySelectorAll("select").forEach(sel=>{
    sel.addEventListener("change", (e)=>{
      const i = +e.target.dataset.index, field = e.target.dataset.field;
      bouquet[i][field] = e.target.value;
      if(field === "flower"){
        if(e.target.value === "follaje") bouquet[i].color = "verde";
        else if(bouquet[i].color === "verde") bouquet[i].color = "rosa";
      }
      renderAll();
    });
  });
  list.querySelectorAll(".qty-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const i = +btn.dataset.index;
      if(btn.dataset.action === "inc") bouquet[i].qty = Math.min(24, bouquet[i].qty+1);
      else bouquet[i].qty = Math.max(1, bouquet[i].qty-1);
      renderAll();
    });
  });
  list.querySelectorAll(".remove-combo").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(bouquet.length<=1) return;
      const i = +btn.dataset.index;
      bouquet.splice(i,1);
      renderAll();
    });
  });
}

/* ---------- render: opciones de envoltura ---------- */
function renderWrapOptions(){
  const box = document.getElementById("wrapOptions");
  box.innerHTML = "";
  WRAPS.forEach(w=>{
    const label = document.createElement("label");
    label.className = "wrap-option" + (selectedWrap===w.id ? " selected":"");
    label.innerHTML = `
      <input type="radio" name="wrapOption" value="${w.id}" ${selectedWrap===w.id?"checked":""}>
      <span class="wrap-swatch" style="background:${w.hex}"></span>
      <span class="wrap-name">${w.name}</span>
      <span class="wrap-price">+$${w.price}</span>
    `;
    box.appendChild(label);
  });
  box.querySelectorAll("input[type=radio]").forEach(r=>{
    r.addEventListener("change", (e)=>{
      selectedWrap = e.target.value;
      renderAll();
    });
  });
}

/* ---------- render: vista previa del ramo ---------- */
/* Un solo SVG que escala al ancho disponible. Cada flor lleva su tallo, que baja hasta
   quedar "clavado" dentro del papel de envoltura. El tamaño se ajusta a la cantidad y las
   flores se separan para que no se encimen. */
const PREVIEW_MAX = 30;
const STAGE = { cx:200, rx:150, ry:100, base:210, mouth:232 };   // base: donde termina el montón de flores

function placeFlowers(n, s){
  const R = Math.min(STAGE.rx, s*Math.sqrt(n)/1.9 + s/2);
  const ex = Math.max(0, R - s/2), ey = ex * STAGE.ry / STAGE.rx;
  const cy = STAGE.base - ey - s/2, pts = [];
  for(let i=0;i<n;i++){
    const r = n === 1 ? 0 : Math.sqrt((i+0.5)/n), t = i*2.39996;
    pts.push({ x:STAGE.cx + ex*r*Math.cos(t), y:cy + ey*r*Math.sin(t) });
  }
  const minD = s*0.94;
  for(let it=0; it<90; it++){
    for(let i=0;i<n;i++) for(let j=i+1;j<n;j++){
      const dx = pts[j].x-pts[i].x, dy = pts[j].y-pts[i].y, d = Math.hypot(dx,dy) || 0.01;
      if(d < minD){ const k = (minD-d)/2/d; pts[i].x-=dx*k; pts[i].y-=dy*k; pts[j].x+=dx*k; pts[j].y+=dy*k; }
    }
    pts.forEach(p=>{
      const nx = (p.x-STAGE.cx)/(ex||1), ny = (p.y-cy)/(ey||1), m = Math.hypot(nx,ny);
      if(ex && m > 1){ p.x = STAGE.cx + nx/m*ex; p.y = cy + ny/m*ey; }
    });
  }
  let md = Infinity;
  for(let i=0;i<n;i++) for(let j=i+1;j<n;j++) md = Math.min(md, Math.hypot(pts[i].x-pts[j].x, pts[i].y-pts[j].y));
  const top = Math.min(...pts.map(p=>p.y)) - s/2;
  return { s, pts, ok: (n < 2 || md >= s*0.84) && top >= 0 };
}
function layoutFlowers(n){
  let last;
  for(let s=90; s>=32; s-=2){ last = placeFlowers(n, s); if(last.ok) break; }   // la flor más grande que quepa sin encimarse
  return last;
}

const _ids = new WeakMap(); let _uid = 0;
const comboId = c => { if(!_ids.has(c)) _ids.set(c, ++_uid); return _ids.get(c); };

function ensurePreviewBox(){
  if(!document.getElementById("previewStyles")){
    const st = document.createElement("style"); st.id = "previewStyles";
    st.textContent = `
#bouquetStage{height:auto !important;aspect-ratio:20/19;display:block !important;max-width:420px;margin:0 auto;position:relative;overflow:hidden;}
#bouquetStage>svg{display:block;width:100%;height:100%;}
.bouquet-note{text-align:center;font-size:.82rem;color:#6F4F70;margin:10px 0 0;}
.fl-item,.st-item{transition:transform .45s ease,opacity .25s ease;}
.fl-item.leaving,.st-item.leaving{opacity:0;}
.fl-pop{transform-box:fill-box;transform-origin:center;}
.fl-item.enter .fl-pop{animation:flpop .5s cubic-bezier(.3,1.5,.5,1) both;}
@keyframes flpop{from{opacity:0;transform:scale(.2);}}`;
    document.head.appendChild(st);
  }
  const stage = document.getElementById("bouquetStage");
  if(!document.getElementById("bouquetSvg"))
    stage.innerHTML = '<svg id="bouquetSvg" viewBox="0 0 400 380" role="img" aria-label="Vista previa de tu ramo"></svg>';
  if(!document.getElementById("bouquetNote")){
    const p = document.createElement("p"); p.id = "bouquetNote"; p.className = "bouquet-note";
    stage.insertAdjacentElement("afterend", p);
  }
}

function renderPreview(){
  ensurePreviewBox();
  const svg = document.getElementById("bouquetSvg"), note = document.getElementById("bouquetNote");
  const wrap = wrapById(selectedWrap), total = bouquet.reduce((s,c)=>s+c.qty,0);
  if(!svg.querySelector("#flowerLayer")) svg.setAttribute("viewBox","0 0 400 380"), svg.innerHTML = '<g id="stemLayer"></g><g id="wrapLayer"></g><g id="leafLayer"></g><g id="flowerLayer"></g>';

  const M = STAGE.mouth, rb = "#C0587F";
  svg.querySelector("#wrapLayer").innerHTML = `
    <ellipse cx="200" cy="376" rx="82" ry="6" fill="rgba(58,23,64,.14)"/>
    <path d="M62,${M} L338,${M} L282,376 L118,376 Z" fill="${wrap.hex}" stroke="rgba(0,0,0,0.10)" stroke-width="1.5"/>
    <path d="M62,${M} L338,${M} L328,${M+30} L72,${M+30} Z" fill="${shadeColor(wrap.hex,-10)}" opacity="0.65"/>
    <path d="M62,${M} Q200,${M-14} 338,${M}" fill="none" stroke="rgba(0,0,0,.12)" stroke-width="2"/>
    <path d="M96,318 Q200,332 304,318 L300,336 Q200,350 100,336 Z" fill="${rb}"/>
    <ellipse cx="178" cy="333" rx="18" ry="9" transform="rotate(-24 178 333)" fill="${rb}"/>
    <ellipse cx="222" cy="333" rx="18" ry="9" transform="rotate(24 222 333)" fill="${rb}"/>
    <circle cx="200" cy="335" r="6" fill="${shadeColor(rb,-14)}"/>`;

  const qty = bouquet.map(c => total > PREVIEW_MAX ? Math.max(1, Math.round(c.qty*PREVIEW_MAX/total)) : c.qty);
  const leaf = c => flowerById(c.flower).shape === "rizo";
  const mk = (c,i) => Array.from({length:qty[i]}, (_,k)=>({ c, key:comboId(c)+":"+k }));
  const groups = bouquet.map((c,i)=>leaf(c) ? [] : mk(c,i));
  const leaves = bouquet.flatMap((c,i)=>leaf(c) ? mk(c,i) : []);
  const items = [];
  for(let k=0; groups.some(g=>g.length>k); k++) groups.forEach(g=>{ if(g[k]) items.push(g[k]); });
  items.push(...leaves);
  const { s, pts } = layoutFlowers(items.length);

  const keep = new Set();
  items.forEach((it,i)=>{
    keep.add(it.key);
    const p = pts[i], isLeaf = leaf(it.c), sig = it.c.flower + "|" + it.c.color + "|" + isLeaf;
    // tallo: baja desde la flor y se pierde dentro del papel
    let st = svg.querySelector(`.st-item[data-key="${it.key}"]:not(.leaving)`);
    if(!st){
      svg.querySelector("#stemLayer").insertAdjacentHTML("beforeend", `<g class="st-item" data-key="${it.key}"><path fill="none" stroke="#5E8A4A" stroke-width="3.6" stroke-linecap="round"/></g>`);
      st = svg.querySelector(`.st-item[data-key="${it.key}"]:not(.leaving)`);
    }
    const dx = (STAGE.cx + (p.x-STAGE.cx)*0.3) - p.x, len = 300 - p.y;
    st.style.transform = `translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px)`;
    st.firstElementChild.setAttribute("d", `M0,0 Q${(dx*.25).toFixed(1)},${(len*.55).toFixed(1)} ${dx.toFixed(1)},${len.toFixed(1)}`);
    // flor
    let el = svg.querySelector(`.fl-item[data-key="${it.key}"]:not(.leaving)`);
    if(el && el.dataset.sig !== sig){ el.remove(); el = null; }
    if(!el){
      const rot = ((i*37)%26)-13;
      svg.querySelector(isLeaf ? "#leafLayer" : "#flowerLayer").insertAdjacentHTML("beforeend",
        `<g class="fl-item enter" data-key="${it.key}" data-sig="${sig}"><g class="fl-pop"><g transform="translate(-30,-30) rotate(${rot},30,30)">${flowerSVG(it.c.flower,it.c.color,60)}</g></g></g>`);
      el = svg.querySelector(`.fl-item[data-key="${it.key}"]:not(.leaving)`);
    }
    el.style.transform = `translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px) scale(${(s/60).toFixed(3)})`;
  });
  svg.querySelectorAll(".fl-item:not(.leaving),.st-item:not(.leaving)").forEach(el=>{
    if(!keep.has(el.dataset.key)){ el.classList.add("leaving"); setTimeout(()=>el.remove(), 260); }
  });
  note.textContent = total > PREVIEW_MAX ? `Vista representativa · tu ramo lleva ${total} flores` : `${total} ${total===1?"flor":"flores"} en tu ramo`;
}

/* ---------- cálculo de precio ---------- */
function calcSubtotals(){
  return bouquet.map(c=>{
    const f = flowerById(c.flower);
    return { ...c, unitPrice: f.price, subtotal: f.price * c.qty, flowerName: f.name, colorName: colorById(c.color).name };
  });
}
function calcTotal(){
  const subtotals = calcSubtotals();
  const flowersTotal = subtotals.reduce((s,c)=>s+c.subtotal,0);
  const wrapPrice = wrapById(selectedWrap).price;
  return { flowersTotal, wrapPrice, total: flowersTotal + wrapPrice, subtotals };
}

/* ---------- render: resumen del pedido ---------- */
function renderSummary(){
  const rowsBox = document.getElementById("summaryRows");
  const totalBox = document.getElementById("totalAmount");
  const { subtotals, wrapPrice, total } = calcTotal();

  if(subtotals.length === 0){
    rowsBox.innerHTML = `<div class="summary-empty">Tu ramo está vacío por ahora.</div>`;
  } else {
    rowsBox.innerHTML = subtotals.map(s=>`
      <div class="summary-row">
        <span>${s.qty} × ${s.flowerName} (${s.colorName})</span>
        <span>$${s.subtotal} MXN</span>
      </div>
    `).join("") + `
      <div class="summary-row">
        <span>Envoltura — ${wrapById(selectedWrap).name}</span>
        <span>$${wrapPrice} MXN</span>
      </div>
    `;
  }
  totalBox.textContent = `$${total} MXN`;
}

/* ---------- mensaje de WhatsApp ---------- */
function buildWhatsAppMessage(){
  const { subtotals, total } = calcTotal();
  const dedication = document.getElementById("dedicationInput").value.trim();
  let lines = [];
  lines.push("Hola, quiero hacer un pedido de un ramo personalizado.");
  lines.push("");
  lines.push("Mi ramo:");
  subtotals.forEach(s=>{
    lines.push(`- ${s.qty} ${s.flowerName.toLowerCase()}${s.qty>1?"s":""} ${s.colorName.toLowerCase()}${s.qty>1?"s":""}`);
  });
  lines.push("");
  lines.push(`Envoltura: ${wrapById(selectedWrap).name}`);
  if(dedication) lines.push(`Dedicatoria: ${dedication}`);
  lines.push("");
  lines.push(`Total: $${total} MXN`);
  return lines.join("\n");
}

function updateWhatsAppLinks(){
  if(!document.getElementById("whatsappBtn")) return;
  const msg = encodeURIComponent(buildWhatsAppMessage());
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  document.getElementById("whatsappBtn").href = url;
  const fw = document.getElementById("floatWa"); if(fw) fw.href = url;
}

/* ---------- galería ---------- */
function renderGallery(){
  const grid = document.getElementById("galleryGrid"); if(!grid) return;
  grid.innerHTML = BOUQUET_PHOTOS.map(b=>`
    <div class="gallery-item">
      <img src="${b.src}" alt="${b.caption}" loading="lazy">
      <div class="gallery-caption">${b.caption}</div>
    </div>
  `).join("");
}

/* ---------- fotos reales (hero / nosotros) ---------- */
function renderHeroArt(){
  document.getElementById("heroArt").innerHTML = `
    <div class="hero-photo-frame">
      <img src="${BOUQUET_PHOTOS[2].src}" alt="Ramo artesanal Detalles Michu hecho a mano">
      <span class="hero-photo-tag">100% hecho a mano</span>
    </div>`;
}
function renderAboutArt(){
  document.getElementById("aboutArt").innerHTML = `
    <div class="about-photo-frame">
      <img src="${PHOTOS.azucena}" alt="Azucena artesanal de limpiapipas hecha a mano">
    </div>`;
}

/* ---------- render maestro ---------- */
function renderAll(){
  try { localStorage.setItem("michuBouquet", JSON.stringify({ b:bouquet, w:selectedWrap })); } catch(e){}
  if(!document.getElementById("comboList")) return;
  [renderBuilder, renderWrapOptions, renderPreview, renderSummary, updateWhatsAppLinks].forEach(fn => {
    try { fn(); } catch(err){ console.error("Error en " + fn.name, err); }
  });
}

/* ---------- inicialización ---------- */
const addBtn = document.getElementById("addComboBtn");
if(addBtn) addBtn.addEventListener("click", ()=>{
  bouquet.push({ flower: FLOWERS[0].id, color: COLORS[0].id, qty: 1 });
  renderAll();
});
const dedIn = document.getElementById("dedicationInput");
if(dedIn) dedIn.addEventListener("input", updateWhatsAppLinks);
const yr = document.getElementById("year"); if(yr) yr.textContent = new Date().getFullYear();

renderCatalog();
renderGallery();
renderAll();

/* =========================================================================
   TIENDA: modal de producto, carrito, pago y confirmación (agregado)
   ========================================================================= */
const STORE = {
  envioLocal: 60,            // costo de envío a domicilio (MXN)
  envioGratisDesde: 600,     // envío gratis a partir de este subtotal
  anticipacion: 3,           // días mínimos para elegir fecha de entrega
  spei: { banco:"(Banco — reemplazar)", clabe:"0000 0000 0000 0000 00", titular:"Detalles Michu" },
  modoDemo: true             // true = el pago con tarjeta es SOLO visual (no cobra). Pon false al integrar Mercado Pago / Stripe
};
const INFO = Object.fromEntries(FLOWERS.map(f => [f.id, { tag:f.tag, desc:f.desc, specs:[["Material","Chenille y alambre"],["Hecha","A mano, por pedido"],["Color","Tú lo eliges"]] }]));
const PAYN = {card:"Tarjeta",spei:"Transferencia SPEI",oxxo:"Depósito en OXXO",cash:"Efectivo al recibir/recoger"};

const $ = s => document.querySelector(s);
const money = n => "$" + Number(n).toLocaleString("es-MX") + " MXN";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ---------- estado del carrito (se guarda en el navegador) ---------- */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("michuCart") || "[]"); } catch(e) { cart = []; }
cart = Array.isArray(cart) ? cart.filter(i => i && i.key && i.qty > 0 && PHOTOS[i.thumb]) : [];
let view = "", mm = null, lastFocus = null;
let co = { delivery:"local", pay:"card", step:2, d:{} };

const count = () => cart.reduce((s,i)=>s+i.qty,0);
const subtotal = () => cart.reduce((s,i)=>s+i.unit*i.qty,0);
const shipCost = m => (m==="local" && subtotal() < STORE.envioGratisDesde) ? STORE.envioLocal : 0;

function addItem(it){
  const f = cart.find(x => x.key === it.key);
  if(f) f.qty = Math.min(f.qty + it.qty, 50); else cart.push(it);
  refresh();
}
function refresh(){
  try { localStorage.setItem("michuCart", JSON.stringify(cart)); } catch(e){}
  const n = count(), b = $("#cartBadge");
  if(b){ b.textContent = n; b.hidden = !n; }
  renderDrawer();
  if(view === "cart") renderCart();
}
function toast(msg){
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(()=>t.classList.remove("show"), 2200);
}
function lock(){ document.body.style.overflow = (!$("#pm").hidden || $("#drawer").classList.contains("open")) ? "hidden" : ""; }

const rowHTML = i => `
  <div class="ci">
    <img src="${PHOTOS[i.thumb]}" alt="">
    <div>
      <strong>${esc(i.name)}</strong>
      <div class="ci-sub">${esc(i.sub)}</div>
      <div class="qty-control" style="margin-top:8px">
        <button type="button" class="qty-btn" data-act="dec" data-key="${esc(i.key)}" aria-label="Reducir cantidad">−</button>
        <span class="qty-value">${i.qty}</span>
        <button type="button" class="qty-btn" data-act="inc" data-key="${esc(i.key)}" aria-label="Aumentar cantidad">+</button>
        <button type="button" class="remove-combo" data-act="del" data-key="${esc(i.key)}">Quitar</button>
      </div>
    </div>
    <div class="ci-price">${money(i.unit*i.qty)}</div>
  </div>`;

/* ---------- carrito lateral ---------- */
function renderDrawer(){
  if(!$("#drawerBody")) return;
  const body = $("#drawerBody"), foot = $("#drawerFoot");
  if(!cart.length){
    body.innerHTML = `<div class="empty"><p>Tu carrito está vacío.</p><button class="btn btn-secondary" data-act="leave" type="button">Explorar flores</button></div>`;
    foot.hidden = true; return;
  }
  body.innerHTML = cart.map(rowHTML).join("");
  foot.hidden = false;
  $("#drawerSub").textContent = money(subtotal());
  const left = STORE.envioGratisDesde - subtotal();
  $("#drawerShip").textContent = left > 0 ? `Te faltan ${money(left)} para envío gratis a domicilio.` : "¡Tienes envío gratis a domicilio!";
}
function openDrawer(){
  lastFocus = document.activeElement;
  $("#scrim").hidden = false; $("#drawer").classList.add("open"); $("#drawer").setAttribute("aria-hidden","false");
  lock(); $("#drawerClose").focus();
}
function closeDrawer(){
  $("#scrim").hidden = true; $("#drawer").classList.remove("open"); $("#drawer").setAttribute("aria-hidden","true");
  lock(); if(lastFocus && lastFocus.focus) lastFocus.focus();
}

/* ---------- modal de producto ---------- */
function openModal(id){
  const f = flowerById(id), inf = INFO[id];
  mm = { id, color:(id === "follaje" ? "verde" : COLORS[0].id), qty:1 };
  lastFocus = document.activeElement;
  $("#pmMedia").innerHTML = `<img src="${PHOTOS[id]}" alt="${esc(f.name)} artesanal de limpiapipas y listón"><span class="pm-chip" id="pmChip" title="Vista del color elegido"></span>`;
  $("#pmTag").textContent = inf.tag;
  $("#pmTitle").textContent = f.name;
  $("#pmPrice").textContent = money(f.price) + " c/u";
  $("#pmDesc").textContent = inf.desc;
  $("#pmSpecs").innerHTML = inf.specs.map(([k,v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  $("#pmSw").innerHTML = COLORS.map(c => `<button type="button" class="sw" style="background:${c.hex}" data-color="${c.id}" title="${c.name}" aria-label="${c.name}"></button>`).join("");
  paintModal();
  $("#pm").hidden = false; lock();
  $("#pm .modal-x").focus();
}
function paintModal(){
  const f = flowerById(mm.id);
  $("#pmColorName").textContent = colorById(mm.color).name;
  $("#pmQty").textContent = mm.qty;
  $("#pmAddTotal").textContent = money(f.price * mm.qty);
  $("#pmChip").innerHTML = flowerSVG(mm.id, mm.color, 54);
  $("#pmSw").querySelectorAll(".sw").forEach(b => b.setAttribute("aria-pressed", b.dataset.color === mm.color));
}
function closeModal(){
  $("#pm").hidden = true; lock();
  if(lastFocus && lastFocus.focus) lastFocus.focus();
}

/* ---------- ramo personalizado → carrito ---------- */
function bouquetToCart(){
  const { subtotals, total } = calcTotal();
  const w = wrapById(selectedWrap), ded = $("#dedicationInput").value.trim();
  const sub = subtotals.map(s => `${s.qty} ${s.flowerName} ${s.colorName.toLowerCase()}`).join(", ") + ` · ${w.name}` + (ded ? ` · Dedicatoria: “${ded}”` : "");
  addItem({ key:"ramo-" + Date.now(), name:"Ramo personalizado", sub, unit:total, qty:1, thumb:bouquet[0].flower });
  openDrawer();
}

/* ---------- pantallas ---------- */
const stepper = n => `<ol class="stepper" aria-label="Progreso de compra">${["Carrito","Entrega","Pago","Listo"].map((t,i)=>`<li class="${i+1<n?"done":""} ${i+1===n?"on":""}"><span>${i+1<n?"✓":i+1}</span>${t}</li>`).join("")}</ol>`;

function sumBox(m){
  const s = subtotal(), sh = m ? shipCost(m) : 0;
  return `<div class="summary-rows">${cart.map(i=>`<div class="summary-row"><span>${i.qty} × ${esc(i.name)}</span><span>${money(i.unit*i.qty)}</span></div>`).join("")}
    <div class="summary-row"><span>Subtotal</span><span>${money(s)}</span></div>
    <div class="summary-row"><span>Envío</span><span>${m ? (sh ? money(sh) : "Gratis") : "Se calcula en el siguiente paso"}</span></div></div>
    <div class="summary-row total"><span>Total</span><span class="amt">${money(s+sh)}</span></div>`;
}
function showScreen(v){
  view = v; closeDrawer();
  $("#site").hidden = true; $("#screen").hidden = false;
  window.scrollTo(0,0);
  if(v === "cart") renderCart(); else renderCheckout();
}
function leaveScreen(target){
  view = ""; $("#screen").hidden = true; $("#site").hidden = false;
  setTimeout(()=>{ const el = target ? document.querySelector(target) : null; el ? el.scrollIntoView() : window.scrollTo(0,0); }, 0);
}

function renderCart(){
  view = "cart";
  $("#screen").innerHTML = `<div class="wrap">${stepper(1)}<h2>Tu carrito</h2>` + (!cart.length
    ? `<div class="panel empty"><p>Aún no has agregado flores.</p><button class="btn btn-primary" data-act="leave" type="button">Ver catálogo</button></div>`
    : `<div class="co-grid">
        <div class="panel">${cart.map(rowHTML).join("")}<button class="link-btn" data-act="leave" type="button">← Seguir comprando</button></div>
        <aside class="panel co-sum"><h3>Resumen</h3>${sumBox(null)}
          <p class="ship-note">El envío y la fecha se eligen en el siguiente paso. Cada ramo se teje a mano: pide con ${STORE.anticipacion} días de anticipación.</p>
          <button class="btn btn-primary btn-block" data-act="checkout" type="button">Continuar</button>
        </aside></div>`) + `</div>`;
}

function renderCheckout(){
  if(!cart.length){ showScreen("cart"); return; }
  view = "checkout";
  const d = co.d, step = co.step;
  d.hora = d.hora || "10:00 – 13:00";
  const min = new Date(Date.now() + STORE.anticipacion*864e5).toISOString().slice(0,10);
  const opt = (act, v, cur, title, sub) => `<button type="button" role="radio" aria-checked="${v===cur}" class="wrap-option${v===cur?" selected":""}" data-act="${act}" data-v="${v}"><span class="wrap-name"><strong>${title}</strong><br><small>${sub}</small></span></button>`;
  const fld = (id, label, extra="", cls="") => `<div class="field ${cls}"><label for="f-${id}">${label}</label><input id="f-${id}" data-f="${id}" value="${esc(d[id])}" ${extra}></div>`;
  let left;
  if(step === 2){
    left = `<div class="panel"><h3>1. Tus datos</h3><div class="fg">
        ${fld("nombre","Nombre completo",'type="text" autocomplete="name"')}
        ${fld("tel","Teléfono / WhatsApp",'type="tel" inputmode="tel" autocomplete="tel"')}
        ${fld("mail","Correo (opcional)",'type="email" autocomplete="email"',"full")}</div></div>
      <div class="panel" style="margin-top:20px"><h3>2. ¿Cómo lo recibes?</h3>
        <div class="wrap-options" role="radiogroup">
          ${opt("deliv","local",co.delivery,"Entrega a domicilio", shipCost("local") ? money(STORE.envioLocal) : "Envío gratis")}
          ${opt("deliv","pickup",co.delivery,"Recoger en punto de entrega","Sin costo")}</div>
        ${co.delivery==="local" ? `<div class="fg" style="margin-top:16px">
          ${fld("calle","Calle y número",'type="text" autocomplete="street-address"',"full")}
          ${fld("colonia","Colonia",'type="text"')}
          ${fld("cp","Código postal",'type="text" inputmode="numeric" maxlength="5" autocomplete="postal-code"')}
          <div class="field full"><label for="f-ref">Referencias (opcional)</label><textarea id="f-ref" data-f="ref" rows="2" placeholder="Portón negro, entre calles…">${esc(d.ref)}</textarea></div></div>` : ""}
        <div class="fg" style="margin-top:16px">
          ${fld("fecha", co.delivery==="local"?"Fecha de entrega":"Fecha para recoger",`type="date" min="${min}"`)}
          <div class="field"><label for="f-hora">Horario</label><select id="f-hora" data-f="hora">${["10:00 – 13:00","13:00 – 16:00","16:00 – 19:00"].map(h=>`<option ${h===d.hora?"selected":""}>${h}</option>`).join("")}</select></div></div>
      </div>
      <div class="co-actions"><button class="btn btn-secondary" data-act="cart" type="button">← Carrito</button><button class="btn btn-primary" data-act="to-pay" type="button">Continuar al pago</button></div>`;
  } else {
    const t = money(subtotal() + shipCost(co.delivery));
    const panels = {
      card:`${STORE.modoDemo ? `<div class="notice"><strong>Modo demostración:</strong> este formulario es solo visual y no realiza ningún cobro. Conecta Mercado Pago o Stripe para cobrar con tarjeta.</div>`:""}
        <div class="fg"><div class="field full"><label for="c-num">Número de tarjeta</label><input id="c-num" inputmode="numeric" autocomplete="cc-number" placeholder="0000 0000 0000 0000"></div>
        <div class="field full"><label for="c-name">Nombre en la tarjeta</label><input id="c-name" type="text" autocomplete="cc-name"></div>
        <div class="field"><label for="c-exp">Vence (MM/AA)</label><input id="c-exp" inputmode="numeric" autocomplete="cc-exp" placeholder="MM/AA"></div>
        <div class="field"><label for="c-cvv">CVV</label><input id="c-cvv" inputmode="numeric" autocomplete="cc-csc" placeholder="123"></div></div>`,
      spei:`<p>Al confirmar te mostraremos los datos para tu transferencia. Envía tu comprobante por WhatsApp para apartar tu pedido.</p><dl><dt>Banco</dt><dd>${esc(STORE.spei.banco)}</dd><dt>CLABE</dt><dd>${esc(STORE.spei.clabe)}</dd><dt>Titular</dt><dd>${esc(STORE.spei.titular)}</dd><dt>Monto</dt><dd>${t}</dd></dl>`,
      oxxo:`<p>Te enviaremos por WhatsApp tu referencia de pago para depositar en cualquier tienda OXXO. El pedido se aparta al confirmar el depósito.</p>`,
      cash:`<p>Pagas en efectivo al ${co.delivery==="local"?"recibir":"recoger"} tu pedido. Si puedes, ten el monto exacto (${t}).</p>`
    };
    left = `<div class="panel"><h3>3. Método de pago</h3>
      <div class="wrap-options" role="radiogroup">${Object.keys(PAYN).map(k=>opt("pay",k,co.pay,PAYN[k],{card:"Crédito o débito",spei:"Transferencia bancaria",oxxo:"Con referencia",cash:"Al entregar"}[k])).join("")}</div>
      <div class="pay-panel">${panels[co.pay]}</div></div>
      <div class="co-actions"><button class="btn btn-secondary" data-act="back-ship" type="button">← Entrega</button><button class="btn btn-primary" data-act="confirm" type="button">Confirmar pedido · ${t}</button></div>`;
  }
  $("#screen").innerHTML = `<div class="wrap">${stepper(step+1)}<h2>${step===2?"Datos y entrega":"Pago"}</h2><div class="co-grid"><div><div id="coAlert"></div>${left}</div><aside class="panel co-sum"><h3>Tu pedido</h3>${sumBox(co.delivery)}</aside></div></div>`;
  $("#screen").querySelectorAll("[data-f]").forEach(el => el.addEventListener("input", () => { co.d[el.dataset.f] = el.value; }));
  const digits = (id, max, fmt) => { const el = $("#"+id); if(el) el.addEventListener("input", () => { el.value = fmt(el.value.replace(/\D/g,"").slice(0,max)); }); };
  digits("c-num", 19, v => v.replace(/(.{4})/g,"$1 ").trim());
  digits("c-exp", 4, v => v.length > 2 ? v.slice(0,2) + "/" + v.slice(2) : v);
  digits("c-cvv", 4, v => v);
}

/* ---------- validaciones ---------- */
const luhn = n => { let s = 0, alt = false; for(let i=n.length-1;i>=0;i--){ let x = +n[i]; if(alt){ x*=2; if(x>9) x-=9; } s+=x; alt=!alt; } return s % 10 === 0; };
function validateShip(){
  const d = co.d, e = [];
  if(!d.nombre || d.nombre.trim().length < 3) e.push(["f-nombre","Escribe tu nombre completo."]);
  if((d.tel||"").replace(/\D/g,"").length < 10) e.push(["f-tel","Escribe un teléfono de 10 dígitos."]);
  if(d.mail && !/^\S+@\S+\.\S+$/.test(d.mail)) e.push(["f-mail","El correo no parece válido."]);
  if(co.delivery === "local"){
    if(!d.calle || d.calle.trim().length < 4) e.push(["f-calle","Escribe tu calle y número."]);
    if(!d.colonia || d.colonia.trim().length < 2) e.push(["f-colonia","Escribe tu colonia."]);
    if(!/^\d{5}$/.test(d.cp || "")) e.push(["f-cp","El código postal debe tener 5 dígitos."]);
  }
  const min = new Date(Date.now() + STORE.anticipacion*864e5).toISOString().slice(0,10);
  if(!d.fecha || d.fecha < min) e.push(["f-fecha",`Elige una fecha a partir de ${min} (pedimos ${STORE.anticipacion} días de anticipación).`]);
  return e;
}
function validateCard(){
  const e = [], num = ($("#c-num").value||"").replace(/\D/g,""), exp = $("#c-exp").value, cvv = $("#c-cvv").value;
  if(num.length < 13 || !luhn(num)) e.push(["c-num","El número de tarjeta no es válido."]);
  if(($("#c-name").value||"").trim().length < 3) e.push(["c-name","Escribe el nombre como aparece en la tarjeta."]);
  const m = /^(\d{2})\/(\d{2})$/.exec(exp);
  const now = new Date(), yy = now.getFullYear() % 100, mo = now.getMonth() + 1;
  if(!m || +m[1] < 1 || +m[1] > 12 || +m[2] < yy || (+m[2] === yy && +m[1] < mo)) e.push(["c-exp","La fecha de vencimiento no es válida."]);
  if(!/^\d{3,4}$/.test(cvv)) e.push(["c-cvv","El CVV debe tener 3 o 4 dígitos."]);
  return e;
}
function fail(list){
  const box = $("#coAlert");
  box.innerHTML = `<div class="alert" role="alert"><strong>Revisa estos datos:</strong><ul>${list.map(x=>`<li>${esc(x[1])}</li>`).join("")}</ul></div>`;
  document.querySelectorAll(".invalid").forEach(x => x.classList.remove("invalid"));
  list.forEach(([id]) => { const el = $("#"+id); if(el) el.classList.add("invalid"); });
  box.scrollIntoView({behavior:"smooth", block:"start"});
  const first = $("#"+list[0][0]); if(first) first.focus({preventScroll:true});
}

/* ---------- confirmación ---------- */
function orderMsg(o){
  const L = [`Hola, acabo de hacer mi pedido *${o.id}* en Detalles Michu.`, "", "*Pedido:*"];
  o.items.forEach(i => L.push(`- ${i.qty} × ${i.name}: ${i.sub} (${money(i.unit*i.qty)})`));
  L.push("", `Subtotal: ${money(o.sub)}`, `Envío: ${o.sh ? money(o.sh) : "Gratis"}`, `*Total: ${money(o.total)}*`, "");
  L.push(`Entrega: ${o.delivery==="local" ? "A domicilio" : "Recoger"} — ${o.d.fecha} ${o.d.hora}`);
  if(o.delivery === "local") L.push(`Dirección: ${o.d.calle}, ${o.d.colonia}, CP ${o.d.cp}${o.d.ref ? " ("+o.d.ref+")" : ""}`);
  L.push(`Pago: ${PAYN[o.pay]}`, `Nombre: ${o.d.nombre}`, `Tel: ${o.d.tel}`);
  return L.join("\n");
}
function confirmOrder(){
  if(co.pay === "card"){ const e = validateCard(); if(e.length){ fail(e); return; } }
  const sub = subtotal(), sh = shipCost(co.delivery);
  const o = { id:"MICHU-" + Date.now().toString(36).slice(-5).toUpperCase(), items:cart.map(i=>({...i})), sub, sh, total:sub+sh, d:{...co.d}, delivery:co.delivery, pay:co.pay };
  cart = []; refresh();
  co = { delivery:o.delivery, pay:"card", step:2, d:{} };
  renderDone(o);
}
function renderDone(o){
  view = "done"; window.scrollTo(0,0);
  const next = {
    card: STORE.modoDemo ? `<div class="notice"><strong>Modo demostración:</strong> no se realizó ningún cargo a tu tarjeta.</div>` : `<p>Recibimos tu pago con tarjeta.</p>`,
    spei: `<p>Haz tu transferencia y envíanos el comprobante por WhatsApp.</p><dl><dt>Banco</dt><dd>${esc(STORE.spei.banco)}</dd><dt>CLABE</dt><dd>${esc(STORE.spei.clabe)}</dd><dt>Titular</dt><dd>${esc(STORE.spei.titular)}</dd><dt>Monto</dt><dd>${money(o.total)}</dd></dl>`,
    oxxo: `<p>Te enviaremos tu referencia de pago por WhatsApp para que depositas en OXXO.</p>`,
    cash: `<p>Pagarás ${money(o.total)} en efectivo al ${o.delivery==="local" ? "recibir" : "recoger"} tu pedido.</p>`
  }[o.pay].replace("que depositas","que deposites");
  $("#screen").innerHTML = `<div class="wrap done">${stepper(5)}
    <div class="check" aria-hidden="true">✓</div><h2>¡Gracias, ${esc(o.d.nombre.split(" ")[0])}!</h2>
    <p>Tu pedido quedó registrado. Envíalo por WhatsApp para que empecemos a tejer tus flores.</p>
    <div class="order-id">${o.id}</div>
    <div class="panel"><h3>Resumen</h3><div class="summary-rows">${o.items.map(i=>`<div class="summary-row"><span>${i.qty} × ${esc(i.name)}<br><small>${esc(i.sub)}</small></span><span>${money(i.unit*i.qty)}</span></div>`).join("")}
      <div class="summary-row"><span>Envío</span><span>${o.sh ? money(o.sh) : "Gratis"}</span></div></div>
      <div class="summary-row total"><span>Total</span><span class="amt">${money(o.total)}</span></div></div>
    <div class="panel pay-panel" style="margin-top:0"><strong>${PAYN[o.pay]}</strong>${next}</div>
    <div class="order-actions">
      <a class="btn btn-whatsapp btn-block" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMsg(o))}">Enviar pedido por WhatsApp</a>
      <button class="btn btn-secondary btn-block" data-act="leave" type="button">Volver a la tienda</button></div></div>`;
}

/* ---------- eventos ---------- */
document.addEventListener("click", e => {
  const a = e.target.closest("[data-act]");
  if(a){
    const k = a.dataset.key, act = a.dataset.act, it = cart.find(x => x.key === k);
    switch(act){
      case "open-drawer": openDrawer(); break;
      case "close-drawer": closeDrawer(); break;
      case "menu": { const m = $(".nav-links"), o = m.classList.toggle("open"); a.setAttribute("aria-expanded", o); break; }
      case "inc": if(it){ it.qty = Math.min(50, it.qty+1); refresh(); } break;
      case "dec": if(it){ it.qty = Math.max(1, it.qty-1); refresh(); } break;
      case "del": cart = cart.filter(x => x.key !== k); refresh(); break;
      case "pm-close": closeModal(); break;
      case "pm-inc": mm.qty = Math.min(24, mm.qty+1); paintModal(); break;
      case "pm-dec": mm.qty = Math.max(1, mm.qty-1); paintModal(); break;
      case "pm-add": {
        const f = flowerById(mm.id), c = colorById(mm.color);
        addItem({ key:mm.id+"|"+mm.color, name:f.name, sub:"Color " + c.name.toLowerCase(), unit:f.price, qty:mm.qty, thumb:mm.id });
        closeModal(); openDrawer(); break; }
      case "pm-ramo":
        bouquet.push({ flower:mm.id, color:mm.color, qty:mm.qty }); renderAll(); closeModal();
        if(document.getElementById("comboList")){ toast("Flor sumada a tu ramo personalizado"); document.getElementById("personaliza").scrollIntoView({behavior:"smooth"}); }
        else location.href = "personaliza.html#personaliza"; break;
      case "add-prod": {
        const p = PRODUCTS.find(x => x.id === a.dataset.id); if(!p) break;
        addItem({ key:"prod-" + p.id, name:p.name, sub:p.items.join(", "), unit:p.price, qty:1, thumb:p.id });
        openDrawer(); break; }
      case "cart": showScreen("cart"); break;
      case "checkout": co.step = 2; showScreen("checkout"); break;
      case "back-ship": co.step = 2; renderCheckout(); break;
      case "to-pay": { const err = validateShip(); if(err.length) fail(err); else { co.step = 3; renderCheckout(); window.scrollTo(0,0); } break; }
      case "deliv": co.delivery = a.dataset.v; renderCheckout(); break;
      case "pay": co.pay = a.dataset.v; renderCheckout(); break;
      case "confirm": confirmOrder(); break;
      case "leave": closeDrawer(); if(document.getElementById("catalogGrid")) leaveScreen("#catalogGrid"); else location.href = "catalogo.html"; break;
    }
    return;
  }
  const sw = e.target.closest(".sw");
  if(sw){ mm.color = sw.dataset.color; paintModal(); return; }
  if(e.target.id === "pm"){ closeModal(); return; }
  const card = e.target.closest("#catalogGrid .flower-card");
  if(card){ openModal(card.dataset.id); return; }
  const link = e.target.closest('a[href^="#"]');
  if(link){
    $(".nav-links").classList.remove("open");
    if(view){ e.preventDefault(); const h = link.getAttribute("href"); leaveScreen(h.length > 1 ? h : null); }
  }
});
document.addEventListener("keydown", e => {
  const dOpen = $("#drawer").classList.contains("open");
  if(e.key === "Escape"){ if(!$("#pm").hidden) closeModal(); else if(dOpen) closeDrawer(); }
  if(e.key === "Tab"){
    const box = !$("#pm").hidden ? $("#pm") : dOpen ? $("#drawer") : null;
    if(!box) return;
    const f = [...box.querySelectorAll("button,[href],input,select,textarea")].filter(x => !x.disabled && x.offsetParent !== null);
    if(!f.length) return;
    const first = f[0], last = f[f.length-1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
});
if($("#addOrderBtn")) $("#addOrderBtn").addEventListener("click", bouquetToCart);

/* aparición suave al hacer scroll */
if("IntersectionObserver" in window){
  const io = new IntersectionObserver(es => es.forEach(x => { if(x.isIntersecting){ x.target.classList.add("in"); io.unobserve(x.target); } }), {threshold:.12});
  document.querySelectorAll(".flower-card,.contact-card,.gallery-item,.about-grid,.faq details").forEach(el => { el.classList.add("rv"); io.observe(el); });
}
refresh();

/* resalta en el menú la página donde estás */
(function(){
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(l => {
    if((l.getAttribute("href") || "").toLowerCase() === here) l.setAttribute("aria-current","page");
  });
})();

/* fotos fijas de las páginas (inicio) toman su ruta de CAT_DIR */
document.querySelectorAll("[data-photo]").forEach(img => { if(PHOTOS[img.dataset.photo]) img.src = PHOTOS[img.dataset.photo]; });
