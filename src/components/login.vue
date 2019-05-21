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
      const data = await this.$api("/url", {
        pageSize: 10,
        pageNum: 1
      });
      console.log(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
