<template>
  <div class="admin-new-post-page">
    <section>
      <h1>New Post Component</h1>
    </section>
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmited" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  middleware: ["check-auth", "auth"],
  layout: "admin",
  components: {
    AdminPostForm
  },
  methods: {
    onSubmited(postData) {
      this.$store
        .dispatch("addPost", postData)
        .then(result => this.$router.push("/admin"))
        .catch(e => console.log(e));
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
  padding: 20px;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>