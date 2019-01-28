<template>
  <div class="my-claim-container main-page">
      <div class="my-claim-label" v-for="(item,index) in title" :key="index" @click="showDetail(link[index])">
      <div>
      <div class="title">{{item}}</div>
      <div class="value">{{info[index]}}</div>
      </div>
      <div class="detail" v-if="isMore[index]" >
           <svg-icon  class-name="rotate" icon-class="left" />
      </div>
      </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:"myClaim",
    props: {
       
    },
    data(){
      return{
          title:["就诊类型","就诊人","已上传凭证","案件理赔进度","发票赔付金额"],
          isMore:[false,true,true,true,true],
          link:['','/claimPerson','/uploadInfo','/progress','/checkDetail']
      }
    },
    computed:{
      ...mapState({
          info: state=>state.claim.value
      })
    },
    methods: {
     showDetail(index){
         this.$router.push(index)
     }
     
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.my-claim-container{
   
    font-size: 30px;/*px*/
    .my-claim-label{
    background: #ffffff;
    border-bottom: 1px solid #EBEBEB; /*no*/
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 110px;
    padding: 0 32px;
    >div{
     display: flex;
    }
    .title{
        width: 180px;
        margin-right: 45px;
        color: #999999;
    }
     .detail .rotate {
        transform: rotate(-180deg);
        color: #666666;
        width: 30px;
        height: 30px;
        vertical-align: -10px
}

}

}


</style>