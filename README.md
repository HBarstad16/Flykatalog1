# NATO Flykatalog

Dette er en GitHub Pages-klar versjon av flykatalogen.

## Slik fungerer sidene

- `index.html` viser alle flykortene.
- Når du klikker på et kort, åpnes `fly.html?id=...`.
- `fly.html` leser ID-en fra URL-en og viser riktig fly.
- Alt innhold ligger i `data.js`.

## Endre tekst på en flyside

Åpne `data.js`, finn flyet, og endre feltet `innhold`.

Eksempel:

```js
innhold: "Skriv din egen tekst her."
```

## Legge inn bilde

Legg bildet i `assets`-mappen.

Eksempel:

```text
assets/f-35-lightning-ii.png
```

Da vil bildet vises automatisk hvis filnavnet matcher `bilde` i `data.js`.

## Direkte URL

Eksempel:

```text
fly.html?id=f-35-lightning-ii
fly.html?id=aw101-sar-queen
```
