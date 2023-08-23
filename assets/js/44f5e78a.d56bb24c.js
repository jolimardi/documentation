"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,v=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(v,s(s({ref:t},u),{},{components:n})):a.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Cr\xe9er un formulaire basique de A \xe0 Z"},s=void 0,i={unversionedId:"laravel/Features/create-form",id:"laravel/Features/create-form",title:"Cr\xe9er un formulaire basique de A \xe0 Z",description:"Ici, nous allons ajouter un formulaire de contact \xe0 un projet laravel neuf, de A \xe0 Z.",source:"@site/docs/laravel/Features/create-form.md",sourceDirName:"laravel/Features",slug:"/laravel/Features/create-form",permalink:"/documentation/docs/laravel/Features/create-form",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/laravel/Features/create-form.md",tags:[],version:"current",frontMatter:{title:"Cr\xe9er un formulaire basique de A \xe0 Z"},sidebar:"laravelSidebar",previous:{title:"Ajouter des form-component",permalink:"/documentation/docs/laravel/Features/laravel-form-components"}},o={},p=[{value:"Pr\xe9paration",id:"pr\xe9paration",level:2},{value:"Pr\xe9parer le Model",id:"pr\xe9parer-le-model",level:3},{value:"Ajouter la migration",id:"ajouter-la-migration",level:3},{value:"Installer Guzzle",id:"installer-guzzle",level:3},{value:"Installer jolimardi/laravel-flash",id:"installer-jolimardilaravel-flash",level:3},{value:"Installer Protonemedia/laravel-form-components",id:"installer-protonemedialaravel-form-components",level:3},{value:"Importer le css li\xe9 aux composants",id:"importer-le-css-li\xe9-aux-composants",level:3},{value:"Ajouter les fichiers au projet",id:"ajouter-les-fichiers-au-projet",level:4},{value:"Importer le css dans le projet",id:"importer-le-css-dans-le-projet",level:4},{value:"Ajouter le service Brevo (SendInBlue)",id:"ajouter-le-service-brevo-sendinblue",level:3},{value:"Utiliser le service",id:"utiliser-le-service",level:2},{value:"Pr\xe9parer les routes",id:"pr\xe9parer-les-routes",level:3},{value:"Cr\xe9er le formulaire",id:"cr\xe9er-le-formulaire",level:3},{value:"Param\xe9trer le controlleur",id:"param\xe9trer-le-controlleur",level:3},{value:"Fin",id:"fin",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ici, nous allons ajouter un formulaire de contact \xe0 un projet laravel neuf, de A \xe0 Z. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Display du formulaire"),(0,r.kt)("li",{parentName:"ul"},"Ajout de protonemedia/laravel-form-components"),(0,r.kt)("li",{parentName:"ul"},"Ajout de Brevo pour l'envoi de mail"),(0,r.kt)("li",{parentName:"ul"},"Migration pour stocker les messages"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Si vous avez suivi l'ajout d'autre ",(0,r.kt)("inlineCode",{parentName:"p"},"Features")," de cette documentation, il se peut que vous ayez d\xe9j\xe0 effectuer un partie de ce tutoriel. "),(0,r.kt)("p",{parentName:"admonition"},"Notament en ayant suivi ",(0,r.kt)("inlineCode",{parentName:"p"},"Features/Protonemedia/laravel-form-components"))),(0,r.kt)("h2",{id:"pr\xe9paration"},"Pr\xe9paration"),(0,r.kt)("h3",{id:"pr\xe9parer-le-model"},"Pr\xe9parer le Model"),(0,r.kt)("p",null,"On commence par ajouter le model qui nous servira \xe0 stocker les messages : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"php artisan make:model ContactMessage\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='app/Models/ContactMessage.php'",title:"'app/Models/ContactMessage.php'"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass ContactMessage extends Model {\n    use HasFactory;\n}\n")),(0,r.kt)("h3",{id:"ajouter-la-migration"},"Ajouter la migration"),(0,r.kt)("p",null,"La migration permettra de stocker les messages envoy\xe9 m\xeame si il y a eu une erreur lors de l'utilisation du service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"php artisan make:migration create_contact_messages_table\n")),(0,r.kt)("p",null,"Puis ajouter les colonnes de la table :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='database/migrations/YYYY_MM_DD_hhmmss_create_contact_messages_table.php'",title:"'database/migrations/YYYY_MM_DD_hhmmss_create_contact_messages_table.php'"},"<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration {\n    /**\n     * Run the migrations.\n     */\n    public function up(): void {\n        Schema::create('contact_messages', function (Blueprint $table) {\n            $table->id();\n            $table->string('name')->nullable();\n            $table->string('email')->nullable();\n            $table->text('message')->nullable();\n            $table->timestamps();\n        });\n    }\n\n    /**\n     * Reverse the migrations.\n     */\n    public function down(): void {\n        Schema::dropIfExists('contact_messages');\n    }\n};\n")),(0,r.kt)("p",null,"Ex\xe9cutez : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"php artisan migrate\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"V\xe9rifier bien que votre .env est bien r\xe9gl\xe9 pour vous connecter \xe0 votre base de donn\xe9es.")),(0,r.kt)("h3",{id:"installer-guzzle"},"Installer Guzzle"),(0,r.kt)("p",null,"Retrouver les d\xe9tails du package sur sa page d\xe9di\xe9 : ",(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/guzzlehttp/guzzle"},"https://packagist.org/packages/guzzlehttp/guzzle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='console'",title:"'console'"},"composer require guzzlehttp/guzzle\n")),(0,r.kt)("p",null,"Puis l'importer dans le fichier de service :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='app/Services/SendInBlueService.php'",title:"'app/Services/SendInBlueService.php'"},"use GuzzleHttp\\Client;\nuse GuzzleHttp\\Exception\\RequestException;\n")),(0,r.kt)("h3",{id:"installer-jolimardilaravel-flash"},"Installer jolimardi/laravel-flash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="console"',title:'"console"'},'composer require jolimardi/laravel-flash:dev-master\n\nphp artisan vendor:publish --provider="JoliMardi\\Flash\\FlashServiceProvider"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},":dev-main")," permet d'outre-passer la v\xe9rification de stabilit\xe9 pour le moment.\n",(0,r.kt)("inlineCode",{parentName:"p"},"vendor:publish")," permet d'avoir acc\xe8s au template qui affiche les messages dans ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/views/vendor/flash-messages/")," ")),(0,r.kt)("p",null,"Ajouter l'alias personnalis\xe9 dans ",(0,r.kt)("inlineCode",{parentName:"p"},"config/app.php")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"aliases"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config/app.php"',title:'"config/app.php"'},"    'aliases' => Facade::defaultAliases()->merge([\n        // highlight-start\n        'MyFlash' => JoliMardi\\Flash\\Flash::class,\n        // highlight-end\n    ])->toArray(),\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On \xe9vite d'avoir Flash comme alias \xe0 cause de la facade Flash de Laravel par d\xe9faut"),(0,r.kt)("p",{parentName:"admonition"},"Cet alias s'utilise dans la vue uniquement. Il n'y a pas besoin de la modifier par d\xe9faut")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Plus de d\xe9tails sur la page d\xe9di\xe9 \xe0 ce package : ",(0,r.kt)("a",{parentName:"p",href:"/documentation/docs/laravel/Features/jm-flash"},"jolimardi/laravel-flash"))),(0,r.kt)("h3",{id:"installer-protonemedialaravel-form-components"},"Installer Protonemedia/laravel-form-components"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Se rendre sur la page d\xe9di\xe9 au packages et suivre l'installation compl\xe8te cette fois-ci, ici : ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/documentation/docs/laravel/Features/laravel-form-components"},"Protonemedia/laravel-form-components")))),(0,r.kt)("p",null,"Vous devriez maintenant avoir :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vos composants de formulaire dans ",(0,r.kt)("inlineCode",{parentName:"li"},"resources/views/vendor/form-components/jolimardi/mes-fichiers.blade.php")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'framework' => 'jolimardi'")," setup dans ",(0,r.kt)("inlineCode",{parentName:"li"},"config/form-components.php"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Il n'est pas conseiller de modifier les composants sans avoir connaissance du d\xe9p\xf4t : ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/jolimardi/jolimardi-css"},"jolimardi/jolimardi-css")))),(0,r.kt)("h3",{id:"importer-le-css-li\xe9-aux-composants"},"Importer le css li\xe9 aux composants"),(0,r.kt)("p",null,'Ayant installer des composants blade pour formulaire custom, on utilisera \xe9galement du custom css de la "librairie" ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/jolimardi/jolimardi-css"},"jolimardi/jolimardi-css"))),(0,r.kt)("h4",{id:"ajouter-les-fichiers-au-projet"},"Ajouter les fichiers au projet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Premi\xe8re m\xe9thode ")),(0,r.kt)("p",null,"Download le zip du repo et extraire le dossier dans ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/css")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Deuxi\xe8me m\xe9thode ")),(0,r.kt)("p",null,"Cloner le repo dans ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/css")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Troisi\xe8me m\xe9thode ")),(0,r.kt)("p",null,"Ajouter en tant que submodule dans ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/css"),", avec Fork par exemple ou en ajoutant un .gitmodules \xe0 la racine du projet : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git",metastring:"title='.gitmodules'",title:"'.gitmodules'"},'[submodule "resources/css/jolimardi-css"]\n    path = resources/css/jolimardi-css\n    url = https://github.com/jolimardi/jolimardi-css/\n    update = rebase\n    branch = main\n')),(0,r.kt)("h4",{id:"importer-le-css-dans-le-projet"},"Importer le css dans le projet"),(0,r.kt)("p",null,"Dnas ce tutoriel nos utilisons Vite.js pour g\xe9rer les assets frontend, et qui importe dans le head notre layout notre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"app.css"),". Il faut donc simplement ajouter un import dans celui-ci."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='resources/css/app.css'",title:"'resources/css/app.css'"},'...\n/* Joli Mardi Base CSS */\n@import "jolimardi-css/jolimardi.css";\n...\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Vite est fourni par d\xe9faut dans tout les nouveaux projets Laravel, rendez-vous dans ",(0,r.kt)("inlineCode",{parentName:"p"},"Installation -> StepByStep -> Vite.js et app.js")," pour retrouver notre configuration de Vite.")),(0,r.kt)("h3",{id:"ajouter-le-service-brevo-sendinblue"},"Ajouter le service Brevo (SendInBlue)"),(0,r.kt)("p",null,"On ajoute Brevo qui sera notre gestionnaire externe d'envoi de mail pour ce tutoriel. "),(0,r.kt)("p",null,"D\xe9roulement :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Se rendre sur : ",(0,r.kt)("a",{parentName:"li",href:"https://www.brevo.com/fr/"},"https://www.brevo.com/fr/")),(0,r.kt)("li",{parentName:"ul"},"Cr\xe9er un compte"),(0,r.kt)("li",{parentName:"ul"},"Puis se rendre dans le menu du compte en haut a droite"),(0,r.kt)("li",{parentName:"ul"},"SMTP et API -> Cl\xe9s API"),(0,r.kt)("li",{parentName:"ul"},"G\xe9n\xe9rer un nouvelle clef"),(0,r.kt)("li",{parentName:"ul"},"Enregistrer la clef dans le .env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='.env'",title:"'.env'"},'...\nSENDINBLUE_KEY="MY_API_KEY" # Remplacer par sa propre clef\nSENDINBLUE_FROM_ADDRESS="mon-mail@gmail.com" # On profite d\'\xeatre dans le .env pour ajouter cette ligne \xe9galement.\n...\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cr\xe9er le dossier ",(0,r.kt)("inlineCode",{parentName:"li"},"Services")," dans ",(0,r.kt)("inlineCode",{parentName:"li"},"app/")),(0,r.kt)("li",{parentName:"ul"},"Ajouter un fichier ",(0,r.kt)("inlineCode",{parentName:"li"},"SendInBlue.php")," qui contiendra une simple classe Php"),(0,r.kt)("li",{parentName:"ul"},"Ajouter les lignes ci-dessous au fichier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='app/Services/SendInBlueService.php'",title:"'app/Services/SendInBlueService.php'"},"<?php\n\nnamespace App\\Services;\n\nuse GuzzleHttp\\Client;\nuse JoliMardi\\Flash\\Flash;\nuse GuzzleHttp\\Exception\\RequestException;\n\nclass SendinBlueService {\n    protected $client;\n\n    public function __construct(Client $client) {\n        $this->client = $client;\n    }\n\n    public function sendEmail($to, $to_name, $params, $template_id) {\n\n        if (!env('SENDINBLUE_KEY') || !env('SENDINBLUE_FROM_ADDRESS')) {\n            Flash::message('error', 'Les param\xe8tres SendinBlue ne sont pas configur\xe9s.');\n            return false;\n        }\n\n        $data = [\n            \"sender\" => [\n                \"name\" => \"Yohan sati\",\n                \"email\" => env('SENDINBLUE_FROM_ADDRESS'),\n            ],\n            \"to\" => [\n                [\n                    \"email\" => $to,\n                    \"name\" => $to_name\n                ]\n            ],\n            \"templateId\" => $template_id,\n            \"params\" => $params\n        ];\n\n        try {\n            $response = $this->client->request('POST', 'https://api.sendinblue.com/v3/smtp/email', [\n                'headers' => [\n                    'api-key' => env('SENDINBLUE_KEY'),\n                    'Content-Type' => 'application/json',\n                    'Accept' => 'application/json',\n                ],\n                'json' => $data\n            ]);\n\n            $statusCode = $response->getStatusCode();\n            $content = $response->getBody();\n\n            return $content;\n        } catch (RequestException $e) {\n            // Guzzle throws a RequestException for HTTP protocol errors\n            if ($e->hasResponse()) {\n                $response = $e->getResponse();\n                $responseBodyAsString = $response->getBody()->getContents();\n                Flash::message('error', 'Erreur de requ\xeate HTTP. D\xe9tails : ' . $responseBodyAsString); // Example : Api key is invalid\n            } else {\n                Flash::message('error', 'Erreur de requ\xeate HTTP sans r\xe9ponse du serveur. D\xe9tails : ' . $e->getMessage()); // Example : cURL error 6: Could not resolve host: api.sendinblue.com\n            }\n            return false;\n        } catch (\\Exception $e) {\n            // Catch other exceptions\n            Flash::message('error', 'Erreur Brevo : ' . $e->getMessage()); // Example : variable $data is not defined\n            return false;\n        }\n    }\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Le fichier ne fonctionnera pas encore correctement, nous allons ajouter les packages qu'il utilise par la suite.")),(0,r.kt)("p",null,"Le fichier fonctionne de la mani\xe8re suivante :"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"V\xe9rifie si il y a bien une clef api et une adresse mail d'envoi\nPr\xe9pare les data du mail\nEssaie d'envoyer le mail en utilisant l'api SendInBlue (Brevo)\nR\xe9cup\xe8re les potentiels erreur gr\xe2ce au package GuzzleHTTP/guzzle\nSinon affiche diff\xe9rent type d'erreur en utilisant le packages Jolimardi/Laravel-flash ")),(0,r.kt)("h2",{id:"utiliser-le-service"},"Utiliser le service"),(0,r.kt)("h3",{id:"pr\xe9parer-les-routes"},"Pr\xe9parer les routes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='routes/web.php'",title:"'routes/web.php'"},"// Ajouter ces deux routes pour g\xe9rer la vue et l'envoi du formulaire\nRoute::get('/contact', 'IndexController@contact')->name('contact');\nRoute::post('/contact', 'IndexController@send')->name('contact.send');\n")),(0,r.kt)("h3",{id:"cr\xe9er-le-formulaire"},"Cr\xe9er le formulaire"),(0,r.kt)("p",null,"On ajoute maintenant une nouvelle vue dans notre dossier d\xe9di\xe9 : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='resources/views/contact.blade.php'",title:"'resources/views/contact.blade.php'"},'<div class="container">\n    <h1>Contactez-moi</h1>\n\n    <x-form :action="route(\'contact.send\')">\n\n        <x-form-input name="name" label="Pr\xe9nom & nom" class="first" required />\n\n        <x-form-input type="email" name="email" label="Email" required />\n\n        <x-form-textarea name="message" label="Message" placeholder="Date et heure envisag\xe9es, le nombre de personnes, toute info utile !" required />\n\n\n        <div class="btns">\n            <x-form-submit class="btn-large" />\n        </div>\n    </x-form>\n</div>\n')),(0,r.kt)("h3",{id:"param\xe9trer-le-controlleur"},"Param\xe9trer le controlleur"),(0,r.kt)("p",null,"On pr\xe9pare le controlleur : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='app/Https/Controllers/MonController.php'",title:"'app/Https/Controllers/MonController.php'"},"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\nuse App\\Models\\ContactMessage;\nuse App\\Services\\SendinBlueService;\nuse JoliMardi\\Flash\\Flash;\n\nclass MonController extends Controller {\n    public function contact() {\n        return view('contact'); // view() = resources/view/\n    }\n\n    public function send(Request $request) {\n        // Validation\n        $request->validate([\n            'name' => 'required|min:3|max:255',\n            'email' => 'required|email',\n            'message' => 'required|min:5'\n        ]);\n\n        $params = [\n            'name' => $request->name,\n            'email' => $request->email,\n            'message' => $request->message\n        ];\n\n        $contactMessage = new ContactMessage;\n        $contactMessage->name = $request->name;\n        $contactMessage->email = $request->email;\n        $contactMessage->message = $request->message;\n\n        if ($contactMessage->save()) {\n            // Redirection avec flash message\n\n            $sendinBlueService = app(SendinBlueService::class);\n\n            if ($sendinBlueService->sendEmail($request->email, $request->name, $params, 3)) {\n                Flash::message('success', 'Merci pour votre message ! Nous vous r\xe9pondrons dans les plus brefs d\xe9lais.');\n                return back()->withInput();\n            } else {\n                return back()->withInput();\n            }\n        } else {\n            Flash::message('error', 'Une erreur s\\'est produite lors de l\\'envoi de votre message. Veuillez r\xe9essayer plus tard.');\n            return back()->withInput();\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"fin"},"Fin"),(0,r.kt)("p",null,"Et voici, maintenant vous devriez pouvoir utiliser envoyer et recevoir des mails depuis ce formulaire. "),(0,r.kt)("p",null,"@TODO : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cas fr\xe9quents de probl\xe8me ? .env pas configurer, pas de clef api, erreur de validation ...")))}m.isMDXComponent=!0}}]);