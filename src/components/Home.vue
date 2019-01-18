<template>
  <div>
    <navigation />
    <p>Click on user image to edit info</p>
    <users />
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Users from './Users.vue';

export default {
  name: 'home',
  components: {
    navigation: Nav,
    users: Users
  }
}
</script>

<style lang="css" scoped>
p {
  text-align: center;
  margin-top: 20px;
  color: #458;
  font-weight: bold;
}
</style>
