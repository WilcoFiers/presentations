# Axe-core

## Key features van axe
- Open Source
- Draait in de DOM
- Begrijpt CSS
- Werkt offline

## Axe Manifest {{ "fragmented": true }}

1. Geen false positives
2. Snel en eenvoudig in gebruik
3. Werkt in alle moderne browsers
4. Volledig automatisch getest

## Versatility of the axe

- Plugins voor Chrome & Firefox
- Embedded in your HTML code
- In many test runners

### Browser plugins
*Alright stop, demo time*

### Embedded in HTML

```html
    <script src="axe.min.js"></script>
    <script>
      window.onload = function () {
        axe.run({
          runOnly: { type: "tag", values: [
            "wcag2a", "wcag2aa", "best-practice"
          ]}
      }).then(result => console.log(result.violations));
      }
    </script>
```

### Integraties {{ "fragmented": true }}
*aXe draait in veel vormen*

- Jasmine
- Mocha
- Phantomjs
- QUnit
- Selenium

---- {{ "fragmented": true }}
- JUnit (Java)
- WebdriverJS
- Grunt
- Cucumber
- ... and I'll stop there