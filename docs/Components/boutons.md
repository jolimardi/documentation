# Boutons

Ces classes CSS sont utilisées pour la mise en page et le style des boutons.

## Classe Btn

La classe .btn est la classe de base pour les boutons. Elle définit les propriétés de base pour tous les boutons, comme le padding, la taille...

<div className="html-preview">
    <button className="btn">Bouton</button>
</div>

```html title="HTML"
    <button class="btn">Bouton</button>
```

### Classes de Boutons Supplémentaires

En plus de la classe .btn, nous avons des classes supplémentaires qui peuvent être utilisées pour appliquer différents styles aux boutons.

- `.btn-primary` : Ce style de bouton est généralement utilisé pour les actions principales sur la page.

- `.btn-secondary` : Ce style de bouton est généralement utilisé pour les actions secondaires sur la page.

- `.btn-gradient` : Ce style de bouton a un gradient linéaire en tant qu'arrière-plan.

<div className="html-preview">
    <button className="btn btn-primary">Bouton Principal</button>
    <button className="btn btn-secondary">Bouton Secondaire</button>
    <button className="btn btn-gradient">Bouton Gradient</button>
    <p></p>
    <button className="btn btn-large btn-gradient">Bouton Large</button>
</div>

```html title="HTML"
    <button class="btn btn-primary">Bouton Principal</button>
    <button class="btn btn-secondary">Bouton Secondaire</button>
    <button class="btn btn-gradient">Bouton Gradient</button>
    <button className="btn btn-large btn-gradient">Bouton Large</button>
```

## Classe Btns

La classe .btns est utilisée pour gérer la disposition des groupes de boutons. Elle définit un margin-top, et organise les boutons en flexbox.

<div className="html-preview">
    <div className="btns">
        <button className="btn btn-primary">Bouton Principal</button>
        <button className="btn btn-secondary">Bouton Secondaire</button>
        <button className="btn btn-gradient">Bouton Gradient</button>
    </div>
</div>

```html title="HTML"
<div class="btns">
    <button class="btn btn-primary">Bouton Principal</button>
    <button class="btn btn-secondary">Bouton Secondaire</button>
    <button class="btn btn-gradient">Bouton Gradient</button>
</div>
```
