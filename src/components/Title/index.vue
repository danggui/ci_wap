<template>
<div  class="title-container" >
 <div  class="header_back">
         <div class="header_title">
           <div>
          <div class="left">
              <svg-icon  class-name="size-icon" icon-class="left"  v-on:click.native="back"/>
          </div>
          </div>
           <div> {{title}}</div>
           <div class="customer">
               <svg-icon class-name="size-icon" icon-class="customer" />
           </div>
           </div>
  </div>
</div>
</template>

<script>
  export default {
    name:"Title",
    data(){
      return{
      
      }
    },
    computed:{
       title(){
         return this.$route.meta.title
       }
    },


    
   methods: {
      back(){
        this.$router.goBack();//返回上一层
    },
    },
    
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.title-container{
   width: 100%;
   color: white;
   position: fixed;
   top: 0;
   height: 98px; 
   line-height: 98px; 
   z-index: 1;
   .header_title{
        height: 98px; 
        line-height: 98px; 
        margin: 0 32px; 
        display: flex;
        justify-content: space-between;
        font-size: 34px;  
        align-items: center;
        text-align: center;
         div{
          flex:1;
        }
    }
    .customer{
      width: 110px;
      text-align: right;
    }
    .left{
      text-align: left;
    }

   .header_back{
      width: 100%; 
      height: 98px; 
      background-size: 100% 98px;
      @include bg-image(header);
    }
   
}
</style>