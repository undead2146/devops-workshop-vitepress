# Hands-On: Test & Release (20 Min)

Voeg tests toe (quality gates) en release (versie snapshot). Bouwt voort op eerdere fasen.

**Reflectie**: Van Code/Build hebben we een artifact—nu valideert test het; release versioneert voor milestones.

## Stap 1: Test Fase (10 min)

Valideer content met Jest.

1. **Branch**: `git checkout -b feat-test`
   - Waarom? Isoleert testing van eerdere wijzigingen.

2. **Creëer/update** `tests/site.test.js`:

   ```javascript
   const fs = require('fs');
   const path = require('path');

   describe('Workshop Site', () => {
     const docsDir = path.join(__dirname, '../docs');

     // DevOps Quality Gate: Check voor dode links in config.js
     test('Config.js links wijzen naar bestaande bestanden (geen dode links)', () => {
       const configPath = path.join(docsDir, '.vitepress/config.js');
       expect(fs.existsSync(configPath)).toBe(true);
       
       const configContent = fs.readFileSync(configPath, 'utf8');
       
       // Simpele regex om unieke link paden te extraheren
       const linkRegex = /link:\s*'([^']+)'/g;
       let match;
       const uniqueLinks = new Set();
       
       while ((match = linkRegex.exec(configContent)) !== null) {
         const link = match[1];
         if (link.startsWith('/') && !link.includes('http') && !uniqueLinks.has(link)) {
           uniqueLinks.add(link);
         }
       }
       
       // Voor elke link, check of corresponderende .md bestand bestaat
       uniqueLinks.forEach(link => {
         const filePath = path.join(docsDir, link.replace(/^\//, '') + '.md');
         // DevOps Focus: Fail fast als link kapot—voorkomt deploy van ongeldige navigatie
         expect(fs.existsSync(filePath)).toBe(true, `Dode link in config.js: ${link}`);
       });
     });
   });
   ```

   - Waarom tests? Zorgt ervoor dat artifact (gebouwde bestanden) overeenkomt met bron.

3. **Voeg toe** `jest.config.js`:

   ```javascript
   module.exports = {
     testEnvironment: 'node',
     collectCoverageFrom: ['docs/**/*.md'],
     coverageThreshold: { 
       global: { 
         branches: 80, 
         functions: 80, 
         lines: 80 
       } 
     }
   };
   ```

   - Waarom config? Stelt regels in (bijv. 80% coverage) voor kwaliteit (Meting).

4. **Lokaal**: `pnpm test`
   - Verwacht: Tests slagen, coverage rapport
   - Waarom lokaal? Snelle feedback voor CI.

5. **Commit/Push/PR/Merge**:
   ```bash
   git add .
   git commit -m "feat: voeg content tests toe"
   git push origin feat-test
   ```

**Verwacht**: Actions → Test job groen (draait na build).

**Verifieer**: Coverage >80%; fail door een pagina te verkorten → Fix.

**Reflectie**: Getest artifact—zorgt ervoor dat het betrouwbaar is; volgende stap: release versioneert het (bijv. ZIP voor delen).

**Simulatie**: Bewerk theory.md slecht → Test faalt in PR → Corrigeer. Waarom? Bootst echte bugs in artifact na.

## Stap 2: Release Fase (10 min)

Creëer getagde snapshot.

1. **Branch**: `git checkout -b feat-release` (van main)
   - Waarom van main? Bouwt voort op gemergede code.

2. **Update YAML** (voeg release job toe na test):

   ```yaml
   release:
     if: startsWith(github.ref, 'refs/tags/v')
     needs: [build, test]
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
       - name: Create release archive
         run: |
           zip -r workshop-site-${{ github.ref_name }}.zip .vitepress/dist/
       - name: Create GitHub Release
         uses: softprops/action-gh-release@v1
         with:
           files: workshop-site-${{ github.ref_name }}.zip
           generate_release_notes: true
         env:
           GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```

   - Waarom conditioneel? Triggert alleen bij tags (milestones), niet elke push.

3. **Commit/Push/PR/Merge**

4. **Tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
   - Waarom taggen? Markeert milestone—creëert versioned ZIP van artifact.

**Verwacht**: Releases tab → v1.0.0 met ZIP (download/unzip → site werkt).

**Verifieer**: Notes tonen commits; geen deploy conflict (release = snapshot).

**Reflectie**: Released versioned artifact—waarom tag vs. build? Builds zijn frequent; tags voor stabiele shares; volgende stap: deploy publiceert laatste versie.

**Volgende**: [Deploy](/hands-on/deploy)

**Reflectie**: Test/Release: Gevalideerd/versioneerd artifact—nu live publiceren.
