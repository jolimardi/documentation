# Couleurs et Dégradés

Ces classes CSS définissent une palette de couleurs et des gradients utilisables. 

## Couleurs de base

Il est important de noter que ces classes ne sont pas directement utilisables dans le code HTML, elles servent de variables CSS à utiliser dans les styles des éléments.

<div className="html-preview" style={{margin: "0", padding: "0"}}>
    <div style={{background: "var(--black)"}}>
        <span style={{color: "var(--white)"}}>Texte en blanc sur un fond noir</span>
    </div>
    <div style={{background: "var(--blue)"}}>
        <span style={{color: "var(--white)"}}>Texte en blanc sur un fond bleu</span>
    </div>
</div>

```html title="HTML"
<div style="background: var(--black);">
    <span style="color: var(--white);">Texte en blanc sur un fond noir</span>
</div>
<div style="background: var(--blue);">
    <span style="color: var(--white);">Texte en blanc sur un fond bleu</span>
</div>
```

### Autres variables de couleur

- `--black-alt`
- `--black-title`
- `--accent`
- `--accent-alt`
- `--accent-dark`
- `--light-gray`
- `--light-gray-alt`
- `--gray-border`
- `--gray-text`
- `--red`
- `--orange`
- `--green`

## Dégradés

<div className="html-preview" style={{margin: "0", padding: "0"}}>
    <div style={{background: "var(--gradient)", color: "var(--white)"}}>
        <span>Texte en blanc sur un fond gradient</span>
    </div>
</div>

```html title="HTML"
<div style="background: var(--gradient); color: var(--white);">
    <span>Texte en blanc sur un fond gradient</span>
</div>
```

### Autres variables de gradient

- `--gradient-left`
- `--gradient-middle`
- `--gradient-right`
- `--gradient-angle`
- `--gradient-btn`
- `--gradient-section`
