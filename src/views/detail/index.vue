<template>
  <div class="detail-container">
    <div class="main-page">
      <div class="title">
       <div>被保险人</div>
       <div>{{info.name}}</div>
      </div>
      <div class="info">
        <div><div class="sub-title">性别</div><div>{{info.sexName}}</div></div>
        <div><div class="sub-title">出生日期</div><div>{{parseTime(info.birthDate)}}</div></div>
        <div><div class="sub-title">{{info.idName}}</div><div>{{info.idNumber}}</div></div>
        <div><div class="sub-title">手机号码</div><div>{{info.mobile}}</div></div>
        <div><div class="sub-title">电子邮箱</div><div>{{info.email}}</div></div>
        <div><div class="sub-title">银行卡</div><div><div class="sub-content" >{{info.bankName}}</div><div class="sub-content">{{info.bankAccount}}</div><div class="sub-content">{{info.accountName}}</div></div></div>
        
      </div>
      <div class="date">
        <div><div class="sub-title">保险起始日</div><div>{{parseTime(info.insuredDate)}}</div></div>
        <div><div class="sub-title">保险终止日</div><div>{{parseTime(info.invalidDate)}}</div></div>
      </div>
      <div class="more" v-for="(item,index) of content" :key="index">
           <div><div class="sub-title">{{item.insuranceKind}}</div><div>保额：{{item.amount}}</div></div>
           <div class="sub-des">{{item.guaranteeComment}}</div>
      </div>
     </div>
     <Bottom/>
  </div>
</template>

<script>
import Title from '@/components/Title';
import FlexLabel from '@/components/FlexLabel';
import Bottom from '@/components/Bottom';
import {mapState} from 'vuex';

export default {
  name: 'Detail',
  components: {
      Title,FlexLabel,Bottom
    },
  data(){
    return{
       
    }
  },
  computed:{
    ...mapState({
    info: state=>state.family.detail.personSecurityInfoResponse,
    content:state=>state.family.detail.planInsuranceKinds,
  })
  },
  methods:{
  
  }
}
</script>
   
<style rel="stylesheet/scss" lang="scss" scope>
.detail-container {
       background: #ffffff;
      .main-page {
           border-bottom:1px solid #EBEBEB;
           font-size: 24px;  /*px*/
           line-height: 34px;
       }
       .title{
           padding: 0 32px;
           display: flex;
           font-size: 32px;  /*px*/
           height: 110px;
           align-items: center;
           justify-content: space-between;
           border-bottom:1px solid #EBEBEB;
       }
       .info{
            padding: 0 32px;
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
       .date{
               padding: 0 32px;
              padding-top: 30px ;
              border-bottom:1px solid #EBEBEB;
           >div{
                margin-bottom: 30px;
               display: flex;
               .sub-title{
                color: #999999;
                width: 120px;
                margin-right: 45px;
              }
              
           }
       }
       .more{
             >div{
              margin-top: 30px;
              color: #333333;
              display: flex; 
              align-items: center;
              justify-content: space-between;
             }
             .sub-des{
                 word-break: break-all;
                 margin: 30px 0;

                 
             }
       }
       
}


</style>
