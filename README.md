# Trabalho Final - GCES

## Integrante

- Letícia da Silva Monteiro

---

# Objetivo

O projeto consiste em uma aplicação web baseada no jogo MK.js, contendo um frontend responsável pela interface do jogo e um backend Node.js responsável pelo gerenciamento das partidas.

O foco deste trabalho foi aplicar conceitos de Gerência de Configuração e Evolução de Software, incluindo automação de processos, testes, análise de qualidade, segurança, containerização e infraestrutura.

---

# Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose
- Kubernetes
- Nginx
- GitHub Actions
- Jest
- Fast-Check
- ESLint
- CodeQL
- SonarCloud

---

# Arquitetura

A aplicação é composta pelos seguintes componentes:

- Frontend estático
- Backend Node.js
- Banco PostgreSQL
- Nginx para servir arquivos estáticos
- Docker para empacotamento
- Kubernetes para orquestração
- GitHub Actions para automação

Fluxo simplificado:

```text
Usuário
   │
   ▼
 Nginx
   │
   ▼
Backend Node.js
   │
   ▼
PostgreSQL
```

---

# Estrutura do Projeto

```text
.
├── game/
├── server/
├── k8s/
├── .github/workflows/
├── Dockerfile
├── docker-compose.yml
├── sonar-project.properties
└── README.md
```

---

# Execução Local

## Backend

Entrar na pasta do servidor:

```bash
cd server
```

Instalar dependências:

```bash
npm install
```

Executar aplicação:

```bash
npm start
```

---

# Execução com Docker

Construir as imagens:

```bash
docker compose build
```

Subir os containers:

```bash
docker compose up
```

Encerrar os containers:

```bash
docker compose down
```

---

# Testes

Executar os testes unitários:

```bash
cd server
npm test
```

Arquivos de teste:

```text
server/tests/games.test.js
server/tests/fuzzing.test.js
```

Ferramentas utilizadas:

- Jest
- Fast-Check

---

# Análise de Código (Lint)

Executar:

```bash
cd server
npm run lint
```

O projeto utiliza ESLint para análise estática e padronização de código.

---

# Integração Contínua (CI)

Workflow:

```text
.github/workflows/ci.yml
```

A pipeline executa automaticamente:

- Instalação de dependências
- Verificação de estilo de código (Lint)
- Testes unitários
- Auditoria de dependências

---

# Segurança

## SAST (Static Application Security Testing)

Ferramenta utilizada:

- GitHub CodeQL

Workflow:

```text
.github/workflows/codeql.yml
```

O CodeQL realiza análise estática do código-fonte em busca de possíveis vulnerabilidades de segurança.

---

## SCA (Software Composition Analysis)

Ferramenta utilizada:

```bash
npm audit
```

Workflow:

```text
.github/workflows/ci.yml
```

Etapa executada:

```yaml
- name: Auditoria de dependências
  run: npm audit
  continue-on-error: true
```

A auditoria identifica vulnerabilidades conhecidas em dependências utilizadas pelo projeto.

---

# SonarCloud

O projeto possui integração com o SonarCloud para monitoramento contínuo da qualidade do código.

Arquivos:

```text
sonar-project.properties
.github/workflows/build.yml
```

Métricas avaliadas:

- Bugs
- Vulnerabilidades
- Code Smells
- Security Hotspots
- Maintainability
- Reliability

---

# Containerização

## Docker

Arquivos:

```text
Dockerfile
docker-compose.yml
```

A aplicação é executada em containers independentes para:

- Frontend
- Backend
- PostgreSQL

---

## Nginx

O frontend é servido através do Nginx.

Responsabilidades:

- Servir arquivos estáticos
- Ponto de entrada da aplicação
- Integração com Kubernetes Ingress

---

# Kubernetes

Manifestos disponíveis em:

```text
k8s/
```

Arquivos:

```text
backend-deployment.yaml
backend-service.yaml
frontend-service.yaml
postgres-deployment.yaml
postgres-service.yaml
ingress.yaml
certificate.yaml
```

Aplicação dos recursos:

```bash
kubectl apply -f k8s/
```

---

# HTTPS e Segurança de Rede

O projeto contém configuração para:

- Cert-Manager
- TLS
- Ingress Nginx
- Redirecionamento HTTPS

Arquivos:

```text
k8s/ingress.yaml
k8s/certificate.yaml
```

Configuração presente no Ingress:

```yaml
annotations:
  cert-manager.io/cluster-issuer: letsencrypt-prod
  nginx.ingress.kubernetes.io/ssl-redirect: "true"
```

---

# Publicação de Imagens

Workflow:

```text
.github/workflows/docker-publish.yml
```

Responsável por:

- Construção automática das imagens Docker
- Publicação no GitHub Container Registry (GHCR)

---

# Guia de Validação

## Executar testes

```bash
cd server
npm test
```

Resultado esperado:

- Todos os testes aprovados.

## Executar lint

```bash
npm run lint
```

Resultado esperado:

- Nenhum erro encontrado.

## Executar auditoria de dependências

```bash
npm audit
```

Resultado esperado:

- Relatório de vulnerabilidades das dependências.

## Verificar GitHub Actions

Acessar:

```text
GitHub → Actions
```

Verificar execução dos workflows:

- CI
- CodeQL
- SonarCloud
- Docker Publish

## Verificar SonarCloud

Acessar o painel SonarCloud do projeto para visualizar:

- Bugs
- Vulnerabilidades
- Code Smells
- Security Hotspots

---

# Atendimento aos Critérios da Disciplina

| Critério | Implementação |
|-----------|--------------|
| Controle de Versão | Git + GitHub |
| Integração Contínua | GitHub Actions |
| Testes Unitários | Jest |
| Fuzz Testing | Fast-Check |
| Análise Estática (SAST) | CodeQL |
| Dependências (SCA) | npm audit |
| Qualidade Contínua | SonarCloud |
| Containerização | Docker |
| Servidor Web | Nginx |
| Orquestração | Kubernetes |
| HTTPS | Cert-Manager |
| Publicação de Imagens | GitHub Container Registry |

---

# Repositório Alternativo 

Gitlab:

https://gitlab.com/unb-esw/gces/gces2026-1/trabalho-final-gces-leticia-monteiro


# Considerações Finais

Este projeto demonstra a aplicação prática dos principais conceitos estudados na disciplina de Gerência de Configuração e Evolução de Software, incluindo automação, qualidade contínua, segurança, testes, containerização e infraestrutura moderna baseada em containers.
