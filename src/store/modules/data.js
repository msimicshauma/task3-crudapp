import { FETCH_DATA } from '../actions/data';
import { DELETE_DATA } from '../actions/data';
import { UPDATE_DATA } from '../actions/data';
import { NEW_USER } from '../actions/data';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token');

const state = { users: [] };

const getters = {
  users: state => state.users
};

const actions = {
  [FETCH_DATA]: ({commit, dispatch}, page) => {
    axios.get(`https://reqres.in/api/users/?per_page=12`)
    .then(res => {
      commit(FETCH_DATA, res);
    })
  },
  [DELETE_DATA]: ({dispatch}, id) => {
    console.log('-----DELETE USER ' + id);
    axios.delete('https://reqres.in/api/users/' + id)
    .then(res => {
      console.log('-----SUCCESS');
      console.log(res);
    })
  },
  [UPDATE_DATA]: ({dispatch}, user) => {
    console.log('-----UPDATE USER ');
    axios.put('https://reqres.in/api/users/' + user.id, {
      user
    })
    .then(res => {
      console.log('-----SUCCESS');
      console.log(res);
    })
  },
  [NEW_USER]: ({dispatch}, user) => {
    console.log('-----NEW USER ');
    axios.post('https://reqres.in/api/users/', {
      user
    })
    .then(res => {
      console.log('-----SUCCESS');
      console.log(res);
    })
  }
}

const mutations = {
  [FETCH_DATA]: (state, res) => {
    state.users = res.data.data;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
