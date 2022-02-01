<template>
  <div class="library">
    <div class="header">
      <h1>Leifs' Kool Skool Library</h1>
      <p>A brief collection of our books</p>
    </div>
    <ul v-if="available == false" v-bind:class="av">{{myArray[0].name}}</ul>
    <ul>
      <li v-for="bok in myArray" v-bind:key="bok.name" >
        {{ bok.name }} {{ bok.author }} {{ bok.available }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
        available: '', //är detta true, visas alla böcker
      myArray: [
        { name: "LOTR", author: "J.R.R. Tolkien", available: false },
        { name: "Clean Code", author: "Bob Martin", available: true },
        { name: "Coding JS", author: "David L", available: true },
      ],
    };
  },
};
</script>


<style scoped >
body {
  background-color: #c4c4c4;
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
  background-color: peachpuff;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.un {
    color: red;
}

.av { 
    color: green;
}
</style>
