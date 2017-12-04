<template>

     <div>
        <back-header>
        <h1 class="mint-header-title">新闻列表</h1>
        </back-header>
      <!-- body -->
      <my-ul>
        <li v-for="(router,index) in news" :key="index">
          <a :href="'/#/news/newdetail/' + router.id">
            <img :src="router.img_url">
            <div>
              <span>{{router.title}}</span>
              <div>
                <p>点击数{{router.click}}</p>
                <p>发表时间：{{router.add_time}}</p>
              </div>
            </div>
          </a>
        </li>
      </my-ul>
      <router-view></router-view>
     </div>
</template>
<script>
export default {
  created() {
    this.$axios.get("getnewslist").then(res => {
      this.news = res.data.message;
      console.log(this.news);
    });
  },
  data() {
    return {
      news: ""
    };
  }
};
</script>
<style scoped>
li {
  width: 100%;
  height: 10%;
  padding: 11px 15px;
  overflow: hidden;
}
li a {
  display: block;
  width: 100%;
  position: relative;
}
li a img {
  display: block;
  float: left;
  left: 0;
  top: 0;
  width: 15%;
}
li div {
  width: 85%;
  /* height: 80%; */
  top: 0;
  right: 0;
  overflow: hidden;
 
}
li div span {
  height: 50%;
  display:block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
   
}
div>div{

  height: 85%;
}
div p {
  color:#26a2ff;
}
div p:first-child {
  width:35%;
  float:left;
  top: 0;
  left: 0;
}
div p:last-child {
  width:65%;
  float:right;
  right: 0;
  top: 0;
}
</style>

