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
      {
        text: 'Privacy',
        link: 'https://twys.io/privacy',
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
            'directory-structure'
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
};

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
