<template>
  <tbody>
    <user-item v-for="(user, index) in userListBySearchName" :key="index" :user="user"></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState, mapActions } = createNamespacedHelpers("user");
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
      userList: (state) => state.user.userList,
      // users: 'userList',
    }),
    ...mapGetters({
      userListFilteBoy: "userListByBoy",
      userListBySearchName: "userListBySearchName",
    }),
  },
  methods: {
    ...mapActions({
      getAllUser: "getAllUserAction",
    }),
  },
  created() {
    this.getAllUser();
  },
};
</script>

<style></style>
