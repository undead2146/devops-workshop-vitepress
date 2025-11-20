# Hands-On: Code & Build (20 Min)

Implementeer Code (bewerkingen/PR) en Build (YAML/artifact). Verifieer bij elke stap.

**Reflectie**: Code creëert broncode; Build transformeert het naar een **artifact** (de gecompileerde, deploybare website)—waarom? Om het voor te bereiden op testen, release en deployment.

## Stap 1: Code Fase (5–7 min)

Oefen samenwerking—bewerk de site!

1. **Branch**: `git checkout -b feat-code`
   - Waarom branchen? Veilige wijzigingen zonder main te beïnvloeden.

2. **Bewerk** bijv. `/progress.md`: Voeg een rij toe aan je tracker
   ```markdown
   - [x] Code fase voltooid
   - [x] PR aangemaakt op [datum]
   ```
   - Waarom bewerken? Simuleert echte code wijzigingen.

3. **Lint** (optioneel): `pnpm lint`
   - Waarom linten? Vangt fouten vroeg (Meting principe).

4. **Commit/Push**:
   ```bash
   git add .
   git commit -m "feat: update voortgangstracker"
   git push origin feat-code
   ```
   - Waarom committen? Versioneert je code.

5. **PR**: GitHub → Create PR naar main → Merge (squash voor schone geschiedenis)
   - Waarom PR? Reviews zorgen voor kwaliteit (Cultuur principe).

**Verwacht**: PR toont diff; merge slaagt.

**Verifieer**: Refresh je lokale site—bewerkingen zichtbaar?

**Reflectie**: Code fase klaar—je bewerkingen zijn geversioneerd; volgende stap: Build creëert een artifact.

**Simulatie**: Voeg ongeldige Markdown toe → PR lint faalt → Fix. Waarom? Leert fout detectie voor build.

## Stap 2: Build Fase (10–13 min)

Automatiseer artifact creatie.

1. **Nieuwe branch**: `git checkout -b feat-build`
   - Waarom nieuw? Bouwt voort op Code zonder te mengen.

2. **Creëer** `.github/workflows/ci.yml`:

   ```yaml
   name: CI/CD Pipeline
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
         - run: pnpm install --frozen-lockfile
         - run: pnpm build
         - uses: actions/upload-artifact@v4
           with:
             name: workshop-site
             path: .vitepress/dist/
   ```

   - Waarom YAML? Definieert pipeline (Automatisering)
   - Waarom artifact uploaden? Deelt gecompileerde bestanden voor review (Delen principe)

3. **Test lokaal**:
   ```bash
   pnpm build
   ls -la .vitepress/dist/
   ```
   - Waarom lokaal? Vangt problemen voor CI.

4. **Commit/Push/PR/Merge**:
   ```bash
   git add .
   git commit -m "feat: voeg build workflow toe"
   git push origin feat-build
   ```

**Verwacht**: Actions tab → Groene build; "Upload workshop-site" stap.

**Verifieer**: Download artifact → Unzip → Open index.html (site werkt offline).

**Reflectie**: Gebouwd artifact van code—waarom uploaden? Maakt testen mogelijk zonder elke keer lokaal te bouwen; volgende stap: test valideert het.

**Troubleshoot**: Build faalt? Check logs voor dependency fouten; draai lokaal `pnpm build`.

**Volgende**: [Test & Release](/hands-on/test-release)

**Reflectie**: Code→Build: Bron naar artifact—nu zorgen dat het kwaliteit-getest is.
