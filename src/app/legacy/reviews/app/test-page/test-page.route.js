import template from './test-page.html';
export default
  [
    {
      name: 'real_page',
      definition: {
        url: '/real_page',
        template: template,
        controller: 'test.controller'
      }
    }
  ]

