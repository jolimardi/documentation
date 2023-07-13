# Position & Overflow

Les classes de débordement vous permettent de contrôler le comportement d'overflow d'un élément.

## Overflow

<div className="html-preview">
  <div className="overflow-hidden flex-border" style={{height: "50px", width: "200px"}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>
  </div>
  <div className="overflow-x flex-border" style={{height: "50px", width: "200px"}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>
  </div>
  <div className="overflow-y flex-border" style={{height: "50px", width: "200px"}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>
  </div>
</div>

```html title="HTML"
  <div class="overflow-hidden">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>
  </div>
  <div class="overflow-x">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>
  </div>
  <div class="overflow-y">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus justo vitae commodo facilisis. </p>
  </div>
```

### Détails des classes 

```css
.oh, .overflow-hidden {
    overflow: hidden;
}
.overflow-x {
    overflow-x: auto;
}
.overflow-y {
    overflow-y: auto;
}
```

---

## Positionnement

Les classes de positionnement vous permettent de contrôler la position d'un élément sur la page.

### Classes de positionnement



<div className="html-preview" style={{position: "relative", height: "200px"}}>
  <div className="position-relative flex-border" style={{background: "lightblue"}}>
    <p>Element avec position relative</p>
  </div>
  <div className="position-absolute flex-border" style={{background: "lightcoral", top: "50px", left: "50px", opacity: "0.7"}}>
    <p>Elément avec position absolute</p>
  </div>
  <div className="position-initial flex-border" style={{background: "lightgreen"}}>
    <p>Elément avec position initial</p>
  </div>
</div>

```html title="HTML"
  <div class="position-relative">
    <p>Element avec position relative</p>
  </div>
  <div class="position-absolute">
    <p>Elément avec position absolute</p>
  </div>
  <div class="position-initial">
    <p>Elément avec position initial</p>
  </div>
```

### Détails des classes

```css
.relative, .position-relative {
    position: relative;
}
.absolute, .position-absolute {
    position: absolute;
}
.position-initial {
    position: initial;
}
```
