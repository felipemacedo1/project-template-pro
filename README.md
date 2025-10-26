<div align="center">

# 🚀 Project Template Pro

[![Build](https://github.com/felipemacedo1/project-template-pro/actions/workflows/ci.yml/badge.svg)](https://github.com/felipemacedo1/project-template-pro/actions/workflows/ci.yml)
[![Lint](https://github.com/felipemacedo1/project-template-pro/actions/workflows/lint.yml/badge.svg)](https://github.com/felipemacedo1/project-template-pro/actions/workflows/lint.yml)
[![Security](https://github.com/felipemacedo1/project-template-pro/actions/workflows/security-scan.yml/badge.svg)](https://github.com/felipemacedo1/project-template-pro/actions/workflows/security-scan.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Template open-source profissional com padrões modernos de desenvolvimento, CI/CD e documentação.**

[🌐 Docs](#-documentação) • [🚀 Quick Start](#-quick-start) • [🤝 Contribua](#-como-contribuir) • [📋 Roadmap](#-roadmap)

</div>

---

## 📖 Sobre

**Project Template Pro** é um template moderno, completo e pronto para produção. Ideal como base para:

- ✅ Novos projetos open-source
- ✅ Aplicações Node.js/JavaScript
- ✅ Bibliotecas e packages NPM
- ✅ Projetos com foco em qualidade e documentação

### ⭐ Features

| Feature | Descrição |
|---------|-----------|
| 🔄 **CI/CD Automático** | GitHub Actions com build, test e lint |
| 📊 **Code Coverage** | Integrado com Codecov |
| 🔐 **Segurança** | Trivy scanning + Dependabot |
| 📝 **Documentação** | README, CONTRIBUTING, SECURITY |
| 🎯 **Padrões** | Conventional Commits + SemVer |
| 🏷️ **Labels** | Padrão para issues e PRs |
| 📋 **Templates** | Bug report e feature request |
| 🚀 **Release** | Automatizado com tags git |

---

## 🚀 Quick Start

### Pré-requisitos

- **Node.js**: 18+ ou 20+
- **npm**: 9+ ou **yarn**: 3+
- **Git**: 2.39+

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/felipemacedo1/project-template-pro.git
cd project-template-pro

# 2. Instale dependências
npm install

# 3. Verifique a setup
npm run lint
npm test
```

### Scripts Disponíveis

```bash
npm run build          # Build do projeto
npm run dev            # Desenvolvimento com watch
npm test               # Executar testes
npm run test:coverage  # Testes com cobertura
npm run lint           # ESLint
npm run format         # Prettier (escrever)
npm run format:check   # Prettier (verificar)
```

---

## 📁 Estrutura do Projeto

```
project-template-pro/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml          # Template de bug
│   │   └── feature_request.yml     # Template de feature
│   └── workflows/
│       ├── ci.yml                  # Build + Test
│       ├── lint.yml                # Lint + Format
│       ├── security-scan.yml       # Security scanning
│       └── release.yml             # Automated release
├── docs/
│   ├── CONTRIBUTING.md             # Guia de contribuição
│   ├── CODE_OF_CONDUCT.md          # Código de conduta
│   ├── CHANGELOG.md                # Histórico de mudanças
│   └── ROADMAP.md                  # Roadmap do projeto
├── src/
│   └── index.js                    # Código principal
├── tests/
│   └── index.test.js               # Testes
├── .editorconfig                   # Configuração do editor
├── .gitignore                      # Git ignore
├── .prettierrc                     # Prettier config (opcional)
├── .eslintrc.json                  # ESLint config (opcional)
├── LICENSE                         # Licença MIT
├── README.md                       # Este arquivo
├── SECURITY.md                     # Política de segurança
└── package.json                    # Dependências
```

---

## 🔧 Configuração

### EditorConfig

O arquivo `.editorconfig` garante consistência entre editores:

```ini
[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.{js,json,md}]
indent_style = space
indent_size = 2
```

### ESLint (Opcional)

```bash
npm install --save-dev eslint eslint-config-prettier
echo '{"extends": "prettier"}' > .eslintrc.json
```

### Prettier (Opcional)

```bash
npm install --save-dev prettier
echo '{"semi": true, "singleQuote": true, "trailingComma": "es5"}' > .prettierrc
```

---

## 🚀 CI/CD Workflows

### ✅ CI Pipeline

Roda em: `push` e `pull_request`

```yaml
1. Checkout código
2. Setup Node.js (18.x, 20.x)
3. Install dependências
4. Build
5. Testes
6. Upload coverage (Codecov)
```

### 🎨 Lint Pipeline

Verifica: ESLint + Prettier

### 🔐 Security Pipeline

- Trivy filesystem scan
- Dependabot checks
- CodeQL (opcional)

### 📦 Release Pipeline

Disparada por: `git tag v*`

Faz:
1. Build e testes
2. Cria GitHub Release
3. Gera release notes automáticas

---

## 📋 Padrões de Desenvolvimento

### Conventional Commits

Use este formato:

```
<tipo>(<escopo>): <descrição>

[corpo]

[footer]
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `test`: Testes
- `refactor`: Refatoração
- `perf`: Performance
- `chore`: Manutenção
- `ci`: CI/CD

**Exemplo:**
```
feat(auth): adicionar suporte OAuth2

Implementa login com Google e GitHub usando OAuth2.
Inclui testes e documentação.

Closes #123
```

### Labels Padronizadas

| Label | Cor | Uso |
|-------|-----|-----|
| `feature` | 🟢 Verde | Novas funcionalidades |
| `bug` | 🔴 Vermelho | Bugs |
| `enhancement` | 🔵 Azul | Melhorias gerais |
| `security` | ⚫ Preto | Vulnerabilidades |
| `docs` | 📚 Azul | Documentação |
| `ci` | 🟣 Roxo | CI/CD |
| `help wanted` | 🟠 Laranja | Procura ajuda |
| `good first issue` | 🟣 Roxo | Para iniciantes |

### Versionamento (SemVer)

- `MAJOR.MINOR.PATCH` (e.g., 1.2.3)
- `MAJOR`: Mudanças incompatíveis
- `MINOR`: Novas funcionalidades
- `PATCH`: Correções

---

## 🤝 Como Contribuir

### Passos Básicos

1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie** uma branch (`git checkout -b feature/nova-feature`)
4. **Commit** com Conventional Commits (`git commit -m 'feat: ...'`)
5. **Push** para sua branch
6. **Abra** um Pull Request

### Pull Request

- Preencha o template do PR
- Vincule issues relacionadas
- Mantenha descritivo
- Aguarde revisão

📖 [Leia o guia completo de contribuição](docs/CONTRIBUTING.md)

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Veja [LICENSE](LICENSE) para detalhes.

```
MIT License © 2025 Felipe Macedo
```

---

## 📚 Documentação

| Documento | Descrição |
|-----------|-----------|
| [CONTRIBUTING.md](docs/CONTRIBUTING.md) | Como contribuir |
| [CODE_OF_CONDUCT.md](docs/CODE_OF_CONDUCT.md) | Código de conduta |
| [SECURITY.md](SECURITY.md) | Política de segurança |
| [CHANGELOG.md](docs/CHANGELOG.md) | Histórico de mudanças |
| [ROADMAP.md](docs/ROADMAP.md) | Visão futura |

---

## 🗺️ Roadmap

### v1.0 (Atual)
- ✅ Estrutura base
- ✅ CI/CD workflows
- ✅ Documentação

### v1.1 (Próxima)
- [ ] Multi-language examples
- [ ] Docker support
- [ ] SonarCloud integration

### v2.0 (Futuro)
- [ ] Python template variant
- [ ] Go template variant
- [ ] Dashboard de métricas

📋 [Veja o roadmap completo](docs/ROADMAP.md)

---

## ❓ FAQ

**P: Posso usar este template para meu projeto?**
R: Sim! É exatamente para isso. Faça um fork e comece.

**P: Como faço release automático?**
R: Crie uma tag `git tag v1.0.0 && git push --tags`

**P: Preciso alterar os labels?**
R: Sim, customize conforme sua necessidade.

---

## 📞 Contato

- **GitHub Issues**: [project-template-pro/issues](https://github.com/felipemacedo1/project-template-pro/issues)
- **GitHub Discussions**: [project-template-pro/discussions](https://github.com/felipemacedo1/project-template-pro/discussions)

---

<div align="center">

**Feito com ❤️ por [Felipe Macedo](https://github.com/felipemacedo1)**

[⬆ Voltar ao topo](#-project-template-pro)

</div>
