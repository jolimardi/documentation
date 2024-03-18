---
title: Routes et Base Controller
---


## Ajouter le namespace pour charger automatiquement les controllers

```php title="/app/Providers/RouteServicesProvider.php"
...
class RouteServiceProvider extends ServiceProvider {...
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
Ajouter `->namespace('App\Http\Controllers')` est nécessaire pour que syntaxe courte `IndexController@home` des routes fonctionne.
:::

## Configurer BaseController et IndexController

```php title="/app/Http/Controllers/BaseController.php"
<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as LaravelController;
use Illuminate\Support\Facades\View;
use JoliMardi\Metas\Services\MetasService;

class BaseController extends LaravelController {
    use AuthorizesRequests, ValidatesRequests;

    public function __construct() {
        // Chargement des variables globales utilisables dans toutes les vues, et overridables dans les controllers
        View::share('title', MetasService::getTitle());
        View::share('description', MetasService::getDescription());
        View::share('og_image', '/img/example.jpg');
    }
}
```

:::info
Penser à créer les vues correspondantes à chaque action, dans `/ressources/views/mapage.blade.php` par exemple, ou dans un sous-dossier avec la syntaxe `return view('pages-editos.mapage')` pour la vue située dans `/ressources/views/pages-editos/mapage.blade.php`;
:::

```php title="/app/Http/Controllers/IndexController.php"
<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
//use App\Models\ContactMessage;
use JoliMardi\Flash\Flash;

class IndexController extends BaseController {
    use AuthorizesRequests, ValidatesRequests;

    public function home() {
        //Flash::message('success', 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
        return view('home');
    }
    
    public function soins() {
        return view('soins');
    }

    public function contact() {
        return view('contact');
    }

    /* Pour plus tard 
    public function send(Request $request) {
        // Validation
        $request->validate([
            'name' => 'required|min:3|max:255',
            'email' => 'required|email',
            'message' => 'required|min:5'
        ]);

        $params = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ];

        $contactMessage = new ContactMessage;
        $contactMessage->name = $request->name;
        $contactMessage->email = $request->email;
        $contactMessage->message = $request->message;

        if ($contactMessage->save()) {
            // Redirection avec flash message

            $sendinBlueService = app(SendinBlueService::class);

            if ($sendinBlueService->sendEmail($request->email, $request->name, $params, 3)) {
                Flash::message('success', 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
                return back()->withInput();
            } else {
                return back()->withInput();
            }
        } else {
            Flash::message('error', 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
            return back()->withInput();
        }
    }
    */
}
```

:::info
Si erreur **Target class [IndexController] does not exist.**, il faut ajouter `->namespace...` dans RouteServiceProvider.php (voir au-dessus)
:::
 
## Configurer les routes

```php title="routes/web.php"
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

/* ----------    Index Controller   ---------------------- */

Route::get('/', 'IndexController@home')->name('home');

Route::get('/contact', 'IndexController@contact')->name('contact');
Route::post('/contact', 'IndexController@send')->name('contact.send'); // Mettre des points permet de filtrer des règle splus tard sur admin.* par exemple

// Exemple éditable
Route::get('mon-slug', 'MonController@mon_action')->name('mon_nom_de route'); // dans la vue : `href="{{ route('mon_nom_de_route')}}"`
```

---

Exemple plus complet, à adapter selon le projet :

```php title="routes/web.php"
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Config;

/* ----------    Index Controller   ---------------------- */

Route::name('home')->get('/', 'IndexController@home');
Route::name('contact')->get('contact', 'IndexController@contact');
Route::name('contact.send')->post('contact', 'IndexController@send');

Route::name('team')->get('team', 'IndexController@team');
Route::name('comment-ca-marche')->get('comment-ca-marche', 'IndexController@comment_ca_marche');
Route::name('mentions-legales')->get('mentions-legales', 'IndexController@mentions_legales');


/* ----------    Artistes   ---------------------- */

Route::name('artists')->get('artistes', 'ArtistController@list');
Route::name('artists.view')->get('artistes/{slug}', 'ArtistController@view');

// Exemple de paramètre "capturé" dans l'url
Route::name('artists.style')->get('artistes-{style}', 'ArtistController@style');



/* ----------    Articles   ---------------------- */

// Conseils
Route::name('posts')->get('conseils', 'PostController@list');
Route::name('posts.view')->get('conseils/{slug}', 'PostController@view');



/* ----------    Admin   ---------------------- */

$admin_prefix = Config::get('app.admin_slug', 'admin');
Route::middleware(['auth'])
    ->prefix($admin_prefix)
    ->controller(AdminController::class)
    ->group(function () {
        Route::get('/', 'dashboard')->name('admin.dashboard');
        Route::post('/', 'dashboard')->name('admin.filterArtists');
        Route::get('/logout', 'logout')->name('admin.logout');
    });
Route::name('admin.login')->get($admin_prefix . '/login', 'AdminController@login');
Route::name('admin.check-login')->post($admin_prefix . '/check-login', 'AdminController@checkLogin');

```