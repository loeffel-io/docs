module.exports = {
  title: 'Makeless - Painless Docker Deployments',
  description: 'Makeless is an easy to use service and repository driven deployment framework based on Docker Compose. - Brings your services up in minutes!',
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
    [
      'script',
      {},
      `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1665266,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
    ],
    [
      'script',
      {
        src: 'https://cmp.osano.com/Azyw8dRp0Gvht1H5S/5ad9b3b1-b1c0-4598-9b70-9ed02c17c241/osano.js',
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
