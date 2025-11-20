# Setup Instructies

Welkom bij de DevOps Workshop! Deze pagina helpt je om je ontwikkelomgeving klaar te maken voor de workshop. **Geschatte tijd: 10 minuten**

<div class="tip-box">
💡 <strong>Hulp Nodig?</strong> Als je vastloopt, bekijk dan de <a href="/resources/troubleshooting">Probleemoplossing Gids</a>
</div>

## Waarom Deze Setup?

Voordat we beginnen, is het belangrijk te begrijpen waarom we deze tools gebruiken:

- **Git**: Houdt wijzigingen bij (zoals een "ongedaan maken" geschiedenis) en maakt samenwerking mogelijk
- **pnpm**: Beheert pakketten efficiënt voor snellere installaties dan npm
- **VitePress**: Compileert Markdown naar een snelle, moderne website
- **GitHub**: Host je repository voor samenwerking (DevOps Cultuur principe)

---

## ✅ Vereisten Checklist

Controleer of je de volgende tools geïnstalleerd hebt:

### 1. GitHub Account
- **Vereist**: Gratis GitHub account
- **Aanbevolen**: 2FA (twee-factor authenticatie) ingeschakeld
- **Waarom?**: Host je repository voor samenwerking en versiecontrole (DevOps Cultuur)

**Aanmelden**: [github.com/signup](https://github.com/signup)

---

### 2. Node.js (v18 of hoger)

Node.js draait JavaScript code op je computer (de taal van onze site).

**Controleer of je het hebt**:
```bash
node -v
```
Je zou versie ≥18.0.0 moeten zien.

**Installeren**:
- Download van [nodejs.org](https://nodejs.org)
- Kies de LTS (Long Term Support) versie
- Volg de installatie instructies voor jouw operating systeem

---

### 3. pnpm Package Manager

pnpm is een snellere, efficiëntere dependency manager dan npm. Het gebruikt een lockfile voor consistente builds (Lean principe).

**Installeren**:
```bash
npm install -g pnpm
```

**Controleren**:
```bash
pnpm -v
```
Je zou versie ≥8.0.0 moeten zien.

**Waarom pnpm?**: Sneller en gebruikt minder schijfruimte door gedeelde dependencies.

---

### 4. Git Version Control

Git versiebeheert je code en voorkomt "het werkt alleen op mijn machine" problemen.

**Controleren**:
```bash
git --version
```

**Installeren**:
- Windows: [git-scm.com](https://git-scm.com)
- Mac: komt meestal pre-geïnstalleerd, of gebruik `brew install git`
- Linux: `sudo apt install git` (Ubuntu/Debian) of `sudo yum install git` (RedHat/CentOS)

**Git Configureren** (belangrijk!):
```bash
git config --global user.name "Jouw Naam"
git config --global user.email "jouw@email.com"
```

**Waarom?**: Deze info wordt gebruikt in je commits om bij te houden wie wat heeft gewijzigd.

---

### 5. Code Editor - VS Code (Aanbevolen)

**Installeren**: [code.visualstudio.com](https://code.visualstudio.com)

**Aanbevolen Extensies**:
- **GitHub Pull Requests and Issues**: Beheer PRs vanuit VS Code
- **GitHub Actions**: Monitor en debug workflows
- **Markdown All in One**: Betere Markdown editing ervaring

**Waarom VS Code?**: Integreert naadloos met GitHub Actions voor automatisering.

**Installeren van extensies**:
1. Open VS Code
2. Klik op Extensions icoon (linker sidebar)
3. Zoek naar de extensie naam
4. Klik op "Install"

---

### 6. Moderne Browser

**Vereist**: Chrome of Firefox voor het bekijken van je site

**Waarom?**: Om je gedeployde site te previewer en te testen.

---

## 🚀 Repository Setup

Nu je tools gereed zijn, gaan we de workshop repository opzetten.

### Stap 1: Fork de Repository

**Wat is forken?**: Creëert jouw persoonlijke kopie van de repository voor veilige bewerkingen.

1. Ga naar de [workshop repository](https://github.com/undead2146/devops-workshop-vitepress)
2. Klik op de **"Fork"** knop (rechts bovenaan)
3. Behoud de standaard naam: `devops-workshop-vitepress`
4. Klik op **"Create fork"**

**Waarom forken?**: Je krijgt je eigen kopie waar je veilig mee kunt experimenteren. Dit is het beginpunt van de Code fase!

---

### Stap 2: Clone Lokaal

**Wat is clonen?**: Haalt de broncode op naar je lokale computer.

```bash
git clone https://github.com/{{jouw-gebruikersnaam}}/devops-workshop-vitepress.git
```

Vervang `{{jouw-gebruikersnaam}}` met je GitHub gebruikersnaam.

**Verwachte output**: `Cloning into 'devops-workshop-vitepress'... (~5MB)`

**Ga naar de directory**:
```bash
cd devops-workshop-vitepress
```

---

### Stap 3: Installeer Dependencies

**Wat gebeurt hier?**: pnpm installeert alle benodigde tools en bibliotheken.

```bash
pnpm install
```

**Verwachte resultaten**:
- Installeert VitePress, Jest, Mermaid en andere dependencies
- Creëert `node_modules/` directory
- Creëert `pnpm-lock.yaml` bestand

**Waarom installeren?**: Bereidt tools voor de build fase voor. VitePress compileert Markdown naar HTML.

**⏱️ Dit kan 1-2 minuten duren** - dat is normaal!

---

### Stap 4: Start Development Server

**Wat is dit?**: Een lokale preview server om je wijzigingen direct te zien.

```bash
pnpm dev
```

**Verwachte output**:
```
VitePress dev server running on http://localhost:5173
```

**Open in je browser**: [http://localhost:5173](http://localhost:5173)

Je zou de workshop homepage moeten zien! 🎉

**Test hot reload**:
1. Laat de dev server draaien
2. Open `docs/index.md` in je editor
3. Voeg een regel tekst toe en sla op
4. De browser zou automatisch moeten herladen met je wijziging

**Waarom dev mode?**: Preview je site lokaal voordat je deploy (zoals testen voor deployment).

---

### Stap 5: GitHub Pages Activeren

**Wat is GitHub Pages?**: Gratis hosting voor je website, direct vanuit je repository.

1. Ga naar je fork op GitHub
2. Klik op **Settings** (bovenaan)
3. Klik op **Pages** (linker sidebar)
4. Onder "Source", selecteer **"Deploy from a branch"**
5. Kies branch: **`gh-pages`** (wordt later door Actions aangemaakt)
6. Klik op **Save**

**Waarom nu instellen?**: Maakt automatische deployment later in de workshop mogelijk.

<div class="warning-box">
⚠️ <strong>Opmerking:</strong> De `gh-pages` branch bestaat nog niet - die wordt automatisch aangemaakt wanneer je eerste deployment draait in Fase 5.
</div>

---

## ✅ Verificatie

Laten we controleren of alles werkt!

### Test 1: Dev Server Draait
- ✅ Site laadt op `http://localhost:5173`
- ✅ Je ziet de workshop homepage

### Test 2: Hot Reload Werkt
- ✅ Bewerk `docs/index.md` (voeg een regel tekst toe)
- ✅ Sla op
- ✅ Browser reloads automatisch en toont je wijziging

### Test 3: Build Werkt
```bash
pnpm build
```

**Verwachte resultaat**:
- ✅ Genereert `.vitepress/dist/` directory
- ✅ Bevat HTML, CSS, en JavaScript bestanden
- ✅ Geen errors in de console

**Waarom builden?**: Creëert production-ready artifacts (geoptimaliseerde, veilige bestanden voor deployment).

---

## 🎯 Je Bent Klaar!

**Gefeliciteerd!** Je ontwikkelomgeving is klaar. Je hebt zojuist:
- ✅ Alle benodigde tools geïnstalleerd
- ✅ De repository geforkt en gekloond (Code fase!)
- ✅ Dependencies geïnstalleerd (Build voorbereiding)
- ✅ De dev server werkend gekregen
- ✅ GitHub Pages geconfigureerd

### Volgende Stappen

1. **Bekijk de Agenda**: [Workshop Agenda](/agenda) voor het tijdschema
2. **Bekijk het Schema**: [Gedetailleerd Schema](/schedule) voor timing en presentator scripts
3. **Start Fase 1**: [Code Fase](/phases/01-code) - Begin je DevOps reis!

<div class="success-box">
🚀 <strong>Setup Voltooid!</strong> Fork en clone maakten de Code fase mogelijk; install bereidde voor op de Build fase. Je bent nu klaar om te leren door te doen!
</div>

---

## 🆘 Veelvoorkomende Problemen

### "pnpm: command not found"
**Oplossing**: Herinstalleer pnpm globaal:
```bash
npm install -g pnpm
```

### "Port already in use" of "EADDRINUSE"
**Oplossing**: Gebruik een andere poort:
```bash
pnpm dev --port 3000
```

### "Permission denied" bij npm/pnpm install
**Oplossing** (Mac/Linux):
```bash
sudo npm install -g pnpm
```

**Bij Virtuele Workshop**:
- Deel je scherm als je hulp nodig hebt met commando's
- Vraag in de chat om hulp
- Gebruik breakout rooms voor persoonlijke assistentie

### Build Errors
- Controleer Node.js versie (moet ≥18 zijn)
- Verwijder `node_modules/` en run `pnpm install` opnieuw
- Bekijk de [Probleemoplossing Gids](/resources/troubleshooting)

---

**💡 Tip**: Bewaar deze pagina als referentie tijdens de workshop. Je kunt er altijd naar terugkeren!
