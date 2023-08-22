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

```bash
php artisan vendor:publish --provider="JoliMardi\MySections\MySectionsServiceProvider"
```
```bash
php artisan migrate
```

Importer le css des sections dans `resources/css/app.css` : 

```css
@import "../../public/vendor/mysections/sections.css";
```

Utiliser `@mySection($data, $key)` pour afficher la section après l'avoir créer dans nova. 

Plus d'information sur la documentation du package : https://github.com/jolimardi/laravel-sections
