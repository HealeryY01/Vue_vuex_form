<template>
  <tbody>
    <user-item v-for="(user, index) in userList" :key="index" :user="user"></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { mapState } from 'vuex'
export default {
  components: {
    UserItem,
  },
  // computed: mapState([
  //   'userList'
  // ]),
  computed: {
    loading() {
      return false;
    },
    ...mapState({
      userList: state => state.userList,
      // users: 'userList',
    }),
  },
};
</script>

<style></style>
