# Aside: Automation

## Accessibility Test Tools (ATTs)

20% - 50% (in volume)

## Things ATTs do (1 / 2) {{ "fragmented": true }}
- Check for alternatives
  *image `alt`, `aria-label`, video `<caption>`*
- Check programmatic association:
  *form field labels, `longdesc`, `aria-owns`*
- Validate ARIA compliance

## Things ATTs do (2 / 2) {{ "fragmented": true }}
- Required accessibility features:
  *`lang`, `title`, bypass blocks*
- Measure color contrast
- Table headers
- Parsing

## Things ATTs don't (1 / 2) {{ "fragmented": true }}
- Language detection
- Image recognition / OCR
- Test for events (onkeydown, onchange, etc.)

## Things ATTs don't (2 / 2) {{ "fragmented": true }}
- Compare page titles
- Contrast in images
- Detect keyboard traps

## Accessibility Unit Tests {{ "fragmented": true }}
Write these yourself:
- Where the focus should be
- Does ARIA get updated
- Does it work with key events

----
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
