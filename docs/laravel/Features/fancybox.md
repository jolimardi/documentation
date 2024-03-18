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
import { fr } from "@fancyapps/ui/dist/fancybox/l10n/fr.esm";

window.Fancybox = Fancybox;

Fancybox.defaults.l10n = fr;
Fancybox.defaults.width = 1600;
Fancybox.Plugins.Toolbar.defaults.display = {
    left: ["infobar"],
    middle: [],
    right: ["close"],
};

Fancybox.bind();
// highlight-end
```

:::note 
Noter que jquery doit-être installer pour que Fancybox fonctionne correctement, tutoriel ["Installer Jquery"](jquery.md) sur laravel
:::