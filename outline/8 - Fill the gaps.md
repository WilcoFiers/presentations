# Fill the gaps
Beyond standard tools

## 20 - 30%
- Tools are limited
- You know your site better

## Functional a11y tests
Things you should test
- Are roles in the right elements
- Does focus move to the right place
- Correct state changes
- Are relations maintained

---
Because bugs in ARIA are:
- Easily made
- Hard to fix
- But even harder to find

### Focus moves
```javascript
ìt('opens a dialog', function () {
  myButton.activate();
  expect(myDialog.state).toBe('open');
  expect(myDialog.elm.getAttribute('role'))
    .toBe('dialog');
  // Check that the correct element received focus
  expect(document.activeElement)
    .toBe(myDialog.elm);
});
```

## State is updated
```javascript
it('selects the tab', function () {
  myTab.activate();
  expect(myTabPanel.getActive().name)
    .toBe('myTabPanel');
  // Test the aria-state has changed
  expect(myTab.elm.getAttribute('aria-selected'))
    .toBe('true');
});
```

## Test relationships
```javascript
it('contains tabs', function () {
  var tabs = myTabPanel.getTabs();
  expect(myTabPanel.length).toBe(3);
  // test the roles of tab and tabpanel
  expect(myTabPanel.elm.getAttribute('role'))
    .toBe('tabpanel');
  expect(tabs[0].elm.getAttribute('role'))
    .toBe('tab');
  // test the parent / child relationship
  expect(myTabPanel.elm.children[0])
    .toBe(tabs[0].elm);
});
```
