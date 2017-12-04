<template>
  <div>新闻详情</div>
</template>
<script>
export default {
  created() {
    this.$axios.get("'getnew/' + {{router.id}}").then(res => {
      this.news = res.data.message;
      console.log(this.news);
    });
  }
};
</script>
<style scoped>

</style>
