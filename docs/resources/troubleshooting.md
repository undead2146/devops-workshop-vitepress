# Probleemoplossing

Bewerk/PR fixes hier! Veelvoorkomende problemen met stappen.

## Veelvoorkomende Problemen

| Probleem | Oorzaak | Diagnostiek | Oplossing |
|----------|---------|-------------|-----------|
| pnpm install faalt | Netwerk/lockfile | `pnpm -v`; logs | `rm pnpm-lock.yaml && pnpm install`; VPN indien nodig |
| Build errors | Config/dep probleem | Actions logs; lokaal `pnpm build` | Fix `.vitepress/config.js`; `pnpm add vitepress` |
| Test faalt | Content mismatch | `pnpm test --verbose`; coverage | Zorg voor correcte content in theory.md |
| Geen deploy naar Pages | Branch/token | Settings > Pages; deploy logs | Merge naar main; GITHUB_TOKEN auto |
| Release geen ZIP | Tag/script | Releases tab | `git push --tags`; Debug release workflow |
| Trage Actions | Geen cache | Logs: "cache hit?" | Al in setup-node; voeg handmatig toe indien nodig |
| Site niet reloading dev | Poort/watch | `pnpm dev --force` | Herstart; Check `.gitignore` |
| PR geen CI trigger | Branch filter | YAML 'on' sectie | Zorg voor `branches: [main]` |
| Coverage laag | Geen thresholds | `jest --coverage` | Voeg toe aan `jest.config.js`; Test meer pagina's |
| Mermaid niet rendering | Plugin | Build logs | Zorg voor `vitepress-plugin-mermaid` in deps/config |

## Geavanceerd

### Pipeline Timeout
Verhoog job timeout in YAML:
```yaml
jobs:
  build:
    timeout-minutes: 30
```

### Private Repo
Voeg PAT secret toe voor deploy:
1. GitHub Settings > Developer settings > Personal access tokens
2. Genereer token met `repo` scope
3. Voeg toe als secret in repo settings
4. Gebruik in workflow: `${{ secrets.PAT }}`

### Nog Steeds Vastgelopen?
- Deel Actions log snippet in chat
- Maak PR naar repo met vraag
- Check [GitHub Community](https://github.community/)

## Debug Tips

### Lokaal Testen
Voordat je pusht naar GitHub:
```bash
# Test build
pnpm build

# Test tests
pnpm test

# Check voor syntax fouten
pnpm lint
```

### Actions Logs Lezen
1. Ga naar Actions tab
2. Klik op gefaalde run
3. Klik op gefaalde job
4. Expand gefaalde step
5. Zoek naar rode error messages

### Veelvoorkomende Error Patronen
- `ENOENT`: Bestand niet gevonden → Check pad
- `Module not found`: Dependency mist → `pnpm install`
- `Permission denied`: Rechten probleem → Check file permissions
- `YAML parse error`: Syntax fout → Check indentatie

## Bijdragen

Heb je een oplossing gevonden die hier niet staat? Voeg een rij toe via PR!

**Template**:
```markdown
| [Probleem] | [Oorzaak] | [Diagnostiek] | [Oplossing] |
```

Bedankt voor het verbeteren van deze workshop! 🙏
