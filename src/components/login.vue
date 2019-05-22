<template>
  <div class="login">123</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "login",
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      // await
      this.$api("/app/getList", {
        pageSize: 10,
        pageNum: 1
      }).then(r => {
        console.log(r);
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
