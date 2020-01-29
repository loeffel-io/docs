module.exports = {
  title: 'Makeless',
  description: 'Painless Docker Deployments',
  base: '/',

  head: [
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700,700i',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
  ],

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/makeless/server/master/makeless-logo.png',
    displayAllHeaders: false,
    sidebarDepth: 1,

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/makeless/server',
      },
      {
        text: 'Docker Hub',
        link: 'https://hub.docker.com/repository/docker/makeless/server',
      },
      {
        text: 'Imprint',
        link: 'https://twys.io/imprint',
      },
    ],

    sidebar: {
      '/docs/1.0/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: prefix('getting-started', [
            'introduction',
          ]),
        },
        {
          title: 'Server',
          collapsable: false,
          children: prefix('makeless-server', [
            'introduction',
            'installation',
            'configuration',
            'directory-structure',
          ]),
        },
        {
          title: 'Client',
          collapsable: false,
          children: prefix('makeless-client', [
            'introduction',
            'the-basics',
          ]),
        },
      ],
    },
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-157298856-1', // UA-00000000-0
      },
    ],
  ],
};

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
