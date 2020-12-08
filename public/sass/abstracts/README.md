# abstracts

The abstracts/ folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

Abstracts contains no actual styles, just Sass mechanisms that help define styles in other directories (sometimes called "helpers"). This includes things like global variables, functions, and mixins. Each of these categories should be placed in their own appropriately-named partial file, as seen above.
