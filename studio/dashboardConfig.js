export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5248432cef9c18d318bd76',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-b9myc22f',
                  apiId: '4f49f635-4048-41d4-ad29-096c2240d3c3'
                },
                {
                  buildHookId: '5f524843ad579a1798651b47',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iecegztd',
                  apiId: 'e0a76fa3-68de-4d5d-8863-95f8d79c6aad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/klgh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iecegztd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
