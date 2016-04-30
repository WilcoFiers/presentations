# Implementing a Rule Engine

## Angular Material
UI Framework developed by Google
Based on the popular Angular framework
Consists of many components
Angular, not known for it's accessibility
https://material.angularjs.org/latest/


## Installing the project
Requires: GIT, NodeJS
Open the command line, then write the following commands:
```
git clone https://github.com/wilcofiers/materials.git
cd materials
npm install
npm test
```


## Your first test
Go to the folder `materials/test/accessibility`
Open the file `button.a11y.js`

---
Line by line: Tell the test framework (Karma)
that we are writing group of tests we call 'md-button accessibility'
```javascript
describe('md-button accessibility', function () {
```

---
Tell angular to load the button module, from the material components
```javascript:
beforeEach(module('material.components.button'));
```

---
Create an element we can put the angular component in,
and create a function that can compile the component and add it to the page
```javascript
var fixture, compileToFixture;
beforeEach(inject(function ($compile, $rootScope) {
  // from __helper-functions.js
  fixture = getFixture();
  compileToFixture = createFixtureAppend($compile, $rootScope);
});
```

---
Define a new test and document what we are testing
```javascript
it('has 0 violations in axe', function (done) {
	// ... test code ...
});
```

---
Add the md-button component to the fixture
and test it using axe
```javscript
compileToFixture('<md-button>Button Name</md-button>');
axe.a11yCheck(fixture, function (results) {
  expect(results.violations.length).toBe(0);
  done();
});
```

## Running this test
You'll find accessibility tests under `materials/test/accessibility`
To run the tests, type the following in the command line
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
Suggested tests to try
- test md-button when disabled (easy)
- complexity: low.
  input, radioButton, select, slider, switch
- complexity: average.
  chips, menu, tabs,
- complexity: high.
  menubar, autocomplete, dialog

