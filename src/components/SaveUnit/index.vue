<template>
  <div class="save-container" >
<div  class="save-label">
 <mt-checklist
  v-model="value"
  :options="option"
  >
</mt-checklist>
</div>
<div class="button-label">
     <div class="draft" @click="submitDraft">保存草稿</div>
     <div class="confirm" @click="submitForm">提交申请 </div>
</div>
      
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {Toast} from 'mint-ui'
  export default {
    name:"SaveUnit",
   
    data(){
      return{
          value:[],
          option: [{
            label: '我已阅读并同意理赔须知',
            value: ''
            },
            ]
      }
    },
    methods: {
     submitDraft(){
         if(this.value.length==0){
             Toast("请先勾选已阅读并同意理赔须知内容")
             return
         }
          this.$emit("submitInfo",0)
          this.value=[]
     },
      submitForm(){
         if(this.value.length==0){
             Toast("请先勾选已阅读并同意理赔须知内容")
              return
         }
           this.$emit("submitInfo",1);
           this.value=[]
     }
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.save-container{
    background:none;
   .save-label{
       height: 110px;
       .mint-cell{
           background: none;
           
           .mint-checkbox-core{
               border-color:#5E62C1;
                background: none;
                border-radius: 0;
           }
           .mint-checkbox-input:checked + .mint-checkbox-core{
                background: none;
           }
           .mint-checkbox-input:checked + .mint-checkbox-core::after{
               border-color:#5E62C1;
           }
       }
   }
   .button-label{
       margin: 50px 32px;
       display: flex;
       align-items:center;
       height: 100px;
       >div{
           align-items:center;
           border:2px solid #5E62C1;
           border-radius:100px;
       }
       .draft{
          padding: 26px 62px;
          color:#5E62C1;
          margin-right: 40px;
       }
        .confirm{
           padding: 26px 112px;
           color:#ffffff;
           background: #5E62C1;
       }
   }

}   

</style>