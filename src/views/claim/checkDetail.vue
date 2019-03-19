<template>
  <div class="claim-check-container main-page">
      <div class="loop" v-for="(item,index) of info" :key="index">
     <div class="title">
       <div>发票号</div>
       <div class="value"> {{item.invoiceCode}}</div>
      </div>
     <div class="check-list" >
        <div class="record" >
             <div class="name">
               发票金额
             </div>
              <div class="value">
             {{item.invoiceValue.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
               第三方支付
             </div>
              <div class="value">
               {{item.thirdPay.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
               理赔金额
             </div>
              <div class="value">
              {{item.lisuanAmount.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
               赔付金额
             </div>
              <div class="value">
              {{item.compensationAmount.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
               统筹支付
             </div>
              <div class="value">
              {{item.overallPay.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
              附加支付
             </div>
              <div class="value">
              {{item.additionalPayment.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
              分类支付
             </div>
              <div class="value">
              {{item.thirdPay.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
               分类自付
             </div>
              <div class="value">
              {{item.classificationPay.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
              自费
             </div>
              <div class="value">
              {{item.ownExpense.toFixed(2)}}
              </div>
               </div>
               <div class="record" >
              <div class="name">
              拒赔金额
             </div>
              <div class="value">
              {{item.rejectedAmount.toFixed(2)}}
              </div>
               
        </div>
      </div>
      <div class="info">
       <div v-if="item.compensationType" class="main">拒赔原因</div>  <div v-else>赔付说明</div>
       <div  v-if="item.compensationNote" class="detail">
          {{item.compensationNote}}
       </div>
      </div>

  </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
 
  export default {
    name:"ClaimProgress",
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
       info: state=>state.claim.check
      })
    },
    methods:{
     
     
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.claim-check-container{
    
       .loop{
            background: #ffffff;
           font-size: 24px;  /*px*/
           line-height: 34px;
           text-align: left;
           margin-bottom: 20px;
       }
       .title{
           padding: 0 32px;
           display: flex;
           font-size: 32px;  /*px*/
           height: 110px;
           align-items: center;
           justify-content: space-between;
           color: #999999;
            border-bottom:1px solid #EBEBEB;
             .value{
             color:#333333;
           }
       }
       .info{
           padding: 32px 32px;
           font-size: 32px;  /*px*/
           color: #999999;
           border-bottom:1px solid #EBEBEB;
           .main{

           }
           .detail{
               padding: 10px 0;
               color: #333333;
               line-height: 30px;
              
           }
       }
       .check-list{
            padding: 0 32px;
            border-bottom:1px solid #EBEBEB;
           .record{
               display:flex;
               justify-content: space-between;
               height: 60px;
               line-height: 60px;
               .name{
                     color: #999999;
               }
               .value{
                   text-align: right;
                   color: #333333;
                   width: 180px;
               }
           }
       }
      
}


</style>