const sessionColors = {
  "Vendas":                    "#1e88e5",
  "Produtos":                  "#43a047",
  "Dashboards":                "#8e24aa",
  "Financeiro":                "#fb8c00",
  "Relatórios":                "#6d4c41",
  "Controle de Estoque":       "#00897b",
  "Opções da Loja":            "#546e7a",
  "Relacionamento com Cliente":"#d81b60",
  "Aplicativo":                "#3949ab"
};

const nivelConfig = {
  operacional: { label: "Operacional", color: "#2e7d32", bg: "#e8f5e9" },
  sensivel:    { label: "Sensível",    color: "#e65100", bg: "#fff3e0" },
  critica:     { label: "Crítica",     color: "#b71c1c", bg: "#ffebee" }
};

const confiancaConfig = {
  "✅": { label: "Confirmada",    color: "#1b5e20", bg: "#c8e6c9" },
  "⚠️": { label: "Com dúvidas",  color: "#e65100", bg: "#ffe0b2" },
  "❓": { label: "Não testada",   color: "#4a4a4a", bg: "#eeeeee" }
};

function normalizar(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")   
    .replace(/[^a-z0-9\s]/g, "")       
    .replace(/\s+/g, " ")              
    .trim();
}

function nomesEquivalentes(nomeA, nomeB) {
  const a = normalizar(nomeA);
  const b = normalizar(nomeB);
  return a === b || a.includes(b) || b.includes(a);
}

function mergePermissoes(lista) {
  return lista.map(p => {
    
    
    
    return {
      name:       p.name,
      session:    p.session,
      category:   p.category,
      nivel:      p.nivel      || "operacional",
      confianca:  p.confianca  || "❓",
      objetivo:   p.objetivo   || null,
      oQueFaz:    p.oQueFaz    || null,
      oQueNaoFaz: p.oQueNaoFaz || null
    };
  });
}

const permissions = mergePermissoes(permissoes);

const container      = document.getElementById("permissionsContainer");
const searchInput    = document.getElementById("searchInput");
const sessionFilter  = document.getElementById("sessionFilter");
const categoryFilter = document.getElementById("categoryFilter");

function populateFilters() {
  const sessions   = [...new Set(permissions.map(p => p.session))].sort();
  const categories = [...new Set(permissions.map(p => p.category))].sort();

  sessions.forEach(s => {
    sessionFilter.innerHTML += `<option value="${s}">${s}</option>`;
  });

  categories.forEach(c => {
    categoryFilter.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function renderBadgeNivel(nivel) {
  const cfg = nivelConfig[nivel] || nivelConfig["operacional"];
  return `
    <span class="badge badge-nivel" style="background:${cfg.bg}; color:${cfg.color};">
      ${cfg.label}
    </span>`;
}

function renderBadgeConfianca(confianca) {
  const cfg = confiancaConfig[confianca] || confiancaConfig["❓"];
  return `
    <span class="badge badge-confianca" style="background:${cfg.bg}; color:${cfg.color};">
      ${confianca} ${cfg.label}
    </span>`;
}

function renderDetalhes(p) {
  const temDados = p.objetivo && p.oQueFaz;

  if (!temDados) {
    return `
      <div class="detail-fallback">
        ⚠️ Detalhamento não encontrado na análise
      </div>`;
  }

  const naoFaz = (!p.oQueNaoFaz || p.oQueNaoFaz === "-")
    ? '<em>Nenhuma ressalva documentada.</em>'
    : p.oQueNaoFaz;

  return `
    <div class="detail-item">
      <span class="detail-label">🎯 Objetivo</span>
      <p>${p.objetivo}</p>
    </div>
    <div class="detail-item">
      <span class="detail-label">⚙️ O que faz</span>
      <p>${p.oQueFaz}</p>
    </div>
    <div class="detail-item">
      <span class="detail-label">🚫 O que <strong>não</strong> faz</span>
      <p>${naoFaz}</p>
    </div>`;
}

function renderPermissions() {
  container.innerHTML = "";

  const search   = searchInput.value.toLowerCase();
  const sessaoFiltro    = sessionFilter.value;
  const categoriaFiltro = categoryFilter.value;

  const filtradas = permissions.filter(p =>
    normalizar(p.name).includes(normalizar(search)) &&
    (sessaoFiltro    === "" || p.session  === sessaoFiltro) &&
    (categoriaFiltro === "" || p.category === categoriaFiltro)
  );

  if (filtradas.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; color:#888; padding:40px;">
        Nenhuma permissão encontrada para os filtros selecionados.
      </div>`;
    return;
  }

  filtradas.forEach((p, index) => {
    const color = sessionColors[p.session] || "#1f2d40";

    const card = document.createElement("div");
    card.className = "permission-card";
    card.style.borderLeftColor = color;

    card.innerHTML = `
      <div class="permission-header">
        <h3>${p.name}</h3>
        ${renderBadgeNivel(p.nivel)}
      </div>

      <div class="permission-meta">
        <strong>Sessão:</strong> ${p.session}&nbsp;&nbsp;
        <strong>Categoria:</strong> ${p.category}
      </div>

      <div class="permission-tags">
        ${renderBadgeConfianca(p.confianca)}
      </div>

      <div class="permission-extra" id="extra-${index}">
        <div class="permission-extra-inner">${renderDetalhes(p)}</div>
      </div>

      <button class="btn-ver-mais" onclick="toggleInfo(${index})">
        Ver detalhes
      </button>
    `;

    container.appendChild(card);
  });
}

function toggleInfo(index) {
  const extra  = document.getElementById(`extra-${index}`);
  const button = extra.nextElementSibling;

  extra.classList.toggle("active");

  button.textContent = extra.classList.contains("active")
    ? "Ocultar detalhes"
    : "Ver detalhes";
}

searchInput.addEventListener("input",    renderPermissions);
sessionFilter.addEventListener("change", renderPermissions);
categoryFilter.addEventListener("change",renderPermissions);

populateFilters();
renderPermissions();
