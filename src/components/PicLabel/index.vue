<template>
  <div  class="pic-label-container">
       <div class="pic">
         <img v-if="content.images" v-lazy="content.images"/>
          <svg-icon v-else class-name="default-avator" :icon-class="avator"  />
       </div>
       <div class="des">
        <div class="title">
            {{content.name}} 
        <div v-if="content.relativeName"  class="label">{{content.relativeName}}</div> 
       </div>
         <div class="sub-title">
          {{content.sexName}} |  {{content.age}}  周岁
       </div>
        <div class="sub-title">
           <span>{{content.idName}} </span>   {{content.idNumber}} 
       </div>
        <div class="sub-title">
          <span>手机号码 </span>  {{content.mobile}} 
       </div>
      </div>
  </div>

</template>

<script>
  import {getSex} from "@/utils/map"
  export default {
    name:"PicLabel",
    props: {
        content:{
            type:Object,
            default:[]
        },
      
    },
    data(){
      return{
          avator:getSex(this.content.sex)
      }
    },
    methods: {
    reset(){
      history.go();
    }
    },
    
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.pic-label-container{
   background: #ffffff;
   padding:32px;
   display: flex;
   color:#666666;
   font-size: 30px; /*px*/
   border-bottom: 1px solid #EBEBEB; /*no*/
   text-align: left;
   margin-bottom: 20px;
   .pic{
       margin-right: 32px;
    img, .default-avator{
        width: 106px;
        height: 106px;
        border-radius: 25%;
    }
   }
   .des{
       .title{
           color: #333333;
           font-size:34px; /*px*/
            height: 48px;
           line-height: 48px;

       }
       .sub-title{
           color:#999999;
           font-size:28px;/*px*/
           height: 45px;
           line-height: 45px;
            span{
                display: inline-block;
                width: 158px;
            }
       }
        .label{
       display: inline-block;
       vertical-align: middle;
       border: 1px solid #636CB0; /*no*/
       border-radius:40px;
       color: #636CB0;
       font-size: 20px; /*px*/
       line-height: 0px;
       padding: 15px ;
       max-width: 200px;
       overflow: hidden;
       text-overflow: ellipsis;
       
   }
   }
  


}   

</style>