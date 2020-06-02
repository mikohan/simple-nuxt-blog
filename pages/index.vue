<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest news</h1>
    </section>
    <section class="featured-posts">
      <!-- <PostPreview :isAdmin="false" v-for="p in postsDatas" :key="p.id" :postData="p"  /> -->
      <PostsList :isAdmin="false" :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
//import PostPreview from "@/components/Posts/PostsPreview";
export default {
  head() {
    return {
      title: "Main Page",
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
  async fetch(context) {
    if (context.store.getters.loadedPosts.length === 0) {
      await context.store.dispatch('fetchPosts');
    }
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/landscape_sky.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>