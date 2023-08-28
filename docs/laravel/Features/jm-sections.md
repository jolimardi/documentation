---
title: Jolimardi/Laravel-sections
---

### Sections

```bash
composer require jolimardi/laravel-mysections:dev-main
```
> `:dev-main` permet d'outre-passer la vérification de stabilité pour le moment.

- Il est déjà possible d'utiliser le composant `<x-section><x-section />` ici.

Accéder à la création de sections, éxécuter :

```bash title="console"
php artisan vendor:publish --provider="JoliMardi\MySections\MySectionsServiceProvider"

php artisan migrate
```

Importer le css des sections :

```css title="resources/css/app.css"
@import "../../public/vendor/mysections/sections.css";
```

Envoyer les identifiants des sections à la vue : 

```php title="app/Http/Controllers/IndexController.php"
<?php

namespace App\Http\Controllers;

use App\Models\Section;

class IndexController extends Controller {

    public function homepage() {

        //keyBy permet de mettre une column (ici "$section->key") en index du tableau au lieu de 0 => $item1, 1 => $item2 etc.
        $sections = Section::where('key', 'LIKE', 'home.%')->get()->keyBy('key');

        return view('homepage', compact('sections'));

    }

}
```

Puis utiliser la directive dans une vue : 

```php title="resources/view/homepage.blade.php"
<x-section>
    @mySection($sections, 'home.apropos')
</x-section>
```

### Option vidéo

<details>   
<summary> Option vidéo youtube</summary>

Si vos sections text-with-image ne comprendront pas de vidéo à la place de l'image. Alors il faut modifier la sections text-with-image en enlevant les partie surligné.

```php title='resources/views/vendor/laravel-sections/text-with-image.blade.php'
...
<div class="section-image">
    // highlight-start
    @if (isset($section->video_url))
        <div class="video-container">
            {{-- <x-youtube :youtube='$section->video_url' :youtube-thumbnail-media="$section->getFirstMedia('video_thumbnail')" /> --}}
            <x-youtube-inline :youtube='$section->video_url' />
        </div>
    @else
    // highlight-end
        {{ $section->getFirstMedia('image')->img('', ['alt' => $section->title]) }}
        // highlight-start
    @endif
    // highlight-end
</div>
...
```

Sinon, il faut ajouter le composant youtube-inline.blade.php dans `resources/views/components` : 

```php title='resources/views/components/youtube-inline.blade.php'
@if (isset($youtube))
    <div class="video-thumbnail ratio-16x9">

        <iframe src="https://www.youtube.com/embed/{{ $youtube }}?&loop=1&playlist={{ $youtube }}&rel=0&controls=1&autoplay=1&mute=1&start=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>

    </div>
@endif
```

</details>

## Ajouter une section dans Nova

### Installer les helpers de Nova utilisé par ce package

1. m-a-k-o/youtube-field

```bash title='console'
composer require m-a-k-o/youtube-field
```

Plus d'information sur la documentation du package : https://github.com/jolimardi/laravel-sections
