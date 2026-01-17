// 🎨 CORES POR SESSÃO
const sessionColors = {
  "Vendas": "#1e88e5",
  "Produtos": "#43a047",
  "Dashboards": "#8e24aa",
  "Financeiro": "#fb8c00",
  "Relatórios": "#6d4c41",
  "Controle de Estoque": "#00897b",
  "Opções da Loja": "#546e7a",
  "Relacionamento com Cliente": "#d81b60",
  "Aplicativo": "#3949ab"
};

// 📋 TODAS AS PERMISSÕES
const permissions = [
  { name: "Adicionar novos itens à vendas de delivery", session: "Vendas", category: "Delivery" },
  { name: "Alterar Forma de Pagamento", session: "Vendas", category: "Pagamento" },
  { name: "Alterar o valor pago ao entregador", session: "Vendas", category: "Entrega" },
  { name: "Atendimento de ficha", session: "Vendas", category: "Atendimento" },
  { name: "Atendimento de mesas", session: "Vendas", category: "Atendimento" },
  { name: "Cancelamento de Pedido", session: "Vendas", category: "Pedidos" },
  { name: "Central de pedidos", session: "Vendas", category: "Pedidos" },
  { name: "Check-in de entregadores", session: "Vendas", category: "Entrega" },
  { name: "Delivery", session: "Vendas", category: "Atendimento" },
  { name: "Display para entregadores", session: "Vendas", category: "Entrega" },
  { name: "Editar desconto de venda de delivery", session: "Vendas", category: "Delivery" },
  { name: "Editar endereço de entrega de delivery", session: "Vendas", category: "Delivery" },
  { name: "Editar itens da mesa aberta (consumindo)", session: "Vendas", category: "Salão" },
  { name: "Editar taxa de entrega de delivery", session: "Vendas", category: "Delivery" },
  { name: "Fechamento de mesas", session: "Vendas", category: "Salão" },
  { name: "Incluir e editar vendas de delivery e mudar status", session: "Vendas", category: "Delivery" },
  { name: "Incluir, editar e excluir itens da mesa após fechamento", session: "Vendas", category: "Salão" },
  { name: "Incluir, editar e mover vendas de delivery", session: "Vendas", category: "Delivery" },
  { name: "KDS", session: "Vendas", category: "Produção" },
  { name: "Visualizar vendas de mesa finalizadas", session: "Vendas", category: "Salão" },

  { name: "Alteração rápida de preços", session: "Produtos", category: "Cardápio" },
  { name: "Alteração rápida de status ativo/inativo", session: "Produtos", category: "Cardápio" },
  { name: "Cadastro de Comandas", session: "Produtos", category: "Salão" },
  { name: "Cadastro de Mesas", session: "Produtos", category: "Salão" },
  { name: "Categorias", session: "Produtos", category: "Cardápio" },
  { name: "Garçons", session: "Produtos", category: "Cadastro" },
  { name: "Opções", session: "Produtos", category: "Cardápio" },
  { name: "Produtos", session: "Produtos", category: "Cardápio" },

  { name: "Acompanhamento de vendas", session: "Dashboards", category: "Vendas" },
  { name: "Acompanhamento de vendas multilojas", session: "Dashboards", category: "Vendas" },
  { name: "Dashboard de faturamento de franquia", session: "Dashboards", category: "Franquia" },
  { name: "Dashboard de vendas de franquia por canal", session: "Dashboards", category: "Franquia" },
  { name: "Dashboard de vendas de franquia por data e hora", session: "Dashboards", category: "Franquia" },
  { name: "Desempenho por atendente", session: "Dashboards", category: "Performance" },
  { name: "Desempenho por garçom", session: "Dashboards", category: "Performance" },

  { name: "Abertura e Fechamento de Caixa", session: "Financeiro", category: "Frente de Caixa" },
  { name: "Acerto de Entregadores", session: "Financeiro", category: "Acertos" },
  { name: "Acerto de Garçons", session: "Financeiro", category: "Acertos" },
  { name: "Categorias Financeiras", session: "Financeiro", category: "Configuração" },
  { name: "Conciliação bancária", session: "Financeiro", category: "Bancário" },
  { name: "Contas Bancárias", session: "Financeiro", category: "Bancário" },
  { name: "Formas de pagamento", session: "Financeiro", category: "Pagamento" },
  { name: "Fornecedores", session: "Financeiro", category: "Cadastro" },
  { name: "Gerenciamento de Caixas", session: "Financeiro", category: "Frente de Caixa" },
  { name: "Incluir crédito e débito na ficha financeira do cliente", session: "Financeiro", category: "Clientes" },
  { name: "Lançamentos Financeiros", session: "Financeiro", category: "Financeiro" },
  { name: "Método de pagamento", session: "Financeiro", category: "Pagamento" },
  { name: "Permitir Pagamentos pela Frente de Caixa", session: "Financeiro", category: "Frente de Caixa" },

  { name: "Clientes", session: "Relacionamento com Cliente", category: "Cadastro" },
  { name: "Cupons de desconto", session: "Relacionamento com Cliente", category: "Promoções" },

  { name: "Acesso ao Aplicativo SAIPOS Gestão", session: "Aplicativo", category: "Acesso" }
];

// ELEMENTOS
const container = document.getElementById("permissionsContainer");
const searchInput = document.getElementById("searchInput");
const sessionFilter = document.getElementById("sessionFilter");
const categoryFilter = document.getElementById("categoryFilter");

// POPULA FILTROS
function populateFilters() {
  [...new Set(permissions.map(p => p.session))]
    .forEach(s => sessionFilter.innerHTML += `<option value="${s}">${s}</option>`);

  [...new Set(permissions.map(p => p.category))]
    .forEach(c => categoryFilter.innerHTML += `<option value="${c}">${c}</option>`);
}

// RENDERIZAÇÃO
function renderPermissions() {
  container.innerHTML = "";
  const search = searchInput.value.toLowerCase();

  permissions
    .filter(p =>
      p.name.toLowerCase().includes(search) &&
      (sessionFilter.value === "" || p.session === sessionFilter.value) &&
      (categoryFilter.value === "" || p.category === categoryFilter.value)
    )
    .forEach(p => {
      const color = sessionColors[p.session] || "#1f2d40";

      container.innerHTML += `
        <div class="permission-card" style="border-left-color: ${color}">
          <h3>${p.name}</h3>
          <div class="permission-meta">
            <strong>Sessão:</strong> ${p.session}<br>
            <strong>Categoria:</strong> ${p.category}
          </div>
        </div>
      `;
    });
}

// EVENTOS
searchInput.addEventListener("input", renderPermissions);
sessionFilter.addEventListener("change", renderPermissions);
categoryFilter.addEventListener("change", renderPermissions);

// INIT
populateFilters();
renderPermissions();
