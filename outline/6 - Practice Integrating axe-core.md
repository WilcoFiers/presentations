# Implementing a Rule Engine

## Angular Material
UI Framework developed by Google
Based on the popular Angular framework
https://material.angularjs.org/latest/


## Installing the project
Requires: GIT, NodeJS, then run:
```
    git clone https://github.com/↵
        wilcofiers/material.git
    cd material
    npm install
    npm test
```

## Your first test
Go to the folder `material/test/accessibility`
Open the file `button.a11y.js`

---
Define a group of tests

```javascript
    describe('md-button accessibility',
        function () {
      //...
    });
```

---
Identify the module to Angular

```javascript
    beforeEach(module(
        'material.components.button'));
```

---
Set up a DOM element to test on

```javascript
    var fixture, compileToFixture;
    beforeEach(inject(function
        ($compile, $rootScope) {
      // from __helper-functions.js
      fixture = getFixture();
      compileToFixture = createFixtureAppend(
          $compile, $rootScope);
    }));
```

---
Define a test

```javascript
    it('has 0 violations in axe',
        function (done) {
    	// ... test code ...
    });
```

---
Create a component and test using axe

```javascript
    compileToFixture(
        '<md-button>Button Name</md-button>');
    axe.a11yCheck(fixture, function (results) {
      expect(results.violations.length).toBe(0);
      done();
    });
```

## Running this test
`material/test/accessibility`
Run the test command:

```
    npm run a11y-test
```
Try removing 'Button Name'. You will see an error


## Try it yourself
Check out
- `readme.md`: More detailed instructions
- `checkbox.a11y.js`: A slightly more advanced example
- [material.angularjs.org/](http://material.angularjs.org/): Angular Material documentation

---
**Suggested tests to try**
- test md-button when disabled (easy)
- complexity: low.
  input, radioButton, select, slider, switch
- complexity: average.
  chips, menu, tabs,
- complexity: high.
  menubar, autocomplete, dialog

