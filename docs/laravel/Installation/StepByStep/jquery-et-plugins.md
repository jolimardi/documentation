---
title: JQuery, FancyBox...
---

Guide d'installation des librairies JS qui peuvent servir.


## jQuery

```bash
npm install jquery --save-dev
```
```js title="/resources/js/bootstrap.js"
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

## Fancybox 

```bash
npm install @fancyapps/ui --save-dev
```

```css  title="resources/css/app.css"
@import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
```

```js title="/resources/js/bootstrap.js"
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

## Notiflix

Pas besoin de CSS, il est inclus dans le js (All In One).
```bash
npm install notiflix --save-dev
```

```js title="/resources/js/bootstrap.js"
/* -------   Notiflix   ------- */
// npm install notiflix --save-dev
// pour le css : pas besoin, c'est du all in one

import { Notify } from 'notiflix/build/notiflix-notify-aio';
window.Notify = Notify;
```

### Utilisation Notiflix pour les flash messages :

```html title="/resources/views/vendor/flash-messages/message.blade.php"

@props([
    'types_notify_mapping' => [
        'success' => 'success',
        'error' => 'failure',
        'notice' => 'info',
        'warning' => 'warning',
    ],
])


@if (MyFlash::has())
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

    @foreach (MyFlash::getMessages() as $type => $messages)
        @foreach ($messages as $message)
            @push('scripts')
                <script type="text/javascript">
                    {{-- cas particulier pour error --}}
                    @if ($type == 'error')
                        window.addEventListener('DOMContentLoaded', function() {
                            Notify.failure("{{ $message }}", {
                                backOverlay: true,
                                closeButton: true
                            });
                        });
                    @else
                        window.addEventListener('DOMContentLoaded', function() {
                            Notify.{{ $types_notify_mapping[$type] ?? 'info' }}("{{ $message }}", {});
                        });
                    @endif
                </script>
            @endpush
        @endforeach
    @endforeach
@endif
```
```php title="dans un controller :"
use JoliMardi\Flash\Flash;
...
Flash::message('success', "Message bien envoyé !");
```