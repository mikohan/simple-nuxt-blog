<template>
  <div class="container">
    <div>
      <nuxt-link v-for="user in users" :key="user.id" :to="'/users/' + user.id">
        <p class="user">{{ user.name }} || {{ user.email }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async fetch(context) {
    //console.log(context.store.getters)
    if (context.store.getters["users/usersList"].length === 0) {
      await context.store.dispatch("users/getFromServer");
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/usersList"];
    }
  }
};
</script>

<style lang="scss" scoped>
$firstColor: hsl(180, 93%, 28%);
.container {
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.user {
  color: $firstColor;
}
a {
    text-decoration: none!important;
}
</style>
