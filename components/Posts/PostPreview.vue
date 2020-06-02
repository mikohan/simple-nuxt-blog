<template>
  <nuxt-link class="post-preview" :to="postLink">
    <article>
      <div class="post-thumbnail" :style="'background-image: url(' + postData.thumbnailLink + ')'"></div>
      <!-- <div
        class="post-thumbnail"
        :style="{BackgroundImage: 'url('+ postData.thumbnail +')'}"
      ></div>-->
      <div class="post-content">
        <h2>{{ postData.title }}</h2>
        <h5>{{ postData.author }}</h5>
        <p>{{ postData.updatedDate | convertDate }}</p>
        <hr />
        <p>{{ postData.previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    postData: {
      type: Object,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin
        ? "/admin/" + this.postData.id
        : "/posts/" + this.postData.id;
    }
  }
};
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>