<template>
  <header class="mint-header">
        <div class="mint-header-button is-left">
          <a href="#/" class="router-link-active">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-back"></i>
            </span> 
            <label class="mint-button-text"></label>
          </button></a>
        </div> 
        <slot></slot> 
        <div class="mint-header-button is-right"><button class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon"></span> <label class="mint-button-text"></label></button></div>
    </header>
</template>
<script>
    export default {
        name:'back-header',
        data() {
            return {

        }
      }
    }
</script>
<style scoped>
    .mint-header {
        background-color:#fff;
        color:#26a2ff;
  }
</style>

