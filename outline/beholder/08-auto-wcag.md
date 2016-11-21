# Auto-WCAG Community

Write rules, not tools.

----

- Write rules to test WCAG
- Monthly review meetings
- Open to anyone

## Example: Page Title (1/5)

```markdown
---
rule_id: SC3-1-1-html
name: Primary language of page
test_mode: automatic
criteria:
- 3.1.1 # Language of Page (Level A)
authors:
- Annika Nietzio
---
```

## Example: Page Title (2/5)

```markdown
## Description
This test checks that the primary language of the web content can be programmatically determined.
```

## Example: Page Title (3/5)

```markdown
## Test procedure
### Selector
Select the `html` element.
```

## Example: Page Title (4/5)

```markdown
### Step 1
If `lang` attribute exists:
L1 = value of `lang` attribute.
If neither `lang` nor `xml:lang` are specified, return Failed-1
Else, continue with Step2.
```

## Example: Page Title (5/5)

```markdown
### Step 2
Compare L1 to the list of all valid languages.
If L1 is not on the list, return Failed-2
Else, return Passed-1
```

## Users

- Axe-core
- SiteImprove
- European Union (EIII)

## Join us today!

w3.org/community/auto-wcag/
Go to "Join this group"