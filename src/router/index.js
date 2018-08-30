import Vue from 'vue'
import Router from 'vue-router'

import Description from '@/components/Description.vue'
import Experience from '@/components/Experience.vue'

Vue.use(Router)

const NotFound = {
  template: "<p>The page you're looking for does not exist :<</p>"
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Description',
      component: Description
    },
    { path: '/experience', name: 'Experience', component: Experience },
    { path: '*', name: 'NotFound', component: NotFound }
  ]
})
