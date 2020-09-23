import Vue from 'vue'
import Router from 'vue-router'
import RecipeList from '@/components/RecipeList'
import RecipeDetail from '@/components/RecipeDetail'
import RecipeUpdate from '@/components/RecipeUpdate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RecipeList',
      component: RecipeList
    },
    {
      path: '/detail',
      name: 'RecipeDetail',
      component: RecipeDetail
    },
    {
      path: '/update/:id',
      name: 'RecipeUpdate',
      component: RecipeUpdate
    },
    {
      path: '/add',
      name: 'RecipeAdd',
      component: RecipeUpdate
    }
  ]
})


