<template>
<div class="button-container">
<div @click="apply">申请理赔</div>
</div>
</template>

<script>
  export default {
    name:"Bottom",
  
    data(){
      return{
        
      }
    },
   methods: {
     apply(){
         this.$router.push('/apply')
     }
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.button-container{
 font-size: 34px;/*px*/
 color: white;
 background: #636CB0;
 text-align: center;
 position: fixed;
 bottom: 0;
 height: 100px;
 line-height: 100px;
 width: 100%;
}
</style>