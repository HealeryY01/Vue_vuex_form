<template>
  <div class="form-group">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
        aria-describedby="basic-addon2" v-model="searchName" />
      <div class="input-group-append">
        <button class="btn btn-sm btn-gradient-primary" type="button" @click="handleClickSearch(searchName)">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");
export default {
  stare() {
    return {
      searchName: "",
    };
  },
  methods: {
    // handleClickSearch() {
    //   this.$store.dispatch("setSearchNameAction", this.searchName);
    // },
    ...mapActions({
      handleClickSearch: "setSearchNameAction"
    }),
  },
};
</script>

<style></style>
