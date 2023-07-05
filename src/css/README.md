# Compiler une nouvelle version :

```
npm install
```

Récupérer le css Joli Mardi compilé (npm run build dans laravel, puis aller chercher le fichier app.css dans public/build)

Le coller dans /src/css/jm-compiler-cli/jm.css

Exécuter 
```
npx postcss jm.css -o jm-compiled.css
```

C'est prêt !