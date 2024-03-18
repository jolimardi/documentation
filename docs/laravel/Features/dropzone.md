---
title: Dropzone pour l'envoi de fichiers
---

## Ajout du JS et CSS

(voir Fitapply, ou MesArtistes pour cas multiples)

```js title="js/app.js"

    /* -----------------    Dropzone   ----------------- */

    $(".add-cv.dropzone").on("upload:success", function (event, data) {
        if (typeof data.message != 'undefined' && data.message.length > 0) {

            // Une seule photo, on prend message[0], pas de each :
            let cvFilename = data.message;

            let $container = $(this).closest('.input-dropzone');

            // On met la valeur dans le input hidden qui sera posté avec le formulaire
            $container.find('input[name="cv_filename"]').val(cvFilename);

            // On ajoute la classe pour montrer la photo
            $container.addClass('has-cv');

        }
    });

    $(".input-dropzone.cv .remove-file").on('click', function () {
        let $container = $(this).closest('.input-dropzone');
        // On vide le champ
        $container.find('input[type="hidden"]').val('');
        // On enlève la classe, ça affiche la dropzone
        $container.removeClass('has-cv');
    });

```


```js title="js/dropzone.js <= C'est le plugin générique à importer"
import {MySwal} from './my-sweetalert2-presets.js'

$(function () {

    // Initialisation des dropzones, avec les events
    $('.dropzone').each(function (id, elem) {
        let $dropzone = $(elem);
        let $input_file = $dropzone.find('input[type="file"]');

        $dropzone.on('dragover drop', function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (e.type == 'drop') {
                let files = e.originalEvent.dataTransfer.files;
                ajax_file_upload($dropzone, files);
            }
        });

        $input_file.on('change', function (e) {
            let files = this.files;
            if (this.files.length > 0) {
                ajax_file_upload($dropzone, files);
            }
        });
    });




    function ajax_file_upload($dropzone, files) {

        $dropzone.trigger('upload:start');
        let url = $dropzone.data('url');

        // Reset de l'UI
        initProgressBar($dropzone);
        $dropzone.addClass('is-uploading');
        $dropzone.find('.error').html("");

        if (typeof (files) !== undefined) {
            let form_data = new FormData();
            for (let i = 0; i < files.length; i++) {

                if (files[i].size > max_server_upload_filesize_bytes) {
                    MySwal.fire({
                        icon: 'error',
                        title: "Attention, le fichier dépasse la taille limite de " + max_server_upload_filesize_human_readable,
                    });
                    $dropzone.removeClass('is-uploading');
                    hideProgressBar($dropzone);
                    return;
                }
                form_data.append('files[]', files[i]);
            }

            $.ajax({
                url: url,
                type: 'post',
                data: form_data,
                contentType: false,
                processData: false,
                xhr: function () {
                    let xhr = new window.XMLHttpRequest();
                    //Download progress
                    xhr.upload.addEventListener("progress", function (evt) {
                        if (evt.lengthComputable) {
                            let progress = evt.loaded / evt.total * 100;
                            updateProgressBar($dropzone, progress);
                        }
                    }, false);
                    return xhr;
                },
            }).done(function (data, textStats, jqXHR) {

                $dropzone.removeClass('is-uploading');
                hideProgressBar($dropzone);

                if (typeof data.message !== 'undefined') {
                    $dropzone.trigger('upload:success', [data]);
                } else if (typeof data.error === 'string') {
                    MySwal.fire({
                        icon: 'error',
                        text: data.error,
                        title: "Oups, échec de l'envoi",
                    });
                } else {
                    MySwal.fire({
                        icon: 'error',
                        title: "Oups, échec de l'envoi...",
                    })
                }

            }).fail(function (jqXHR, textStatus) {
                $dropzone.removeClass('is-uploading');
                hideProgressBar($dropzone);
                let text = '';
                if (typeof jqXHR.responseJSON !== 'undefined' && typeof jqXHR.responseJSON.message === 'string') {
                    text = jqXHR.responseJSON.message;
                } else if (typeof jqXHR.statusText === 'string') {
                    text = jqXHR.statusText;
                }
                MySwal.fire({
                    icon: 'error',
                    text: text,
                    title: "Oups, échec de l'envoi",
                });
            });

        }
    }

    function hideProgressBar($dropzone) {
        updateProgressBar($dropzone, 0);
        $dropzone.find('.progress').hide();
    }

    function initProgressBar($dropzone) {
        updateProgressBar($dropzone, 0);
        $dropzone.find('.progress').show();
    }

    function updateProgressBar($dropzone, percentage = 0) {
        let $progress = $dropzone.find('.progress');
        if ($progress.is(':not(:visible)')) {
            $progress.show();
        }
        percentage = Math.round(percentage);
        $progress.width(percentage + "%");
    }
});
```

```css title="dropzone.css"
/* ----------------------------------------------------------------------- */
/* ---------------         File Upload (dropzones)        ---------------- */
/* ----------------------------------------------------------------------- */
.dropzone {
    background-color: var(--light-gray);
    padding: 1.5em;
    text-align: center;
    border: var(--light-gray-alt) 2px dashed;
    border-radius: 10px;
    line-height: 1.2;
    font-size: var(--sm-fs);
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dropzone-icon {
        margin-bottom: 8px;
        text-align: center;
        font-size: 32px;
        opacity: 0.25;
        transition: .25s;
    }
    .dropzone-legend {
        cursor: default;
        pointer-events: none;
        font-size: var(--sm-fs);
        margin: 8px auto;
        opacity: 0.6;
        color: var(--gray-text);
    }

    label {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: .15s;

        &:hover {
            &, .btn-link {
                color: var(--accent);
            }
            .dropzone-icon {
                opacity: 1;
            }
        }
    }


    .show-before-uploading {

        &, label {
            flex-grow: 1;
            display: flex;
            width: 100%;
            margin: 0;
            justify-content: center;
            align-items: center;
        }
    }
    .show-while-uploading {
        display: none;
        width: 100%;
    }
    &.is-uploading {
        .show-while-uploading {
            display: block;
        }
        .show-before-uploading {
            display: none;
        }
    }
}

.progressbar {
    width: 100%;
    max-width: 220px;
    height: 10px;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    margin: 8px auto;

    .progress {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background: var(--accent);
        width: 0%;
        transition: .1s;
    }
}
```

## Ajouter les variables globales de Max Upload Size

```html title="resources/views/layout.blade.php"
<html>
  <head>
    ...

    <!-- Variables pour Dropzone (max upload size)   -->
    @if( ! preg_match('/^[\d]+[\s]?M$/m', ini_get('upload_max_filesize')))
        @dd("Impossible de récupérer upload_max_filesize via ini_get('upload_max_filesize') pour le script de dropzone depuis. Format attendu (ex: 20M). (Voir dans les variables js de layout.blade.php")
    @endif
    <script type="text/javascript">
      const max_server_upload_filesize_human_readable = "{{ str_replace('M', ' Mo', ini_get('upload_max_filesize')) }}";
      const max_server_upload_filesize_bytes = "{{ (int) ini_get("upload_max_filesize")*1024 }}";
    </script>

    ...
  </head>
</html>
```

## Ajouter la route et le controller

```php routes/web.php
Route::post('/candidat/upload-cv', 'Candidate\DashboardController@uploadCv')->name('candidate.upload-cv')->middleware(['can:edit own user']);
```

```php MonController.php

    // Upload ajax du CV
    public function uploadCv(Request $request) {

        $user = $request->user();
        if (!$user) {
            abort(401, 'Utilisateur introuvable');
        }


        // Nom du champ à envoyer en xhr : files
        if (!isset($request->file('files')[0]) || !$request->file('files')[0]) {
            abort(400, 'Aucun fichier reçu sur le serveur ($inputs["files"])');
        }
        // get extension from originalName
        $extension = $request->file('files')[0]->getClientOriginalExtension();


        $filename = "cv-{$user->id}-" . Str::slug($user->fullname) . ".$extension";
        $path = Storage::disk('cv')->putFileAs('cv', $request->file('files')[0], $filename);

        if (!$path) {
            abort(400, 'Impossible d\'enregistrer le fichier');
        }

        // Return json with success message
        return response()->json([
            'message' => $path
        ]);
    }
```

## Markup du champ simple

```html title="MonFormulaire.blade.php"

<!--       CV optionnel (ATTENTION : à modifier aussi dans my-acount.blade.php si modif  -->

<!-- .dropzone contient toute la logique js, dont l'event trigger('done') pour déclencher l'update de l'UI -->
<div class="input input-dropzone cv {{ $user->cv_filename ? 'has-cv' : '' }}">
    <div class="show-cv">
        <div class="label">Mon CV</div>
        <div class="card flat show-file cv">
            <div class="card-body">
                <div class="filename">@svg('coolicon-file-document') {{ $user->CVTitle }}</div>
                <div class="remove-file" title="Modifier mon CV">@svg('coolicon-close-md', 'icon-close')</div>
            </div>
        </div>
    </div>
    <div class="show-dropzone">
        <div class="label">Ajouter mon CV</div>
        <div class="dropzone add-cv" data-url="{{ route('candidate.upload-cv') }}">
            <div class="show-before-uploading">
                <label for="cv_file">
                    @svg('coolicon-file-download', 'dropzone-icon')<span class="btn-link">Ajouter mon CV</span>
                </label>
            </div>
            <div class="show-while-uploading">
                Envoi en cours...
                <div class="progressbar">
                    <div class="progress"></div>
                </div>
            </div>
            <input type="file" name="cv_filename_file" id="cv_file" accept="application/msword, application/pdf, image/*" class="hide">
            <x-form-input type="hidden" name="cv_filename" :show-errors="false" />
        </div>
        <div class="help">Ajoute ton CV pour augmenter tes chances de recevoir une offre qui te correspond&nbsp;!</div>
    </div>
    <x-form-errors name="cv_filename" />
</div>
```

## Markup du champ multiple avec limite max d'items

A compléter, voir MesArtistes.fr sur my-account