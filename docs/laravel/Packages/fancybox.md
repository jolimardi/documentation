---
title: Fancybox
---

### Fancybox 

```bash
npm install @fancyapps/ui --save-dev
```

Dans `resources/css/app.css` :
```css
@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
```

Dans `resources/js/bootstrap.js`:

```js
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