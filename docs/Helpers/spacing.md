# Spacing

Les classes d'espacement vous permettent de contrôler les marges et les espaces de remplissage d'un élément. Base de 16 pixels.

```css title="Exemple générique"
.mt{
    margin-top: 16px;
}
.mb{
    margin-bottom: 16px;
}
.pt{
    padding-top: 16px;
}
.pb{
    padding-bottom: 16px;
}
```

## Marge automatique

<div className="html-preview">
    <div  className="flex-border mx-auto" style={{background: "lightblue", width: "60%"}}>
        <p>Element avec une marge automatique</p>
    </div>
</div>

```html title="HTML"
  <div class="mx-auto">
    <p>Element avec une marge automatique</p>
  </div>
```

## Pas de marge

<div className="html-preview flex-border" style={{margin: "0", padding: "0"}}>
    <div style={{background: "lightblue"}}>
        <p className="no-mt">Element sans marge en haut</p>
    </div>
    <div style={{background: "lightcoral"}}>
        <p className="no-mb">Element sans marge en bas</p>
    </div>
    <div style={{background: "lightgreen"}}>
        <p className="no-my">Element sans marge verticale</p>
    </div>
    <div style={{background: "lightyellow"}}>
        <p className="no-mx">Element sans marge horizontale</p>
    </div>
</div>

```html title="HTML"
    <div>
        <p class="no-mt">Element sans marge en haut</p>
    </div>
    <div>
        <p class="no-mb">Element sans marge en bas</p>
    </div>
    <div>
        <p class="no-my">Element sans marge verticale</p>
    </div>
    <div>
        <p class="no-mx">Element sans marge horizontale</p>
    </div>
```

## Marge définie

<div className="html-preview flex-border" style={{margin: "0", padding: "0"}}>
    <div className="mt" style={{background: "lightblue"}}>
        <span>Element avec une marge en haut (mt)</span>
    </div>
    <div className="mb" style={{background: "lightcoral"}}>
        <span>Element avec une marge en bas (mb)</span>
    </div>
</div>

```html title="HTML"
    <div class="mt">
        <span>Element avec une marge en haut (mt)</span>
    </div>
    <div class="mb">
        <span>Element avec une marge en bas (mb)</span>
    </div>
```

## Pas de padding

<div className="html-preview" style={{margin: "0", padding: "0"}}>
    <div className="no-p" style={{background: "lightblue"}}>
        <p style={{margin: "0", padding: "0"}}>Élément sans padding</p>
    </div>
</div>

```html title="HTML"
    <p className="no-p">Élément sans padding</p>
```

### Liste des classes supplémentaire 

- `no-pt` : no padding-top
- `no-pb` : no padding-bottom
- `no-px` : no padding horizontal
- `no-py` : no padding vertical


## Padding définie

<div className="html-preview" style={{margin: "0", padding: "0"}}>
    <div className="pt" style={{background: "lightblue"}}>
        <span>Élément avec un padding en haut</span>
    </div>
    <div className="pb" style={{background: "lightcoral"}}>
        <span>Élément avec un padding en bas</span>
    </div>
</div>

```html title="HTML"
    <div class="pt">
        <span>Élément avec un padding en haut</span>
    </div>
    <div class="pb">
        <span>Élément avec un padding en bas</span>
    </div>
```