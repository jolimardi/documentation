---
title: NovaYoutubeField
--- 

Ce package permet d'ajouter un nouveau field aux resource nova, il permet de récupérer 

## Installation 

```bash title='console'
composer require jolimardi/nova-youtube-field
```

:::warning
@TODO Ajouter le package a packagist

En attendant récupérer le dossier NovaYoutubeField du dépot jolimardi/k-music-unused et l'ajouter au projet puis éxécuter "composer dump-autoload"
:::

Ajouter vos informations secrète à votre application dans `config/services` et dans votre `.env`: 

```php title='config/services.php'
    return [
        ...
        'youtube' => [
            'api_key' => env('YOUTUBE_API_KEY'),
        ],

        'vimeo' => [
            'token' => env('VIMEO_TOKEN'),
        ]

    ]
```
```bash title='.env'
YOUTUBE_API_KEY=MY_KEY
VIMEO_TOKEN=MY_TOKEN
```

## Utilisation 

```php title='app/Nova/MaResource.php'
...
public function fields(NovaRequest $request) {
    return [
        ...

        NovaYoutubeField::make('Video', 'video'),

        ...
    ]
}
...
```

:::info
Par défaut, le package enregistrera toujours dans la colonne vidéo de la table du model.

Attention également à ce que le provider soit bien enregistrer, pour éviter tout problème on peut éxécuter la commande `composer dump-autoload`
:::

## Customisation 

- Changer le champ de la table dans lequel est sauvegarder les données : 

```php title='app/Nova/MaResource.php'
public function fields(NovaRequest $request) {
    return [
        ...

        NovaYoutubeField::make('MonLabel')
            ->setModelAttribute('autreNomDAttribut'),

        ...
    ]
}
...
```

## Dépendances 

Ce package utilise guzzle pour fonctionner. 

Lien du package : https://github.com/guzzle/guzzle