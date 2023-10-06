module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Installation',
    },
    {
      type: 'category',
      label: 'Basics',
      items: [
        'Basics/variables',
        'Basics/typographie',
        'Basics/couleurs-et-degrades',
      ],
    },
    {
      type: 'category',
      label: 'Helpers',
      items: [
        'Helpers/spacing',
        'Helpers/flex-et-inline-flex',
        'Helpers/text',
        'Helpers/colors',
        'Helpers/links-ajouter-icon-link',
        'Helpers/stretched-links',
        'Helpers/responsive',
        'Helpers/ratio',
        'Helpers/truncate',
        'Helpers/centered',
        'Helpers/object-fit',
        'Helpers/position-overflow',
        'Helpers/shadow',
        'Helpers/clearfix',
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      items: [
        'Layout/sections',
        'Layout/max-widths',
        'Layout/topbar',
        'Layout/menu-submenu',
        'Layout/mobile-menu',
        'Layout/footer-light-dark-versions',
      ],
    },
    {
      type: 'category',
      label: 'Forms',
      items: [
        'Forms/markup',
        'Forms/simple-input',
        'Forms/select',
        'Forms/checks-radios',
        'Forms/input-group',
        'Forms/validation',
        'Forms/dropzone',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'Components/flash-messages',
        'Components/boutons',
        'Components/icones',
        'Components/badge',
        'Components/card',
        'Components/dropdowns-selectize',
        'Components/pagination',
        'Components/spinners',
        'Components/separator-avec-et-ou-au-milieu-du-trait',
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      items: [
        'Plugins/fancybox',
        'Plugins/slick-slider',
        'Plugins/selectize',
        'Plugins/sweetalert',
        'Plugins/sortable',
      ],
    },
  ],
  laravelSidebar: [
    {
      type: 'doc',
      id: 'laravel/intro',
    },
    {
      type: 'doc',
      id: 'laravel/Installation/package-laravel',
    },
    {
      type: 'category',
      label: 'Step by step',
      items: [
        'laravel/Installation/StepByStep/laravel',
        'laravel/Installation/StepByStep/package-composer',
        'laravel/Installation/StepByStep/layout-principal',
        'laravel/Installation/StepByStep/vite-app',
        'laravel/Installation/StepByStep/jquery-et-plugins',
        'laravel/Installation/StepByStep/laravel-nova',
        'laravel/Installation/StepByStep/route-controller',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'laravel/Features/web-php',
        'laravel/Features/jquery',
        'laravel/Features/nova',
        // 'laravel/Features/nova-belongsToMany',
        'laravel/Features/jm-menu',
        'laravel/Features/jm-sections',
        'laravel/Features/jm-flash',
        'laravel/Features/jm-metas',
        'laravel/Features/notiflix',
        'laravel/Features/fancybox',
        'laravel/Features/blade-icons',
        'laravel/Features/laravel-form-components',
        'laravel/Features/create-form',
        'laravel/Features/add-ckeditor',
        'laravel/Features/install-from-repo',
        'laravel/Features/nova-youtube-field',
      ],
    }
  ],
};
