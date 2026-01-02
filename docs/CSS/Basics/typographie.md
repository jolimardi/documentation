# Typographie

## Paragraphes

Les classes CSS suivantes sont utilisées pour styler les paragraphes (`<p>`).

<div className="html-preview">
  <p>Ceci est un paragraphe normal.</p>
  <p className="small">Ceci est un petit paragraphe.</p>
  <div className="small">
    <p>Ceci est un autre petit paragraphe dans une div small.</p>
  </div>
  <p className="very-small">Ceci est un très petit paragraphe.</p>
  <p>Ceci est un paragraphe.</p>
  <p>Ceci est un autre paragraphe avec une marge supérieure.</p>
</div>

```html title="HTML"
<p>Ceci est un paragraphe normal.</p>
<p class="small">Ceci est un petit paragraphe.</p>
<div class="small">
  <p>Ceci est un autre petit paragraphe.</p>
</div>
<p class="very-small">Ceci est un très petit paragraphe.</p>
// p + p
<p>Ceci est un paragraphe.</p>
<p>Ceci est un autre paragraphe avec une marge supérieure.</p>
```

### Liste de toutes les classe lié à `p`

- `p`
- `p.small`
- `.small p`
- `p.very-small`
- `p + p`

---

## Titres 

Les classes CSS suivantes sont utilisées pour styler les titres.

<div className="html-preview">
  <h1 className="h1">Ceci est un titre de niveau 1</h1>
  <h2 className="h2">Ceci est un titre de niveau 2</h2>
  <h3 className="h3">Ceci est un titre de niveau 3</h3>
  <h4 className="h4">Ceci est un titre de niveau 4</h4>
  <h5 className="h5">Ceci est un sous-titre</h5>
</div>

```html title="HTML"
<h1 class="h1">Ceci est un titre de niveau 1</h1>
<h2 class="h2">Ceci est un titre de niveau 2</h2>
<h3 class="h3">Ceci est un titre de niveau 3</h3>
<h4 class="h4">Ceci est un titre de niveau 4</h4>
<h5 class="h5">Ceci est un sous-titre</h5>
```

### Liste de toutes les classes

- `.h1`
- `.h2`
- `.h3`
- `.h4`
- `.h5, .subheading`