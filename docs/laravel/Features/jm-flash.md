---
title: Jolimardi/Laravel-flash
---

### Flash

```bash title="console"
composer require jolimardi/laravel-flash:dev-master

php artisan vendor:publish --provider="JoliMardi\Flash\FlashServiceProvider"
```
> `:dev-main` permet d'outre-passer la vérification de stabilité pour le moment.
> Et publish permet de modifier le template d'affichage 

Ajouter l'alias personnalisé dans `config/app.php` -> `aliases`:

```php title="config/app.php"
    'aliases' => Facade::defaultAliases()->merge([
        // highlight-start
        'MyFlash' => JoliMardi\Flash\Flash::class,
        // highlight-end
    ])->toArray(),
```
:::info
On évite d'avoir Flash comme alias à cause de la facade Flash de Laravel par défaut

Cet alias s'utilise dans la vue uniquement. Il n'y a pas besoin de la modifier par défaut.
:::

Après avoir publish on retrouvera la vue qui display les messages :

```php title="resources/view/vendor/flash-messages/message.blade.php"
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

Puis l'utiliser dans un controller, exemple : 

```php title="app/Http/Controller/IndexController.php"
use JoliMardi\Flash\Flash;

class IndexController extends Controller {

    public function test() {

        Flash::message('success', 'Ceci est un message de type succès');
        Flash::success('Ceci est un message de succèsssssss');
        Flash::error('Ceci est un autre message d\'erreur');
        Flash::notice('Ceci est un message de notification');

        return view('test');
    }

}
```

:::info 
La facade Flash de jolimardi utilise le package notiflix pour display les messages, il n'y a donc pas besoin de l'insérer dans la vue. Tout est pris en charge par défaut.
:::

### Installer notiflix

Installer le package : 

```bash title="console"
npm install notiflix --save-dev
```

Puis ajouter : 

```js title="resources/js/bootstrap.js"
...
/* -------   Notiflix   ------- */
// npm install notiflix --save-dev
// pour le css : pas besoin, c'est du all in one

import { Notify } from 'notiflix/build/notiflix-notify-aio';
window.Notify = Notify;
```

### Render les messages sur le site 

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


> Retrouvez tout les types de message dans la documentation du package : https://github.com/jolimardi/laravel-flash