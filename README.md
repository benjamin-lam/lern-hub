# 🚀 Lern-Explorer: Gemeinsam Wissen bauen

**Willkommen beim Lern-Explorer!** Dieses Projekt ist als "Anti-Instagram" entstanden: Ein Ort, der nicht zum endlosen Scrollen verleitet, sondern Kinder (und Eltern) inspiriert, etwas zu lernen und direkt auszuprobieren.

Ob Lego-Bauernregeln für 8-Jährige oder der Satz des Pythagoras für die 9. Klasse – hier landen Wissen-Häppchen, die Spaß machen.

---

## 👨‍👩‍👧‍👦 Für Eltern & Mentoren

Du möchtest bei den Hausaufgaben helfen oder ein Hobby erklären? Du kannst dieses Projekt auf zwei Arten unterstützen:

### 1. Neue Lernkarten hinzufügen (Open Source Workflow)

Du musst kein Entwickler sein! Alles Wissen liegt in einfachen `.json` Dateien. So funktioniert's:

**Schritt 1: Repository forken**
- Klicke oben rechts auf den **"Fork"** Button
- Du erhältst jetzt eine eigene Kopie in deinem GitHub-Account

**Schritt 2: Änderungen vornehmen**
- Gehe in deinem Fork zum Ordner `/` (Hauptverzeichnis)
- Öffne die Datei `content.json`
- Klicke auf das Stift-Symbol (✏️) zum Bearbeiten
- Füge deine neue Lernkarte nach dem gleichen Muster hinzu:

```json
{
  "id": "dein-thema",
  "titel": "Dein Titel",
  "level": "grundschule",
  "kategorie": "Mathe",
  "icon": "📐",
  "steps": [
    { "t": "Schritt 1", "d": "Beschreibung des ersten Schritts" },
    { "t": "Schritt 2", "d": "Beschreibung des zweiten Schritts" }
  ]
}
```

**Schritt 3: Pull Request erstellen**
- Scrolle nach unten und klicke auf **"Commit changes"**
- Gehe zurück zur Hauptseite deines Forks
- GitHub zeigt dir einen Button **"Contribute"** → **"Open pull request"**
- Beschreibe kurz, was du hinzugefügt hast
- Klicke auf **"Create pull request"**

**Das war's!** Ich schaue mir deine Änderungen an und füge sie dem Projekt hinzu.

### 2. Dein eigener Lern-Hub (Fork für eigene Zwecke)

Du willst einen ganz eigenen Hub für deine Familie oder Schule?

* Klicke oben rechts auf **"Fork"** → Jetzt hast du eine Kopie in deinem GitHub-Account
* Gehe in deinem Fork zu **Settings** → **Pages**
* Aktiviere GitHub Pages mit **Source: main branch**
* Nach wenigen Minuten ist deine eigene Version unter `https://dein-username.github.io/lern-hub/` erreichbar
* Passe alles nach Belieben an – es ist DEIN Hub!

---

## 💻 Für junge Hacker (Ab ~12-14 Jahren)

Du lernst gerade Informatik oder willst deiner Klasse helfen? 

* **Erstelle Lernkarten** für deine Mitschüler (siehe oben: Pull Request Workflow)
* **Passe das Design** in der `index.html` an (CSS im `<style>` Bereich)
* **Experimentiere mit der Logik** im JavaScript-Teil (siehe `BEHIND_THE_SCENES.md` für Details)
* **Neue Features?** Öffne ein "Issue" mit deiner Idee!

**Wichtig:** Dies ist ein Open-Source-Projekt. Ideen einbringen ist ausdrücklich erwünscht!

---

## 📚 Weitere Dokumentation

- **[Behind the Scenes](https://github.com/benjamin-lam/lern-hub/blob/main/BEHIND-THE-SCENES.md)** – Wie der Code funktioniert und wie du damit arbeitest

---

## ⚠️ Disclaimer & Spirit

* **Code mit Vorsicht:** Wir nutzen hier KI-Unterstützung und moderne Web-Technik. Teste deine Änderungen immer kurz im Browser.
* **Keep it simple:** Eine Lernkarte soll in 2 Minuten verstanden sein. Danach: **Gerät aus, Machen an!**
