Oficina Taurus - Sistema de Gerenciamento
Uma aplicação Full Stack para gerenciamento de uma oficina, construída com .NET 8 e React 19.

&lt;br>

📌 Índice
Sobre o Projeto
Funcionalidades
Tecnologias Utilizadas
Estrutura do Projeto
Pré-requisitos
Como Executar
Endpoints da API
Deploy
Contribuindo
Autores
&lt;br>

📝 Sobre o Projeto
A Oficina Taurus é um sistema web criado para simplificar o dia a dia de uma oficina mecânica. Ele permite o cadastro de clientes, a criação de pacotes de serviços com agendamento e a emissão de tickets (ordens de serviço), conectando clientes a seus respectivos agendamentos de forma organizada e eficiente.

✨ Funcionalidades
👤 Gestão de Clientes:
Cadastrar e listar clientes.
🛠️ Gestão de Serviços:
Criar pacotes de serviços (ex: Manutenção, Limpeza, Troca de Óleo).
Agendar data e hora para cada pacote.
🎫 Gestão de Tickets:
Gerar tickets vinculando um cliente a um serviço agendado.
Visualizar o histórico de todos os tickets.
🚀 Tecnologias Utilizadas
Este projeto foi desenvolvido com uma stack moderna e robusta:

Categoria	Tecnologia
Backend	.NET 8, ASP.NET Core, Entity Framework Core 8, MySQL
Frontend	React 19, React Router DOM, Axios
Estilos	CSS puro

Exportar para as Planilhas
📂 Estrutura do Projeto
O repositório está organizado de forma clara para separar as responsabilidades do backend e do frontend:

Taurus-Proj-XABLAU/
├── backend/            # Contém a API em .NET 8
│   ├── Controllers/
│   ├── Data/
│   ├── Migrations/
│   ├── Models/
│   └── ...
└── taurus-frontend/    # Contém a aplicação em React
    ├── public/
    ├── src/
    │   ├── components/
    │   └── ...
    └── package.json
📋 Pré-requisitos
Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:

.NET SDK 8.0+
Node.js e npm
[link suspeito removido]
⚡ Como Executar
Siga os passos abaixo para rodar o projeto em seu ambiente local.

1. Backend (API .NET)
Bash

# 1. Clone o repositório
git clone https://github.com/seu-usuario/Taurus-Proj-XABLAU.git

# 2. Navegue para a pasta do backend
cd Taurus-Proj-XABLAU/backend

# 3. Configure a string de conexão
#    Abra o arquivo 'appsettings.json' e ajuste os dados do seu MySQL.
#    "DefaultConnection": "server=localhost;port=3306;database=taurusdb;user=root;password=sua_senha;"

# 4. Aplique as migrações para criar o banco de dados e as tabelas
dotnet ef database update

# 5. Execute a API
dotnet run
A API estará em execução em http://localhost:5148.

2. Frontend (Aplicação React)
Bash

# 1. Em um novo terminal, navegue para a pasta do frontend
cd Taurus-Proj-XABLAU/taurus-frontend

# 2. Instale as dependências
npm install

# 3. Execute a aplicação
npm start
A aplicação React estará disponível em http://localhost:3000.

🌐 Endpoints da API
A API expõe os seguintes endpoints para manipulação dos dados:

Método	Endpoint	Descrição
GET	/api/Pessoas	Lista todas as pessoas.
POST	/api/Pessoas	Cadastra uma nova pessoa.
GET	/api/Servicos	Lista todos os pacotes de serviço.
POST	/api/Servicos	Cadastra um novo pacote de serviço.
GET	/api/Tickets	Lista todos os tickets.
POST	/api/Tickets	Cria um novo ticket.

Exportar para as Planilhas
☁️ Deploy
Para fazer o deploy desta aplicação, você precisará hospedar o backend .NET (por exemplo, no Azure App Service, Heroku ou AWS) e o frontend React (por exemplo, na Vercel, Netlify ou GitHub Pages).

Backend: Configure as variáveis de ambiente no serviço de hospedagem para a ConnectionStrings.
Frontend: Atualize a baseURL no arquivo src/api.js para o endereço da sua API em produção e execute npm run build para gerar os arquivos estáticos.
🤝 Contribuindo
Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será muito apreciada.

Faça um Fork do projeto
Crie uma Branch para sua feature (git checkout -b feature/AmazingFeature)
Faça um Commit com suas mudanças (git commit -m 'Add some AmazingFeature')
Faça o Push da sua branch (git push origin feature/AmazingFeature)
Abra um Pull Request
👨‍💻 Autores
Nicolas Teixeira Jeremias - GitHub * Victor Reis - GitHub ---

Fontes






