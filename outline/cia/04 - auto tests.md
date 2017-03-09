# Automated testing

## unit test
Test individual bits of code

```javascript
    // Test the addNumbers function
    it('should adds 3 numbers together', () => {
      let result = addNumbers(1, 2, 3);
      expect(result).toBe(6);
    });
```

## Integration test
Test how components work together:

```javascript
    // Message an iframe
    it('receives messages send from an iframe', () => {
      receiveMessage((msg) =>
        expect(msg).toBe('foo'));
      $('#iframe').contextWindow
        .sendMessage('foo');
    });
```

## Functional Testing
Test high level functionality

```javascript
    // Test we get back the right page
    it('returns the homepage from /home', () => {
      browser.url('http://localhost/home');
        expect(browser.getTitle())
        .toContain('Homepage');
    });
```

## Axe testing

```javascript
    it('passes axe rules', (done) => {
      let elm = React.createElement(MyComponent)
      let reactNode = mountToDoc(elm)

      axe.run(reactNode.getDOMNode(), result => {
        assert.lengthOf(result.violations, 0)
        done()
      })
    })
```