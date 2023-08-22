---
title: Jolimardi/Laravel-flash
---

### Flash

```bash
composer require jolimardi/laravel-flash:dev-master
```
> `:dev-main` permet d'outre-passer la vérification de stabilité pour le moment.

Ajouter l'alias personnalisé dans `config/app.php` -> `aliases`:

```php
'MyFlash' => JoliMardi\Flash\Flash::class,
```

Utiliser dans un controlleur `Flash::success('Ceci est un message de succès');`.

> Retrouvez tout les types de message dans la documentation du package : https://github.com/jolimardi/laravel-flash