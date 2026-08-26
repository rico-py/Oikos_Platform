# Progetto: Sito Gelateria (nome provvisorio "Gelateria Sole")

Brief di progetto per riprendere il lavoro da Claude Code. Contiene contesto, decisioni prese finora e cosa manca.

## Obiettivo

Sito vetrina per una gelateria locale, da vendere a un prezzo giusto a un gelataio, con focus su:
- Farsi trovare su Google quando qualcuno cerca "gelateria" nella zona (SEO locale)
- Essere subito consultabile da mobile (indirizzo, orari, gusti, contatti)
- Essere facile da mantenere nel tempo (anche dal gelataio, se serve)

Progetto realizzato in due persone via repo Git condivisa.

## Decisioni prese

### Formato del sito
**One-page scrollabile**, non sito multi-pagina. Sezioni in ordine:
1. Hero (nome, claim, badge aperto/chiuso in tempo reale)
2. Chi siamo (storia breve)
3. Gusti / menu (griglia gusti)
4. Galleria foto
5. Dove siamo (mappa + indirizzo) + Orari
6. Recensioni
7. CTA finale + footer/contatti

Nav sticky in alto con scroll alle sezioni, menu mobile a comparsa.

### Stack tecnico
**HTML + CSS + JS vanilla**, niente framework. Motivazioni:
- Zero JS pesante da renderizzare → migliore indicizzazione Google (SEO locale critico per una gelateria)
- Caricamento velocissimo su mobile
- Facile da mantenere/modificare anche senza competenze avanzate (niente build step, niente npm)
- Adatto alla scala del progetto (poche sezioni statiche, nessuno stato applicativo complesso)

**Scartato React/Next.js** per il sito finale: valutato in quanto uno dei due membri del team lo conosce da un progetto universitario, ma inadatto qui per via di SEO, peso, e overhead di manutenzione non giustificato per un sito di queste dimensioni. Potrebbe avere senso in futuro solo se il progetto scala a più clienti con un pannello admin condiviso (allora si valuterebbe React/Next.js + CMS).

### Direzione di design
Brief dato: **colorato e giocoso, ma con un tono serio/professionale**.

Palette proposta (toni gelato, non i soliti default AI cream/terracotta):
- `--cream:#FFF6E7` (sfondo)
- `--panna:#FFFDF8` (card)
- `--choco:#2B1A12` (testo scuro / sezioni dark)
- `--pistacchio:#6FA25A` (accento primario, CTA)
- `--lampone:#E14F63` (accento secondario)
- `--limone:#F0B429` (accento terziario)

Tipografia: **Fraunces** (serif display, curve morbide, da usare con moderazione per titoli/parole in corsivo) + **Plus Jakarta Sans** (corpo testo, utility, leggibile).

Elemento distintivo ("firma" del design): divisori a forma di goccia/onda tra le sezioni (richiamano il gelato che cola) + badge "Aperti ora / Chiuso ora" calcolato realmente in JS dagli orari, non decorativo.

Da evitare: layout minimal-portfolio stile "coming soon" (visto come riferimento iniziale ma scartato: adatto a personal branding, non a un'attività locale che deve mostrare menu/orari/indirizzo subito).

### Bozza già realizzata
Esiste già una prima bozza HTML statica (inline CSS/JS in un unico file) con tutte le sezioni sopra, contenuti interamente **segnaposto** (nome "Gelateria Sole", indirizzo, telefono, testi, gusti, recensioni tutti fittizi e chiaramente marcati da sostituire). Include già:
- Dati strutturati `schema.org/IceCreamShop` nel `<head>` (da compilare con dati reali)
- Badge orario aperto/chiuso funzionante via JS
- Tabella orari con evidenza del giorno corrente
- Reveal on scroll (rispetta `prefers-reduced-motion`)
- Responsive mobile con menu a comparsa

Questa bozza va **riorganizzata in file separati** (vedi struttura sotto) e poi i contenuti vanno sostituiti man mano che arrivano dal cliente.

## Struttura repo concordata

```
nome-repo/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
├── README.md
└── .gitignore
```

CSS e JS separati dall'HTML (non inline) per poter lavorare in due senza sovrapporsi sugli stessi file.

## Workflow di squadra

- Repo già creata dal collaboratore, io (secondo membro) verrò aggiunto come **Collaborator** su GitHub
- Un branch per modifica/feature (es. `feature/contenuti`, `feature/stile`), poi Pull Request verso `main`
- Deploy automatico consigliato via **Netlify** o **Vercel** collegato alla repo: ogni push su `main` pubblica il sito, ogni PR genera un link di anteprima
- Editor consigliato: VS Code con estensione **Live Server** per vedere le modifiche in tempo reale senza build step

## Cosa manca ancora (da chiedere al cliente/gelateria)

Nome, indirizzo, telefono e logo sono ormai reali (Oikos 2, Via Franco Lucchini 12 Palermo, +39 091 595646 — verificati incrociando Google/RestaurantGuru/JustEat). Restano da confermare direttamente con il gestore:

1. **Orari reali** per ogni giorno — online trovate 3 versioni diverse e in conflitto tra loro, non affidabile pubblicarne una a caso
2. **WhatsApp**: il numero trovato è un fisso, non funziona con WhatsApp — esiste un cellulare/numero WhatsApp Business dedicato?
3. **P.IVA** (non pubblica online)
4. **Quale pagina Facebook è quella attiva** — trovati 2 URL diversi per quella che sembra la stessa attività
5. **Link Glovo** esatto (confermato che ci sono, non trovato l'URL del profilo; JustEat già confermato)
6. **Il menu trovato online è ancora aggiornato?** (vaschette, coni, coppette, brioche, crêpes, waffle, mignon/zatterini a peso, granite, frappè) — prezzi e voci ancora validi?
7. **2-3 recensioni** da mostrare sul sito, con permesso esplicito (quelle trovate su Google sono reali ma troppo scarne da citare così come sono)
8. **Foto reali**: vetrina, locale, gusti, laboratorio, team
9. **Testo "chi siamo"**: storia, da quanti anni, cosa li rende diversi
10. **Logo**: esiste una versione vettoriale (SVG/AI/PDF) oltre al PNG? E una versione adatta a sfondi scuri (bianca/monocromatica), per usarla anche nel footer?
11. **Dominio**: ne hanno già uno in mente o registrato? (`gelateria-oikos-2.it` esiste ma è solo un redirect a JustEat, non un sito vero — lo controllano loro?)
12. **Nome esatto**: "Oikos 2" ovunque va bene, o preferiscono richiamare la grafica del logo ("Oikos²")?

## Cose ancora da decidere come team

- Chi si occupa di cosa tra i due membri (codice/stile vs. contenuti/rapporto col cliente)
- Cosa include esattamente il pacchetto venduto al gelataio (solo sito? + setup Google Business Profile? + manutenzione futura a pagamento?)
- Prezzo finale da proporre
- Se il progetto resta un lavoro singolo o diventa un servizio ripetibile per altre attività locali (bar, ristoranti, altre gelaterie)

## Prossimi passi tecnici

1. Impostare la struttura di cartelle sopra nella repo
2. Spezzare la bozza HTML esistente in `index.html` + `style.css` + `main.js`
3. Scrivere il `README.md` con checklist dei contenuti da sostituire
4. Collegare Netlify/Vercel per il deploy automatico
5. Sostituire i contenuti man mano che arrivano dal cliente
