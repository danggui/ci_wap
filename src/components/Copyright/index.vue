<template>
<div class="copyright-container">
   <svg-icon class-name="copy-icon"  icon-class="copyright" />  2010-2050 CDP 版权所有
</div>
</template>

<script>
  export default {
    name:"Copyright",
    props: [],
    data(){
      return{
        
      }
    },
   methods: {
    
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.copyright-container{
  font-size: 20px; /*px*/
  color: #999999;
  background: #EBEBEB;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
  .copy-icon{
    width: 20px;
    height: 20px;
  }
}
</style>