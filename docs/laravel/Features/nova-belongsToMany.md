---
title: Nova/BelongsToManyField
---

### benjacho/belongs-to-many-field

```bash
composer require benjacho/belongs-to-many-field
```

### Exemple d'utilisation commune 

```php title='app/Nova/Ma-resource.php'
use Benjacho\BelongsToManyField\BelongsToManyField;

...
class MaResource extends Resource { 
    ...
    public function fields(NovaRequest $request) {
        ...
        BelongsToManyField::make('Role Label', 'roles', 'App\Nova\Role')->optionsLabel('full_role_name'),
        ...
    }
    ...
}
```

Plus d'information sur la documentation du package : https://github.com/Benjacho/belongs-to-many-field-nova

