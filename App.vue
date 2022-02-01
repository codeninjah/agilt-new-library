<template>
  <div class="library">
    <div class="header">
      <div class="containHead">
        <h1>Leifs' Kool Skool Library</h1>
        <p>A brief collection of our books</p>
      </div>
    </div>
    <ul>
      <div
        class="book"
        v-for="(book, index) in myJson"
        v-bind:key="book.Title"
        v-bind:style="{ backgroundColor: book.BookColor }"
        :library="book"
      >
        <p class="title" @click="clickedTo(index)">{{ book.Title }}</p>
        <p class="author">{{ book.Author }}</p>
      </div>
    </ul>
  </div>
</template>


<script>
import library from "./library.json";
import router from './router';

export default {
  data() {
    return {
      myJson: library,
    };
  },

  methods: {
    clickedTo(id) {
      console.log(id);
      //console.log(this.$route.params.id)
      return router.push({
        path: `/book/${id}`,
      });
    },
  },
};
</script>


<style scoped >
body {
  background-color: black;
}
.header {
  background-color: hotpink;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containHead {
  width: 30%;
}

.library {
  background-color: gray;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 100vh;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  color: black;
  font-size: 26px;
}

.book {
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding-left: 1rem;
  height: 200px;
  width: 150px;
  max-width: 150px;
  margin: 2rem;
  background-color: linear-gradient(to right, 10%, 95%, 55%);
}

.title {
  margin-top: auto;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  font-family: Arial;
}

.author {
  margin-top: auto;
  font-size: 10px;
  color: white;
  font-style: italic;
  font-family: Arial;
}

.un {
  color: red;
  font-family: Arial;
  font-size: 16px;
}

.av {
  color: green;
}
</style>
