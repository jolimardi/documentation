---
title: Nova Video Field
--- 

Ce package permet d'ajouter un nouveau field aux resource nova, il permet de récupérer 

## Installation 

```bash title='console'
composer require jolimardi/nova-video-field
```

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

        NovaVideoField::make('Video', 'video'),

        ...
    ]
}
...
```

:::info
Un JSON sera enregistré dans le field "video" du Model
:::

## Vidéos multiples ou limiter à une seule vidéo 

- Ajouter `->mulitple()` au field Nova pour autoriser plusieurs vidéos dans le même champ

```php title='app/Nova/MaResource.php'
public function fields(NovaRequest $request) {
    return [
        ...

        // UNE SEULE vidéo autorisée
        NovaVideoField::make('Vidéo du header', 'header_video')->nullable()->hideFromIndex(),

        // Possibilité de mettre PLUSIEURS vidéos avec ->multiple()
        NovaVideoField::make('Mes viédos', 'videos')->multiple()->nullable()->hideFromIndex(),

        ...
    ]
}
...
```

## Dépendances 

Ce package utilise guzzle pour fonctionner. 

Lien du package : https://github.com/guzzle/guzzle