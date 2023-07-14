# Card

Ces classes CSS sont utilisées pour créer des mises en page de cartes et de listes.

## Classe Listing

La classe .listing est utilisée pour organiser les éléments en grille. Par défaut, elle crée une grille de trois colonnes.

<div className="html-preview">
    <div className="listing">
        <div className="card">Carte 1</div>
        <div className="card">Carte 2</div>
        <div className="card">Carte 3</div>
    </div>
</div>

```html title="HTML"
<div class="listing">
    <div class="card">Carte 1</div>
    <div class="card">Carte 2</div>
    <div class="card">Carte 3</div>
</div>
```

## Classes de Grilles Supplémentaires

Deux autres classes, .listing-4 et .listing-2, sont utilisées pour créer des grilles de quatre et deux colonnes respectivement.

<div className="html-preview">
    <div className="listing listing-4">
        <div className="card">Carte 1</div>
        <div className="card">Carte 2</div>
        <div className="card">Carte 3</div>
        <div className="card">Carte 4</div>
    </div>
</div>

```html title="HTML"
<div class="listing listing-4">
    <div class="card">Carte 1</div>
    <div class="card">Carte 2</div>
    <div class="card">Carte 3</div>
    <div class="card">Carte 4</div>
</div>
```

## Classe Card

La classe .card est utilisée pour créer une carte avec une ombre, un arrondi et un fond blanc.

<div className="html-preview">
    <div className="listing listing-2">
        <div className="card">
            <div className="card-body">
                <div className="title">Titre de la Carte</div>
                <p>Contenu de la carte...</p>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="title">Titre de la Carte</div>
                <p>Contenu de la carte...</p>
            </div>
        </div>
    </div>
</div>

```html title="HTML"
<div class="card">
    <div class="listing listing-2">
        <div class="card">
            <div class="card-body">
                <div class="title">Titre de la Carte</div>
                <p>Contenu de la carte...</p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="title">Titre de la Carte</div>
                <p>Contenu de la carte...</p>
            </div>
        </div>
    </div>
</div>
```
