---
title: Nova/BelongsToManyField
---

### benjacho/belongs-to-many-field

```php
use Benjacho\BelongsToManyField\BelongsToManyField;

public function fields(Request $request){
    BelongsToManyField::make('Role Label', 'roles', 'App\Nova\Role')->optionsLabel('full_role_name'),
}
```

Plus d'information sur la documentation du package : https://github.com/Benjacho/belongs-to-many-field-nova

## Composer command 

##### benjacho/belongs-to-many-field


```bash
composer require benjacho/belongs-to-many-field
```