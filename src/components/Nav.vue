<template>
  <div class="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/new">Create new user</router-link></li>
      <li v-on:click="logout">Logout</li>
    </ul>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from '../store/actions/auth';

export default {
  name: 'navigation',
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT)
      .then(() => {
        this.$router.push('/login');
      });
    }
  }
}
</script>

<style lang="css" scoped>
a {
  color: #458;
  text-decoration: none;
}

a:visited {
  color: #458;
}

.nav {
  background-color: #fff;
  box-shadow: 0 0 3px 0 #888;
  font-weight: bold;
  color: #458;
}

.nav ul {
  list-style: none;
  display: flex;
  flex-direction: none;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin: 0;
  padding: 0;
}

.nav ul li {
  margin: 0;
  padding: 0 20px;
  cursor: pointer;
}
</style>
