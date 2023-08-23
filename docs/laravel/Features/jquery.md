---
title: Ajouter Jquery
---

# Installation de Jquery

```bash
npm install jquery --save-dev
```

Puis ajouter dans le fichier ci-dessous :

```js title="ressources/js/bootstrap.js"
import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// highlight-start
/* -------   jQuery   ------- */
// npm install jquery --save-dev
import $ from 'jquery';
window.$ = $;
// highlight-end
```