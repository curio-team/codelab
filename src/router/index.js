import Vue from 'vue'
import Router from 'vue-router'
import Skillkaarten from '@/components/Stageopdrachten'
import Home from '@/components/Home.vue'
import CodelabAssignment from '@/components/CodelabAssignment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Skillkaarten',
      name: 'Skillkaarten',
      component: Skillkaarten
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/codelab-assignments',
      name: 'Codelab_Assignments',
      component: CodelabAssignment
    }
  ]
})
