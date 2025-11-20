# Workshop Agenda (120 Minuten)

Volg deze site - bewerk notities en maak Pull Requests voor live updates. De workshop heeft 3 presentatoren die roteren: P1 (Intro/Code/Build), P2 (Test/Release), P3 (Deploy/CI/CD/Afsluiting). Er zijn in totaal 10 minuten buffers ingebouwd. Deze workshop verbindt volledig DevOps (CALMS framework) via GitHub Actions automatisering.

## Basisconcepten

Elke fase bouwt voort op de vorige:
- **Code** (bewerkingen) → **Build** (artifact: gecompileerde bestanden) 
- **Build** → **Test** (valideer artifact) 
- **Test** → **Release** (versioneer artifact) 
- **Release** → **Deploy** (publiceer artifact)

**Belangrijke termen:**
- **Artifact**: Gecompileerde output voor consistentie en productie-gereedheid
- **Tag**: Versie marker voor belangrijke milestones (niet bij elke build)

---

## 📅 Tijdlijn

### 0:00–0:10: Introductie & Setup (P1)

**Doel**: Welkom en iedereen klaar maken

**Activiteiten**:
- Welkom en workshop doelstellingen uitleggen
- CALMS framework overzicht
- Uitleg wat een artifact is (gecompileerde output voor consistentie)
- Deelnemers: Fork/clone/preview de repository
- Poll: "Setup klaar?"
- Handoff: P2 bereidt test demo voor

**Reflectie**: Setup maakt de Code fase mogelijk

**Buffertijd**: Inbegrepen in 10 minuten

---

### 0:10–0:30: Theorie – Code & Build (P1, 20 min)

**Doel**: Begrijp DevOps cultuur en automatisering fundamenten

**Te Lezen**:
- [Code Fase Theorie](/theory/code) - Culture/Samenwerking via Git
- [Build Fase Theorie](/theory/build) - Automation/Artifacts via Actions

**Kernconcepten**:
- Waarom build artefacten? Transforms bron naar productie-klare bestanden
- Git workflows en branching strategieën
- Automatisering met GitHub Actions

**Activiteiten**:
- Deelnemers lezen theorie secties
- Q&A over Git workflows
- Verificatie: Lokale edit reloads in browser

**Reflectie**: Code start de pipeline; Build creëert artifact - volgende stap is testen

**Bufferijd**: 2 minuten

---

### 0:30–0:50: Hands-On – Code & Build (P2, 20 min)

**Doel**: Praktijk met Git workflows en build automatisering

**Gids**: Volg [Code & Build Hands-on](/hands-on/code-build)

**Stappen**:
1. Bewerk bestanden (oefen Code fase)
2. Maak Pull Request
3. Voeg build YAML toe met Actions
4. Waarom artifact? Verzekert deploybare format

**Checkpoint**:
- Groene Actions status
- Artifact succesvol gedownload
- Simulatie: Wat gebeurt er bij een lint fail?

**Handoff**: P3 bereidt release voor

**Reflectie**: Je hebt gecodeerd en een artifact gebouwd - volgende stap is testen om het te valideren voor release

**Bufferijd**: Inbegrepen

---

### 0:50–1:10: Theorie – Test & Release (P2, 20 min)

**Doel**: Begrijp kwaliteitsborging en versiebeheer

**Te Lezen**:
- [Test Fase Theorie](/theory/test) - Measurement/Lean via Jest
- [Release Fase Theorie](/theory/release) - Tags in Actions

**Kernconcepten**:
- Waarom testen? Valideer artifact kwaliteit
- Waarom taggen? Versioneer artefact voor milestones, niet elke build - voor veilige tracking van wijzigingen
- Verschil tussen release en deploy

**Activiteiten**:
- Lees theorie secties
- Q&A: "Waarom release en deploy scheiden?"
- Verificatie: `pnpm test` slaagt lokaal

**Reflectie**: Test checkt artifact kwaliteit; Release versioneert het - volgende stap is hands-on toepassing

**Bufferijd**: 2 minuten

---

### 1:10–1:30: Hands-On – Test & Release (P3, 20 min)

**Doel**: Implementeer testing en creëer eerste release

**Gids**: Volg [Test & Release Hands-on](/hands-on/test-release)

**Stappen**:
1. Voeg tests toe
2. Tag v1.0.0 met Actions
3. Waarom niet bij elke build releasen? Tags voor audits/delen zonder rommel
4. Deel ZIP met anderen

**Activiteiten**:
- Tests lokaal schrijven en runnen
- Tag aanmaken en pushen
- Release assets downloaden
- Simulatie: Test fail/fix cyclus

**Reflectie**: Geteste en versioneerde artifact - volgende stap is deployen om het live te publiceren

**Bufferijd**: Inbegrepen

---

### 1:30–1:50: Theorie – Deploy & CI/CD (P3, 20 min)

**Doel**: Begrijp deployment en de volledige pipeline

**Te Lezen**:
- [Deploy Fase Theorie](/theory/deploy) - Automation/Sharing via Pages
- [CI/CD Overzicht](/theory/cicd) - Volledige pipeline

**Kernconcepten**:
- Waarom deployen? Maakt artifact online toegankelijk
- Continuous Deployment vs Continuous Delivery
- CALMS framework in actie
- Volledige flow: Code → Build (artifact) → Test → Release (versie) → Deploy (live)

**Activiteiten**:
- Bespreek CALMS principes
- Verificatie: Handmatige deploy test
- Q&A over deployment strategieën

**Reflectie**: Volledige DevOps flow begrijpen van code tot live site

**Bufferijd**: Inbegrepen in presentatie

---

### 1:50–2:10: Hands-On Deploy & Afsluiting (Alle Presentatoren, 20 min)

**Doel**: Volledige pipeline voltooien en reflecteren

**Gids**: Volg [Deploy Hands-on](/hands-on/deploy)

**Stappen**:
1. Voeg deploy job toe
2. Volledige run met Actions
3. Recap: Deployt artifact - waarom apart taggen? Voor rollback/milestones

**Afsluitende Activiteiten**:
- Bewerk [Voortgangstracker](/progress)
- Voeg [Feedback](/resources/feedback) toe
- Deelnemers delen hun live sites (5 min)
- Q&A sessie

**Vervolgstappen**:
- Huiswerk: [Workshop Uitbreidingen](/resources/extensions)
- Optioneel: Voeg certificaten toe aan je site!

**Reflectie**: Pipeline compleet - van code tot live site. Je hebt nu een werkende CI/CD pipeline!

**Bufferijd**: 10 minuten flex voor vragen

---

## 📝 Mijn Persoonlijke Notities

**Bewerk en commit deze sectie tijdens de workshop!**

### Code Fase
- **Tijd**: [Vul in]
- **Belangrijkste inzicht**: 

### Build Fase
- **Tijd**: [Vul in]
- **Belangrijkste inzicht**: 

### Test Fase
- **Tijd**: [Vul in]
- **Belangrijkste inzicht**: 

### Release Fase
- **Tijd**: [Vul in]
- **Belangrijkste inzicht**: 

### Deploy Fase
- **Tijd**: [Vul in]
- **Belangrijkste inzicht**: 

---

## 🎯 Succesindicatoren

Aan het einde van deze workshop heb je:
- ✅ Een werkende CI/CD pipeline met alle 5 fasen
- ✅ Een live gedeployde website op GitHub Pages
- ✅ Praktische ervaring met Git workflows
- ✅ Begrip van het CALMS framework
- ✅ Geautomatiseerde testing en quality gates
- ✅ Versioned releases met semantic versioning

**Volgende stappen**: [Workshop Schema](/schedule) voor gedetailleerde timing en presentator scripts.
