<template>
  <div class="default-container">
    <div class="layout"></div>
     <div class="default">
        <svg-icon  class-name="default-icon" icon-class="box"  />
      </div> 
      <div class="no-record">暂无记录</div>
  </div>
</template>

<script>
  export default {
    name:"Default",
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
.default-container{
    text-align: center;
    height: 300px;
    min-height: calc(100vh - 98px  - 138px);
    .layout{
        height: 400px;
    }
    .default{
          @include bg-image(default);
          width:222px;
          height: 222px;
          background-size:222px 222px;
          margin: 0 auto;
          color: #EBEBEB;
        
          .default-icon{
            width: 100px;
            height: 100px;
            line-height: 222px;
            transform:translate(0, 50%);
          }
          }
          .no-record{
              color:#cccccc;
              margin-top: 30px;
              font-size: 30px; /*px*/
          }
}
</style>