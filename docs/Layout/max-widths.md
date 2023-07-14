
# Max-widths

Ces classes CSS permettent de contrôler la largeur maximale des éléments.

## Classe de base

La classe `.max-width` défini une largeur maximale pour un élément.

<div className="html-preview">
    <div className="max-width" style={{ background: "lightblue"}}>
        <p>Max-width</p>
    </div>
    <div className="max-width-small" style={{ background: "lightblue"}}>
        <p>Max-width-small</p>
    </div>
</div>

```html title="HTML"
<div class="max-width">
    <p>Ce texte est contenu dans une div avec une largeur maximale.</p>
</div>
```

### Détails 

```css
:root{
    --max-width: 95ch;
    --max-width-small: 78ch;
    --max-width-large: 130ch;
}
```