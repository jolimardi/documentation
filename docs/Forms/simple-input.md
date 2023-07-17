# Simple input

Les classes CSS suivantes vous aident à créer des formulaires. 

Note : Tout les type d'inputs possède les même propriété de base.

## Classe de base pour les formulaires

:::tip
Toujours ajouter la class `label` sur la balise label
:::

:::info
Toujours ajouter la class `label` sur la balise label
:::

:::caution
Toujours ajouter la class `label` sur la balise label
:::

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
    <label class="label">Champ de texte</label>
    <input type="text"/>
    <span class="form-text">Texte d'aide pour ce champ de formulaire (Facultatif)</span>
    <label class="label">Champ de password</label>
    <input type="password"/>
    <input type="submit"/>
</form>
```