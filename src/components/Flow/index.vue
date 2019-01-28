<template>
  <div class="flow-container">
      <div class="flow">
      </div>
  </div>
</template>

<script>
  export default {
    name:"Flow",
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
.flow-container{
    background: #ffffff;
    padding: 50px 0
}
.flow{
    margin: 0 auto;
    @include bg-image(flow);
     width: 686px;  /*px*/
     height: 1160px;  /*px*/
     background-size: 686px 1160px;  /*px*/
}
</style>