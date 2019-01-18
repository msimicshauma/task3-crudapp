<template>
  <div class="login-form">
    <h1>Welcome</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="E-Mail" required/>
      <input v-model="password" type="password" placeholder="Password" required/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { AUTH_REQUEST } from '../store/actions/auth';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      const { email, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { email, password })
      .then(() => {
        this.$router.push('/');
      });
    }
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #888;
  margin-top: 100px;
}

.login-form p {
  margin-bottom: 10px;
}

.login-form form {
  display: flex;
  flex-direction: column;
}

.login-form form input {
  margin-bottom: 5px;
  border: 0;
  border: 1px solid #458;
  padding: 8px 5px;
  border-radius: 3px;
}

.login-form form button {
  border: 0;
  padding: 8px 0px;
  background-color: #458;
  color: #fff;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
}
</style>
