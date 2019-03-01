<template>
  <div class="detail-container-c" @click="hideOrShow" :style="style">
      <svg-icon  class-name="warning" icon-class="warning"/> {{content}}
  </div>
</template>

<script>

  export default {
    props: {
      content: {
        type: String
      },
      
    },
    data() {
      return {
       hide:true,
       hideStyle:{
          "white-space": "nowrap",
           "overflow": "hidden",
           "text-overflow": "ellipsis",
       },
       showStyle:{

       }
      };
    },
    computed:{
      style(){
        return this.hide?this.hideStyle:this.showStyle;
      }
    },
    watch: {
     'content':async function () {
           await this.$nextTick();
            console.log('nextTick');
     }
   },
    methods: {
     hideOrShow(){
        this.hide=!this.hide;
     }
    },
  
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .detail-container-c{
       color: #DF8804;
       background: #EBEBEB;
       padding: 10px 16px;
       .warning{
         width: 30px;
         height: 30px;
       }
  }


</style>