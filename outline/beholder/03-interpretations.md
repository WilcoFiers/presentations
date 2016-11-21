# Interpreting WCAG

## Skipping heading levels
- Is this a WCAG violation?
- Would you recommend it?

```html
<h1>Welcome to Kalamar</h1>
<h3>The kingdom of prosperity</h3>
```

## Require landmarks
- Is this a WCAG violation?
- Would you recommend it?

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<aside>...</aside>
<footer>...</footer>
```

## Required keys for keyboard control
- Is this a WCAG violation?
- Would you recommend it?

```html
<span role="radio" tabindex="0">Dungeon</span>
<span role="radio" tabindex="0">Dragon</span>
```

## Use of valid ARIA
- Is this a WCAG violation?
- Would you recommend it?

```html
<button aria-checked="true">
  I vow to cause no inaccessibility
</button>
```

## Invalid closing tags
- Is this a WCAG violation?
- Would you recommend it?

```html
<strong><p>
  Important!</strong> ...
</p>
```

## Prioritizing

1. No keyboard traps
2. Form fields have labels
3. Use landmarks
4. Don't skip heading levels

## Draw the line

### Violations:
1. No keyboard traps
2. Form fields have labels

### Best practice:
3. Use landmarks
4. Don't skip heading levels
