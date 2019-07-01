<template>
  <div>2</div>
</template>

<script>
  export default {
    asyncData({ $axios }) {
      // console.log($axios)

      $axios({
        url: `https://jsonplaceholder.typicode.com/todos1`
      })
        .then(res => {
          // console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
      // debugger
      // console.log(context)
    },
    mounted() {
      console.log(this.$nuxt.$route);
    }
  };
</script>