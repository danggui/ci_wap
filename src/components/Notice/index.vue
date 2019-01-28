<template>
  <div class="notice-container">
      <div class="notice">
      </div>
  </div>
</template>

<script>
  export default {
    name:"Notice",
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
.notice-container{
    background: #ffffff;
    padding: 50px 0
}
.notice{
    @include bg-image(notice);
     margin: 0 auto;
     width: 686px; 
     height: 3002px; 
     background-size: 686px 3002px; 
}
</style>