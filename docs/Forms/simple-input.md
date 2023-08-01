# Simple input

Les classes CSS suivantes vous aident à créer des formulaires.

Note : Tout les type d'inputs possède les même propriété de base.

## Classe de base pour les formulaires

:::tip
Toujours ajouter la class `label` sur la balise label
:::

<div className="html-preview">
    <form style={{ maxWidth: "400px", margin: "2em auto"}}>
        <input type="hidden" name="_token" value="OTQFt40zNd496JX2e0YGzKcCXt4Sq68qkmVSLJYc" />
        <div class="input text first">
            <label className="label" htmlFor="auto_id_name">Nom</label>
            <input type="text" value="" name="name" id="auto_id_name" />
        </div>
        <div class="input textarea">
            <label className="label" htmlFor="auto_textarea">Textarea</label>
            <textarea type="textarea" value="" name="name" id="auto_textarea" placeholder="Exemple de textarea" />
        </div>
        <div className="input select ">
            <label className="label" htmlFor="auto_id_country_code">
                Choisir un pays
            </label>
            <select name="country_code" id="auto_id_country_code">
                <option value="FR">France</option>
                <option value="ES">Espagne</option>
                <option value="DE">Allemagne</option>
            </select>
        </div>
        <div className="input input-group radios">
            <label className="label">Newsletter frequency</label>
            <div className="radios-items inline">
                <div className="radio-item">
                    <input
                    className="radio"
                    type="radio"
                    defaultValue="daily"
                    name="newsletter_frequency"
                    id="auto_id_newsletter_frequency_daily"
                    />
                    <label htmlFor="auto_id_newsletter_frequency_daily" className="radio-label">
                    Daily
                    </label>
                </div>
                <div className="radio-item">
                    <input
                    className="radio"
                    type="radio"
                    defaultValue="weekly"
                    name="newsletter_frequency"
                    id="auto_id_newsletter_frequency_weekly"
                    defaultChecked="checked"
                    />
                    <label
                    htmlFor="auto_id_newsletter_frequency_weekly"
                    className="radio-label"
                    >
                    Weekly
                    </label>
                </div>
            </div>
        </div>
        <div className="input input-group checkboxes">
            <label className="label">Categories</label>
            <div className="checkboxes-items">
                <div className="checkbox-item is-switch">
                <input
                    className="checkbox"
                    type="checkbox"
                    defaultValue="cat_1"
                    name="categories[]"
                    id="auto_id_categories[]_cat_1"
                />
                <label htmlFor="auto_id_categories[]_cat_1" className="checkbox-label">
                    Categorie 1
                </label>
                </div>
                <div className="checkbox-item is-switch">
                <input
                    className="checkbox"
                    type="checkbox"
                    defaultValue="cat_2"
                    name="categories[]"
                    id="auto_id_categories[]_cat_2"
                />
                <label htmlFor="auto_id_categories[]_cat_2" className="checkbox-label">
                    Categorie 2
                </label>
                </div>
            </div>
        </div>
        <div className="btns">
            <button className="btn btn-primary btn-large" type="submit">
                C'est parti&nbsp;!
            </button>
        </div>
    </form>
</div>

```html title="HTML BLADE"
<x-form :action="route('contact.send')" style="max-width: 400px; margin: 3em auto 1em;">

    <x-form-input name="name" label="Nom" class="first" required />

    <x-form-input type="email" name="email" label="Email" required />

    <x-form-textarea name="message" label="Message" placeholder="Dutch Biography" required />


    <x-form-select name="country_code" label="Choisir un pays" :options="['FR' => 'France', 'ES' => 'Espagne', 'DE' => 'Allemagne']" />
    <x-form-select name="interests[]" :options="['FR' => 'France', 'ES' => 'Espagne', 'DE' => 'Allemagne']" label="Select your interests" multiple />


    <!-- Inline radio inputs -->
    <x-form-group name="newsletter_frequency" label="Newsletter frequency" inline type="radios">
        <x-form-radio name="newsletter_frequency" value="daily" label="Daily" />
        <x-form-radio name="newsletter_frequency" value="weekly" label="Weekly" default />
    </x-form-group>

    <x-form-group type="checkboxes" name="categories" label="Categories">
        <x-form-checkbox name="categories[]" :show-errors="false" label="Categorie 1" value="cat_1" switch />
        <x-form-checkbox name="categories[]" :show-errors="false" label="Categorie 2" value="cat_2" switch />
    </x-form-group>

    <div class="btns">
        <x-form-submit class="btn-large">C'est parti !</x-form-submit>
    </div>
</x-form>
```
