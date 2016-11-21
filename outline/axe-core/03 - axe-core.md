# Axe-core

## Key features of axe
- Open Source
- Runs on the DOM
- Understands your CSS

## Axe Manifesto {{ "fragmented": true }}

Automated accessibility testing must

1. Have zero false positives
2. Be lightweight and fast
3. Work in all modern browsers
4. Be tested automatically itself

## Versatility of the axe

- Plugins for browsers
- Embedded in your HTML code
- In many test runners

### Browser plugins
*Alright stop, demo time*

### Embedded in HTML

```html
    <script src="axe.min.js"></script>
    <script>
      window.onload = function () {
        axe.a11yCheck(document, {
          runOnly: { type: "tag", values: [
            "wcag2a", "wcag2aa", "best-practice"
          ]}
    	}, (result) => console.log(result));
      }
    </script>
```

### Task Runner {{ "fragmented": true }}
*Axe integrates with many test runners*

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