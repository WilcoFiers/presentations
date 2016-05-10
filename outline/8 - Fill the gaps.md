# Fill the gaps
Beyond standard tools

## 20 - 30%
- Tools are limited
- You know your site better

## Functional a11y tests {{ "fragmented": true }}
Things you should test
- Are roles on the right elements
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
      // Check focus moved
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
      var selected = myTab.elm.attr('aria-selected')
      expect(selected).toBe('true');
    });
```

## Test relationships
```javascript
    it('contains tabs', function () {
      // test the roles of tab and tabpanel
      expect(myTabPanel.elm.attr('role'))
        .toBe('tabpanel');
      expect(tabs[0].elm.attr('role'))
        .toBe('tab');
      // test the parent / child relationship
      expect(myTabPanel.elm.children[0])
        .toBe(tabs[0].elm);
    });
```
