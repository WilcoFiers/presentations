# ACT on aXe

## Manifesto

1. Rules must have a zero false-positive rate
2. Rules must be lightweight and fast
3. Rules must work in all modern browsers
4. Rules must, themselves, be tested automatically

## Axe-core structure

Rules
- Selector (CSS)
- Matcher (JS)
- Any (List of checks)
- All (List of checks)
- None (List of checks)

## Checks

- Impact
- evaluate (js)
- after (js)

## Tags

- wcag2a, wcag2aa
- wcag111, wcag214
- best-practice, experimental

## Results

- violations
- needs review
- passes
- inapplicable

## Tests

- Core (js)
- Commons (js)
- Checks (js)
- Integrations
  - rules (html)
  - full (html)

## ACT Usage

- Accessibility requirement -> tags
- test mode -> "(semi-)automatic"
- test type -> "Rendered page"
- Selector -> selector + matcher
- steps -> checks

## aXe Rules Format

- Used in rule proposal
- Can be mapped to ACT (manually)

## In short

- New axe rules can be created for ACT
- Existing aXe rules need more documentation
- External ACT Rules can be built into aXe