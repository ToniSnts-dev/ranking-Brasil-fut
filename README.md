# ⚽ Brazilian Football Players Ranking

Projeto de portfólio desenvolvido para coletar, armazenar, analisar e visualizar estatísticas de jogadores brasileiros de futebol.

A aplicação utiliza dados da **API-Football** e terá como principal objetivo criar um ranking próprio de jogadores baseado em seu momento atual, considerando estatísticas recentes e históricas.

## 🎯 Objetivo

O projeto busca construir uma aplicação completa, passando por diferentes etapas comuns no desenvolvimento de software:

* Consumo de uma API externa.
* Tratamento de dados em JSON.
* Persistência dos dados em banco de dados relacional.
* Desenvolvimento de um algoritmo próprio para cálculo de forma dos jogadores.
* Criação de uma API REST.
* Desenvolvimento de uma interface web para visualização dos rankings.

Além do resultado final, o projeto também tem como objetivo aprofundar conhecimentos em desenvolvimento backend, banco de dados, APIs, desenvolvimento web e boas práticas de engenharia de software.

## 🏗️ Arquitetura planejada

```text
API-Football
     ↓
Backend Node.js + TypeScript
     ↓
PostgreSQL
     ↓
Algoritmo de cálculo de forma
     ↓
API REST
     ↓
React + TypeScript
     ↓
Interface Web
```

## 🚧 Etapas do Projeto

### Fase 1 — Consumo da API

* Configurar o projeto com Node.js e TypeScript.
* Realizar requisições para a API-Football.
* Trabalhar com requisições HTTP assíncronas.
* Interpretar e tratar as respostas JSON.
* Exibir informações relevantes no terminal.

### Fase 2 — Banco de Dados

* Modelar as entidades necessárias para o projeto.
* Criar um banco de dados PostgreSQL.
* Armazenar jogadores, equipes, partidas e estatísticas.
* Relacionar os dados obtidos através da API-Football.
* Consultar os dados utilizando SQL.

### Fase 3 — Ranking de Jogadores

Desenvolver um algoritmo próprio para representar a forma atual de cada jogador.

O cálculo deverá considerar fatores como:

* Desempenho recente.
* Participações em gols.
* Minutos jogados.
* Estatísticas individuais.
* Período das partidas.
* Peso maior para atuações mais recentes.

O algoritmo será refinado durante o desenvolvimento do projeto.

Inicialmente, o ranking será apresentado diretamente no terminal.

### Fase 4 — Backend / API REST

Criar uma API própria para disponibilizar os dados processados pelo sistema.

Exemplos planejados:

```http
GET /players
GET /players/:id
GET /rankings
GET /rankings?period=30
GET /rankings?position=forward
```

### Fase 5 — Interface Web

Desenvolver uma interface para visualizar os rankings e estatísticas dos jogadores.

Tecnologias planejadas:

* React
* TypeScript

A interface deverá permitir visualizar rankings, jogadores e detalhes das estatísticas utilizadas no cálculo.

## 🛠️ Stack

### Backend

* TypeScript
* Node.js

### Banco de Dados

* PostgreSQL
* SQL

### Frontend

* React
* TypeScript

### APIs e comunicação

* REST
* HTTP
* JSON
* API-Football

### Ferramentas

* Git
* GitHub
* Postman

### Tecnologias previstas posteriormente

* Docker
* Testes automatizados
* Deploy
* CI/CD

## 📚 Conceitos trabalhados

Durante o desenvolvimento serão aplicados conceitos como:

* Programação assíncrona.
* Consumo de APIs REST.
* Modelagem de banco de dados relacional.
* SQL.
* Persistência de dados.
* Separação de responsabilidades.
* Arquitetura de aplicações.
* Algoritmos.
* Estruturas de dados.
* Versionamento de código.
* Integração entre frontend e backend.

## 📊 Fonte dos Dados

Os dados utilizados pela aplicação são obtidos através da **API-Football**.

A chave da API não será armazenada diretamente no código-fonte ou no repositório.

## 🔐 Variáveis de Ambiente

Informações sensíveis, como a API Key da API-Football e futuramente as credenciais do banco de dados, deverão ser configuradas através de variáveis de ambiente.

Exemplo:

```env
API_FOOTBALL_KEY=sua_api_key
```

O arquivo `.env` não deve ser versionado no GitHub.

## ▶️ Como executar

O projeto ainda está em desenvolvimento.

As instruções completas de instalação e execução serão adicionadas conforme a implementação evoluir.

Para clonar o repositório:

```bash
git clone https://github.com/ToniSnts-dev/ranking-Brasil-fut.git
```

## 📌 Status

🚧 Projeto em desenvolvimento.

Etapa atual:

**Configuração do backend em Node.js + TypeScript e integração inicial com a API-Football.**

