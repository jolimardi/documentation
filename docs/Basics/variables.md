---
title: Variables
---

# Variables

Toutes les variables disponible

## Variables de couleurs

Voici les variables de couleurs disponibles dans notre projet :

<div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '10px',
    padding: '20px',
    backgroundColor: '#282A36',
    borderRadius: '5px 5px 0 0',
    borderBottom: '1px solid #606770',
    fontFamily: 'Monaco, monospace'
}}>
    <span style={{ color: 'var(--white)', textAlign: 'center' }}>Blanc</span>
    <span style={{ color: 'var(--accent)', textAlign: 'center' }}>Accent</span>
    <span style={{ color: 'var(--gray-text)', textAlign: 'center' }}>Texte gris</span>
    <span style={{ color: 'var(--red)', textAlign: 'center' }}>Rouge</span>
    <span style={{ color: 'var(--orange)', textAlign: 'center' }}>Orange</span>
    <span style={{ color: 'var(--green)', textAlign: 'center' }}>Vert</span>
</div>

```html title="HTML"
<div>
  <h2 style="color: var(--blue)">Titre en couleur bleue</h2>
  <p style="color: var(--accent)">Paragraphe en couleur accentuée</p>
</div>
```

Liste de toutes les variables

- `--black`
- `--black-alt`
- `--black-title`
- `--white`
- `--blue`
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

## Variables de titre