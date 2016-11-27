# Interpreting WCAG

## One more game, if you'll let me {{ "fragmented": true }}

No character sheets, just two questions
- Is this a WCAG violation?
- Would you recommend it?

## Skipping heading levels {{ "fragmented": true }}
```html
    <h1>Welcome to Kalamar</h1>
    <h3>The kingdom of prosperity</h3>
```
- Is this a WCAG violation?
- Would you recommend it?

## Require landmarks {{ "fragmented": true }}
```html
    <header>...</header>
    <nav>...</nav>
    <main>...</main>
    <aside>...</aside>
    <footer>...</footer>
```
- Is this a WCAG violation?
- Would you recommend it?

## Use of valid ARIA {{ "fragmented": true }}
```html
    <button aria-checked="true">
      I vow to cause no inaccessibility
    </button>
```
- Is this a WCAG violation?
- Would you recommend it?

## Invalid closing tags {{ "fragmented": true }}
```html
    <strong><p>
      Important!</strong> ...
    </p>
```
- Is this a WCAG violation?
- Would you recommend it?

## Prioritizing

1. No keyboard traps
2. Form fields have labels
3. Use landmarks
4. Don't skip heading levels

## Draw the line

- **Violations:**
  - No keyboard traps
  - Form fields have labels

- **Best practice:**
  - Use landmarks
  - Don't skip heading levels

I think :)
