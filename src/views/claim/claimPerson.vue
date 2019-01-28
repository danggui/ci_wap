<template>
  <div class="claim-person-container main-page">
     <div class="title">
       <div>就诊人</div>
       <div>{{info.name}}</div>
      </div>
       <div class="info">
        <div><div class="sub-title">证件号码</div><div>{{info.idNumber}}</div></div>
        <div><div class="sub-title">手机号码</div><div>{{info.mobile}}</div></div>
        <div><div class="sub-title">电子邮箱</div><div>{{info.email}}</div></div>
        <div><div class="sub-title">银行卡</div><div><div class="sub-content" >{{info.bankName}}</div><div class="sub-content">{{info.bankAccount}}</div><div class="sub-content">{{info.accountName}}</div></div></div>
        <div><div class="sub-title">就诊日期</div><div>{{info.insuredDate}}</div></div>
       
        
      </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  
  export default {
    name:"ClaimPerson",
    props: {
       
    },
    data(){
      return{
         
      }
    },
    mounted(){

    },
    computed:{
     ...mapState({
       info: state=>state.claim.person_info
      })
    },
    methods:{
     
     
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.claim-person-container{
     
       >div{
           background: #ffffff;
           border-bottom:1px solid #EBEBEB;
           font-size: 24px;  /*px*/
           padding: 0 32px;
           line-height: 34px;
           text-align: left;
         
       }
       .title{
           display: flex;
           font-size: 32px;  /*px*/
           height: 110px;
           align-items: center;
           justify-content: space-between;
           color: #999999;
       }
      .info{
            padding: 32px;
            margin-top: 30px;
            border-bottom:1px solid #EBEBEB;
           >div{
              margin-bottom: 20px;
              display: flex; 
              .sub-title{
                color: #999999;
                width: 100px;
                margin-right: 45px;
              }
              .sub-content{
                  margin-bottom: 20px;
              }
           }
       }
}


</style>