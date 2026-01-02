---
title: Ajouter Nova & helpers
--- 

## Nova

### Ajouter le repo privé et ses credentials
```
composer config repositories.nova '{"type": "composer", "url": "https://nova.laravel.com"}' --file composer.json
```

Puis entrer ses credentials pour ne pas avoir à les entrer à chaque fois (adresse mail et clé d'api), cette commande va ajouter auth.json à la racine avec les credentials (ne pas versionner ce fichier).
```
composer config http-basic.nova.laravel.com example@mail.com REMPLACER_PAR_NOVA_KEY
```

### Ensuite, installer Nova

```bash
composer update --prefer-dist
php artisan nova:install
php artisan migrate
```
:::info
 Certaines configuration de database peuvent sortir une erreur `SQLSTATE[42000]: Syntax error or access violation: 1071 La clé est trop longue.` Dans ce cas, ajouter dans `app/Service/AppServiceProvider.php` la ligne suivante dans la fonction boot :
```php
public function boot(): void {
    Schema::defaultStringLength(191);
}
```
:::

:::info
Assurez-vous d'avoir les bonnes infos de connexion à la base de données dans le fichier .env avant le `migrate`
:::

### Ajouter le premier utilisateur

Il faut maintenant ajouter un utilisateur pour pouvoir se connecter au dashboard nova (`http://mon-url.com/nova`) :

```bash
php artisan nova:user
```
Puis suivre les instructions (choix d'un nom, d'un email et d'un mot de passe pour créer l'utilisateur).

## Important, ajouter les emails autorisés

Lorsque l'on n'est plus en environnement `local`, Nova vérifie les adresses mail autorisées, en plus des Nova Users créés. Pour cela, il faut ajouter les emails autorisés dans `app/Providers/NovaServiceProvider.php`, dans la fonction `gate()` :

```php title="/app/Service/NovaServiceProvider.php"
protected function gate(){
    Gate::define('viewNova', function ($user) {
        $authorized_emails_str = ENV('NOVA_AUTHORIZED_EMAILS', 'mon-email@gmail.com, deuxieme-email@gmail.com');
        $authorized_emails = explode(',', $authorized_emails_str);
        $authorized_emails = array_map('trim', $authorized_emails);
        return in_array($user->email, $authorized_emails);
    });
}
```
et en ajoutant dans le `.env` :
``` title="/.env"
NOVA_AUTHORIZED_EMAILS='mon-email@gmail.com, deuxieme-email@gmail.com'
```


## Ajouter le custom CSS

### Créer le fichier css dans /public
```css title="/public/nova_overrides.css"

/* Multiselect - BelongsToMany plugin (add borders) */

.multiselect{
    border-color: rgba(var(--colors-gray-300));
    border-width: 1px;
    border-radius: 4px;
}


/* ---------   CKEditor content ------------ */
.ck.ck-content h1{
    font-weight: 700;
    font-size: 48px;
    line-height: 1.2;
}
.ck.ck-content h2{
    font-weight: 700;
    font-size: 32px;
    line-height: 1.3;
}
.ck.ck-content h3{
    font-weight: 700;
    font-size: 21px;
    line-height: 1.5;
}
.ck.ck-content h4{
    font-weight: 700;
    font-size: 14px;
}
body .ck.ck-reset.ck-editor .ck-editor__editable_inline *{
    font-family: Nunito Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    color: #222;
}
body .ck.ck-reset.ck-editor .ck-editor__editable_inline blockquote, body .ck.ck-reset.ck-editor .ck-editor__editable_inline li, body .ck.ck-reset.ck-editor .ck-editor__editable_inline ol, body .ck.ck-reset.ck-editor .ck-editor__editable_inline p, body .ck.ck-reset.ck-editor .ck-editor__editable_inline ul{
    font-size: 14px !important;
}
```

### Cherger le css au boot de Nova
```php title="/app/Service/NovaServiceProvider.php"
public function boot() {
    parent::boot();

    // Add custom CSS
    Nova::style('nova_overrides', public_path('nova_overrides.css'));
}
```



**Pour plus de détails sur Laravel nova, retrouvez la documentation officielle ici : https://nova.laravel.com/docs/4.0/installation.html**


## Nova helpers

Tout les packages concernant Nova.

Gestion de media avec : 
```bash
composer require ebess/advanced-nova-media-library
```

---

### Gestion de field multi relationnel

```bash
composer require benjacho/belongs-to-many-field
```

#### Utilisation commune 
Exemple : 

```php title='app/Nova/Ma-resource.php'
use Benjacho\BelongsToManyField\BelongsToManyField;

...
class MaResource extends Resource { 
    ...
    public function fields(NovaRequest $request) {
        ...
        BelongsToManyField::make('Role Label', 'roles', 'App\Nova\Role')->optionsLabel('full_role_name'),
        ...
    }
    ...
}
```

--- 

### Ajouter d'autres langues pour Nova
```bash
composer require coderello/laravel-nova-lang
```
Puis
```bash
php artisan nova-lang:publish fr
```

---

### m-a-k-o/youtube-field

Améliore la gestion vidéo : 
```bash
composer require m-a-k-o/youtube-field
```

#### Utilisation commune 

Exemple : 

```php title='app/Nova/Ma-resource.php'
use MAKO\YoutubeField\YoutubeField;

...
class MaResource extends Resource { 
    ...
    public function fields(NovaRequest $request) {
        ...
        YoutubeField::make('Vidéo url', 'video_url')->hideFromIndex(),
        ...
    }
    ...
}
```



---

### CKEditor 

CKEditor est un editeur de texte dans Nova, son installation requiert un peu plus de travail, se rendre sur ["Ajouter Nova CKEditor"](add-ckeditor)



