module.exports = {
  title: 'Serve',
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
    logo: 'https://raw.githubusercontent.com/loeffel-io/serve-server/master/serve-logo.png',
    displayAllHeaders: false,
    sidebarDepth: 1,

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/loeffel-io/serve-server',
      },
      {
        text: 'Docker Hub',
        link: 'https://hub.docker.com/repository/docker/loeffel/serve',
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
          children: prefix('serve-server', [
            'introduction',
            'installation',
            'configuration',
            'directory-structure'
          ]),
        },
        {
          title: 'Client',
          collapsable: false,
          children: prefix('serve-client', [
            'introduction',
            'installation',
          ]),
        },
      ],
    },
  },
};

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
