<template>
 <div  v-show="isShow.value" class="backtop-container">
     <div>
    <svg-icon class-name="up-icon" icon-class="up" />
     <div>顶部</div>
     </div>
 </div>
</template>

<script>
  export default {
    name:"BackTop",
    props: ["isShow"],
    data(){
      return{
         
      }
    },
    methods: {
     
    },
    
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.backtop-container{
    width: 100px;
    height: 100px;
    border-radius:50%;
    background: #ffffff;
    border: 1px solid #999999; /*no*/
    text-align: center;
    .up_icon{
        color:#666666;
        
    }
    >div{
        margin-top:15px;
        color:#666666;
      
    }

   
}
</style>