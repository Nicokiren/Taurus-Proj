# Oficina Taurus - Sistema de Gerenciamento

Bem-vindo ao sistema de gerenciamento da Oficina Taurus! Este é um projeto Full Stack desenvolvido para praticar e demonstrar habilidades em desenvolvimento web, consistindo em um backend em .NET 8 com Entity Framework Core e um frontend em React.

## Sobre o Projeto

A Oficina Taurus é uma aplicação que permite gerenciar:
* **Pessoas/Clientes:** Cadastro de clientes da oficina.
* **Serviços:** Cadastro de pacotes de serviços oferecidos, com data e hora para agendamento.
* **Tickets:** Criação de "ordens de serviço" vinculando um cliente a um pacote de serviços agendado.

## Tecnologias Utilizadas

### Backend
* **.NET 8:** Plataforma de desenvolvimento.
* **ASP.NET Core:** Para construção da API RESTful.
* **Entity Framework Core 8:** ORM para interação com o banco de dados.
* **MySQL:** Banco de dados relacional utilizado.
* **Controllers:** Para gerenciar as requisições HTTP para Pessoas, Serviços e Tickets.

### Frontend
* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **React Router DOM:** Para gerenciamento de rotas e navegação na aplicação.
* **Axios:** Cliente HTTP para realizar chamadas à API do backend.
* **CSS:** Para estilização básica dos componentes.

## Estrutura do Projeto

O projeto está dividido em duas pastas principais:

* `backend/`: Contém a solução .NET com a API.
* `taurus-frontend/`: Contém a aplicação React.

## Pré-requisitos

### Backend
* [.NET SDK 8.0](https://dotnet.microsoft.com/download/dotnet/8.0) ou superior.
* Um servidor MySQL em execução.

### Frontend
* [Node.js e npm](https://nodejs.org/) (npm geralmente vem com Node.js).

## Configuração e Execução

### 1. Backend (.NET API)

1.  **Clone o repositório (se ainda não o fez):**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_GIT>
    cd <NOME_DA_PASTA_RAIZ_DO_PROJETO>/backend
    ```

2.  **Configure a String de Conexão com o Banco de Dados:**
    * Abra o arquivo `backend/appsettings.json`.
    * Modifique a `DefaultConnection` em `ConnectionStrings` para apontar para o seu servidor MySQL, atualizando `server`, `port`, `database`, `user`, e `password` conforme necessário.
    ```json
    "ConnectionStrings": {
      "DefaultConnection": "server=localhost;port=3306;database=taurusdb;user=seu_usuario_mysql;password=sua_senha_mysql;"
    }
    ```

3.  **Aplique as Migrações (Criação do Banco de Dados e Tabelas):**
    * No terminal, dentro da pasta `backend/`, execute:
        ```bash
        dotnet tool install --global dotnet-ef # Se ainda não tiver o EF Core tools instalado
        dotnet ef database update
        ```
    Isso criará o banco de dados `taurusdb` (ou o nome que você definiu) e as tabelas `Pessoas`, `Servicos`, e `Tickets`.

4.  **Execute o Backend:**
    * Ainda na pasta `backend/`, execute:
        ```bash
        dotnet run
        ```
    * Por padrão (conforme `Properties/launchSettings.json`), a API estará disponível em `http://localhost:5148` e `https://localhost:7070`.

### 2. Frontend (React App)

1.  **Navegue até a pasta do frontend:**
    * Em um **novo terminal**, vá para a pasta `taurus-frontend/`:
        ```bash
        cd ../taurus-frontend
        ```
        (Se você estiver na pasta `backend`, use `cd ..` para subir um nível e depois `cd taurus-frontend`)

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

3.  **Verifique a URL da API (opcional):**
    * O frontend está configurado para se comunicar com o backend em `http://localhost:5148/api` (definido em `taurus-frontend/src/api.js`). Se o seu backend estiver rodando em uma porta diferente, ajuste este arquivo.

4.  **Execute o Frontend:**
    ```bash
    npm start
    ```
    * Isso deve abrir a aplicação no seu navegador, geralmente em `http://localhost:3000`.
    * O backend deve estar rodando para que o frontend funcione corretamente.

## Funcionalidades Implementadas

* **Pessoas:**
    * Listagem de todas as pessoas.
    * Cadastro de novas pessoas (Nome, Telefone, Endereço).
* **Serviços:**
    * Listagem de todos os pacotes de serviços agendados.
    * Cadastro de novos pacotes de serviços (Manutenção, Limpeza, Troca de Óleo, Orçamento) com Data e Hora.
* **Tickets:**
    * Listagem de todos os tickets criados.
    * Criação de novos tickets selecionando uma Pessoa e um Pacote de Serviço previamente cadastrados.
* **Navegação:**
    * Menu de navegação para alternar entre as seções de Pessoas, Serviços e Tickets.

## Possíveis Melhorias Futuras

* Implementar funcionalidades de Edição e Exclusão para Pessoas, Serviços e Tickets.
* Melhorar a interface do usuário (UI) e experiência do usuário (UX) com estilização mais avançada.
* Adicionar validação de formulários mais robusta no frontend.
* Implementar feedback visual para o usuário (mensagens de sucesso/erro).
* Adicionar testes unitários e de integração.
* Paginação para listas longas.
* Funcionalidade de busca/filtros nas listas.

---

Desenvolvido como parte de um projeto de aprendizado e portfólio.
