# Accessibility Conformance Testing

## ACT Taskforce

- Part of Accessibility Guidelines WG
- Incubated in Auto-WCAG CG
- Started in 2016
- Set up to write ACT Rules Format

## Why we need tests

Accessibility test results today:
- Inconsistent
- Confusing
- Costly

## ACT Rules are

- generic,
- reliable,
- technology specific,
- implementation agnostic,
- accessibility test procedures.

### ACT Rules are generic

Not tied to a particular website

### ACT Rules are technology specific

Rules target a specific technology,
such as HTML, EPUB, PDF, etc.

### ACT Rules are implementation agnostic

Implementable in many accessibility tools
Usable in manual test procedures

### ACT Rules are A11y test procedures

- Test for WCAG 2.x criteria
- Test other "Accessibility requirements":
  - National standards
  - Company policies
  - Best practices

### ACT Rules are

- ACT Rules are for testers,
- what WCAG Techniques are for developers.

----

# ACT: The plan

- Define a shared format
- Bring together test cases
- Publish shared test rules

## ACT Rules Format (1/2)

[https://www.w3.org/TR/act-rules-format/](https://www.w3.org/TR/act-rules-format/)

- Description
- Accessibility Requirements
- Assumptions
- Accessibility Support
- ...

## ACT Rules Format (2/2)

- Test subject type
- Test procedure
  - Selector
  - Test step 1
  - Test step ...

## Test case repository

- Written in JSON
- Points pages with examples
- Selectors with passes and violations

### Test cases example:

```
{
  "name": "axe-core",
  "version": "2.2.1",
  "license": "MPL-2.0",
  "contributors": [{
    "url": "https://rawgit.com/dequelabs/axe-core/
    master/test/integration/rules/button-name.html",
    "successCriteria": ["wcag20:ensure-compat-rsv"],
    "failed": ["#empty", "#val", "#alempty",
      "#albmissing", "#albempty"],
    "passed": ["#text", "#al", "#alb", "#combo"]
  }]
}
```

## Publish rules

https://w3c.github.io/wcag-act-rules/

----

# ACT Timeline

----

Q1 2018:
- 3rd draft ACT Rules format
- First draft ACT Rules Review process

Q3 2018:
- First look: ACT Rules repository
- Complete ACT Test Case repository

Q1 2019:
- Recommendation ACT Rules Format
- Complete ACT Rules Repository

----

# Questions?