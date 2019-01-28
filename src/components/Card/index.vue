<template>
<router-link :to="path">
  <div class="card">
       <div class="num">{{num?num:0}}</div>
       <div class="des">{{title}}</div>
     </div>
</router-link>
</template>

<script>
  export default {
    props: ["path","num","title"],
    data() {
      return{

      }
    },
    methods: {
     
    },
    
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
   .card{
      width:218px;
      height:90px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 5px 0px rgba(0,0,0,0.2);
      border-radius:8px;
      text-align: center;
        .num{
          color: #5E62C1;
          font-size: 34px; /*px*/
          height: 48px;
          line-height: 48px;
        }
    }

</style>