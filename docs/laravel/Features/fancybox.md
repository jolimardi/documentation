---
title: Ajouter Fancybox
---

### Fancybox 

```bash
npm install @fancyapps/ui --save-dev
```

Puis ajouter dans les fichiers ci-dessous :

```css title="resources/css/app.css"
@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
```


```js title="resources/js/bootstrap.js"
/* -------   jQuery   ------- */
import $ from 'jquery';
window.$ = $;

// highlight-start
/* -------   Fancybox   ------- */
// npm install @fancyapps/ui --save-dev
// pour le css : @import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind();
// highlight-end
```