const permissoes = [
  {
    name: "Adicionar novos itens à vendas de delivery",
    session: "Vendas",
    category: "Delivery",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir que o usuário adicione novos itens à vendas delivery já lançadas.",
    oQueFaz: "Se o usuário acessar uma venda existente e tentar lançar um novo produto do cardápio nela, ele será impedido por uma mensagem de erro.",
    oQueNaoFaz: "Não impede de adicionar opcionais à vendas já lançadas / não impede de lançar novas vendas de delivery."
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
    objetivo: "Impossibilitar que o usuário lance vendas do tipo Ficha.",
    oQueFaz: "Remove o Módulo de Ficha do header do sistema.",
    oQueNaoFaz: "Não impossibilita editar/movimentar/cancelar vendas de Ficha já existentes."
  },
  {
    name: "Atendimento de mesas",
    session: "Vendas",
    category: "Atendimento",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impossibilitar que o usuário lance vendas do tipo Salão.",
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
    oQueFaz: "Remove o Check-in de Entregadores do header do sistema — e não permite acesso nem se o usuário for do Tipo '6 - Check-in de Entregador'.",
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
    name: "Display para entregadores",
    session: "Vendas",
    category: "Entrega",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso à função 'Painel de pedidos prontos' para visualização gráfica do status das vendas.",
    oQueFaz: "Remove o 'Painel de pedidos prontos' do header do sistema.",
    oQueNaoFaz: "-"
  },
  {
    name: "Editar desconto de venda de delivery",
    session: "Vendas",
    category: "Delivery",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impossibilitar que um usuário edite o campo 'Desconto' em vendas de Delivery/Balcão e Ficha.",
    oQueFaz: "Exibe uma notificação se o usuário tenta editar o campo 'Desconto' (aplicação manual ou cupom de desconto) em vendas de Delivery/Balcão e Ficha.",
    oQueNaoFaz: "Não impossibilita lançar vendas com desconto aplicado / Não impossibilita cadastrar cupons de desconto em Menu > Cupons de desconto."
  },
  {
    name: "Editar endereço de entrega",
    session: "Vendas",
    category: "Delivery",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário altere o endereço do cliente na venda de delivery.",
    oQueFaz: "Exibe uma notificação informando que o usuário não possui permissão quando tenta salvar a venda após alterar o endereço do cliente vinculado a ela.",
    oQueNaoFaz: "Não impossibilita editar taxa de entrega e valor de repasse ao motoboy."
  },
  {
    name: "Editar itens da mesa aberta",
    session: "Vendas",
    category: "Salão",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário edite quantidade e opcionais de produtos já lançados em vendas de mesa.",
    oQueFaz: "Impede que o usuário edite itens já lançados em uma mesa aberta, removendo o botão de edição exibido ao ativar a chave 'Itens já enviados para a cozinha'.",
    oQueNaoFaz: "Não impede adicionar itens em uma mesa aberta / Não impede excluir itens em uma mesa aberta."
  },
  {
    name: "Editar taxa de entrega",
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
    objetivo: "Impedir que o usuário realize o pagamento e fechamento de mesas/comandas no Módulo de Salão.",
    oQueFaz: "Remove o botão 'FECHAR CONTA' em vendas de salão.",
    oQueNaoFaz: "-"
  },
  {
    name: "Editar mesa após fechamento",
    session: "Vendas",
    category: "Salão",
    nivel: "critica",
    confianca: "✅",
    objetivo: "Impedir que vendas de salão que já foram fechadas ou estão no status 'Pediu a conta' sejam editadas.",
    oQueFaz: "Exibe uma notificação caso o usuário tente editar uma venda de salão com o status 'Pediu conta' (laranja) ou 'Fechada' (disponível via Vendas por período).",
    oQueNaoFaz: "Não impede a edição de vendas de salão em consumo ou ociosas / Não impede alterar status via tela de venda (Vendas por período), porém isso não reabre a mesa."
  },
  {
    name: "KDS",
    session: "Vendas",
    category: "Produção",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir acesso ao KDS.",
    oQueFaz: "Remove o botão KDS do header do sistema — mesmo se o usuário for do tipo 3-KDS.",
    oQueNaoFaz: "-"
  },
  {
    name: "Visualizar vendas de mesa finalizadas",
    session: "Vendas",
    category: "Salão",
    nivel: "operacional",
    confianca: "✅",
    objetivo: "Impedir visualização de mesas finalizadas no Módulo de Salão.",
    oQueFaz: "Remove o botão 'Finalizadas' do Módulo de Salão.",
    oQueNaoFaz: "Não impede a visualização de vendas finalizadas via 'Vendas por Período'."
  },

  

  {
    name: "Alteração rápida de preços",
    session: "Produtos",
    category: "Cardápio",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário use a função de alteração de preços rápida na tela inicial do cardápio.",
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
    category: "Cadastro",
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
    objetivo: "Impedir que o usuário acesse o Menu > Frentes de caixa e veja os caixas abertos e fechamentos antigos.",
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
    objetivo: "Impedir que o usuário registre, visualize, edite ou remova lançamentos financeiros.",
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
    objetivo: "Impedir que o usuário lance retiradas do tipo 'Pagamento' via frente de caixa.",
    oQueFaz: "Se o usuário clicar para lançar uma retirada via frente de caixa, o sistema direciona direto para tipo 'Sangria'.",
    oQueNaoFaz: "Não impossibilita alterar formas de pagamentos e valores de venda na conferência de frente de caixa."
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
    name: "Clientes",
    session: "Relacionamento com Cliente",
    category: "Cadastro",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Impedir que o usuário tenha acesso à base de clientes do restaurante.",
    oQueFaz: "Remove o caminho Menu > Cadastro de clientes do sistema.",
    oQueNaoFaz: "Não impede cadastrar/editar clientes via Módulo de Delivery."
  },
  {
    name: "Cupons de desconto",
    session: "Relacionamento com Cliente",
    category: "Promoções",
    nivel: "sensivel",
    confianca: "✅",
    objetivo: "Controlar acesso ao cadastro e gerenciamento de cupons de desconto.",
    oQueFaz: "Restringe acesso ao gerenciamento de cupons de desconto no sistema.",
    oQueNaoFaz: "Detalhamento não encontrado na análise."
  },

  

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