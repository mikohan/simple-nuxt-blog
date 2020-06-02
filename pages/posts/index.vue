<template>
  <div class="blog-posts">
    <PostsList :posts="loadedPosts" />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Blog List",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Blog list Beautefull Application' }
      ]
    };
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  data() {
    return {};
  },
  async fetch(context) {
   if (context.store.getters.loadedPosts.length === 0) {
      await context.store.dispatch('fetchPosts');
    }  
  }
};
</script>

<style scoped>
.blog-posts {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>