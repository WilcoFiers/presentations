# Web Accessibility Evaluation Tools (WAETs)

---
There are many tools for accessibility testing
https://www.w3.org/WAI/ER/tools/
Over the past year, this list has doubled!!
There is no shortage of tools
Everyone is trying to invent this wheel
So clearly, no wheel already out there, is quite round enough


## Let's look at some tools

### HTML_CodeSniffer
Bookmarklet by Squizlabs
http://squizlabs.github.io/HTML_CodeSniffer/
Highlights errors, warnings and notices

### WAVE by WebAIM
http://wave.webaim.org/
Creates an overlay of another website
Provides errors, warnings
As well as structural information for manual testing
Runs as an online service, or a Chrome plugin

### WorldSpace Assure
????

### Accessibility Checker CKSource
https://cksource.com/ckeditor/services#accessibility-checker
Plugin to CK Editor
Based on QuailJS
Helps fix issues

### WCAG-EM Report Tool
https://www.w3.org/WAI/eval/report-tool/
Step by step
No automated tests at all
Exports in EARL

### PDF Accessibility Checker (PAC)
http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html
Returns passes, warnings and fails

### FireEyes
?????


## Differences in tools

Run in different environments
Test different standards
Work on different technologies
Output different ways
Different levels of accuracy


## Using tools in automated testing
What we need
- Does not require human operator
- Tests all relevant technologies
	(HTML, CSS, JavaScript, ARIA)
- Accuracy: Don't throw errors where there are none
- Security: Keep my code private
- Documentation and transparency

What you'll end up using is the Rules engine.
A Rule Engine runs a series of rules on a web page.
Each Engine has their own ruleset

## There are several Rule engines like this

- Open Source:
  - aXe-Core
  - QuailJS
  - AccessLint

- Proprietary
  - Tennon
  -  WAVE
