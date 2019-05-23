import Main from './main.vue'
export default [{
  path: '*',
  name: 'HelloWorld',
  component: () =>
    import('./HelloWorld'),
}, {
  path: '/',
  name: 'login',
  component: () => import('./login.vue')
}, {
  path: '/main',
  component: Main,
  children: [
    {
      path: '',
      name: 'a',
      component: () => import('./a.vue'),
      meta: {
        activeName: '1-1',
        openNames: ['1']
      }
    },
    {
      path: 'b',
      name: 'b',
      component: () => import('./b.vue'),
      meta: {
        activeName: '1-2',
        openNames: ['1']
      }
    }
  ]
}]
