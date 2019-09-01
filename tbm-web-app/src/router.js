import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Map from './views/Map'
import Graph from './views/Graph'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/graph',
      name: 'graph',
      component: Graph
    },
  ]
})
