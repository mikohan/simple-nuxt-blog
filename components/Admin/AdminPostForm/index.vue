<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail link</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
     <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
     <AppControlInput v-model="editedPost.updatedDate">Edited Date</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton type="button" style="margin-left: 10px;" btn-style="cansel" @click="onCansel">Cansel</AppButton>
  </form>
</template>

<script>

export default {
  props: {
      post: {
          type: Object,
          required: false
      }
  },
  data() {
    return {
      editedPost: this.post ? {...this.post, updatedDate: Date.now().toString() } : {
        author: "",
        title: "",
        thumbnailLink: "",
        content: "",
        previewText: "",
        updatedDate: ""
      }
    };
  },
  methods: {
    onSave() {
      //save stuff here
      this.$emit('submit', this.editedPost);
    },
    onCansel() {
      //Cansel stuff here
      this.$router.push("/admin");
    }
  }
};
</script>