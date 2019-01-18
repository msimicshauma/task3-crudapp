import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import NewUser from '../components/NewUser.vue';
import EditUser from '../components/EditUser.vue';
import store from '../store/store';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if(!store.getters.isAuthenticated) {
    next()
    return
  }

  next('/');
}

const ifAuthenticated = (to, from, next) => {
  if(store.getters.isAuthenticated) {
    next()
    return
  }
  
  next('/login');
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/new',
      name: 'NewUser',
      component: NewUser,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/user/:id',
      name: 'EditUser',
      component: EditUser,
      beforeEnter: ifAuthenticated
    }
  ],
})
