# Simple input

Les classes CSS suivantes vous aident à créer des formulaires. 

Note : Tout les type d'inputs possède les même propriété de base.

## Classe de base pour les formulaires

La classe `form` définit le style de base pour un formulaire. Elle peut être utilisée directement sur un élément `form`.

<div className="html-preview">
    <form className="form">
        <label className="label">Champ de texte</label>
        <input type="text"/>
        <span class="form-text">Texte d'aide pour ce champ de formulaire (Facultatif)</span>
        <label className="label">Champ de password</label>
        <input type="password"/>
        <input type="submit"/>
    </form>
</div>

```html title="HTML"
<form class="form">
    <label className="label">Champ de texte</label>
    <input type="text"/>
    <span class="form-text">Texte d'aide pour ce champ de formulaire (Facultatif)</span>
    <label className="label">Champ de password</label>
    <input type="password"/>
    <input type="submit"/>
</form>
```