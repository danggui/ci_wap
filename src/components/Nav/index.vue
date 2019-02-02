<template>
  <div class="nav-container">
<div>
<router-link to="/notice" >
 理赔申请须知
</router-link>
 </div>
 <div>
<router-link to="/flow">
 理赔流程
</router-link>
</div>     
</div>
</template>

<script>
  export default {
    name:"Nav",
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
.nav-container{
    height: 90px;
    line-height: 90px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #333333;
    font-size: 30px; /*px*/
    div{
        flex:1;
        text-align: center;
        
    }
}   

</style>