Oficina Taurus - Sistema de Gerenciamento
Bem-vindo ao sistema de gerenciamento da Oficina Taurus! Este é um projeto Full Stack desenvolvido para demonstrar habilidades em desenvolvimento web, consistindo em um backend em .NET 8 com Entity Framework Core e um frontend em React.

📜 Sobre o Projeto
A Oficina Taurus é uma aplicação para o gerenciamento de uma oficina mecânica, permitindo o controle de clientes, serviços e ordens de serviço (tickets).

Funcionalidades
Gestão de Pessoas/Clientes:
Cadastro de novos clientes com nome, telefone e endereço.
Listagem de todos os clientes cadastrados.
Gestão de Serviços:
Cadastro de pacotes de serviços (Manutenção, Limpeza, Troca de Óleo, Orçamento) com data e hora para agendamento.
Listagem de todos os pacotes de serviços agendados.
Gestão de Tickets:
Criação de "ordens de serviço" (tickets) vinculando um cliente a um pacote de serviços agendado.
Listagem de todos os tickets, exibindo detalhes do cliente e dos serviços.
Navegação:
Interface com navegação clara entre as seções de Pessoas, Serviços e Tickets através de um menu principal.
🛠️ Tecnologias Utilizadas
O projeto foi construído com as seguintes tecnologias:

Backend
.NET 8: Plataforma de desenvolvimento para a construção da API.
ASP.NET Core: Framework para a criação da API RESTful.
Entity Framework Core 8: Mapeador objeto-relacional (ORM) para interação com o banco de dados.
MySQL: Banco de dados relacional utilizado para persistir os dados.
CORS: Configurado para permitir requisições do frontend React.
Frontend
React 19: Biblioteca JavaScript para a construção da interface de usuário.
React Router DOM: Para gerenciamento de rotas e navegação na aplicação de página única (SPA).
Axios: Cliente HTTP para realizar chamadas à API do backend a partir do frontend.
CSS: Para estilização básica e layout dos componentes.
📂 Estrutura do Projeto
O repositório está organizado em duas pastas principais:

backend/: Contém a solução .NET com a API, incluindo Controllers, Models e configuração do Entity Framework.
taurus-frontend/: Contém a aplicação React, criada com create-react-app, incluindo todos os componentes, estilos e lógica de comunicação com a API.
📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

Backend:
.NET SDK 8.0 ou superior.
Um servidor MySQL em execução.
Frontend:
Node.js e npm (o npm é instalado junto com o Node.js).
🚀 Configuração e Execução
Siga os passos abaixo para configurar e executar o projeto localmente.

1. Backend (.NET API)
Navegue até a pasta do backend:

Bash

cd backend
Configure a String de Conexão:

Abra o arquivo backend/appsettings.json.
Localize a seção ConnectionStrings e ajuste a DefaultConnection para apontar para o seu servidor MySQL. Modifique server, port, database, user e password conforme sua configuração.
JSON

"ConnectionStrings": {
  "DefaultConnection": "server=localhost;port=3306;database=taurusdb;user=seu_usuario_mysql;password=sua_senha_mysql;"
}
Aplique as Migrações do Banco de Dados:

Este comando criará o banco de dados e as tabelas (Pessoas, Servicos, Tickets) com base nos modelos definidos no projeto.
No terminal, dentro da pasta backend/, execute:
Bash

dotnet ef database update
Observação: Caso não tenha o dotnet-ef instalado, execute dotnet tool install --global dotnet-ef primeiro.

Execute o Backend:

Ainda na pasta backend/, execute o comando:
Bash

dotnet run
A API estará disponível em http://localhost:5148, conforme definido no arquivo Properties/launchSettings.json.
2. Frontend (React App)
Navegue até a pasta do frontend:

Em um novo terminal, navegue até a pasta do frontend:
Bash

cd taurus-frontend
Instale as Dependências:

Este comando instalará todas as bibliotecas necessárias para o frontend, como React, Axios e React Router.
Bash

npm install
Execute o Frontend:

Este comando iniciará o servidor de desenvolvimento do React.
Bash

npm start
A aplicação será aberta automaticamente no seu navegador, no endereço http://localhost:3000.
Importante: O backend precisa estar em execução para que o frontend funcione corretamente, pois ele faz chamadas para a API em http://localhost:5148/api.
🌐 Endpoints da API
A API do backend expõe os seguintes endpoints principais para gerenciar os recursos:

Método	Endpoint	Descrição
GET	/api/Pessoas	Retorna a lista de todas as pessoas.
POST	/api/Pessoas	Cria uma nova pessoa.
GET	/api/Servicos	Retorna a lista de todos os pacotes de serviço.
POST	/api/Servicos	Cria um novo pacote de serviço agendado.
GET	/api/Tickets	Retorna a lista de todos os tickets criados.
POST	/api/Tickets	Cria um novo ticket associando uma pessoa a um serviço.

Exportar para as Planilhas
(Foram omitidos os endpoints de GET (por id), PUT e DELETE para brevidade)

🔮 Possíveis Melhorias Futuras
Implementar funcionalidades de Edição e Exclusão para Pessoas, Serviços e Tickets.
Melhorar a interface do usuário (UI) e a experiência do usuário (UX).
Adicionar validação de formulários mais robusta no frontend.
Implementar feedback visual para o usuário (mensagens de sucesso/erro).
Adicionar testes unitários e de integração.
Implementar paginação e filtros para as listas.
👨‍💻 Autores
Nicolas Teixeira Jeremias
Victor Reis
