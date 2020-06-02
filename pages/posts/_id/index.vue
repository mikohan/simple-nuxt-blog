<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail post-date">Published: {{ loadedPost.updatedDate | date }}</div>
        <div class="post-detail">{{ loadedPost.author }}</div>
      </div>
      <div
        class="post-thumbnail"
        :style="'background-image: url(' + loadedPost.thumbnailLink + ')'"
      ></div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="feed-back">
      <p>Send feedback obout this post</p>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.loadedPost.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.loadedPost.previewText }
      ]
    };
  },
  data() {
    return {
    }
  },
  methods: {
    showData() {
    }
  },
  asyncData(context) {
    return context.app.$axios
      .$get("/nuxt-blog/" + context.params.id + ".json")
      .then(data => {
        return {
          loadedPost: data
        };
      })
      .catch(e => context.error(e));
  },
  created() {
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.post-date {
  color: #757575;
  font-size: 0.6rem;
}
</style>