# Sections

Les classes CSS suivantes vous permettent de styliser les sections.

## Classe de base

La classe `section` fournit le style de base pour les sections.

<div className="html-preview">
    <div className="section">
        <h1>Titre de la section</h1>
        <p>Contenu de la section</p>
    </div>
</div>

```html title="HTML"
    <div class="section">
        <h1>Titre de la section</h1>
        <p>Contenu de la section</p>
    </div>
```

## Couleurs de fond d'une section 

<div className="html-preview" style={{padding: "3.8em 0px", background: "var(--light-gray)"}}>
    <div className="section gray">
        <h1>Titre de la section</h1>
        <p>Contenu de la section</p>
    </div>
</div>

```html title="HTML"
    <div class="section gray">
        <h1>Titre de la section</h1>
        <p>Contenu de la section</p>
    </div>
```

### Autres couleurs 

- `gray-alt`
- `blue`

### Marge de la section

- `margin-top` : Augmente la marge supérieure de la section.
- `padding-top` : Augmente le padding supérieur de la section.
- `no-padding-bottom` : Supprime le padding inférieur de la section.
- `full-height` : Fait de la section un élément en hauteur pleine avec un alignement centralisé.