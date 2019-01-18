<template lang="html">
  <div class="users">
    <ul class="pagination">
      <li :class="{'active': currentPage === 1}" v-on:click="loadPage(1)">1</li>
      <li :class="{'active': currentPage === 2}" v-on:click="loadPage(2)">2</li>
      <li :class="{'active': currentPage === 3}" v-on:click="loadPage(3)">3</li>
      <li :class="{'active': currentPage === 4}" v-on:click="loadPage(4)">4</li>
    </ul>
    <ul class="options">
      <li v-on:click="sortId">Sort by ID</li>
      <li v-on:click="sortName">Sort by first name</li>
    </ul>
    <div v-for="user in users.slice(0,3)" v-if="active1" class="user-container">
      <router-link v-bind:to="'/user/' + user.id">
        <img v-bind:src="user.avatar" alt="user-avatar">
      </router-link>
      <div class="user-info">
        <p>ID: {{ user.id }}</p>
        <p>First name: {{ user.first_name }}</p>
        <p>Last name: {{ user.last_name }}</p>
        <button v-on:click="DELETE_DATA(user.id)">DELETE</button>
      </div>
    </div>
    <div v-for="user in users.slice(3,6)" v-if="active2" class="user-container">
      <router-link v-bind:to="'/user/' + user.id">
        <img v-bind:src="user.avatar" alt="user-avatar">
      </router-link>
      <div class="user-info">
        <p>ID: {{ user.id }}</p>
        <p>First name: {{ user.first_name }}</p>
        <p>Last name: {{ user.last_name }}</p>
        <button v-on:click="DELETE_DATA(user.id)">DELETE</button>
      </div>
    </div>
    <div v-for="user in users.slice(6,9)" v-if="active3" class="user-container">
      <router-link v-bind:to="'/user/' + user.id">
        <img v-bind:src="user.avatar" alt="user-avatar">
      </router-link>
      <div class="user-info">
        <p>ID: {{ user.id }}</p>
        <p>First name: {{ user.first_name }}</p>
        <p>Last name: {{ user.last_name }}</p>
        <button v-on:click="DELETE_DATA(user.id)">DELETE</button>
      </div>
    </div>
    <div v-for="user in users.slice(9,12)" v-if="active4" class="user-container">
      <router-link v-bind:to="'/user/' + user.id">
        <img v-bind:src="user.avatar" alt="user-avatar">
      </router-link>
      <div class="user-info">
        <p>ID: {{ user.id }}</p>
        <p>First name: {{ user.first_name }}</p>
        <p>Last name: {{ user.last_name }}</p>
        <button v-on:click="DELETE_DATA(user.id)">DELETE</button>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_DATA } from '../store/actions/data';
import { DELETE_DATA } from '../store/actions/data';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      currentPage: 1,
      active1: true,
      active2: false,
      active3: false,
      active4: false
    }
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'DELETE_DATA'
    ]),
    loadPage: function(current) {
      this.currentPage = current;
      if(this.currentPage === 1) {
        this.active1 = true;
        this.active2 = false;
        this.active3 = false;
        this.active4 = false;
      } else if(this.currentPage === 2) {
        this.active1 = false;
        this.active2 = true;
        this.active3 = false;
        this.active4 = false;
      } else if(this.currentPage === 3) {
        this.active1 = false;
        this.active2 = false;
        this.active3 = true;
        this.active4 = false;
      } else if(this.currentPage === 4) {
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        this.active4 = true;
      }
    },
    sortId: function() {
      this.users.sort(function(a, b) {
        return a.id - b.id;
      });
    },
    sortName: function() {
      this.users.sort(function(a, b) {
        var nameA = a.first_name.toUpperCase();
        var nameB = b.first_name.toUpperCase();
        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;

        return 0;
      });
    }
  },
  created: function() {
    this.$store.dispatch(FETCH_DATA);
  }
}
</script>

<style lang="css" scoped>
.pagination {
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
}

.pagination li {
  margin: 0 5px;
  padding: 3px 10px;
  cursor: pointer;
  border: 1px solid #458;
  border-radius: 3px;
  font-weight: bold;
}

.pagination .active {
  background-color: #458;
  color: #fff;
}

.options {
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
}

.options li {
  margin: 0 5px;
  padding: 3px 10px;
  cursor: pointer;
  border: 1px solid #458;
  border-radius: 3px;
  font-weight: bold;
  font-size: 13px;
}

.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
}

.users .user-container {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px 0 #888;
  padding: 10px;
  width: 350px;
  margin-bottom: 20px;
}

.users .user-container .user-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  font-weight: bold;
}

.users .user-container .user-info button {
  border: 0;
  margin-top: 10px;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  background-color: #d91e18;
  cursor: pointer;
  width: 100px;
  border-radius: 3px;
}
</style>
