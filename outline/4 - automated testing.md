# Automated testing

---
**It costs significantly more to fix a bug at the end of the project than it does to fix the same bug earlier.**
*Pretty much every developer ever*

---
Same is true for accessibility.
Accessibility costs up front 5% of project budget
Accessibility remediation can cost upward of 50%

--- {{ "fragmented": true }}
Different types of tests that can be automated
- Unit tests
- Integration tests
- End to end testing
- Performance testing

## unit test
Test individual bits of code

```javascript
    // Test the addNumbers function
    it('should adds 3 numbers together',
        function () {
      var result = addNumbers(1, 2, 3);
      expect(result).toBe(6);
    });
```

## Integration test
Test how components work together:

```javascript
    // Message an iframe
    it('receives messages send from an iframe',
        function () {
      receiveMessage(function (msg) {
        expect(msg).toBe('foo');
      });
      $('#iframe').contextWindow
        .sendMessage('foo');
    });
```

## Functional Testing
Test high level functionality

```javascript
    // Test we get back the right page
    it('returns the homepage from /home',
        function () {
      browser.url('http://localhost/home');
        expect(browser.getTitle())
        .toContain('Homepage');
    });
```

## Automating accessibility
One way of automating accessibility test is this:

```javascript
    it('sets the alt of the logo',
        function () {
      var alt = $('img.header-logo')  .attr('alt');
      expect(alt).toBe('Deque');
    });
```

--- {{ "fragmented": true }}
Many things can be tested like this:
- Are the right elements marked as headings
- is the lang attribute what you expect
- Titles are what you expect
- etc.

--- {{ "fragmented": true }}
Question is, how valuable are such tests?
- They are brittle, small changes can break this test
- It only tests changes in code, not errors

---
We need to test at a higher level.

---
Accessibility Feature test:

```javascript
    it('has an alt on each image', function () {
      browser.url('http://localhost/home');
      var images = browser.get('img');
      images.forEach(function (img) {
        var alt = img.hasAttribute('alt');
        expect(alt).toBe(true);
      });
    })
```

---
But this is true for every page, right?
