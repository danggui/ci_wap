<template>
  <div v-show="isShow" class="label-container" @click="showInsurance(index)" >
      <div class="title" >{{content.name}} <div v-if="content.relativeName" class="label">{{content.relativeName}}</div> </div>
      <div class="detail">
        <svg-icon  class-name="rotate" icon-class="left"  v-on:click.native="showDetail"/>
      </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name:"Label",
    props: {
        content:{
            type:Object,
            default:[]
        },
        isShow:{
            type:Boolean,
            default:false
        },
        detail:{
          type:Array,
          default:()=>[]
        },
        index:{
           default:0
        }
    },
    data(){
      return{
          
      }
    },
    methods: {
      reset(){
        history.go();
      },
     showInsurance(index){
         this.showDetail(index)
         this.$router.push(`/detail`)
     },
      ...mapActions([
        'showDetail'
      ])
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.label-container{
  
   background: #ffffff;
   height: 110px;
   margin: 0 0 20px 0;
   padding: 0 32px;
   display: flex;
   justify-content: space-between;
   color:#333333;
   font-size: 30px; /*px*/
   align-items: center;
   .title{
      text-align: left;
   }
   .label{
       display: inline-block;
       vertical-align: middle;
       border: 1px solid #636CB0; /*no*/
       border-radius:40px;
       color: #636CB0;
       font-size: 20px; /*px*/
       line-height: 0px;
       padding: 18px ;
       max-width: 200px;
       overflow: hidden;
       text-overflow: ellipsis;
       
   }
   .detail .rotate {
        transform: rotate(-180deg);
        color: #666666;
        width: 30px;
        height: 30px;
        vertical-align: -10px
}


}   

</style>