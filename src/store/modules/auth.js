import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth';
import axios from 'axios';

const state = { token: localStorage.getItem('user-token') || '' };

const getters = {
  isAuthenticated: state => !!state.token
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
      return new Promise((resolve, reject) => {
        axios.post('https://reqres.in/api/login/', {
          email: user.email,
          password: user.password
        })
        .then(res => {
          localStorage.setItem('user-token', res.data.token);
          axios.defaults.headers.common['Authorization'] = res.data.token;
          commit(AUTH_SUCCESS, res);
          resolve(res);
        })
        .catch(err => {
          localStorage.removeItem('user-token');
          reject(err);
        })
      })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem('user-token');
      resolve();
    })
  }
}

const mutations = {
  [AUTH_SUCCESS]: (state, res) => {
    state.token = res.data.token;
  },
  [AUTH_LOGOUT]: state => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
