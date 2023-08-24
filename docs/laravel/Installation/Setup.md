---
title: Step by step
---


# Installer une application laravel jolimardi

Ce guide permet de créer une application Laravel Joli Mardi complète.



## Plugins Laravel

Suite de plugin, référez vous à notre documentation dans la catégorie `Packages` pour avoir plus à leur propos.


### Nova helpers

Tout les packages concernant Nova.

Gestion de media avec : 
```bash
composer require ebess/advanced-nova-media-library
```

---

Gestion de field multi relationnel avec : 
```bash
composer require benjacho/belongs-to-many-field
```
Puis 
```bash
php artisan vendor:publish --tag=nova-media-library
```

--- 

Ajout d'autres langues pour Nova avec :
```bash
composer require coderello/laravel-nova-lang
```
Et 
```bash
php artisan nova-lang:publish fr
```

---

Améliore la gestion vidéo : 
```bash
composer require m-a-k-o/youtube-field
```

---

Editeur de texte dans Nova :
```bash
composer require mostafaznv/nova-ckeditor
```
Et 
```bash
php artisan vendor:publish --provider="Mostafaznv\NovaCkEditor\FieldServiceProvider"
```

## Jolimardi plugins

Les plugins ajouter par JoliMardi, rendez-vous sur la documentation du package pour plus d'informations.



## @TODO 
- Supprimer Images et Videos related avec ckeditor, gérer par media-librairy
- Améliorer laravel-mysections erreur stabilité, ajouter une version
- AJouter publishables pour jolimardi/laravel-flash pour le composant `<x-flash-messages />`