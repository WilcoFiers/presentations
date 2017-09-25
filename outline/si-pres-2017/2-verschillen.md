# De grote verschillen

Tools geven zelden hetzelfde antwoord

## DigiToegankelijk.nl

![A11y tools compared](img/a11y-tools.png)

### SiteImprove

![A11y tools compared](img/a11y-tools-1.png)

### HTML CodeSniffer

![A11y tools compared](img/a11y-tools-2.png)

### User Test Tool

![UTT 1 heading fout](img/a11y-tools-3.png)

### aXe Devtools

![aXe Devtools, geen fouten](img/a11y-tools-4.png)

## Waarom de verschillen {{ "fragmented": true }}

- False positives
- Bewuste afwijkingen
- Verschil in interpretatie

### False positives

Een onvoorziene situatie die leidt tot fout keuren van iets dat niet fout is.

Voorbeeld: Een `<img />` zonder alt die verborgen is.

### Bewuste afwijkingen

Een bekende uitzondering die niet in de tool is ingebouwd, vaak omdat dit niet te automatiserne is.

Voorbeeld: Alternatieve kleuren op een website.

### Verschil in interpretatie

Wanneer experts het niet met elkaar eens zijn.

Voorbeeld: Een pagina zonder `<h1>`

## Consquenties

Verschillen worden ineens pijnlijk zichtbaar

---- {{ "fragmented": true }}

De vijf fases van WCAG vergelijken:

- **Ontkenning**: Ligt het aan mij? Doe ik het goed?
- **Verwarring**: Is dit echt ontoegankelijk?
- **Boosheid**: Jullie weten niet wat je doet!
- **Depressie**: Ik kan het nooit goed doen.
- **Acceptatie**: ... Hopelijk?
