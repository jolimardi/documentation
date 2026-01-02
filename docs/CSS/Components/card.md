# Card

Ces classes CSS sont utilisées pour créer des mises en page de cartes et de listes.

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

## Classe Listing

La classe .listing est utilisée pour organiser les éléments en grille. Par défaut, elle crée une grille de trois colonnes.

<div className="html-preview">
    <div className="listing">
        <a href="https://yohansati.com/artistes/abstract-harmony" className="artist card">
            <div className="thumbnail bg-cover ratio-169" style={{ backgroundImage: "url('https://yohansati.com/storage/1/conversions/abstral-official-fnYHoNUJUNQ-unsplash-thumb.jpg')" }}>
            </div>
            <div className="card-body">
                <div className="title">Abstract Harmony</div>
                <div className="style">Concert · Live</div>
            </div>
        </a>
        <a href="https://yohansati.com/artistes/abstract-harmony" className="artist card">
            <div className="thumbnail bg-cover ratio-169" style={{ backgroundImage: "url('https://yohansati.com/storage/3/conversions/glenn-van-de-wiel-z0UWZON4a2s-unsplash-thumb.jpg')" }}>
            </div>
            <div className="card-body">
                <div className="title">Abstract Harmony</div>
                <div className="style">Concert · Live</div>
            </div>
        </a>
        <a href="https://yohansati.com/artistes/abstract-harmony" className="artist card">
            <div className="thumbnail bg-cover ratio-169" style={{ backgroundImage: "url('https://yohansati.com/storage/4/conversions/hans-vivek-By96LAr-34o-unsplash-thumb.jpg')" }}>
            </div>
            <div className="card-body">
                <div className="title">Abstract Harmony</div>
                <div className="style">DJ</div>
            </div>
        </a>
    </div>
</div>

```html title="HTML"
<div class="listing">

    <a href="#" class="artist card">
        <div class="thumbnail bg-cover ratio-169" style="background-image: url('image.jpg')">
        </div>
        <div class="card-body">
            <div class="title">Abstract Harmony</div>
            <div class="style">Concert · Live</div>
        </div>
    </a>

    <a href="#" class="artist card">
        <div class="thumbnail bg-cover ratio-169" style="background-image: url('image.jpg')">
        </div>
        <div class="card-body">
            <div class="title">Abstract Harmony</div>
            <div class="style">Concert · Live</div>
        </div>
    </a>

    <a href="#" class="artist card">
        <div class="thumbnail bg-cover ratio-169" style="background-image: url('image.jpg')">
        </div>
        <div class="card-body">
            <div class="title">Abstract Harmony</div>
            <div class="style">Concert · Live</div>
        </div>
    </a>

</div>
```

## Classes de Grilles Supplémentaires

Deux autres classes, .listing-4 et .listing-2, sont utilisées pour créer des grilles de quatre et deux colonnes respectivement.

<div className="html-preview">
    <div className="listing listing-4">
        <a href="https://yohansati.com/artistes/abstract-harmony" className="artist card">
            <div className="thumbnail bg-cover ratio-169" style={{ backgroundImage: "url('https://yohansati.com/storage/1/conversions/abstral-official-fnYHoNUJUNQ-unsplash-thumb.jpg')" }}>
            </div>
            <div className="card-body">
                <div className="title">Abstract Harmony</div>
                <div className="style">Concert · Live</div>
            </div>
        </a>
        <a href="https://yohansati.com/artistes/abstract-harmony" className="artist card">
            <div className="thumbnail bg-cover ratio-169" style={{ backgroundImage: "url('https://yohansati.com/storage/3/conversions/glenn-van-de-wiel-z0UWZON4a2s-unsplash-thumb.jpg')" }}>
            </div>
            <div className="card-body">
                <div className="title">Abstract Harmony</div>
                <div className="style">Concert · Live</div>
            </div>
        </a>
        <a href="https://yohansati.com/artistes/abstract-harmony" className="artist card">
            <div className="thumbnail bg-cover ratio-169" style={{ backgroundImage: "url('https://yohansati.com/storage/4/conversions/hans-vivek-By96LAr-34o-unsplash-thumb.jpg')" }}>
            </div>
            <div className="card-body">
                <div className="title">Abstract Harmony</div>
                <div className="style">DJ</div>
            </div>
        </a>
        <a href="https://yohansati.com/artistes/abstract-harmony" className="artist card">
            <div className="thumbnail bg-cover ratio-169" style={{ backgroundImage: "url('https://yohansati.com/storage/6/conversions/wesley-tingey-mn9zAs9gYXQ-unsplash-thumb.jpg')" }}>
            </div>
            <div className="card-body">
                <div className="title">Abstract Harmony</div>
                <div className="style">DJ</div>
            </div>
        </a>
    </div>
</div>

```html title="HTML"
<div class="listing listing-4">

    <a href="#" class="artist card">
        <div class="thumbnail bg-cover ratio-169" style="background-image: url('image.jpg')">
        </div>
        <div class="card-body">
            <div class="title">Abstract Harmony</div>
            <div class="style">Concert · Live</div>
        </div>
    </a>

    <a href="#" class="artist card">
        <div class="thumbnail bg-cover ratio-169" style="background-image: url('image.jpg')">
        </div>
        <div class="card-body">
            <div class="title">Abstract Harmony</div>
            <div class="style">Concert · Live</div>
        </div>
    </a>

    <a href="#" class="artist card">
        <div class="thumbnail bg-cover ratio-169" style="background-image: url('image.jpg')">
        </div>
        <div class="card-body">
            <div class="title">Abstract Harmony</div>
            <div class="style">Concert · Live</div>
        </div>
    </a>

    <a href="#" class="artist card">
        <div class="thumbnail bg-cover ratio-169" style="background-image: url('image.jpg')">
        </div>
        <div class="card-body">
            <div class="title">Abstract Harmony</div>
            <div class="style">Concert · Live</div>
        </div>
    </a>

</div>
```

