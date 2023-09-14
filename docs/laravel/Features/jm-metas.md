---
title: Jolimardi/Laravel-metas
---

Composant pour configurer les metas du site via un fichier `.yml`

```bash title="console"
composer require jolimardi/laravel-metas
```

Publish le package :

```bash title="console"
php artisan vendor:publish --provider="JoliMardi\Metas\MetasServiceProvider"
```

Puis modifier :

```php title="app/Http/Controller/Controller.php"
<?php

namespace App\Http\Controllers;

use JoliMardi\Metas\Services\MetasService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\View;

class Controller extends BaseController {
    use AuthorizesRequests, ValidatesRequests;

    public function __construct() {

        // Chargement des variables globales utilisables dans toutes les vues, et overridables dans les controllers
        View::share('title', MetasService::getTitle());
        View::share('description', MetasService::getDescription());
    }
}
``` 

Plus d'information sur la documentation du package : https://packagist.org/packages/jolimardi/laravel-metas