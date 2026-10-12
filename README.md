# Land & Trust Development P.S.A. – strona internetowa

Statyczna strona (HTML + CSS + JS, bez budowania i zależności).

## Struktura
```
index.html            – strona
assets/style.css      – style (paleta i typografia z księgi znaku)
assets/main.js        – animacje przewijania, galeria pozioma, formularz
assets/img/           – wizualizacje, logo (SVG), favicon
.nojekyll             – wyłącza Jekyll na GitHub Pages
```

## Publikacja na GitHub Pages
1. Utwórz repozytorium i wgraj zawartość tego folderu do gałęzi `main`.
2. Settings → Pages → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)`.
3. Strona będzie dostępna pod `https://<użytkownik>.github.io/<repozytorium>/`.
4. Własna domena: dodaj plik `CNAME` z nazwą domeny i ustaw rekordy DNS.

## Do uzupełnienia
- Formularz kontaktowy działa demonstracyjnie (`assets/main.js`). Podłącz go np. do Formspree / Netlify Forms / własnego backendu.
- Dane kontaktowe, nazwa i status inwestycji pod Poznaniem, sylwetki wspólników.
- Fonty: zastępniki Google Fonts (Instrument Serif, Hanken Grotesk). Licencjonowane PP Editorial New / Switzer można podpiąć przez `@font-face` w `assets/style.css`.
