# Projeto final 3º semestre - SENAI

Você é um desenvolvedor backend em uma empresa de serviços financeiros que está implementando uma nova API para gerenciamento de transações e contas de clientes. A API deve ser capaz de enviar notificações aos clientes sobre suas transações e ser publicada no github para uso em produção.

O departamento de TI solicitou que você projete e implemente uma API com Node.js e Express que inclua funcionalidades de notificação e publicação da API. Além disso, a API deve ser segura, eficiente e fácil de manter.

O departamento exige também que o administrador possa se autenticar na aplicação afim de verificar as contas, transações e clientes que utilizam a plataforma.

O departamento reforça a obrigatoriedade de utilizar os meios mais atualizados de segurança cibernética, especialmente no que se refere à autenticação e validação por meio de tokens.

Nome da Tabela: Clientes,
ID_Cliente,
Nome_Cliente,
Email.

Nome da Tabela: Contas,
ID_Conta,
ID_Cliente,
Saldo.

Nome da Tabela: Transacoes,
ID_Transacao,
ID_Conta,
Tipo de Conta ( Corrente, Poupança, Salário, Mista, Digital, Universitária, Conjunta, Solidária ),
Tipo da transação,
Valor,
Data_Transacao.

Nome da Tabela: Notificacoes,
ID_Notificacao,
ID_Cliente,
Mensagem,
Data_Notificacao.

Nome da tabela: Administradores,
ID_Administrador,
nome,
email,
idade,
senha.
