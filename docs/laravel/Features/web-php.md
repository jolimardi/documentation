--- 
title: Préparer web.php
---

## Configurer le ServiceProvider 

Pour simplifier l'écriture des routes dans `web.php`, on ajoute un namespace au RouteServiceProvider :

```php title="app/Services/RouteServicesProvider.php"
<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider {
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void {

        $this->routes(function () {
            Route::middleware('web')
                // highlight-start
                ->namespace('App\Http\Controllers')
                // highlight-end
                ->group(base_path('routes/web.php'));
        });
    }
}
```

:::info 
Ajouter `->namespace('App\Http\Controllers')` est important pour avoir la syntaxe rapide IndexController@home dans web.php
:::

## Ecrire le fichier de route

Ce qui nous permet d'écrire tel que : 

```php title="routes/web.php"
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

/* ----------    Index Controller   ---------------------- */

Route::get('/', 'IndexController@home')->name('home');

Route::get('/contact', 'IndexController@contact')->name('contact');
Route::post('/contact', 'IndexController@send')->name('contact.send');

// Exemple éditable
Route::get('mon-slug', 'MonController@mon_action')->name('mon_nom_de route'); // dans la vue : `href="{{ route('mon_nom_de_route')}}"`