# Flex

Les classes CSS suivantes sont utilisées pour configurer les propriétés flex.


## Centrer les éléments

<div className="html-preview">
  <div className="flex-center flex-border">
    <div className="flex-border">Élément 1</div>
    <div className="flex-border">Élément 2</div>
    <div className="flex-border">Élément 3</div>
  </div>
</div>

```html title="HTML"
<div class="flex-center">
  <div>Élément 1</div>
  <div>Élément 2</div>
  <div>Élément 3</div>
</div>
```
```css title='CSS'
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
```


## Direction des éléments flex

<div className="html-preview">
    <div className="flex flex-row flex-border">
        <div className="flex-border">Élément 1</div>
        <div className="flex-border">Élément 2</div>
    </div>
    <div className="flex flex-row-reverse flex-border">
        <div className="flex-border">Élément 1</div>
        <div className="flex-border">Élément 2</div>
    </div>
    <div className="flex flex-column flex-border">
        <div className="flex-border">Élément 1</div>
        <div className="flex-border">Élément 2</div>
    </div>
    <div className="flex flex-column-reverse flex-border">
        <div className="flex-border">Élément 1</div>
        <div className="flex-border">Élément 2</div>
    </div>
</div>

```html title="HTML"
    <div class="flex flex-row">Élément en flex row</div>
    <div class="flex flex-row-reverse">Élément en flex row reverse</div>
    <div class="flex flex-column">Élément en flex column</div>
    <div class="flex flex-column-reverse">Élément en flex column reverse</div>
```
```css title='CSS'
.flex {
  display: flex !important;
}
.flex-row-reverse {
    flex-direction: row-reverse;
}
.flex-row {
    flex-direction: row;
}
.flex-column-reverse {
    flex-direction: column-reverse;
}
.flex-column {
    flex-direction: column;
}
```

## Alignement et justification des éléments flex

<div className="html-preview">
  <div className="flex justify-center align-center flex-border">
    <div className="flex-border">Centre</div>
    <div className="flex-border">Centre</div>
  </div>
  <div className="flex justify-start align-start flex-border">
    <div className="flex-border">Début</div>
    <div className="flex-border">Début</div>
  </div>
  <div className="flex justify-end align-end flex-border">
    <div className="flex-border">Fin</div>
    <div className="flex-border">Fin</div>
  </div>
  <div className="flex justify-stretch align-stretch flex-border" style={{height: "200px"}}>
    <div className="flex-border">Étiré</div>
    <div className="flex-border">Étiré</div>
  </div>
</div>

```html title="HTML"
    <div class="flex justify-center align-center">
        <div>Centre</div>
        <div>Centre</div>
    </div>
    <div class="flex justify-start align-start">
        <div>Début</div>
        <div>Début</div>
    </div>
    <div class="flex justify-end align-end">
        <div>Fin</div>
        <div>Fin</div>
    </div>
    <div class="flex justify-stretch align-stretch">
        <div>Étiré</div>
        <div>Étiré</div>
    </div>
```
```css title='CSS'
.justify-center {
    justify-content: center;
}
.justify-start {
    justify-content: start;
}
.justify-end {
    justify-content: flex-end;
}
.justify-stretch {
    justify-content: stretch;
}
.align-center {
    align-items: center;
}
.align-start {
    align-items: start;
}
.align-end {
    align-items: flex-end;
}
.stretch, .align-stretch {
    align-items: stretch;
}
```

## Affichage

<div className="html-preview">
  <div className="flex flex-border">Élément flex</div>
  <div className="inline flex-border">Élément inline</div>
  <div className="inline-block flex-border">Élément inline-block</div>
  <div className="inline-flex flex-border">Élément inline-flex</div>
  <div className="block flex-border">Élément block</div>
</div>

```html title="HTML"
    <div class="flex">Élément en flex</div>
    <div class="inline">Élément inline</div>
    <div class="inline-block">Élément inline-block</div>
    <div class="inline-flex">Élément inline-flex</div>
    <div class="block">Élément block</div>
```
```css title='CSS'
.inline {
    display: inline !important;
}
.inline-block {
    display: inline-block !important;
}
.inline-flex {
    display: inline-flex !important;
}
.block {
    display: block !important;
}
```

## Propriétés supplémentaires

<div className="html-preview">
  <div className="flex flex-border">
    <div className="flex-fill flex-border">Fill</div>
    <div className="flex-border">Pas de fill</div>
  </div>
  <div className="flex flex-border">
    <div className="flex-fill flex-border">Fill</div>
    <div className="flex-fill flex-border">Fill aussi</div>
  </div>
  <div className="flex flex-border">
    <div className="flex-grow flex-border">Grow</div>
    <div className="flex-border">Pas de grow</div>
  </div>
  <div className="flex flex-wrap flex-border" style={{width: "200px"}}>
    <div className="flex-border" style={{width: "100px"}}>Wrap 1</div>
    <div className="flex-border" style={{width: "100px"}}>Wrap 2</div>
    <div className="flex-border" style={{width: "100px"}}>Wrap 3</div>
  </div>
  <div className="flex flex-gap flex-border">
    <div className="flex-border">Gap 1</div>
    <div className="flex-border">Gap 2</div>
    <div className="flex-border">Gap 3</div>
  </div>
</div>

```html title="HTML"
    <div class="flex-fill">Élément flex-fill</div>
    <div class="grow">Élément grow</div>
    <div class="wrap">Élément wrap</div>
    <div class="gap">Élément gap</div>
```
```css title='CSS'
.flex-fill {
    flex: 1 1 auto !important;
}
.grow, .flex-grow {
    flex-grow: 1;
}
.wrap, .flex-wrap {
    flex-wrap: wrap;
}
.gap, .flex-gap {
    gap: 2px 16px;
}
```

### Liste d'alternatives

- `gap` ou `flex-gap`
- `grow` ou `flex-grow`
- `wrap` ou `flex-wrap`