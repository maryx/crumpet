Crumpet
======
Write papers in HTML

Implemented Features
--------------------
- Styles similar to LaTeX `article` class
- Typographic features
  - small caps first line of paragraphs
  - dropcaps
  - `blockquote` styles with autoattribution based on `cite` attribute
  - `.fancybox` class for notes
  - styling for `aside` tags
- Autonumber sections
  - e.g., *1.2 Introduction*
- Autonumber figures
  - e.g., automatically create **Figure N.**
- Generate bibliography from Bibtex using Bibtex_JS (rudimentary styling)
- Include MathJax for equation rendering, numbering, and `\eqref` processing
- Include HighlightJS for syntax highlighting of code blocks
- Print stylesheet
  - Separate body of text and title page (like LaTeX `report` class)

See it in action on the [example document](./example)

Important Not-Implemented Features
------------------------
- Replicate the LaTeX/BibTex reference system
  - Generate bibliography entries in order cited, or alphabetically
  - Create `id` attributes in bibiography to enable internal citation links (currently done manually)
  - Fill inline citations automatically
    - i.e., `<a href=#Knuth77></a>` becomes a clickable reference styled as (Knuth, 1977) in text
- Page headers/footers for print (document title, author, page number)
  - Browser does this but it looks ugly
- Better page-break rules so that important elements like sidenotes aren't split across pages. Without actual floating elements, there's only so much that can be done here, though.

Other
-----
- Modularize styles into separate stylesheets, then `@import` them into master. This makes it easier to swap out fonts and things while leaving structural styling alone.
