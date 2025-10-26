# 🤝 Guia de Contribuição

Obrigado por estar interessado em contribuir com nosso projeto! Este documento fornece diretrizes para contribuições.

## 🎯 Como Contribuir

### 1. Configuração do Ambiente

```bash
# Clone o repositório
git clone https://github.com/felipemacedo1/project-template-pro.git
cd project-template-pro

# Instale as dependências
npm install

# Crie uma branch para sua feature
git checkout -b feature/sua-feature
```

### 2. Desenvolvimento

Antes de começar a codificar:

- Leia a documentação
- Verifique se uma issue relacionada já existe
- Crie uma issue para features grandes para discussão

#### Padrões de Código

- Siga o estilo do projeto (ESLint + Prettier)
- Escreva testes para suas mudanças
- Use Conventional Commits
- Adicione comentários em código complexo

#### Conventional Commits

Use o seguinte formato:

```
<tipo>(<escopo>): <descrição>

<corpo>

<footer>
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `test`: Testes
- `refactor`: Refatoração
- `perf`: Melhoria de performance
- `chore`: Tarefas de manutenção
- `ci`: Mudanças em CI/CD

**Exemplo:**
```
feat(auth): adicionar autenticação OAuth2

Implementa login via Google e GitHub usando estratégia OAuth2.
Inclui testes unitários e integração.

Closes #123
```

### 3. Testes

```bash
# Executar testes
npm test

# Executar com cobertura
npm run test:coverage

# Lint
npm run lint

# Formatter
npm run format
```

### 4. Commit e Push

```bash
# Adicione as mudanças
git add .

# Commit com mensagem descritiva
git commit -m "feat(module): descrição"

# Push para sua branch
git push origin feature/sua-feature
```

### 5. Pull Request

1. Vá para o repositório no GitHub
2. Clique em "Compare & pull request"
3. Preencha o template do PR
4. Aguarde a revisão

## 📋 Checklist para PR

- [ ] Código segue o estilo do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Commit messages seguem Conventional Commits
- [ ] Sem conflitos com `main`
- [ ] CI/CD passa

## 🐛 Reportando Bugs

Use o template de bug report no GitHub Issues. Inclua:

- Versão do projeto
- OS e versão
- Passos para reproduzir
- Comportamento esperado
- Screenshots (se aplicável)

## 💡 Sugerindo Melhorias

Use o template de feature request no GitHub Issues.

## ❓ Dúvidas?

Abra uma discussão ou entre em contato através das issues.

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença MIT do projeto.
