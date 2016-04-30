# Automated testing

---
Well know fact: "Bugs caught early, cost less to resolve."

---
Same is true for accessibility.
Accessibility costs up front 5% of project budget
Accessibility remediation can cost upward of 50%

---
Different types of tests that can be automated
- Unit tests
- Integration tests
- End to end testing
- Performance testing

---
So we've seen, emphases has moved away from manual testing towards automated testing. But what do these tests look like?

## unit test
```javascript
// Test the addNumbers function
it('should adds 3 numbers together', function () {
  var result = addNumbers(1, 2, 3);
  expect(result).toBe(6);
});
```
Tests small 'units' of code, like a function that adds together numbers


## Integration test
```javascript
// Expect a callback in receiveMessage to get data from sendMessage
it('receives messages send from an iframe', function (done) {
  receiveMessage(function (msg) {
    expect(msg).toBe('foo');
    done();
  })
  $('#iframe').contextWindow.sendMessage('foo');
});
```
Tests how that components work together as expected, for example that a message send by one component, is received by the other.


## Functional Testing
Also known as end to end testing

```javascript
// Test we get back the right page
it('returns the homepage from /home', function () {
  browser.url('http://localhost/home');
    expect(browser.getTitle()).toContain('Homepage');
});
```
Test that required functionality is available, such as that the right page is loaded


## Automating accessibility
One way of automating accessibility test is this:

```javascript
it('sets the alt of the logo', function () {
  var alt = $('img.header-logo').attr('alt');
  expect(alt).toBe('Deque');
});
```

---
Many things can be tested in this simple fashion
- Are the right elements marked as headings
- is the lang attribute what you expect
- Titles are what you expect
- etc.

---
Question is how valuable such unit tests are
- They are brittle, small changes can break this test, even though it may not be a problem
- This doesn't test unexpected behavior in code, it only tests changes in input

---
These tests are more likely to fail because of inconsequential changes to the HTML, then they are to actually catch accessibility errors.
We need to test at a higher level.

---
Accessibility Feature test:

```javascript
it('has an alt on each image', function () {
  browser.url('http://localhost/home');
  var images = browser.get('img');
  images.forEach(function (img) {
    expect(img.hasAttribute('alt')).toBe(true);
  });
})
```
Although, this is true for all web pages, isn't it?
