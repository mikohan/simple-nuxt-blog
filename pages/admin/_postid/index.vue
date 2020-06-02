<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmited" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  middleware: ["check-auth", "auth"],
  components: {
    AdminPostForm
  },
  layout: "admin",
  methods: {
    onSubmited(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
    }
  },
  asyncData(context) {
    return context.app.$axios
      .$get("/nuxt-blog/" + context.params.postid + ".json")
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postid }
        };
      })
      .catch(e => context.error(e));
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>