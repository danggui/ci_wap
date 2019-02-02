<template>
  <div v-if="!hasImage"  class="flex-label-container" @touchstart="showUpload()">
      <div >
        <div class="title">
        {{content.name}}
        </div>
         <div v-if="!isBank" class="sub-title" >
        {{content.idName}} {{content.idNumber}}
        </div>
         <div v-if="isBank" class="sub-title">
        {{content.bankName}} 
        </div>
         <div v-if="isBank" class="sub-title">
        {{content.bankAccount}} 
        </div>
        </div>
      <div  v-if="!isBank" class="detail" :class="{'main-color':!content.replenishIDImages}" >
          <template v-if="!content.replenishIDImages">已上传</template>
          <template v-else>未上传</template>
        <svg-icon  class-name="rotate" icon-class="left"  />
      </div>
       <div  v-else class="detail" :class="{'main-color':!content.replenishBankImages}" >
        <template v-if="!content.replenishBankImages">已上传</template>
          <template v-else>未上传</template>
        <svg-icon  class-name="rotate" icon-class="left" />
      </div>
  </div>
  <div  v-else class="flex-label-container">
      <div >
        <div class="title">
         {{content.name}}
        </div>
         <div v-if="!isBank" class="sub-title" >
         {{content.idName}} {{content.idNumber}}
        </div>
         <div v-if="isBank" class="sub-title">
        {{content.bankName}} 
        </div>
         <div v-if="isBank" class="sub-title">
       {{content.bankAccount}} 
        </div>
        </div>
      
  </div>

</template>

<script>
 import {mapActions} from 'vuex'
  export default {
    name:"FlexLabel",
    props: {
        content:{
            type:Object,
            default:[]
        },
        isBank:{
          default:false
        },
         index:{
           default:0
        },
        hasImage:{
          default:false
        }
      
    },
    data(){
      return{
          
      }
    },
    methods: {
     showUpload(){
       let type=1;
       if(this.isBank){
         type=2
       }
         this.getUpload({id:this.content.personId,type:type,isBank:this.isBank})
         this.$router.push(`/upload`)
     },
      ...mapActions([
        'getUpload'
      ])
  }
    
    
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.flex-label-container{
   background: #ffffff;
   padding:32px;
   display: flex;
   justify-content: space-between;
   color:#666666;
   font-size: 30px; /*px*/
   align-items: center;
   border-bottom: 1px solid #EBEBEB; /*no*/
   >div{
    white-space: nowrap;
    overflow: hidden;
    max-width: 500px;
    text-overflow: ellipsis;
   }
   .title{
      color: #333333;
      font-size: 34px; /*px*/
      text-align: left;
      height: 48px;
      line-height: 48px;
   }
   .sub-title{
      color: #999999;
      font-size: 28px; /*px*/
      text-align: left;
      height: 40px;
      line-height: 40px;
   }
  
   .detail .rotate {
        transform: rotate(-180deg);
        color: #666666;
        width: 30px;
        height: 30px;
}



}   

</style>