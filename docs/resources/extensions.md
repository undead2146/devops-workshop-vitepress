# Uitbreidingen & Huiswerk

Breid je pipeline/site uit na de workshop (1–3 uur). PR naar originele repo!

## Ideeën voor Uitbreidingen

### 1. **Linting**
Voeg ESLint job toe voor code kwaliteit.

```bash
pnpm add -D eslint eslint-plugin-markdown
```

Update `.github/workflows/ci.yml`:
```yaml
lint:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: pnpm/action-setup@v2
    - uses: actions/setup-node@v4
    - run: pnpm install
    - run: pnpm lint
```

**Waarom?** Vangt style problemen en potentiële bugs vroeg.

### 2. **Semantic Release**
Automatisch taggen gebaseerd op commit messages.

```bash
pnpm add -D semantic-release
```

Update release job om semantic-release te gebruiken.

**Waarom?** Elimineert handmatig taggen; versies volgen automatisch uit commits.

### 3. **Notificaties**
Slack notificaties bij deploy.

```yaml
- uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

**Waarom?** Team blijft op de hoogte van deployments.

### 4. **E2E Tests**
Playwright voor browser testing.

```bash
pnpm add -D @playwright/test
```

Test site navigatie in test job.

**Waarom?** Valideert dat de site werkt in echte browsers.

### 5. **Multi-Environment**
Staging branch deployt naar `/staging/`.

Update YAML `if` voor branches:
```yaml
deploy-staging:
  if: github.ref == 'refs/heads/staging'
  # ... deploy naar staging URL
```

**Waarom?** Test wijzigingen voor productie.

### 6. **Metrics Badge**
Voeg toe aan README:

```markdown
[![Pipeline Status](https://github.com/{{username}}/devops-workshop-vitepress/workflows/CI%2FCD/badge.svg)](https://github.com/{{username}}/devops-workshop-vitepress/actions)
```

**Waarom?** Toont pipeline status in één oogopslag.

### 7. **Dependency Updates**
Automatische dependency updates met Dependabot.

Creëer `.github/dependabot.yml`:
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
```

**Waarom?** Houdt dependencies up-to-date en veilig.

### 8. **Performance Monitoring**
Lighthouse CI voor performance metrics.

```bash
pnpm add -D @lhci/cli
```

**Waarom?** Track site performance over tijd.

## Bronnen

### Documentatie
- **VitePress**: [vitepress.dev](https://vitepress.dev/)
- **GitHub Actions**: [docs.github.com/en/actions](https://docs.github.com/en/actions)
- **Jest**: [jestjs.io](https://jestjs.io/)

### Boeken
- **"Accelerate"** - DORA metrics en DevOps research
- **"The DevOps Handbook"** - Praktische DevOps implementatie
- **"Continuous Delivery"** - Deployment pipeline patterns

### Online Cursussen
- GitHub Learning Lab
- DevOps courses op Coursera/Udemy
- AWS/Azure DevOps certificeringen

## Deel Je Werk!

Heb je een coole uitbreiding gebouwd? Deel het!

1. Maak een PR naar de originele repo
2. Voeg screenshots toe
3. Documenteer je aanpak
4. Help anderen leren!

**Experimenteer en deel via [Feedback](/resources/feedback)!**

## Challenge: Volledige DevOps Stack

Bouw een complete DevOps stack:
- ✅ CI/CD (heb je al!)
- ⬜ Monitoring (Grafana/Prometheus)
- ⬜ Logging (ELK stack)
- ⬜ Alerting (PagerDuty)
- ⬜ Infrastructure as Code (Terraform)
- ⬜ Container Orchestration (Kubernetes)

**Doel**: Professionele DevOps engineer vaardigheden!
