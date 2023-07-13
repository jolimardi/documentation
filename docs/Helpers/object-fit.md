# Object Fit

Les classes d'ajustement de l'objet vous permettent de spécifier comment une image ou une vidéo doivent être redimensionnées pour s'adapter à son conteneur.

## Classes d'ajustement de l'objet

<div className="html-preview">
    <div className="flex gap">
    <div style={{height: "300px", width: "300px"}}>
        <img src="https://images.unsplash.com/photo-1689085383650-13d21072f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Demo" className="object-fit-cover" />
    </div>
    <div style={{height: "300px", width: "300px"}}>
        <img src="https://images.unsplash.com/photo-1689085383650-13d21072f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Demo" className="object-fit-contain" />
    </div>
  </div>
</div>

```html title="HTML"
  <div>
    <img src="your_image" alt="Demo" class="object-fit-cover" />
  </div>
  <div>
    <img src="your_image" alt="Demo" class="object-fit-contain" />
  </div>
```

### Détails des classes 

```css
.cover, .object-fit-cover {
    object-fit: cover;
}
.contain, .object-fit-contain {
    object-fit: contain;
}
```