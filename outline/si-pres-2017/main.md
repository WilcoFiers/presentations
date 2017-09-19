Hoe tools en standaarden 
digitoegankelijkheid veranderen

----
# Tools

Er is een explosie geweest van tools in digitoegankelijkheid

## Cambrian WCAG Explosie

Todo

## De grote integratie race

Tool ontwikkelaars zijn druk in competitie met elkaar om hun test tool op zo veel mogelijk plaatsen in gebruik te krijgen.

- Test frameworks (Jasmin, Jest, Nightwatch, etc.)
- Command line tools
- Browser plugins
- Bookmarklets
- Stand-alone accessibility platforms
- WYSIWIG editors
- Acceptatietests


----
# De grote verschillen

Tools geven zelden hetzelfde antwoord

Dit heeft drie oorzaken

- Verschil in interpretatie
- Onnauwkeurige regels
- False positives

## False positives

Een onvoorziene situatie die leidt tot fout keuren van iets dat niet fout is.

Voorbeeld: Een `<img />` zonder alt die verborgen is.


## Onnauwkeurigheid in regels

Een bekende uitzondering die niet in de tool is ingebouwd, vaak omdat dit niet te automatiserne is.

Voorbeeld: Alternatieve kleuren op een website.

## Verschil in interpretatie

Voorbeeld: Een pagina zonder `<h1>`


----
# Consquenties

Verschillen worden ineens pijnlijk zichtbaar

De vijf fases van WCAG vergelijken:

----
- Ontkenning: 
- Verwarring, wat is fout en wat niet?
- Boosheid: Jullie weten niet wat je doet?
- Acceptatie: ... Hopelijk?

----
# Standaarden

- WCAG Techniques
- Accessibility Conformance Testing
- ACT Rules Format
- Auto-WCAG Rules
- ACT Test case repository