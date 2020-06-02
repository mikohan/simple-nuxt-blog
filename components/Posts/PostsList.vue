<template>
  <div class="post-list">
    <section class="featured-posts">
      <PostPreview :is-admin="isAdmin" v-for="p in hasPostsList" :key="p.id" :postData="p" />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  },
  methods: {
  },
  props: {
      isAdmin: {
          type: Boolean,
          default: false,
      },
      posts: {
        type: Array,
        required: false
      }
  },
  computed: {
    hasPostsList() {
      return this.posts ? this.posts : this.postsDatas
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>