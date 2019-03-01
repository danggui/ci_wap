<template>
  <div class="header">
     <div class="header_content">
         <div class="header_title">
          <div class="logo"></div>
           <div> {{title}}</div>
           <div class="customer">
               <svg-icon class-name="size-icon" icon-class="customer" />
           </div>
           </div>
    <div class="content-wrapper">
      <div class="avatar">
         <svg-icon class-name="default-avator" :icon-class="avator"  />
      </div>
      <div class="content">
        <div class="name">
          {{info.name}}
        </div>
        <div class="welcome">
          {{welcome}}
        </div>
      </div>
    </div>
    </div>
     <div class="background">
    <img :src="src" width="100%" height="100%">
    </div>
      <div class="cards"> 
      <Card :num="info.securityNums"  title="家庭保障" path="/family"/>
      <Card :num="info.familyPersonNums"  title="家庭成员"  path="/member"/>
       <Card :num="info.certificateInfoNums"  title="证件资料"  path="/material"/>
      
      </div>
       <div class="instrus" v-if="!info.replenishClaimMaterial"> 
        <div><svg-icon class-name="size-icon" icon-class="bell" /></div>
          <div>您的理赔申请缺少材料，请点击【这里】补充材料</div>
      </div>
      <div class="instrus-no" v-else> 
      </div>
  </div>
</template>

<script>
 import Card from '@/components/Card'
 import Title from '@/components/Title'
 import {getSex} from "@/utils/map"
  export default {
    components:{Card,Title},
    props: {
      seller: {
        type: Object
      },
      info:{
        type:Object,
        default:{}
      }
    },
    data() {
      return {
        detailShow: false,
        title:'自助理赔',
        src: require('@/assets/images/header_back.png'),
        avator:getSex(this.info.sex),
        welcome:"欢迎来到CI管理系统",
        //sub_title:['家庭保障','家庭成员','证件资料'],
        isBackShow:{value:true},
        style:{
         position:"fixed",
         "z-index":'1',
         top:"0"
       }
      };
    },
   
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.header{
    position: relative;
     color: white;
    .background{
        width: 100%;  
        height: 320px; 
        position: absolute;
        top: 0;
        z-index: -1;
       
    }
    .header_title{
        height: 98px; 
        line-height: 98px; 
        margin: 0 32px; 
        display: flex;
        justify-content: space-between;
        font-size: 34px; /*px*/
        align-items: center;
        text-align: center;
       
    }
   .logo{
      width: 110px;
      height: 42px;
      background-size:110px 42px; 
      @include bg-image(logo)
    }
    .customer{
      width: 110px;
      text-align: right
    }

  .content-wrapper{
    text-align: left;
    margin: 0 48px;
    .avatar, {
      display: inline-block;
      vertical-align: top;
      border-radius: 50%;
      width: 88px;
      height: 88px;
      //border:2px solid  #FFFFFF; /*no*/
      .default-avator{
        width: 100%;
        height: 100%;
      }
    }
    .content {
     display: inline-block;
     margin-left: 40px;
      .name{
        font-size: 40px; /*px*/
        height: 56px;
        }
       .welcome{
         margin-top: 7px;
       
        }
    }
    
  }
  .cards{
    margin: 33px;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-between;
    color: #666666;
  }
  .instrus-no{
     margin:  33px;
  }
  .instrus{
    text-align: left;
    font-size: 24px; /*px*/
    height:80px;
    line-height: 80px;
    background:rgba(255,255,255,1);
    border-radius:40px;
    margin:  33px;
    padding-left: 40px;
    color: #333333;
      div{
        display:inline-block;
        svg{
        vertical-align: -10px;
        }
      }
    
  }
}

</style>