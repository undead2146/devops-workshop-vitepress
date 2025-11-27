// tests/site.test.cjs
const fs = require('fs');
const path = require('path');

describe('Workshop Site Content Validatie', () => {
  const docsDir = path.join(__dirname, '../docs');

  // Test 1: Verifieer dat alle fase documentatie pagina's bestaan
  test('Alle fase documentatie pagina\'s bestaan', () => {
    const phaseFiles = [
      'phases/01-code.md',
      'phases/02-build.md',
      'phases/03-test.md',
      'phases/04-release.md',
      'phases/05-deploy.md'
    ];

    phaseFiles.forEach(file => {
      const fullPath = path.join(docsDir, file);
      expect(fs.existsSync(fullPath)).toBe(true);
      const content = fs.readFileSync(fullPath, 'utf8');
      expect(content.length).toBeGreaterThan(500);  // Zorg voor substantiële content
    });
  });

  // Test 2: Verifieer dat progress pagina vereiste structuur heeft
  test('Progress pagina heeft vereiste structuur', () => {
    const progressPath = path.join(docsDir, 'progress.md');
    expect(fs.existsSync(progressPath)).toBe(true);
    
    const content = fs.readFileSync(progressPath, 'utf8');
    expect(content).toContain('Voortgangstracker');
    expect(content).toContain('Fase');
    expect(content).toContain('Checklist');
  });

  // Test 3: Verifieer dat setup pagina prerequisites sectie heeft
  test('Setup pagina heeft prerequisites sectie', () => {
    const setupPath = path.join(docsDir, 'setup.md');
    expect(fs.existsSync(setupPath)).toBe(true);
    
    const content = fs.readFileSync(setupPath, 'utf8');
    expect(content).toContain('Vereisten');
    expect(content).toContain('Node.js');
    expect(content).toContain('pnpm');
    expect(content).toContain('Git');
  });

  // Test 4: Verifieer dat index pagina workshop overzicht heeft
  test('Index pagina heeft workshop overzicht', () => {
    const indexPath = path.join(docsDir, 'index.md');
    expect(fs.existsSync(indexPath)).toBe(true);
    
    const content = fs.readFileSync(indexPath, 'utf8');
    expect(content).toContain('DevOps Workshop');
    expect(content).toContain('CALMS');
  });

  // Test 5: Verifieer dat alle theorie pagina's key secties hebben
  test('Theorie pagina\'s hebben key secties', () => {
    const theoryFiles = [
      'theory/code.md',
      'theory/build.md',
      'theory/test.md',
      'theory/release.md',
      'theory/deploy.md',
      'theory/cicd.md'
    ];

    theoryFiles.forEach(file => {
      const fullPath = path.join(docsDir, file);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        expect(content.length).toBeGreaterThan(100);
      }
    });
  });

  // Test 6: Verifieer dat resource pagina's bestaan
  test('Resource pagina\'s bestaan', () => {
    const resourceFiles = [
      'resources/extensions.md',
      'resources/feedback.md'
    ];

    resourceFiles.forEach(file => {
      const fullPath = path.join(docsDir, file);
      expect(fs.existsSync(fullPath)).toBe(true);
    });
  });
});