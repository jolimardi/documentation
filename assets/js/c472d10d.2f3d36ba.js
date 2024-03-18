"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8022],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>v});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,v=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?t.createElement(v,o(o({ref:a},c),{},{components:n})):t.createElement(v,o({ref:a},c))}));function v(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3740:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const i={title:"Pagination",slug:"pagination"},o=void 0,p={unversionedId:"laravel/Features/pagination",id:"laravel/Features/pagination",title:"Pagination",description:"Requ\xeate avec pagination",source:"@site/docs/laravel/Features/pagination.md",sourceDirName:"laravel/Features",slug:"/laravel/Features/pagination",permalink:"/documentation/docs/laravel/Features/pagination",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Features/pagination.md",tags:[],version:"current",frontMatter:{title:"Pagination",slug:"pagination"},sidebar:"laravelSidebar",previous:{title:"Ajouter Nova CKEditor",permalink:"/documentation/docs/laravel/Features/add-ckeditor"},next:{title:"Installation depuis un d\xe9p\xf4t",permalink:"/documentation/docs/laravel/Features/installation-depuis-un-depot"}},l={},s=[{value:"Requ\xeate avec pagination",id:"requ\xeate-avec-pagination",level:3},{value:"Afficher la pagination dans la vue",id:"afficher-la-pagination-dans-la-vue",level:3},{value:"Utiliser le template de pagination de Joli Mardi",id:"utiliser-le-template-de-pagination-de-joli-mardi",level:3},{value:"Ajouter le &quot;kit&quot; choisi dans <code>AppProvidersAppServiceProvider</code> :",id:"ajouter-le-kit-choisi-dans-appprovidersappserviceprovider-",level:4},{value:"Cr\xe9er la vue <code>resources/views/vendor/pagination/jolimardi.blade.php</code>",id:"cr\xe9er-la-vue-resourcesviewsvendorpaginationjolimardibladephp",level:4}],c={toc:s},u="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(u,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"requ\xeate-avec-pagination"},"Requ\xeate avec pagination"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='app/Http/Controllers/PostsController.php'",title:"'app/Http/Controllers/PostsController.php'"},"class ArticleController extends Controller {\n    public function list() {\n\n        // Sans pagination\n        Post::where()->get();\n\n        // highlight-start\n        $per_page = 6;\n        // Avec pagination :\n        Post::where()->paginate($per_page);\n        // highlight-end\n    }\n}\n")),(0,r.kt)("h3",{id:"afficher-la-pagination-dans-la-vue"},"Afficher la pagination dans la vue"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Attention, pour avoir le nombre de r\xe9sultats, il faut utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"$post->total()"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='resources/views/posts/list.blade.php'",title:"'resources/views/posts/list.blade.php'"},"// Nombre total de r\xe9sultat (ne pas utiliser ->count())\n{{ $posts->total() }} {{ Str::plural(\"R\xe9sultat\", $posts->total()) }}\n\n@foreach ($posts as $post)\n    ...\n@endforeach\n\n// highlight-start\n@if(method_exists($posts, 'links'))\n    {{ $posts->withQueryString()->links() }}\n@endif\n// highlight-end\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"->withQueryString()")," permet d'ajouter les params get pour garder les filtres d'une page \xe0 l'autre")),(0,r.kt)("h3",{id:"utiliser-le-template-de-pagination-de-joli-mardi"},"Utiliser le template de pagination de Joli Mardi"),(0,r.kt)("h4",{id:"ajouter-le-kit-choisi-dans-appprovidersappserviceprovider-"},'Ajouter le "kit" choisi dans ',(0,r.kt)("inlineCode",{parentName:"h4"},"App\\Providers\\AppServiceProvider")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='App\\Providers\\AppServiceProvider'",title:"'App\\Providers\\AppServiceProvider'"},"<?php\n\nnamespace App\\Providers;\n\nuse Illuminate\\Support\\ServiceProvider;\n// highlight-start\nuse Illuminate\\Pagination\\Paginator;\n// highlight-end\n\nclass AppServiceProvider extends ServiceProvider\n{\n    /**\n     * Bootstrap any application services.\n     */\n    public function boot(): void {\n        // highlight-start\n        // Met la pagination par d\xe9faut : views/vendor/pagination/jolimardi.blade.php\n        Paginator::defaultView('pagination::jolimardi');\n        // highlight-end\n    }\n}\n")),(0,r.kt)("h4",{id:"cr\xe9er-la-vue-resourcesviewsvendorpaginationjolimardibladephp"},"Cr\xe9er la vue ",(0,r.kt)("inlineCode",{parentName:"h4"},"resources/views/vendor/pagination/jolimardi.blade.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='resources/views/vendor/pagination/jolimardi.blade.php'",title:"'resources/views/vendor/pagination/jolimardi.blade.php'"},'@if ($paginator->hasPages())\n\n    <?php\n    $pagination_base_url = $paginator->path();\n    $current = $paginator->currentPage();\n    $last_page = $total = $paginator->lastPage();\n    ?>\n\n    <div class="pagination">\n\n        {{-- Previous Page Link --}}\n        @if (!$paginator->onFirstPage())\n            <a class="prev arrow" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="Page pr\xe9c\xe9dente">{{ svg(\'coolicon-chevron-left\') }}</a>\n        @endif\n\n\n\n        {{-- Moins de 6 \xe9l\xe9ments, on les affiche \xe0 la suite --}}\n        @if ($total < 6)\n            @foreach ($paginator->getUrlRange(1, $last_page) as $page => $url)\n                @if ($page == $current)\n                    <a aria-current="page" class="active">{{ $page }}</a>\n                @else\n                    <a href="{{ $url }}">{{ $page }}</a>\n                @endif\n            @endforeach\n\n            {{-- Plus de 6 \xe9l\xe9ments --}}\n        @else\n            {{-- Le 1 --}}\n            <a {!! $current == 1 ? \'aria-current="page" class="active"\' : \'\' !!} href="{{ $pagination_base_url }}">1</a>\n\n            {{-- S\xe9parateur ? --}}\n            @if ($current > 3)\n                <span class="dots">...</span>\n            @endif\n\n            {{-- Milieu --}}\n            <?php $variable = $current == 1 ? 2 : 1; ?>\n\n            @for ($page = $current - 1; $page <= $current + $variable; $page++)\n                @if ($page <= 1)\n                    @continue\n                @endif\n                @if ($page > $last_page - 1)\n                    <?php break; ?>\n                @endif\n\n                @if ($page == $current)\n                    <a aria-current="page" class="active">{{ $page }}</a>\n                @else\n                    <a href="{{ $paginator->url($page) }}">{{ $page }}</a>\n                @endif\n            @endfor\n\n\n            {{-- S\xe9parateur ? --}}\n            @if ($current < $last_page - 2)\n                <span class="dots">...</span>\n            @endif\n\n            {{-- Le dernier --}}\n            <a {!! $current == $last_page ? \'aria-current="page" class="active"\' : \'\' !!} href="{{ $paginator->url($last_page) }}">{{ $last_page }}</a>\n\n        @endif\n\n\n\n        {{-- Next Page Link --}}\n        @if ($paginator->hasMorePages())\n            <a class="next arrow" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="Page suivante">{{ svg(\'coolicon-chevron-right\') }}</a>\n        @endif\n    </div>\n@endif\n\n\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Possibilit\xe9 de publier le template de pagination par d\xe9faut pour repartir from scratch : ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan vendor:publish --tag=laravel-pagination"))))}d.isMDXComponent=!0}}]);