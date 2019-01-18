<template lang="html">
  <div>
    <navigation />
    <div class="newUserForm">
      <form v-on:submit.prevent>
        <label for="name">First name</label>
        <input v-model="user.first_name" type="text" id="name" placeholder="First name"/>
        <label for="lastname">Last name</label>
        <input v-model="user.last_name" type="text" id="lastname" placeholder="Last name"/>
        <label for="email">E-mail</label>
        <input v-model="user.email" type="email" id="email" placeholder="E-mail"/>
        <label for="phone">Phone number</label>
        <input :maxlength="max" :max="10" v-on:keypress="blockLetters" v-model="number" type="tel" id="phone" placeholder="Phone number"/>
        <label>Date</label>
        <date-pick v-model="user.date"></date-pick>
        <button v-on:click="submitUser">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import Nav from './Nav.vue';
import { NEW_USER } from '../store/actions/data';

export default {
  components: {
    DatePick,
    navigation: Nav
  },
  data() {
    return {
      user: {
        date: 'Please select date'
      },
      number: '',
      max: 10
    }
  },
  methods: {
    submitUser: function() {
      this.$store.dispatch(NEW_USER, this.user);
    },
    formatPhoneNumber: function(phoneNumberString) {
      var match = phoneNumberString.match(/^(\d{3})(\d{3})(\d{4})$/);
      if(match) this.number = '(' + match[1] + ') ' + match[2] + '-' + match[3];
    },
    blockLetters: function(event) {
      var charCode = event.which;
      if((charCode > 31 && (charCode < 48 || charCode > 57)))
        event.preventDefault();
      else
        return true;
    }
  },
  watch: {
    number: function() {
      if(this.number.length === 10) {
        this.user.phone_number = this.number;
        this.formatPhoneNumber(this.number);
      }
    }
  }
}
</script>

<style lang="css" scoped>
.newUserForm {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: #888;
}

.newUserForm form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 0 3px 0 #888;
}

.newUserForm form label {
  font-weight: bold;
}

.newUserForm form label:not(:first-child) {
  margin-top: 20px;
}

.newUserForm form input {
  width: 258px;
}

.newUserForm form button {
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
