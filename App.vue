<template>
  <div class="library">
    <p>{{ myArray[0] }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      myArray: [
        { name: "LOTR", author: "J.R.R. Tolkien" },
        { name: "Clean Code", author: "Bob Martin" },
        { name: "Coding JS", author: "David L" },
      ],
    };
  },
};
</script>


<style scoped >

</style>
