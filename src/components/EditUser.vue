<template>
  <div>
    <navigation />
    <div class="editUserForm">
      <form v-on:submit.prevent>
        <label for="nameEdit">First name</label>
        <input v-model="user.first_name" type="text" id="nameEdit" />
        <label for="lastnameEdit">Last name</label>
        <input v-model="user.last_name" type="text" id="lastnameEdit" />
        <label for="avatar">Avatar link</label>
        <input v-model="user.avatar" type="text" id="avatar" />
        <button v-on:click="update">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Nav from './Nav.vue';
import { UPDATE_DATA } from '../store/actions/data';

export default {
  components: {
    navigation: Nav
  },
  data() {
    return {
      id: this.$route.params.id,
      user: {}
    }
  },
  methods: {
    update: function() {
      this.$store.dispatch(UPDATE_DATA, this.user);
    }
  },
  created() {
    axios.get('https://reqres.in/api/users/' + this.id)
    .then(res => {
      this.user = res.data.data;
    })
  }
}
</script>

<style lang="css" scoped>
.editUserForm {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #888;
}

.editUserForm form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 0 3px 0 #888;
}

.editUserForm form label {
  font-weight: bold;
}

.editUserForm form label:not(:first-child) {
  margin-top: 20px;
}

.editUserForm form input {
  width: 258px;
}

.editUserForm form button {
  margin-top: 20px;
  width: 100px;
  border: 0;
  background-color: #458;
  color: #fff;
  border-radius: 3px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
