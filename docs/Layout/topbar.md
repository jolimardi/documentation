# Topbar

Les classes CSS suivantes vous aident à créer une barre de navigation.

## Barre de navigation principale

La classe `topbar` définit le style de base pour la barre de navigation principale de votre application. Position: fixed par défaut. 

<div className="html-preview">
    <div className="topbar" style={{ position: "initial" }}>
        <div className="max-width">
            <a href="#" className="logo">
                <img src="https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="Logo" />
            </a>
            <ul>
                <li>Accueil</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
</div>

```html title="HTML"
<div class="topbar">
    <div class="max-width">
        <a href="#" class="logo">
            <img src="logo.png" alt="Logo" />
        </a>
        <ul>
            <li>Accueil</li>
            <li>Contact</li>
        </ul>
    </div>
</div>
```