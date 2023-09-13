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
@import "../../vendor/jolimardi/laravel-sections/dist/sections.css";
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

Plus d'information sur la documentation du package : https://github.com/jolimardi/laravel-sections
