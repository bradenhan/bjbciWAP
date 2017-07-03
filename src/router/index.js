import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import todoList from '@/components/todoList'
import exam1 from '@/components/exam1/exam1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      name: 'todoList',
      component: todoList, 
      path: '/todoList',  
    }
    ,{
      path: '/exam1',
      name: 'exam1',
      component: exam1
    },
  ]
})
