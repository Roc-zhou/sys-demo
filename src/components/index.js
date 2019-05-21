import Main from './main.vue'
export default [{
  path: '*',
  name: 'HelloWorld',
  component: () =>
    import('./HelloWorld'),
}, {
  path: '/login',
  name: 'login',
  component: () => import('./login.vue')
}, {
  path: '/',
  component: Main,
  children: [
    {
      path: '',
      name: 'a',
      component: () => import('./a.vue')
    },
    {
      path: 'b',
      name: 'b',
      component: () => import('./b.vue')
    }
  ]
}]
