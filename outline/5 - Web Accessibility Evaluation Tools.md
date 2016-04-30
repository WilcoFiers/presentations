# Web A11y Evaluation Tools

---
There are many tools for accessibility testing
[w3.org/WAI/ER/tools/](https://www.w3.org/WAI/ER/tools/)
Over the past year, this list has doubled!!

---
There is no shortage of tools
Everyone is trying to invent this wheel
So clearly, no wheel already out there, is quite round enough

## Let's look at some tools

### HTML_CodeSniffer
Bookmarklet by Squizlabs
[squizlabs.github.io/HTML_CodeSniffer/](http://squizlabs.github.io/HTML_CodeSniffer/)
Highlights errors, warnings and notices

### WAVE by WebAIM
[wave.webaim.org/](http://wave.webaim.org/)
Creates an overlay of another website
Provides errors, warnings
As well as structural information for manual testing
Runs as an online service, or a Chrome plugin

### FireEyes
?????

### Accessibility Checker CKSource
[cksource.com/ckeditor/services](https://cksource.com/ckeditor/services#accessibility-checker)
Plugin to CK Editor
Build on QuailJS
Helps fix issues

### WCAG-EM Report Tool
[w3.org/WAI/eval/report-tool/](https://www.w3.org/WAI/eval/report-tool/)
Step by step
No automated tests at all
Exports in EARL

### PDF Accessibility Checker (PAC)
[access-for-all.ch/en/pdf-lab/](http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html)
Tests PDF
Returns passes, warnings and fails


## Differences in tools
- Standards (WCAG 2.0, Section 508)
- Technologies (HTML, PDF, EPUB)
- Environments (Server, Plugin, Web Page)
- Different output (warning / error / violation)
- Varying accuracy


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
Each Engine has their own rule set

## There are several Rule engines like this
- Open Source:
  - aXe-Core
  - QuailJS
  - AccessLint

- Proprietary
  - Tennon
  -  WAVE