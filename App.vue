<template>
  <div class="library">
    <div class="header">
      <h1>Leifs' Kool Skool Library</h1>
      <p>A brief collection of our books</p>
    </div>
    <ul>
      <div
        class="book"
        v-for="book in myJson"
        v-bind:key="book.Title"
        v-bind:style="{ backgroundColor: book.BookColor}"
      >
        <p>{{ book.Title }}</p>
      </div>
    </ul>
  </div>
</template>


<script>
import library from "./library.json";
export default {
  data() {
    return {
      myJson: library,
    };
  },
};
</script>


<style scoped >
body {
  background-color: gray;
}
.header {
  background-color: hotpink;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.library {
  background-color: white;
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
  border: 2px solid black;
  padding-left: 1rem;
  height: 200px;
  width: 150px;
  max-width: 150px;
  margin: 2rem;
  background-color: calc(#c4c4c4 - #c4c4c4 * 0.5);
}

.book p {
  margin-top: auto;
  color: white;
  font-weight: 500;
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
