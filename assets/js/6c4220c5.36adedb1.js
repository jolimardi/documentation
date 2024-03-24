"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4906],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(8168),o=(t(6540),t(5680));const a={title:"Routes et Base Controller"},s=void 0,l={unversionedId:"laravel/Installation/StepByStep/route-controller",id:"laravel/Installation/StepByStep/route-controller",title:"Routes et Base Controller",description:"Ajouter le namespace pour charger automatiquement les controllers",source:"@site/docs/laravel/Installation/StepByStep/route-controller.md",sourceDirName:"laravel/Installation/StepByStep",slug:"/laravel/Installation/StepByStep/route-controller",permalink:"/documentation/docs/laravel/Installation/StepByStep/route-controller",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Installation/StepByStep/route-controller.md",tags:[],version:"current",frontMatter:{title:"Routes et Base Controller"},sidebar:"laravelSidebar",previous:{title:"Vite.js & app.js",permalink:"/documentation/docs/laravel/Installation/StepByStep/vite-app"},next:{title:"JQuery, FancyBox...",permalink:"/documentation/docs/laravel/Installation/StepByStep/jquery-et-plugins"}},i={},u=[{value:"Ajouter le namespace pour charger automatiquement les controllers",id:"ajouter-le-namespace-pour-charger-automatiquement-les-controllers",level:2},{value:"Configurer BaseController et IndexController",id:"configurer-basecontroller-et-indexcontroller",level:2},{value:"Configurer les routes",id:"configurer-les-routes",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"ajouter-le-namespace-pour-charger-automatiquement-les-controllers"},"Ajouter le namespace pour charger automatiquement les controllers"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Providers/RouteServicesProvider.php"',title:'"/app/Providers/RouteServicesProvider.php"'},"...\nclass RouteServiceProvider extends ServiceProvider {...\n    public function boot(): void {\n\n        $this->routes(function () {\n            Route::middleware('web')\n                // highlight-start\n                ->namespace('App\\Http\\Controllers')\n                // highlight-end\n                ->group(base_path('routes/web.php'));\n        });\n    }\n}\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Ajouter ",(0,o.yg)("inlineCode",{parentName:"p"},"->namespace('App\\Http\\Controllers')")," est n\xe9cessaire pour que syntaxe courte ",(0,o.yg)("inlineCode",{parentName:"p"},"IndexController@home")," des routes fonctionne.")),(0,o.yg)("h2",{id:"configurer-basecontroller-et-indexcontroller"},"Configurer BaseController et IndexController"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Http/Controllers/BaseController.php"',title:'"/app/Http/Controllers/BaseController.php"'},"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Foundation\\Auth\\Access\\AuthorizesRequests;\nuse Illuminate\\Foundation\\Validation\\ValidatesRequests;\nuse Illuminate\\Routing\\Controller as LaravelController;\nuse Illuminate\\Support\\Facades\\View;\nuse JoliMardi\\Metas\\Services\\MetasService;\n\nclass BaseController extends LaravelController {\n    use AuthorizesRequests, ValidatesRequests;\n\n    public function __construct() {\n        // Chargement des variables globales utilisables dans toutes les vues, et overridables dans les controllers\n        View::share('title', MetasService::getTitle());\n        View::share('description', MetasService::getDescription());\n        View::share('og_image', '/img/example.jpg');\n    }\n}\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Penser \xe0 cr\xe9er les vues correspondantes \xe0 chaque action, dans ",(0,o.yg)("inlineCode",{parentName:"p"},"/ressources/views/mapage.blade.php")," par exemple, ou dans un sous-dossier avec la syntaxe ",(0,o.yg)("inlineCode",{parentName:"p"},"return view('pages-editos.mapage')")," pour la vue situ\xe9e dans ",(0,o.yg)("inlineCode",{parentName:"p"},"/ressources/views/pages-editos/mapage.blade.php"),";")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="/app/Http/Controllers/IndexController.php"',title:'"/app/Http/Controllers/IndexController.php"'},"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Foundation\\Auth\\Access\\AuthorizesRequests;\nuse Illuminate\\Foundation\\Validation\\ValidatesRequests;\nuse Illuminate\\Http\\Request;\n//use App\\Models\\ContactMessage;\nuse JoliMardi\\Flash\\Flash;\n\nclass IndexController extends BaseController {\n    use AuthorizesRequests, ValidatesRequests;\n\n    public function home() {\n        //Flash::message('success', 'Une erreur s\\'est produite lors de l\\'envoi de votre message. Veuillez r\xe9essayer plus tard.');\n        return view('home');\n    }\n    \n    public function soins() {\n        return view('soins');\n    }\n\n    public function contact() {\n        return view('contact');\n    }\n\n    /* Pour plus tard \n    public function send(Request $request) {\n        // Validation\n        $request->validate([\n            'name' => 'required|min:3|max:255',\n            'email' => 'required|email',\n            'message' => 'required|min:5'\n        ]);\n\n        $params = [\n            'name' => $request->name,\n            'email' => $request->email,\n            'message' => $request->message\n        ];\n\n        $contactMessage = new ContactMessage;\n        $contactMessage->name = $request->name;\n        $contactMessage->email = $request->email;\n        $contactMessage->message = $request->message;\n\n        if ($contactMessage->save()) {\n            // Redirection avec flash message\n\n            $sendinBlueService = app(SendinBlueService::class);\n\n            if ($sendinBlueService->sendEmail($request->email, $request->name, $params, 3)) {\n                Flash::message('success', 'Merci pour votre message ! Nous vous r\xe9pondrons dans les plus brefs d\xe9lais.');\n                return back()->withInput();\n            } else {\n                return back()->withInput();\n            }\n        } else {\n            Flash::message('error', 'Une erreur s\\'est produite lors de l\\'envoi de votre message. Veuillez r\xe9essayer plus tard.');\n            return back()->withInput();\n        }\n    }\n    */\n}\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Si erreur ",(0,o.yg)("strong",{parentName:"p"},"Target class ","[IndexController]"," does not exist."),", il faut ajouter ",(0,o.yg)("inlineCode",{parentName:"p"},"->namespace...")," dans RouteServiceProvider.php (voir au-dessus)")),(0,o.yg)("h2",{id:"configurer-les-routes"},"Configurer les routes"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="routes/web.php"',title:'"routes/web.php"'},"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Support\\Facades\\Route;\n\n/* ----------    Index Controller   ---------------------- */\n\nRoute::get('/', 'IndexController@home')->name('home');\n\nRoute::get('/contact', 'IndexController@contact')->name('contact');\nRoute::post('/contact', 'IndexController@send')->name('contact.send'); // Mettre des points permet de filtrer des r\xe8gle splus tard sur admin.* par exemple\n\n// Exemple \xe9ditable\nRoute::get('mon-slug', 'MonController@mon_action')->name('mon_nom_de route'); // dans la vue : `href=\"{{ route('mon_nom_de_route')}}\"`\n")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Exemple plus complet, \xe0 adapter selon le projet :"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="routes/web.php"',title:'"routes/web.php"'},"namespace App\\Http\\Controllers;\n\nuse Illuminate\\Support\\Facades\\Route;\nuse App\\Http\\Controllers\\AdminController;\nuse Illuminate\\Support\\Facades\\Config;\n\n/* ----------    Index Controller   ---------------------- */\n\nRoute::name('home')->get('/', 'IndexController@home');\nRoute::name('contact')->get('contact', 'IndexController@contact');\nRoute::name('contact.send')->post('contact', 'IndexController@send');\n\nRoute::name('team')->get('team', 'IndexController@team');\nRoute::name('comment-ca-marche')->get('comment-ca-marche', 'IndexController@comment_ca_marche');\nRoute::name('mentions-legales')->get('mentions-legales', 'IndexController@mentions_legales');\n\n\n/* ----------    Artistes   ---------------------- */\n\nRoute::name('artists')->get('artistes', 'ArtistController@list');\nRoute::name('artists.view')->get('artistes/{slug}', 'ArtistController@view');\n\n// Exemple de param\xe8tre \"captur\xe9\" dans l'url\nRoute::name('artists.style')->get('artistes-{style}', 'ArtistController@style');\n\n\n\n/* ----------    Articles   ---------------------- */\n\n// Conseils\nRoute::name('posts')->get('conseils', 'PostController@list');\nRoute::name('posts.view')->get('conseils/{slug}', 'PostController@view');\n\n\n\n/* ----------    Admin   ---------------------- */\n\n$admin_prefix = Config::get('app.admin_slug', 'admin');\nRoute::middleware(['auth'])\n    ->prefix($admin_prefix)\n    ->controller(AdminController::class)\n    ->group(function () {\n        Route::get('/', 'dashboard')->name('admin.dashboard');\n        Route::post('/', 'dashboard')->name('admin.filterArtists');\n        Route::get('/logout', 'logout')->name('admin.logout');\n    });\nRoute::name('admin.login')->get($admin_prefix . '/login', 'AdminController@login');\nRoute::name('admin.check-login')->post($admin_prefix . '/check-login', 'AdminController@checkLogin');\n\n")))}m.isMDXComponent=!0}}]);