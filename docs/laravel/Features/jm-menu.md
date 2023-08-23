---
title: Jolimardi/Laravel-menu
---

### Menu

```bash
composer require jolimardi/laravel-menu
```
Puis
```bash
php artisan vendor:publish --provider="JoliMardi\Menu\MenuServiceProvider"
```

Ajouter le component `<x-menu/>` dans un template blade, là où vous voulez afficher le menu.
Modifier `config/menu.yml` pour ajouter des routes au composant.

:::info 
Attention, les routes (les clés dans le yaml) doivent exister dans les routes Laravel. 
:::

Plus d'information sur la documentation du package : https://packagist.org/packages/jolimardi/laravel-menu