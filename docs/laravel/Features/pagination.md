---
title: Pagination
slug: pagination
---

### Requête avec pagination

```php title='app/Http/Controllers/PostsController.php'
class ArticleController extends Controller {
    public function list() {

        // Sans pagination
        Post::where()->get();

        // highlight-start
        $per_page = 6;
        // Avec pagination :
        Post::where()->paginate($per_page);
        // highlight-end
    }
}
```

### Afficher la pagination dans la vue

```php title='resources/views/posts/list.blade.php'
@foreach ($posts as $post)
    ...
@endforeach

// highlight-start
{{ $posts->links() }}
// highlight-end
```

### Utiliser le template de pagination de Joli Mardi

#### Ajouter le "kit" choisi dans `App\Providers\AppServiceProvider` :

```php title='App\Providers\AppServiceProvider'
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
// highlight-start
use Illuminate\Pagination\Paginator;
// highlight-end

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void {
        // highlight-start
        // Met la pagination par défaut : views/vendor/pagination/jolimardi.blade.php
        Paginator::defaultView('pagination::jolimardi');
        // highlight-end
    }
}
```

#### Créer la vue `resources/views/vendor/pagination/jolimardi.blade.php`

```php title='resources/views/vendor/pagination/jolimardi.blade.php'
@if ($paginator->hasPages())

    <?php
    $pagination_base_url = $paginator->getOptions()['path'];
    $current = $paginator->currentPage();
    $last_page = $total = $paginator->lastPage();
    ?>

    <div class="pagination">

        {{-- Previous Page Link --}}
        @if (!$paginator->onFirstPage())
            <a class="prev arrow" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="Page précédente">{{ svg('coolicon-chevron-left') }}</a>
        @endif



        {{-- Moins de 6 éléments, on les affiche à la suite --}}
        @if ($total < 6)
            @foreach ($paginator->getUrlRange(1, $last_page) as $page => $url)
                @if ($page == $current)
                    <a aria-current="page" class="active">{{ $page }}</a>
                @else
                    <a href="{{ $url }}">{{ $page }}</a>
                @endif
            @endforeach

            {{-- Plus de 6 éléments --}}
        @else
            {{-- Le 1 --}}
            <a {!! $current == 1 ? 'aria-current="page" class="active"' : '' !!} href="{{ $pagination_base_url }}">1</a>

            {{-- Séparateur ? --}}
            @if ($current > 3)
                <span class="dots">...</span>
            @endif

            {{-- Milieu --}}
            <?php $variable = $current == 1 ? 2 : 1; ?>

            @for ($page = $current - 1; $page <= $current + $variable; $page++)
                @if ($page <= 1)
                    @continue
                @endif
                @if ($page > $last_page - 1)
                    <?php break; ?>
                @endif

                @if ($page == $current)
                    <a aria-current="page" class="active">{{ $page }}</a>
                @else
                    <a href="{{ $paginator->url($page) }}">{{ $page }}</a>
                @endif
            @endfor


            {{-- Séparateur ? --}}
            @if ($current < $last_page - 2)
                <span class="dots">...</span>
            @endif

            {{-- Le dernier --}}
            <a {!! $current == $last_page ? 'aria-current="page" class="active"' : '' !!} href="{{ $paginator->url($last_page) }}">{{ $last_page }}</a>

        @endif



        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <a class="next arrow" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="Page suivante">{{ svg('coolicon-chevron-right') }}</a>
        @endif
    </div>
@endif


```

:::note
Possibilité de publier le template de pagination par défaut pour repartir from scratch : `php artisan vendor:publish --tag=laravel-pagination`
:::
