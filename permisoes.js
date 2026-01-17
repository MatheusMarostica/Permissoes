const permissoes = [

/* =========================
   VENDAS
========================= */

{
  nome: "Adicionar novos itens à vendas de delivery",
  descricao: "Permite adicionar novos produtos nas vendas de Delivery.",
  categoria: "Vendas",
  sessoes: ["Delivery"],
  nivel: "operacional"
},
{
  nome: "Alterar Forma de Pagamento",
  descricao: "Permite alterar a forma de pagamento do pedido enquanto não finalizado.",
  categoria: "Vendas",
  sessoes: ["Frente de Caixa"],
  nivel: "sensivel"
},
{
  nome: "Alterar valor pago ao entregador",
  descricao: "Permite alterar o valor pago ao entregador na venda.",
  categoria: "Vendas",
  sessoes: ["Delivery", "Financeiro"],
  nivel: "sensivel"
},
{
  nome: "Atendimento de ficha",
  descricao: "Permissão para lançamento de pedidos de ficha.",
  categoria: "Vendas",
  sessoes: ["Atendimento"],
  nivel: "operacional"
},
{
  nome: "Atendimento de mesas",
  descricao: "Permite lançamento de pedidos de salão (mesas e comandas).",
  categoria: "Vendas",
  sessoes: ["Salão"],
  nivel: "operacional"
},
{
  nome: "Cancelamento de Pedido",
  descricao: "Permite cancelar qualquer venda no sistema.",
  categoria: "Vendas",
  sessoes: ["Financeiro"],
  nivel: "critica"
},
{
  nome: "Central de pedidos",
  descricao: "Permite lançar vendas via Central de Pedidos.",
  categoria: "Vendas",
  sessoes: ["Delivery"],
  nivel: "operacional"
},
{
  nome: "Check-in de entregadores",
  descricao: "Permite acesso ao check-in de entregadores.",
  categoria: "Vendas",
  sessoes: ["Delivery"],
  nivel: "operacional"
},
{
  nome: "Delivery",
  descricao: "Permite acesso a vendas de delivery e balcão.",
  categoria: "Vendas",
  sessoes: ["Delivery"],
  nivel: "operacional"
},
{
  nome: "Display para entregadores",
  descricao: "Permite acesso ao display de entregadores.",
  categoria: "Vendas",
  sessoes: ["Delivery"],
  nivel: "operacional"
},
{
  nome: "Editar desconto de venda de delivery",
  descricao: "Permite editar descontos em vendas de delivery.",
  categoria: "Vendas",
  sessoes: ["Frente de Caixa"],
  nivel: "sensivel"
},
{
  nome: "Editar endereço de entrega",
  descricao: "Permite editar endereço do cliente.",
  categoria: "Vendas",
  sessoes: ["Delivery"],
  nivel: "sensivel"
},
{
  nome: "Editar itens da mesa aberta",
  descricao: "Permite editar itens de mesas em consumo.",
  categoria: "Vendas",
  sessoes: ["Salão"],
  nivel: "sensivel"
},
{
  nome: "Editar taxa de entrega",
  descricao: "Permite editar taxa de entrega.",
  categoria: "Vendas",
  sessoes: ["Delivery", "Financeiro"],
  nivel: "sensivel"
},
{
  nome: "Fechamento de mesas",
  descricao: "Permite realizar fechamento de mesas.",
  categoria: "Vendas",
  sessoes: ["Salão", "Frente de Caixa"],
  nivel: "sensivel"
},
{
  nome: "Editar mesa após fechamento",
  descricao: "Permite editar mesa após fechamento.",
  categoria: "Vendas",
  sessoes: ["Salão"],
  nivel: "critica"
},
{
  nome: "KDS",
  descricao: "Permite visualizar a tela de KDS.",
  categoria: "Vendas",
  sessoes: ["Produção"],
  nivel: "operacional"
},
{
  nome: "Visualizar vendas de mesa finalizadas",
  descricao: "Permite visualizar mesas finalizadas.",
  categoria: "Vendas",
  sessoes: ["Salão"],
  nivel: "operacional"
},

/* =========================
   PRODUTOS
========================= */

{
  nome: "Produtos",
  descricao: "Permite criar e editar produtos do cardápio.",
  categoria: "Produtos",
  sessoes: ["Gestão"],
  nivel: "sensivel"
},

/* =========================
   FINANCEIRO
========================= */

{
  nome: "Abertura e Fechamento de Caixa",
  descricao: "Permite abrir e fechar frentes de caixa.",
  categoria: "Financeiro",
  sessoes: ["Frente de Caixa"],
  nivel: "critica"
},
{
  nome: "Gerenciamento de Caixas",
  descricao: "Permite visualizar caixas de outros usuários.",
  categoria: "Financeiro",
  sessoes: ["Frente de Caixa"],
  nivel: "sensivel"
},
{
  nome: "Lançamentos Financeiros",
  descricao: "Permite lançar despesas, receitas e transferências.",
  categoria: "Financeiro",
  sessoes: ["Financeiro"],
  nivel: "critica"
},

/* =========================
   OPÇÕES DA LOJA
========================= */

{
  nome: "Gerenciamento de Usuários",
  descricao: "Permite criar e editar usuários e permissões.",
  categoria: "Opções da Loja",
  sessoes: ["Gestão"],
  nivel: "critica"
},

/* =========================
   RELACIONAMENTO
========================= */

{
  nome: "Clientes",
  descricao: "Permite acesso ao cadastro de clientes.",
  categoria: "Relacionamento",
  sessoes: ["Atendimento"],
  nivel: "sensivel"
},

/* =========================
   APLICATIVO
========================= */

{
  nome: "Acesso ao Aplicativo Saipos Gestão",
  descricao: "Permite acesso ao aplicativo.",
  categoria: "Aplicativo",
  sessoes: ["Gestão"],
  nivel: "operacional"
}

];
