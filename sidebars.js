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
      type: 'category',
      label: 'Installation',
      items: [
        'laravel/Installation/Setup',
        'laravel/Installation/package-laravel',
        'laravel/Installation/Configuration',
      ],
    },
    {
      type: 'category',
      label: 'Packages',
      items: [
        'laravel/Packages/blade-icons',
        'laravel/Packages/nova',
        'laravel/Packages/nova-belongsToMany',
        {
          type: 'category',
          label: 'Jolimardi',
          items: [
            'laravel/Packages/jm-menu',
            'laravel/Packages/jm-sections',
          ]
        },
      ],
    }
  ],
};
