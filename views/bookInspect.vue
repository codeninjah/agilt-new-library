<template>
  <div class="inspect">
    <div class="bookCover" v-bind:style="{ backgroundColor: book.BookColor }">
      <h1>{{ book.Title }}</h1>
      <h2>{{ book.author }}</h2>
    </div>
    <div class="bookInfo">
      <h1 class="bookTitle">{{ book.Title }}</h1>
      <h2 class="bookAuthor">{{ book.Author }}</h2>
      <div class="bookFacts">
        <p class="bookAudiance">Audience: {{ book.Audiance }}</p>
        <p class="bookPublished">First Published: {{ book.Year }}</p>
        <p class="bookPages">Pages: {{ book.Pages }}</p>
        <p class="bookPublished">Publisher: {{ book.Publisher }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: ["book"],

  computed: {},
};
</script>

<style scoped>
.inspect {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 60%;
}
.bookCover {
  width: 40%;
  height: 100%;
  background-color: white;
}
.bookInfo {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bookFacts {
  display: flex;
  flex-direction: row;
}
</style>
