<template>
<div class="bottom-container">
<div  class="link-container">
 <div v-on:click="main">  <svg-icon  class-name="bottom-icon" icon-class="main"  />首页</div>
  <hr >
  <div v-on:click="claim">  <svg-icon  class-name="bottom-icon" icon-class="insurance"  />我的理赔</div>
</div>
<Copyright/>
</div>
</template>

<script>
  import Copyright from "@/components/Copyright"
  export default {
    name:"Bottom",
    components:{Copyright},
    props: [],
    data(){
      return{
        
      }
    },
   methods: {
     main(){
         this.$router.push('/')
     },
     claim(){
       this.$router.push('/claim/0')
     }
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.bottom-container{
  background: #EBEBEB;
  padding:0;
  font-size: 25px; /*px*/
  text-align: center;
  width: 100%;
  height: 138px;
  
  .link-container{
    background: #ffffff;
    height: 87px;
    line-height: 87px;
    display: flex;
    justify-content:space-between;
    >div{
      flex:1;
      color:#666666;
    }
  }
  .bottom-icon{
     margin: 0 5px;
     width: 30px;
     height: 30px;
     vertical-align: -5px;
  }
}
</style>