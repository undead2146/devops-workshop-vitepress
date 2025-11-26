# Workshop Schema

**Totale Duur:** 2 uur (120 minuten)  
**Format:** Interactieve hands-on workshop  
**Deelnemers:** 5-20 personen

## Tijdlijn Overzicht

<div class="progress-bar">
  <div class="progress-fill" style="width: 0%"></div>
</div>

| Tijd | Duur | Activiteit | Presentator | Deelnemers |
|------|----------|----------|-----------|--------------|
| 0:00-0:10 | 10 min | [Introductie & Setup](#introductie-setup) | P1 | Fork & clone |
| 0:10-0:25 | 15 min | [Theorie: DevOps & Code Fase](#theorie-devops-code) | P1 | Lezen & notities maken |
| 0:25-0:40 | 15 min | [Hands-On: Code Fase](#hands-on-code) | P2 | Site bewerken & PR |
| 0:40-0:55 | 15 min | [Theorie & Hands-On: Build Fase](#build-fase) | P2 | CI workflow toevoegen |
| 0:55-1:05 | 10 min | **Pauze** | Allen | Stretch & Q&A |
| 1:05-1:20 | 15 min | [Theorie & Hands-On: Test Fase](#test-fase) | P2 | Tests toevoegen |
| 1:20-1:35 | 15 min | [Theorie & Hands-On: Release Fase](#release-fase) | P3 | Releases creëren |
| 1:35-1:50 | 15 min | [Theorie & Hands-On: Deploy Fase](#deploy-fase) | P3 | Deployen naar Pages |
| 1:50-2:00 | 10 min | [Afsluiting & Vervolgstappen](#afsluiting) | Allen | Showcase & feedback |

## Gedetailleerd Schema

### Introductie & Setup
**Tijd:** 0:00-0:10 (10 minuten)  
**Presentator:** P1  
**Doel:** Iedereen laten setup voltooien en oriënteren

#### Script voor Presentator 1:
> "Welkom bij onze DevOps workshop! Vandaag leer je door een echte CI/CD pipeline te bouwen. Deze website wordt je project - elke bewerking die je maakt oefent DevOps principes. Laten we beginnen met iedereen setup te laten doen."

#### Deelnemer Activiteiten:
1. **Fork de repository** (2 min)
   - Ga naar de workshop GitHub repository
   - Klik op "Fork" knop
   - Behoud standaard instellingen

2. **Clone lokaal** (3 min)
   ```bash
   git clone https://github.com/JOUW_GEBRUIKERSNAAM/devops-workshop-vitepress.git
   cd devops-workshop-vitepress
   ```

3. **Installeer en preview** (3 min)
   ```bash
   pnpm install
   pnpm dev
   ```
   - Open localhost:5173
   - Controleer of de site laadt

4. **Activeer GitHub Pages** (2 min)
   - Ga naar Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (wordt later aangemaakt)

#### Succes Criteria:
- ✅ Iedereen heeft de site lokaal draaien
- ✅ GitHub Pages is geconfigureerd
- ✅ Poll: "Typ ✅ in chat als je klaar bent"

---

### Theorie: DevOps & Code Fase
**Tijd:** 0:10-0:25 (15 minuten)  
**Presentator:** P1  
**Doel:** Begrijp DevOps CALMS en Code fase fundamenten

#### Presentator Script:
> "Laten we nu begrijpen wat DevOps werkelijk betekent. Open de Theorie sectie in je lokale site en volg mee."

#### Te Behandelen Inhoud:
1. **CALMS Framework** (5 min)
   - Culture: Samenwerking boven silo's
   - Automation: Verminderen handmatig werk  
   - Lean: Optimaliseren flow en elimineren verspilling
   - Measurement: Data-gedreven beslissingen
   - Sharing: Kennis en feedback loops

2. **Code Fase Diepgaand** (7 min)
   - Waarom versiebeheer belangrijk is
   - Git workflow: branch → commit → PR → merge
   - Hoe dit samenwerking mogelijk maakt
   - Connectie met DevOps Culture & Sharing

3. **Workshop Context** (3 min)
   - Hoe het bewerken van deze site = oefenen Code fase
   - Preview van volledige pipeline die we gaan bouwen

#### Deelnemer Activiteiten:
- Lees `/theory/overview` en `/theory/cicd`
- Maak notities in de marges (bewerk lokaal)
- Stel vragen in chat

---

### Hands-On: Code Fase
**Tijd:** 0:25-0:40 (15 minuten)  
**Presentator:** P2  
**Doel:** Oefen collaboratieve ontwikkeling

<div class="warning-box">
⚠️ <strong>Presentator Wissel:</strong> P1 zegt "P2, neem ons mee door de Code fase hands-on!"
</div>

#### Stap-voor-Stap Instructies:

<div class="step-counter">1</div> **Creëer een feature branch** (2 min)

```bash
git checkout -b feat/personaliseer-site
```

<div class="step-counter">2</div> **Maak je eerste bewerking** (5 min)

Bewerk `docs/progress.md` en voeg je persoonlijke notities toe:

```markdown
## Mijn Workshop Notities
- Gestart om: [huidige tijd]
- Doel: Leer DevOps door te doen
- Verwachting: Bouw een echte pipeline

## Persoonlijke Tracker
- [ ] Code fase voltooid
- [ ] Build fase voltooid  
- [ ] Test fase voltooid
- [ ] Release fase voltooid
- [ ] Deploy fase voltooid
```

<div class="step-counter">3</div> **Commit en push** (3 min)

```bash
git add .
git commit -m "feat: voeg persoonlijke workshop tracker toe"
git push origin feat/personaliseer-site
```

<div class="step-counter">4</div> **Creëer Pull Request** (3 min)

1. Ga naar je GitHub repo
2. Klik op "Compare & pull request"
3. Titel: "Voeg persoonlijke workshop tracker toe"
4. Beschrijving: "Oefening van de Code fase door mijn voortgangstracker toe te voegen"
5. Klik op "Create pull request"

<div class="step-counter">5</div> **Merge Pull Request** (2 min)

1. Review de wijzigingen in de PR
2. Klik op "Merge pull request"
3. Klik op "Confirm merge"
4. Verwijder de feature branch

#### Succes Criteria:
- ✅ PR succesvol aangemaakt en gemerged
- ✅ Wijzigingen zichtbaar in main branch
- ✅ Begrip van Git workflow

<div class="success-box">
🎉 <strong>Fase Voltooid!</strong> Je hebt zojuist de Code fase van DevOps geoefend - collaboratieve ontwikkeling via versiebeheer!
</div>

---

### Build Fase
**Tijd:** 0:40-0:55 (15 minuten)  
**Presentator:** P2  
**Doel:** Automatiseer artifact creatie

#### Theorie Overzicht (5 min)
- Wat zijn artifacts? (Gecompileerde, production-ready bestanden)
- Waarom builden? (Optimalisatie, consistentie, beveiliging)
- VitePress: Markdown → Statische HTML/CSS/JS

#### Hands-On Implementatie (10 min):

<div class="step-counter">1</div> **Creëer workflow bestand** (3 min)

Creëer `.github/workflows/ci.yml`:

```yaml
name: CI Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: actions/upload-artifact@v4
        with:
          name: site-dist
          path: .vitepress/dist/
```

<div class="step-counter">2</div> **Test eerst lokaal** (2 min)

```bash
pnpm build
ls -la .vitepress/dist/  # Zou HTML bestanden moeten zien
```

<div class="step-counter">3</div> **Commit en push** (3 min)

```bash
git add .
git commit -m "feat: voeg CI build pipeline toe"
git push origin main
```

<div class="step-counter">4</div> **Verifieer in GitHub Actions** (2 min)

1. Ga naar de "Actions" tab van je repo
2. Bekijk de build run
3. Download het artifact wanneer voltooid

#### Succes Criteria:
- ✅ Workflow draait succesvol
- ✅ Artifact bevat gebouwde site bestanden
- ✅ Begrip van build automatisering

---

### 10-Minuten Pauze
**Tijd:** 0:55-1:05  

> "Geweldige voortgang! Neem een 10-minuten pauze. Wanneer we terugkomen, voegen we testing toe om te zorgen dat onze builds van hoge kwaliteit zijn."

---

### Test Fase  
**Tijd:** 1:05-1:20 (15 minuten)  
**Presentator:** P2  
**Doel:** Voeg kwaliteitspoorten toe met geautomatiseerde testing

#### Theorie (3 min):
- Waarom testen? (Vang problemen vroeg, waarborg kwaliteit)
- Types: Unit, Integration, E2E
- Coverage: Meet hoeveel code getest is

#### Implementatie (12 min):

<div class="step-counter">1</div> **Creëer test bestand** (4 min)

Creëer `tests/site.test.js` (JavaScript code blijft Engels voor technische redenen)

<div class="step-counter">2</div> **Voeg test configuratie toe** (2 min)

Creëer `jest.config.js` (code blijft Engels)

<div class="step-counter">3</div> **Update CI workflow** (3 min)

Voeg test job toe aan `.github/workflows/ci.yml`

<div class="step-counter">4</div> **Test en commit** (3 min)

```bash
pnpm test  # Draai eerst lokaal
git add .
git commit -m "feat: voeg geautomatiseerde testing toe"
git push origin main
```

#### Succes Criteria:
- ✅ Tests slagen lokaal en in CI
- ✅ Coverage rapport gegenereerd
- ✅ Build faalt als tests falen

---

### Release Fase
**Tijd:** 1:20-1:35 (15 minuten)  
**Presentator:** P3  
**Doel:** Creëer versioned releases

<div class="warning-box">
⚠️ <strong>Presentator Wissel:</strong> P2 zegt "P3, laat ze zien hoe je professionele releases creëert!"
</div>

#### Theorie (3 min):
- Semantic Versioning (MAJOR.MINOR.PATCH)
- Releases vs Deployments
- Waarom versie? (Rollbacks, auditing, distributie)

#### Implementatie (12 min):

<div class="step-counter">1</div> **Voeg release job toe aan CI** (5 min)

Update `.github/workflows/ci.yml` (YAML code blijft Engels)

<div class="step-counter">2</div> **Creëer eerste release** (4 min)

```bash
git add .
git commit -m "feat: voeg release automatisering toe"
git push origin main

# Creëer en push tag
git tag v1.0.0
git push origin v1.0.0
```

<div class="step-counter">3</div> **Verifieer release** (3 min)

1. Ga naar de "Releases" sectie van je repo
2. Zie v1.0.0 release automatisch aangemaakt
3. Download release assets

#### Succes Criteria:
- ✅ Release automatisch aangemaakt bij tag
- ✅ Release bevat gebouwde artifacts
- ✅ Begrip van versioning strategie

---

### Deploy Fase
**Tijd:** 1:35-1:50 (15 minuten)  
**Presentator:** P3  
**Doel:** Automatisch deployen naar productie

#### Theorie (3 min):
- Continuous Deployment vs Delivery
- GitHub Pages als productie omgeving
- Rollback strategieën

#### Implementatie (12 min):

<div class="step-counter">1</div> **Voeg deploy job toe** (6 min)

Update `.github/workflows/ci.yml` (YAML code blijft Engels)

<div class="step-counter">2</div> **Deploy en test** (4 min)

```bash
git add .
git commit -m "feat: voeg automatische deployment toe"
git push origin main
```

<div class="step-counter">3</div> **Verifieer deployment** (2 min)

1. Wacht tot Actions voltooid zijn
2. Bezoek `https://JOUW_GEBRUIKERSNAAM.github.io/devops-workshop-vitepress/`
3. Bevestig dat site live is!

#### Succes Criteria:
- ✅ Site deployt automatisch bij main branch wijzigingen
- ✅ Live site toegankelijk op GitHub Pages URL
- ✅ Volledige CI/CD pipeline werkt end-to-end

<div class="success-box">
🚀 <strong>Gefeliciteerd!</strong> Je hebt een complete CI/CD pipeline gebouwd! Elke wijziging naar main wordt nu automatisch gebouwd, getest en gedeployed.
</div>

---

### Afsluiting & Vervolgstappen
**Tijd:** 1:50-2:00 (10 minuten)  
**Alle Presentatoren**

#### Showcase Tijd (5 min):
- Vrijwilligers delen hun live sites
- Snelle demo van een wijziging maken en zien deployen
- Vier de werkende pipelines!

#### Belangrijkste Leerpunten (3 min):
1. **Cultuur**: Samenwerking via PRs en code review
2. **Automatisering**: Volledige pipeline draait zonder handmatige interventie  
3. **Lean**: Snelle feedback loops en gestroomlijnd proces
4. **Meting**: Test coverage en deployment metrieken
5. **Delen**: Documentatie en kennisoverdracht

#### Vervolgstappen (2 min):
- Voltooi extensions voor extra punten
- Personaliseer je site en voeg meer features toe
- Pas deze concepten toe op je echte projecten
- Geef feedback om de workshop te verbeteren

---

## Presentator Notities

### Voorbereiding Checklist:
- [ ] Alle presentatoren hebben demo repos klaar
- [ ] Backup slides voorbereid voor technische problemen
- [ ] Zoom breakout rooms geconfigureerd (indien virtueel)
- [ ] Deelnemer GitHub gebruikersnamen verzameld
- [ ] Workshop repository geforked door alle facilitators

### Troubleshooting Snelle Referentie:
- **pnpm niet gevonden**: `npm install -g pnpm`
- **Permissie fouten**: Gebruik `sudo` of configureer npm correct
- **Actions falen**: Controleer YAML indentatie en GitHub token permissies
- **Site deployt niet**: Verifieer Pages instellingen en branch naam

### Timing Flexibiliteit:
- Als je achterloopt: Sla sommige theorie secties over en focus op hands-on
- Als je voorloopt: Voeg meer Q&A en diepere verkenning toe
- Houd altijd de finale deployment demo - het is het meest bevredigende deel!
