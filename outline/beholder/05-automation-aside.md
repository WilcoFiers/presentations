# Aside: Automation

## Acc. Test Tools

20% - 50% (in volume)

## ATTs do (1 / 2) {{ "fragmented": true }}
- Check for alternatives
  image alt, aria-label, video <caption>
- Check relations:
  form field labels, longdesc, aria-owns
- Measure color contrast
- Parsing

## ATTs do (2 / 2) {{ "fragmented": true }}
- Required accessibility features:
  lang, title, bypass blocks
- Table headers
- Validate ARIA compliance
- Zoom / resize restrictions
- Auto-refresh

## ATTs don't (1 / 2) {{ "fragmented": true }}
- Language detection
- Image recognition / OCR
- Test for events (onfocus, onchange, etc.)
- Compare between pages

## ATTs don't (2 / 2) {{ "fragmented": true }}
- Look at contrast with background images
- Identify decorative images
- Detect keyboard traps
- Test templates

## Acc. Unit Tests
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
