const permissoes = [
  // ──────────────────────────────────────────────────────────────
  // VENDAS
  // ──────────────────────────────────────────────────────────────
  {
    name: "Adicionar novos itens à vendas de delivery",
    session: "Vendas",
    category: "Delivery",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir que o usuário adicione novos itens à vendas delivery já lançadas.",
    oQueFaz: "Se o usuário acessar uma venda existente e tentar lançar um novo produto do cardápio nela, ele será impedido por uma mensagem de erro.",
    oQueNaoFaz: "Não impede de adicionar opcionais à vendas já lançadas / não impede de lançar vendas de delivery."
  },
  {
    name: "Alterar Forma de Pagamento",
    session: "Vendas",
    category: "Pagamento",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir alteração de forma de pagamento em vendas já lançadas.",
    oQueFaz: "Bloqueia o campo 'Formas de pagamento' em vendas já lançadas no sistema.",
    oQueNaoFaz: "Não impede de acessar Menu > Formas de pagamento e realizar alterações de cadastro."
  },
  {
    name: "Alterar o valor pago ao entregador",
    session: "Vendas",
    category: "Entrega",
    nivel: "sensivel",
    confianca: "⚠️",
    objetivo: "Impedir alteração do valor a ser repassado ao entregador em vendas delivery.",
    oQueFaz: "Remove o campo 'R$ X,XX para entregador' da tela de venda delivery.",
    oQueNaoFaz: "Não impede a alteração do campo 'Entrega' em vendas de delivery / Não impede alterações em Menu > Acerto de entregadores."
  },
  {
    name: "Atendimento de ficha",
    session: "Vendas",
    category: "Atendimento",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impossibilitar que o usuário lance vendas de tipo Ficha.",
    oQueFaz: "Remove o Módulo de Ficha do header do sistema.",
    oQueNaoFaz: "Não impossibilita editar/movimentar/cancelar vendas de Ficha."
  },
  {
    name: "Atendimento de mesas",
    session: "Vendas",
    category: "Atendimento",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impossibilitar que o usuário lance vendas de tipo Salão.",
    oQueFaz: "Remove o Módulo de Salão do header do sistema.",
    oQueNaoFaz: "Não impede de cancelar vendas de salão via Vendas por período."
  },
  {
    name: "Cancelamento de Pedido",
    session: "Vendas",
    category: "Pedidos",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que usuários cancelem vendas.",
    oQueFaz: "Exibe notificação 'Você não tem permissão para cancelar pedidos' quando o usuário tenta cancelar uma venda.",
    oQueNaoFaz: "-"
  },
  {
    name: "Central de pedidos",
    session: "Vendas",
    category: "Pedidos",
    nivel: "operacional",
    confianca: "❓",
    objetivo: "Desconhecido — permissão não foi possível testar.",
    oQueFaz: "Comportamento ainda não confirmado.",
    oQueNaoFaz: "Não impede o usuário de usar a Central de Pedidos."
  },
  {
    name: "Check-in de entregadores",
    session: "Vendas",
    category: "Entrega",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função 'Check-in do Entregador' para registro de chegada para coleta de pedido.",
    oQueFaz: "Remove o Check-in de Entregadores do header do sistema e não permite acesso nem se o usuário for do Tipo '6 - Check-in de Entregador'.",
    oQueNaoFaz: "-"
  },
  {
    name: "Delivery",
    session: "Vendas",
    category: "Atendimento",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao Módulo de Delivery para lançamento de vendas.",
    oQueFaz: "Remove o Módulo de Delivery do header do sistema. Se a loja possui Delivery, ao acessar o sistema o Kanban não é aberto.",
    oQueNaoFaz: "Não impede de editar/mover de status vendas de Delivery via Vendas por período."
  },
  {
    name: "Painel de pedidos prontos",
    session: "Vendas",
    category: "Pedidos",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função 'Painel de pedidos prontos' para visualização gráfica do status das vendas.",
    oQueFaz: "Remove o 'Painel de pedidos prontos' do header do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Editar desconto de venda de delivery, ficha e balcão",
    session: "Vendas",
    category: "Delivery",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impossibilitar que um usuário edite o campo 'Desconto' em vendas de Delivery/Balcão e Ficha.",
    oQueFaz: "Exibe uma notificação se o usuário tenta editar o campo 'Desconto' (aplicação manual ou cupom de desconto) em vendas de Delivery/Balcão e Ficha.",
    oQueNaoFaz: "Não impossibilita lançar vendas com desconto aplicado / Não impossibilita cadastrar cupons de desconto em Menu > Cupons de desconto."
  },
  {
    name: "Editar endereço de entrega de delivery",
    session: "Vendas",
    category: "Delivery",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário altere o endereço do cliente na venda de delivery.",
    oQueFaz: "Exibe uma notificação informando que o usuário não possui permissão quando tenta salvar a venda após alterar o endereço do cliente vinculado à ela.",
    oQueNaoFaz: "Não impossibilita editar taxa de entrega e valor de repasse ao motoboy."
  },
  {
    name: "Editar itens da mesa aberta (consumindo)",
    session: "Vendas",
    category: "Salão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário edite quantidade e opcionais de produtos já lançados em vendas de mesa.",
    oQueFaz: "Impede que o usuário edite itens já lançados em uma mesa aberta, removendo o botão de edição exibido ao ativar a chave 'Itens já enviados para a cozinha'.",
    oQueNaoFaz: "Não impede adicionar itens em uma mesa aberta / Não impede excluir itens em uma mesa aberta."
  },
  {
    name: "Editar taxa de entrega de delivery",
    session: "Vendas",
    category: "Delivery",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário edite o campo 'Entrega' em vendas de delivery.",
    oQueFaz: "Exibe notificação ao tentar salvar uma venda cujo campo 'Entrega' foi alterado. Se alterar o cliente ou o endereço e isso impactar o valor da taxa, também será impedido.",
    oQueNaoFaz: "Não impede o usuário de alterar o valor repassado ao motoboy."
  },
  {
    name: "Fechamento de mesas",
    session: "Vendas",
    category: "Salão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário realize o pagamento e fechamento de comandas/mesas no Módulo de Salão.",
    oQueFaz: "Remove o botão 'FECHAR CONTA' em vendas de salão.",
    oQueNaoFaz: "-"
  },
  {
    name: "Incluir e editar vendas de delivery e mudar status de vendas (Delivery, Balcão e Ficha no kanban e Fechamento de mesas)",
    session: "Vendas",
    category: "Vendas",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir lançamento/edição de vendas delivery/balcão e movimentação de status de vendas de qualquer tipo.",
    oQueFaz: "Impede o lançamento de vendas de delivery/balcão / Impede a movimentação de status de vendas de delivery/balcão e ficha / Impede o fechamento de mesas / Impede a edição de vendas de delivery/salão / Impede o cancelamento de vendas.",
    oQueNaoFaz: "Não impede o lançamento de vendas de ficha e salão / Não impede o lançamento de pagamento em vendas de salão (mas impede o fechamento da mesa) / Não impede a edição de vendas de ficha / Não impede a edição de vendas de salão."
  },
  {
    name: "Incluir, editar e excluir itens da mesa após pedir a conta ou fechada",
    session: "Vendas",
    category: "Salão",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que vendas de salão que já foram fechadas ou estão no status 'Pediu a conta' sejam editadas.",
    oQueFaz: "Exibe uma notificação caso o usuário tente editar uma venda de salão com o status 'Pediu conta' (laranja) ou 'Fechada' (disponível via Vendas por período).",
    oQueNaoFaz: "Não impede a edição de vendas de salão em consumo ou ociosas / Não impede alterar status via tela de venda (Vendas por período), porém isso não faz com que a mesa seja reaberta."
  },
  {
    name: "KDS",
    session: "Vendas",
    category: "Produção",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao KDS.",
    oQueFaz: "Remove o botão KDS do header do sistema mesmo se o usuário for do tipo 3-KDS.",
    oQueNaoFaz: "-"
  },
  {
    name: "Transferência de mesas e itens em vendas de mesa",
    session: "Vendas",
    category: "Salão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário transfira itens entre comandas/mesas.",
    oQueFaz: "Bloqueia o botão usado para transferir itens.",
    oQueNaoFaz: "-"
  },
  {
    name: "Visualizar vendas de mesa finalizadas",
    session: "Vendas",
    category: "Salão",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Fazer com que o usuário tenha acesso apenas a mesas em consumo e ociosas.",
    oQueFaz: "Remove o botão 'Finalizadas' do Módulo de Salão.",
    oQueNaoFaz: "Não impede a visualização de vendas finalizadas via 'Vendas por Período'."
  },

  // ──────────────────────────────────────────────────────────────
  // PRODUTOS
  // ──────────────────────────────────────────────────────────────
  {
    name: "Alteração rápida de preços",
    session: "Produtos",
    category: "Cardápio",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário use a função de alteração de preços rápida, onde ele altera diretamente na tela inicial do cardápio.",
    oQueFaz: "Bloqueia acesso ao campo de preço do produto na tela inicial do cardápio.",
    oQueNaoFaz: "Não impede alteração de preço pela tela de cadastro/edição de produto / Não impede alteração de preço de opcionais via tela inicial de cardápio."
  },
  {
    name: "Alteração rápida de status ativo/inativo",
    session: "Produtos",
    category: "Cardápio",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que um usuário ative ou inative produtos, categorias, grupos de opções ou opcionais na tela inicial do cardápio.",
    oQueFaz: "Bloqueia os campos ativo/inativo na tela inicial do cardápio.",
    oQueNaoFaz: "Não impede de acessar a tela de cadastro/edição de grupos de opções/opcionais e alternar entre ativo/inativo."
  },
  {
    name: "Cadastro de Comandas",
    session: "Produtos",
    category: "Salão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário cadastre, edite ou exclua/inative comandas para o Módulo de Salão.",
    oQueFaz: "Remove o caminho Menu > Comandas do sistema.",
    oQueNaoFaz: "Não impede de abrir comandas em mesas no Módulo de Salão."
  },
  {
    name: "Cadastro de Mesas",
    session: "Produtos",
    category: "Salão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário cadastre, edite ou exclua/inative mesas para o Módulo de Salão.",
    oQueFaz: "Remove o caminho Menu > Mesas do sistema.",
    oQueNaoFaz: "Não impede de abrir mesas no Módulo de Salão."
  },
  {
    name: "Categorias",
    session: "Produtos",
    category: "Cardápio",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir edição, cadastro e exclusão de categorias em Menu > Cardápio.",
    oQueFaz: "Bloqueia acesso aos caminhos de criação e edição de categorias, inclusive o caminho dentro da tela de cadastro/edição de produtos.",
    oQueNaoFaz: "-"
  },
  {
    name: "Garçons",
    session: "Produtos",
    category: "Salão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir cadastro, edição e exclusão de garçons para o Módulo de Salão.",
    oQueFaz: "Remove o caminho Menu > Garçons do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Opções",
    session: "Produtos",
    category: "Cardápio",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário cadastre, edite ou exclua novos grupos de opções e opcionais.",
    oQueFaz: "Torna indisponível o botão '+ Adicionar novo grupo de opções' no cadastro/edição de produtos e o botão 'Editar opções' na tela inicial do cardápio.",
    oQueNaoFaz: "Não impede a alteração rápida de preços de opcionais / Não impede adicionar opções já cadastradas em produtos."
  },
  {
    name: "Produtos",
    session: "Produtos",
    category: "Cardápio",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário cadastre, edite ou exclua produtos no cardápio.",
    oQueFaz: "Indisponibiliza as opções 'Cadastrar pizza', 'Cadastrar outros produtos', bem como as opções de edição de produtos na tela de cardápio.",
    oQueNaoFaz: "Não impede a alteração rápida de preços de produtos."
  },
  {
    name: "Produtos - Alteração de Preços",
    session: "Produtos",
    category: "Cardápio",
    nivel: "sensivel",
    confianca: "❓",
    objetivo: "Impedir que o usuário altere o preço de produtos.",
    oQueFaz: "Comportamento não foi possível confirmar.",
    oQueNaoFaz: "Detalhamento não encontrado na análise."
  },
  {
    name: "Variações & Tamanhos",
    session: "Produtos",
    category: "Cardápio",
    nivel: "operacional",
    confianca: "❓",
    objetivo: "Detalhamento não encontrado na análise.",
    oQueFaz: "Detalhamento não encontrado na análise.",
    oQueNaoFaz: "Detalhamento não encontrado na análise."
  },

  // ──────────────────────────────────────────────────────────────
  // DASHBOARDS
  // ──────────────────────────────────────────────────────────────
  {
    name: "Acompanhamento de vendas",
    session: "Dashboards",
    category: "Vendas",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao dashboard 'Acompanhamento de vendas'.",
    oQueFaz: "Remove a aba 'Acompanhamento de vendas' do menu esquerdo.",
    oQueNaoFaz: "-"
  },
  {
    name: "Acompanhamento de vendas multilojas",
    session: "Dashboards",
    category: "Vendas",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao dashboard 'Acompanhamento de vendas multilojas'.",
    oQueFaz: "Remove a aba 'Acompanhamento de vendas multilojas' do menu esquerdo.",
    oQueNaoFaz: "-"
  },
  {
    name: "Dashboard de faturamento de franquia",
    session: "Dashboards",
    category: "Faturamento",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao dashboard 'Faturamento'.",
    oQueFaz: "Remove a aba 'Faturamento' do menu esquerdo.",
    oQueNaoFaz: "-"
  },
  {
    name: "Dashboard de vendas de franquia por canal",
    session: "Dashboards",
    category: "Vendas",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao dashboard 'Canais'.",
    oQueFaz: "Remove a aba 'Canais' do menu esquerdo.",
    oQueNaoFaz: "-"
  },
  {
    name: "Dashboard de vendas de franquia por data e hora",
    session: "Dashboards",
    category: "Vendas",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao dashboard 'Vendas por Data / Hora'.",
    oQueFaz: "Remove a aba 'Vendas por Data / Hora' do menu esquerdo.",
    oQueNaoFaz: "-"
  },
  {
    name: "Desempenho por atendente",
    session: "Dashboards",
    category: "Desempenho",
    nivel: "operacional",
    confianca: "❓",
    objetivo: "Impedir acesso ao dashboard / relatório 'Desempenho por atendente'.",
    oQueFaz: "Comportamento não foi possível confirmar.",
    oQueNaoFaz: "Detalhamento não encontrado na análise."
  },
  {
    name: "Desempenho por garçom",
    session: "Dashboards",
    category: "Desempenho",
    nivel: "operacional",
    confianca: "❓",
    objetivo: "Impedir acesso ao dashboard / relatório 'Desempenho por garçom'.",
    oQueFaz: "Comportamento não foi possível confirmar.",
    oQueNaoFaz: "Detalhamento não encontrado na análise."
  },

  // ──────────────────────────────────────────────────────────────
  // FINANCEIRO
  // ──────────────────────────────────────────────────────────────
  {
    name: "Abertura e Fechamento de Caixa",
    session: "Financeiro",
    category: "Frente de Caixa",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário realize a abertura e fechamento de frente de caixa.",
    oQueFaz: "Remove o botão 'ABRIR FRENTE DE CAIXA' do header do sistema.",
    oQueNaoFaz: "Não impede de acessar o Menu > Frentes de caixa e visualizar caixas abertos e fechados."
  },
  {
    name: "Acerto de Entregadores",
    session: "Financeiro",
    category: "Acertos",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário visualize e opere o acerto de entregadores.",
    oQueFaz: "Remove o caminho Menu > Acerto de entregadores do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Acerto de Garçons",
    session: "Financeiro",
    category: "Acertos",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário visualize e opere o acerto de garçons.",
    oQueFaz: "Remove o caminho Menu > Acerto de garçons do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Categorias Financeiras",
    session: "Financeiro",
    category: "Configuração",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário visualize, edite, remova e crie categorias financeiras.",
    oQueFaz: "Remove o caminho Menu > Categorias financeiras do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Conciliação bancária",
    session: "Financeiro",
    category: "Bancário",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário opere as conciliações bancárias.",
    oQueFaz: "Remove o caminho Menu > Conciliação bancária do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Contas Bancárias",
    session: "Financeiro",
    category: "Bancário",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário crie, edite e remova as contas bancárias.",
    oQueFaz: "Remove o caminho Menu > Contas bancárias do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Fluxo de Caixa",
    session: "Financeiro",
    category: "Relatório",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário visualize o relatório 'Fluxo de caixa'.",
    oQueFaz: "Remove o caminho Menu > Fluxo de caixa do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Formas de pagamento",
    session: "Financeiro",
    category: "Pagamento",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário crie, edite e remova o cadastro de formas de pagamento.",
    oQueFaz: "Remove o caminho Menu > Formas de pagamento do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Fornecedores",
    session: "Financeiro",
    category: "Cadastro",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário crie, edite e remova o cadastro de fornecedores.",
    oQueFaz: "Remove o caminho Menu > Fornecedores do sistema.",
    oQueNaoFaz: "Não impede criação de fornecedores via Menu > Notas de entrada."
  },
  {
    name: "Gerenciamento de Caixas",
    session: "Financeiro",
    category: "Frente de Caixa",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário acesse o Menu > Frentes de caixa e veja os caixas abertos e fechamento de caixas antigos.",
    oQueFaz: "Remove o caminho Menu > Frentes de caixa do sistema.",
    oQueNaoFaz: "Não impede abrir e fechar frentes de caixa, bem como não impede a visualização completa da conferência do próprio caixa."
  },
  {
    name: "Incluir crédito e débito na ficha financeira do cliente",
    session: "Financeiro",
    category: "Clientes",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário lance débitos e créditos na ficha financeira de clientes em Menu > Cadastro de clientes.",
    oQueFaz: "Bloqueia os botões 'INSERIR CRÉDITOS' e 'INSERIR DÉBITOS' na aba 'HISTÓRICO FINANCEIRO'.",
    oQueNaoFaz: "Não impossibilita lançar vendas fiado."
  },
  {
    name: "Lançamentos Financeiros",
    session: "Financeiro",
    category: "Financeiro",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário registre, visualize, edite ou remova lançamentos financeiras.",
    oQueFaz: "Remove o caminho Menu > Lançamentos financeiros do sistema.",
    oQueNaoFaz: "Não impede de realizar conciliações financeiras via Menu > Notas de entrada / Não impede de criar lançamentos financeiros via Menu > Conciliação bancária / Não impede lançamentos de retirada e reforço de caixa."
  },
  {
    name: "Método de pagamento",
    session: "Financeiro",
    category: "Pagamento",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir criação, edição e exclusão de métodos de pagamento.",
    oQueFaz: "Remove o caminho Menu > Métodos de pagamento do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Permitir Pagamentos pela Frente de Caixa",
    session: "Financeiro",
    category: "Frente de Caixa",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário lance retiradas de tipo 'Pagamento' via frente de caixa.",
    oQueFaz: "Se o usuário clicar para lançar uma retirada via frente de caixa, cai direto para tipo 'Sangria'.",
    oQueNaoFaz: "Não impossibilita alterar formas de pagamentos e valores de venda na conferência de frente de caixa."
  },

  // ──────────────────────────────────────────────────────────────
  // RELATÓRIOS
  // ──────────────────────────────────────────────────────────────
  {
    name: "Cupons gerados",
    session: "Relatórios",
    category: "Fiscal",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Cupons gerados' e, consequentemente, acesso à exportação de XML.",
    oQueFaz: "Remove o caminho Menu > Cupons gerados do sistema.",
    oQueNaoFaz: "Não impede de visualizar informações de cupons fiscais emitidos em Menu > Vendas por período."
  },
  {
    name: "Desempenho por atendente (Relatório)",
    session: "Relatórios",
    category: "Desempenho",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Desempenho por atendente'.",
    oQueFaz: "Remove o caminho Menu > Desempenho por atendente do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Desempenho por garçom (Relatório)",
    session: "Relatórios",
    category: "Desempenho",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Desempenho por garçom'.",
    oQueFaz: "Remove o caminho Menu > Desempenho por garçom do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "DRE Gerencial/Financeiro",
    session: "Relatórios",
    category: "Financeiro",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'DRE Gerencial/Financeiro'.",
    oQueFaz: "Remove o caminho Menu > DRE Gerencial/Financeiro do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Faturamento por dia",
    session: "Relatórios",
    category: "Faturamento",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Faturamento por dia'.",
    oQueFaz: "Remove o caminho Menu > Faturamento por dia do sistema.",
    oQueNaoFaz: "Não impede acesso à dados de faturamento presentes em outros relatórios."
  },
  {
    name: "Itens consumidos",
    session: "Relatórios",
    category: "Estoque",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Itens consumidos'.",
    oQueFaz: "Remove o caminho Menu > Itens consumidos do sistema.",
    oQueNaoFaz: "Não impede acesso à dados de baixa no estoque via Menu > Movimentações de estoque."
  },
  {
    name: "Itens vendidos",
    session: "Relatórios",
    category: "Vendas",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Itens vendidos'.",
    oQueFaz: "Remove o caminho Menu > Itens vendidos do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Resumo diário",
    session: "Relatórios",
    category: "Vendas",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à aba 'Resumo diário' em contexto de uso do modo Delivery-Abas ao invés do Kanban.",
    oQueFaz: "Remove aba 'Resumo diário'.",
    oQueNaoFaz: "-"
  },
  {
    name: "Tempo de produção",
    session: "Relatórios",
    category: "Produção",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Tempo de produção'.",
    oQueFaz: "Remove o caminho Menu > Tempo de produção do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Tempo por status",
    session: "Relatórios",
    category: "Produção",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Tempo por status'.",
    oQueFaz: "Remove o caminho Menu > Tempo por status do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Vendas por área de entrega",
    session: "Relatórios",
    category: "Delivery",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Vendas por área de entrega'.",
    oQueFaz: "Remove o caminho Menu > Vendas por área de entrega do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Vendas por forma de pagamento",
    session: "Relatórios",
    category: "Vendas",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Vendas por forma de pagamento'.",
    oQueFaz: "Remove o caminho Menu > Vendas por forma de pagamento do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Vendas por período",
    session: "Relatórios",
    category: "Vendas",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir acesso ao relatório 'Vendas por período'.",
    oQueFaz: "Remove o caminho Menu > Vendas por período do sistema.",
    oQueNaoFaz: "-"
  },

  // ──────────────────────────────────────────────────────────────
  // CONTROLE DE ESTOQUE
  // ──────────────────────────────────────────────────────────────
  {
    name: "Análise e simulação de CMV",
    session: "Controle de Estoque",
    category: "CMV",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Análise e simulação de CMV'.",
    oQueFaz: "Remove o caminho Menu > Análise e simulação de CMV do sistema.",
    oQueNaoFaz: "Não impede acesso a outras 'fontes' de análise de CMV, como relatório DRE, CMV Real e Itens Consumidos."
  },
  {
    name: "Contagem de estoque",
    session: "Controle de Estoque",
    category: "Contagem",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Contagem de Estoque'.",
    oQueFaz: "Remove o caminho Menu > Contagem de Estoque do sistema.",
    oQueNaoFaz: "Não impede acesso à função 'Posição e contagem de estoque'."
  },
  {
    name: "Deleção de movimentações",
    session: "Controle de Estoque",
    category: "Movimentações",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário delete movimentações de estoque em Menu > Movimentações de estoque.",
    oQueFaz: "Remove o caminho para deleção de movimentações de estoque (três pontinhos > Habilitar operação de deleção por seleção).",
    oQueNaoFaz: "-"
  },
  {
    name: "Entrada/Saída manual de estoque",
    session: "Controle de Estoque",
    category: "Movimentações",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Movimentações de estoque'.",
    oQueFaz: "Remove o caminho Menu > Movimentações de estoque do sistema.",
    oQueNaoFaz: "Não impede acesso à função 'Posição e contagem de estoque' e a realização de entradas e saídas por ajuste no estoque."
  },
  {
    name: "Grupos de ingrediente",
    session: "Controle de Estoque",
    category: "Ingredientes",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Grupos de ingredientes'.",
    oQueFaz: "Remove o caminho Menu > Grupos de ingredientes do sistema.",
    oQueNaoFaz: "Não impede alterar o grupo vinculado aos ingredientes e insumos."
  },
  {
    name: "Histórico de posição de estoque",
    session: "Controle de Estoque",
    category: "Relatório",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Histórico de posição de estoque'.",
    oQueFaz: "Remove o caminho Menu > Histórico de posição de estoque do sistema.",
    oQueNaoFaz: "Não impede acesso à função 'Posição e contagem de estoque' e a visualização da posição de estoque em dias anteriores."
  },
  {
    name: "Importação de NFe",
    session: "Controle de Estoque",
    category: "Notas Fiscais",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Notas de entrada'.",
    oQueFaz: "Remove o caminho Menu > Notas de entrada de estoque do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Ingredientes e ficha técnica",
    session: "Controle de Estoque",
    category: "Ingredientes",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Ingredientes e insumos'.",
    oQueFaz: "Remove o caminho Menu > Ingredientes e insumos do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Lista de compras",
    session: "Controle de Estoque",
    category: "Compras",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Lista de compras'.",
    oQueFaz: "Remove o caminho Menu > Lista de compras do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Mostrar qtde e permitir ajuste na posição estoque",
    session: "Controle de Estoque",
    category: "Contagem",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir a alteração e visualização do estoque atual de ingredientes e insumos através do fluxo de conferência de posição de estoque.",
    oQueFaz: "Remove as colunas 'QTDE CONFERIDA' e 'ESTOQUE ATUAL' em Menu > Posição e contagem de estoque do sistema.",
    oQueNaoFaz: "Não impede lançar movimentação de 'Entrada por ajuste' ou 'Saída por ajuste' via Menu > Movimentações de estoque / Não impede de visualizar estoque atual dos ingredientes e insumos via Menu > Ingredientes e insumos."
  },
  {
    name: "Ordem de compra",
    session: "Controle de Estoque",
    category: "Compras",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Ordem de compra'.",
    oQueFaz: "Remove o caminho Menu > Ordem de compra do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Posição e contagem de estoque",
    session: "Controle de Estoque",
    category: "Contagem",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Posição e contagem de estoque'.",
    oQueFaz: "Remove o caminho Menu > Posição e contagem de estoque do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Relatório de CMV Real",
    session: "Controle de Estoque",
    category: "CMV",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função de 'Relatório CMV real'.",
    oQueFaz: "Remove o caminho Menu > Relatório CMV real do sistema.",
    oQueNaoFaz: "Não impede acesso a outras 'fontes' de análise de CMV, como relatório DRE, Análise e simulação CMV e Itens Consumidos."
  },

  // ──────────────────────────────────────────────────────────────
  // OPÇÕES DA LOJA
  // ──────────────────────────────────────────────────────────────
  {
    name: "Alteração de senha dos usuários",
    session: "Opções da Loja",
    category: "Usuários",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que um usuário que possui a permissão 'Gerenciamento de usuários' tenha acesso também a alteração de senhas dos demais usuários do restaurante.",
    oQueFaz: "Remove o botão de 'senha' ao lado dos usuários em Menu > Usuários e permissões.",
    oQueNaoFaz: "Não impede que o usuário altere a sua própria senha."
  },
  {
    name: "Áreas de entrega",
    session: "Opções da Loja",
    category: "Delivery",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário altere regiões de entrega e valores de taxa de entrega do delivery do restaurante.",
    oQueFaz: "Remove o caminho Menu > Áreas de entrega do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Canais de venda",
    session: "Opções da Loja",
    category: "Integrações",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário tenha acesso às configurações de integrações, Site Delivery (SAIPOS) e Cardápio Digital QR Code.",
    oQueFaz: "Remove o caminho Menu > Canais de venda e integrações do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Configurações",
    session: "Opções da Loja",
    category: "Configuração",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário edite configurações de impressão, vendas, cupom fiscal, frente de caixa e roteirização.",
    oQueFaz: "Remove o caminho Menu > Configurações do sistema.",
    oQueNaoFaz: "Não impede edição em configurações alheias ao caminho Menu > Configurações."
  },
  {
    name: "Dados da loja",
    session: "Opções da Loja",
    category: "Cadastro",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário edite os dados da loja, como CNPJ, razão social e demais parâmetros fiscais.",
    oQueFaz: "Remove o caminho Menu > Dados da loja do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Dados fiscais",
    session: "Opções da Loja",
    category: "Fiscal",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário edite, crie ou exclua dados fiscais.",
    oQueFaz: "Remove o caminho Menu > Dados fiscais do sistema.",
    oQueNaoFaz: "Não impede editar o vínculo de dados fiscais do cardápio."
  },
  {
    name: "Entregadores",
    session: "Opções da Loja",
    category: "Cadastro",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário edite, crie ou exclua cadastro de entregadores.",
    oQueFaz: "Remove o caminho Menu > Entregadores do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Gerenciamento de Usuários",
    session: "Opções da Loja",
    category: "Usuários",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário crie ou edite usuários, bem como suas permissões.",
    oQueFaz: "Remove o caminho Menu > Usuários e permissões do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Inutilização de Notas Fiscais",
    session: "Opções da Loja",
    category: "Fiscal",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que o usuário registre inutilização de notas e cupons fiscais.",
    oQueFaz: "Remove o caminho Menu > Inutilização de notas fiscais do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Mesas",
    session: "Opções da Loja",
    category: "Salão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário cadastre, edite ou exclua mesas do Módulo de Salão.",
    oQueFaz: "Remove o caminho Menu > Mesas do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Modelos de impressão",
    session: "Opções da Loja",
    category: "Impressão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário habilite e edite os modelos personalizados de impressão.",
    oQueFaz: "Remove o caminho Menu > Modelos de impressão do sistema.",
    oQueNaoFaz: "Não impede de realizar outras configurações de impressão."
  },
  {
    name: "Motivos para cancelamento",
    session: "Opções da Loja",
    category: "Cancelamento",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir que o usuário crie, edite ou exclua motivos de cancelamento.",
    oQueFaz: "Remove o caminho Menu > Motivos de cancelamento do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Receber impressão em fila única",
    session: "Opções da Loja",
    category: "Impressão",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir que o usuário assuma a Fila Única de Impressão (receba solicitações de impressão em seu usuário).",
    oQueFaz: "Remove o caminho Menu > Motivos de cancelamento do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Status das vendas",
    session: "Opções da Loja",
    category: "Vendas",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir que o usuário crie, edita ou remova status das vendas.",
    oQueFaz: "Remove o caminho Menu > Status da venda do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Turnos",
    session: "Opções da Loja",
    category: "Operacional",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir que o usuário crie, edita ou remova turnos.",
    oQueFaz: "Remove o caminho Menu > Turnos do sistema.",
    oQueNaoFaz: "-"
  },

  // ──────────────────────────────────────────────────────────────
  // RELACIONAMENTO COM CLIENTE
  // ──────────────────────────────────────────────────────────────
  {
    name: "Cadastro de clientes",
    session: "Relacionamento com Cliente",
    category: "Cadastro",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário tenha acesso à base de clientes do restaurante.",
    oQueFaz: "Remove o caminho Menu > Cadastro de clientes do sistema.",
    oQueNaoFaz: "Não impede cadastrar/editar clientes via Módulo de Delivery."
  },

  // ──────────────────────────────────────────────────────────────
  // APLICATIVO SAIPOS GESTÃO
  // ──────────────────────────────────────────────────────────────
  {
    name: "Acesso ao Aplicativo SAIPOS Gestão",
    session: "Aplicativo",
    category: "Acesso",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir que o usuário use suas credenciais para acessar o aplicativo Saipos Gestão.",
    oQueFaz: "Faz com que, ao tentar acessar o aplicativo Saipos Gestão, exiba a modal 'Usuário sem permissão para acessar o aplicativo'.",
    oQueNaoFaz: "Não impede acesso, via sistema web, a informações de vendas por período e afins, que estão também presentes no aplicativo."
  }
];