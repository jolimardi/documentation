---
title: Ajouter Notiflix
---

# Installer notiflix

Installer le package à la racine du projet : 

```bash title="console"
npm install notiflix --save-dev
```

Puis ajouter dans : 

```js title="resources/js/bootstrap.js"
...

/* -------   Notiflix   ------- */
// npm install notiflix --save-dev
// pour le css : pas besoin, c'est du all in one

import { Notify } from 'notiflix/build/notiflix-notify-aio';
window.Notify = Notify;
```

## Utilisation 

Ajouter la directive `@push(scripts)` au layout du site, exemple :

```php title="resources/view/layout.blade.php"
<head>
    ...
</head>
<body>
    ...
    {{-- Chargement des js --}}
    @vite('resources/js/app.js')

    @stack('scripts')
</body>

```

```js title="resources/view/mon-dossier/ma-vue.blade.php"
{{-- Config initiale de Notify --}}
@pushOnce('scripts')
    <script type="text/javascript">
        window.addEventListener('DOMContentLoaded', function() {
            Notify.init({
                position: 'center-top',
                distance: '82px'
            });
            $('body').on('click', '#NotiflixNotifyOverlay', function() {
                //
                if ($('.notiflix-notify .nx-close-button').length > 0) {
                    $('.notiflix-notify .nx-close-button').click();
                } else {
                    $('#NotiflixNotifyOverlay').remove();
                }

            });
        });
    </script>
@endPushOnce
```

:::note
On utilise la directive `@pushOnce` afin d'obtenir une meilleur gestion des loading de scripts sur le site.
:::

> Pour l'utilisation avec FlashMessages, se reféré à `Packages/Jolimardi/Laravel-flash` 
