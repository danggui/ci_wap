<template>
<div v-scroll-show:300='isBackShow'  v-show="isBackShow.value" :style="style" :title="title" class="title-container">
  <div  class="header_back">
         <div class="header_title">
           <div>
          <div class="logo">
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
    name:"HomeTitle",
    data(){
      return{
        isBackShow:{value:false},
        style:{
         position:"fixed",
         "z-index":'1',
         top:"0",
         width:"100%"
       },
       title:'自助理赔',
      }
    },
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.title-container{
   color: white;
   width: 100%;
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
    .logo{
      width: 110px;
      height: 42px;
      background-size:110px 42px; 
      @include bg-image(logo)
    }

   .header_back{
      width: 100%; 
      height: 98px; 
      background-size: 100% 98px;
      @include bg-image(header);
    }
   
}
</style>