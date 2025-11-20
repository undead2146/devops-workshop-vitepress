# Hands-On: Deploy & Volledige Pipeline (20 Min)

Finaliseer CD; draai end-to-end. Bouwt voort op eerdere fasen.

**Reflectie**: Van Code/Build/Test/Release hebben we gevalideerde/versioneerde artifacts—nu publiceert deploy ze live.

## Stap 1: Deploy Fase (10 min)

Auto-publiceer naar Pages.

1. **Branch**: `git checkout -b feat-deploy`
   - Waarom? Finaliseert pipeline.

2. **Update YAML** (voeg deploy job toe na test):

   ```yaml
   deploy:
     if: github.ref == 'refs/heads/main' && github.event_name == 'push'
     needs: [build, test]
     runs-on: ubuntu-latest
     permissions:
       contents: write
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
       - uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: .vitepress/dist
   ```

   - Waarom na test? Zorgt ervoor dat alleen gevalideerde artifacts deployen (Lean).

3. **Commit/Push/PR/Merge naar main**
   - Waarom main? Triggert deploy op stabiele code.

**Verwacht**: Actions → Deploy groen; gh-pages branch aangemaakt.

**Verifieer**: Bezoek `https://{{username}}.github.io/devops-workshop-vitepress/` — volledige site live!

**Reflectie**: Deployed artifact live—waarom rollback? Als problemen, revert naar eerdere tag's ZIP (veiligheid).

## Stap 2: Volledige Pipeline Run (10 min)

Test alles.

1. **Bewerk** bijv. `/resources/extensions.md` (voeg notitie toe)
   - Waarom? Simuleert doorlopende wijzigingen.

2. **Branch/PR/Merge naar main**
   - Waarom mergen? Activeert volledige CI/CD.

3. **Tag v1.1.0**:
   ```bash
   git tag v1.1.0
   git push origin v1.1.0
   ```
   - Waarom nu taggen? Creëert nieuwe versioned release.

**Verwacht**: CI/CD volledig: Build/test → Deploy (live update) + Release (nieuwe ZIP).

**Verifieer**: Site ververst; Releases heeft v1.1.0.

**Reflectie**: End-to-end: Code wijziging → artifact build/test → versioned release → live deploy. Waarom volledig? Toont automatisering flow.

**Simulatie**: Breek deploy (bijv. ongeldige dir) → Fix/merge. Waarom? Leert rollback (revert naar laatste goede artifact).

## Workshop Voltooid! 🎉

**Volgende stappen**:
- Bewerk [Feedback](/resources/feedback)
- Verken [Uitbreidingen](/resources/extensions)
- Deel je live site URL!

**Reflectie**: Je hebt een volledige DevOps pipeline gebouwd—van code tot live site met artifacts/tags voor controle.

### Wat Je Hebt Bereikt

✅ **Volledige CI/CD Pipeline**:
- Code → Build → Test → Release → Deploy
- Automatisch bij elke wijziging
- Quality gates op elk punt

✅ **Live Website**:
- Automatisch gedeployed
- Altijd up-to-date
- Professioneel gehost

✅ **DevOps Vaardigheden**:
- Git workflows
- GitHub Actions
- Geautomatiseerde testing
- Continuous deployment

**Gefeliciteerd! Je bent nu een DevOps practitioner! 🚀**
