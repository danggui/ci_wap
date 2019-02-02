<template>
  <div class="apply-container main-page">
      <div class="apply-label" @click="showSheet">
      <div ><div class="title">就诊类型：</div> <div class="value">{{value}}
    <mt-actionsheet
       cancel-text=""
       closeOnClickModal
       :actions="actions"
       v-model="sheetVisible">
         >
         </mt-actionsheet>
          </div></div>
      <div class="detail" >
           <svg-icon  class-name="rotate" icon-class="left" />
      </div>
      </div>
       <div class="title-label main-color">身份证件</div>
       <div class="apply-label" @click="showTime">
      <div><div class="title">就诊日期：</div> <div class="value">{{selectedTime}}
       <mt-datetime-picker
        ref="picker1"
        v-model="pickerValue"
        closeOnClickModal
        type="date"
        @confirm="chooseDate"
        @cancel="close"
        @click="close-pop"
        :endDate="endDate"
         >
        </mt-datetime-picker>
          </div></div>
      <div class="detail" >
           <svg-icon  class-name="rotate" icon-class="left" />
      </div>
      </div>
      <div class="apply-label" @click="showPerson">
      <div><div class="title">就诊人：</div> <div class="value">{{selectedPeople}}
         <mt-popup
          closeOnClickModal
          v-model="sheetVisible2"
          position="bottom">
          <mt-picker ref="picker2" value-key="values" :slots="slots"  :show-toolbar="true" >
            <div  @click="choosePeople" class="my-confirm picker-item main-color">确认</div>
         </mt-picker>
        </mt-popup>
       </div></div>
      <div class="detail" >
           <svg-icon  class-name="rotate" icon-class="left" />
      </div>
      </div>
      <div class="des-content">
      <div class="title-label-s main-color">上传凭证</div>
      <div class="des-label ">1. 请上传三个月以内的发票及凭证</div>
      <div class="des-label ">2. 图片格式：jpg、jpeg、png，单张大小不超过3MB</div>
     </div>
     <template v-if="isOutpatient">
       <ImageList v-for="(item,index) in label1" :title="item.value" :key="index" :content="image1[item.label]"  :must="item.must" :type="item.type" :typeName="item.label"/> 
     </template>
      <template v-else>
       <ImageList v-for="(item,index) in label2" :title="item.value" :key="index" :content="image2[item.label]"  :must="item.must" :type="item.type" :typeName="item.label"/> 
       </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ImageList from '@/components/ImageList';

  export default {
    name:"Apply",
    components:{ImageList},
    props: {
      
    },
    data(){
      return{
        style:{
             display:"none"
        },
        sheetVisible: false,
        sheetVisible2: false,
        selectedTime:null,
        selectedPeople:null,
        pickerValue:"",
        value:"门急诊",
        endDate:new Date(),
        actions: [{
          name: '门急诊',
          method: this.outpatient
        }, {
          name: '住院',
          method: this.hospital
        }],
            
        label1:[
           {value:'门诊病历本首页及病历',index:1,must:1,type:101,label:"outpatients"},
           {value:'医疗费用原始凭证',index:2,must:1,type:102,label:"medicals"},
           {value:'费用明细',index:3,must:1,type:103,label:"costs"},
           {value:'检查报告',index:4,must:0,type:104,label:"inspects"},
           {value:'其他附件',index:5,must:0,type:105,label:"others"}
           ],
           label2:[
           {value:'门诊病历本首页及病历',index:6,must:1,type:106,label:"outpatients"},
           {value:'医疗费用原始凭证',index:7,must:1,type:107,label:"medicals"},
           {value:'住院明细清单',index:8,must:1,type:108,label:"costs"},
           {value:'出院小结',index:9,must:1,type:109,label:"summarys"},
           {value:'检查报告',index:10,must:0,type:110,label:"inspects"},
           {value:'其他附件',index:11,must:0,type:111,label:"others"}
           ],
           isOutpatient:true
      }
    },
    created(){
        this.$store.dispatch('showApply',3)
    },
    mounted(){
        this.setStorage("code","115")
        this.removeStorage("insuredId")
    },
    computed:{
      ...mapState({
          info: state=>state.claim.value,
          people:state=>state.apply.people,
          image1:state=>state.apply.image1,
          image2:state=>state.apply.image2,
      }),
       slots(){
            return [{ flex: 1,values:this.people}]
        },
    },
    methods: {
    showSheet(){
           this.sheetVisible = !this.sheetVisible
     },
    showPerson(){
        this.sheetVisible2 = !this.sheetVisible2
    },
    showTime() {
         if (this.selectedTime) {
                this.pickerValue = this.selectedTime
            } else {
                this.pickerValue = new Date()
            }
            this.$refs['picker1'].open()
    },
    chooseDate(){
         this.selectedTime=this.parseTime(this.pickerValue)
         this.$nextTick(
             ()=>{
                 this.$refs['picker1'].close()
             } 
          )
    },
    choosePeople(picker, values){
        this.selectedPeople = this.$refs.picker2.getValues()[0].values
         let id=this.$refs.picker2.getValues()[0].id
         this.setStorage("insuredId",id)
         let code = this.getStorage("code")?this.getStorage("code"):115
         this.$store.dispatch('getImageList',{id:id,code:code,kind:0},)
       
    },
    close(){
        this.$nextTick(
             ()=>{
                 this.$refs['picker1'].close()
             } 
          )
    },
      outpatient() {
       this.value="门急诊"
       this.setStorage("code","115")
       this.isOutpatient=true
       this.selectedPeople=null
       this.selectedTime=null
       this.removeStorage("insuredId")
       this.$store.dispatch('showApply',3)
      },

      hospital() {
        this.value="住院"
        this.setStorage("code","116")
        this.isOutpatient=false
        this.selectedPeople=null
        this.selectedTime=null
        this.removeStorage("insuredId")
         this.$store.dispatch('showApply',3)
      },
     
   
    }, 
   
  };
</script>
<style rel="stylesheet/scss" lang="scss" scope>
.apply-container{
    font-size: 30px;/*px*/
    .apply-label{
    background: #ffffff;
    border-bottom: 1px solid #EBEBEB; /*no*/
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 110px;
    line-height: 110px;
    padding: 0 32px;
    >div{
     display: flex;
    }
    .title{
        width: 200px;
        margin-right: 45px;
        color: #666666;
    }
    .value{
        color: #333333
    }
    
     .detail .rotate {
        transform: rotate(-180deg);
        color: #666666;
        width: 30px;
        height: 30px;
        vertical-align: -10px
}
.my-confirm{
    text-align: right;
}
}
  .des-content{
   margin: 25px 0
 }
  .title-label{
        padding:0 32px;
        height: 90px;
        line-height: 90px;
        text-align: left;
  }
 .title-label-s{
        padding:0 32px;
        height: 50px;
        line-height: 50px;
        text-align: left;
  }
    .des-label{
        padding:0 32px;
        font-size: 24px;/*px*/
        color: #666666;
        line-height: 34px;
  }




.mint-datetime-action{
    color: #636CB0;
}
.mint-actionsheet-list{
   
}
.mint-popup{
    width: 100%;
}
}
</style>