# 🤝 Beitragen zum Lern-Hub

Danke, dass du mitmachen willst! Hier ist, wie es geht:

## 1. Vor dem Start

- [ ] Hast du die **README.md** gelesen?
- [ ] Gibt es schon ein **Issue** zu deiner Idee? (Falls nicht, erstelle eins!)
- [ ] Ist deine Idee im **Spirit des Projekts**? (Anti-Scroll, einfach, lehrreich)

## 2. Änderungen vornehmen

### Neue Lernkarte
- [ ] JSON-Datei erstellt: `/data/[thema]/[id].json`
- [ ] In `index.json` des Themas registriert
- [ ] `level` gesetzt (`grundschule` oder `sekundar`)
- [ ] Mindestens 2 Schritte in `steps`
- [ ] JSON-Syntax geprüft (https://jsonlint.com)

### Neues Thema/Fach
- [ ] Ordner erstellt: `/data/[thema]/`
- [ ] `index.json` im Ordner mit Liste der Karten
- [ ] In `themen.json` registriert
- [ ] Icon gewählt (Emoji)

### Code-Änderung
- [ ] Nur **eine Änderung** pro Pull Request
- [ ] Kommentare im Code (Erkläre das "Warum")
- [ ] Auf Mobile getestet (Browser-DevTools: F12 → Responsive Mode)
- [ ] Browser-Konsole geprüft (keine Fehler)

## 3. Pull Request erstellen

### Titel
```
[Kategorie] Kurzbeschreibung
```
Beispiele:
- `[Mathe] Neue Lernkarte: Bruchrechnung`
- `[Bugfix] JSON-Fehler in Physik/energie.json`
- `[Feature] Quiz-Funktion für Lernkarten`

### Beschreibung
```markdown
## Was macht dieser PR?
[Beschreibe in 1-2 Sätzen]

## Warum ist das wichtig?
[Welches Problem wird gelöst? Welchen Mehrwert gibt es?]

## Screenshots (falls UI-Änderung)
[Füge Bilder ein, wenn sich das Design ändert]

## Checkliste
- [ ] Auf GitHub Pages getestet
- [ ] JSON validiert
- [ ] Browser-Konsole fehlerfrei
```

## 4. Nach dem PR

- **Feedback kommt**: Sei offen für Verbesserungsvorschläge
- **CI-Check failed**: Prüfe die Fehlermeldung und fixe das Problem
- **Merge**: Glückwunsch! 🎉 Du bist jetzt Contributor!

## Fragen?

Schreib ins Issue oder tagge @benjamin-lam im PR.
