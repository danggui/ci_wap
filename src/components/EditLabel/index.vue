<template>
  <div v-show="isShow" class="edit-label-container"  >
      <div class="content" @click="showClaim(content.id)">
      <div class="title" >
           <div class="label"> <div class="sub-title">申请日期</div> <div>{{parseTime(content.createdDate)}}</div></div>
           <div class="label"> <div class="sub-title">就诊人</div> <div>{{content.name}}</div></div>
           <div class="label"> <div class="sub-title">就诊日期</div> <div>{{parseTime(content.doctorDate)}}</div></div>
           <div class="label"> <div class="sub-title">状态</div> <div>{{content.typeName}}</div></div> 
     </div>
      <div class="detail">
        <svg-icon  class-name="rotate" icon-class="left"  v-on:click.native="showDetail"/>
      </div>
      </div>
      <div v-if="content.supplementaryNote" class="des">
        <Detail :content="content.supplementaryNote"/>
      </div>
      <div v-if="content.type==3" class="more">
         <div class="edit" @click="handleEdit(content.id)">编辑</div><div class="delete"  @click="handleDelete(index,content.id)">删除</div>
      </div>
  </div>
</template>

<script>
  import Detail from '@/components/Detail'
  import {mapState,mapActions} from 'vuex'
  export default {
    name:"EditLabel",
    components:{Detail},
    props: {
        content:{
            type:Object,
            default:{}
        },
        isShow:{
            type:Boolean,
            default:false
        },
        index:{
           default:0
        }
    },
    data(){
      return{
          
      }
    },
    computed:{
     ...mapState({
     list: state=>state.claim.list,
  })
    },
    methods: {
      reset(){
        history.go();
      },
     showClaim(id){
         this.showGeneralClaim(id)
         this.$router.push(`/myClaim`)
     },
     handleEdit(id){
        this.$router.push({path: '/apply'});
        this.$store.dispatch('showEditApply',id);
     },
     handleDelete(index,id){
          this.$store.dispatch('deleteMyClaim',{index:index,id:id});
     },
      ...mapActions([
        'showGeneralClaim'
      ])
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.edit-label-container{
    background: #ffffff;
    margin:0 0 20px 0;
    line-height: 50px;
    color:#333333;
    font-size: 30px; /*px*/
   .content{
       padding:  32px;
       display: flex;
       align-items: center;
       justify-content: space-between;
   }
   .sub-title{
      color:#999999;
      text-align: left;
      width: 130px;
      margin-right: 45px;
   }
   .label{
     display: flex;
       
       
   }
   .detail .rotate {
        transform: rotate(-180deg);
        color: #666666;
        width: 30px;
        height: 30px;
        vertical-align: -10px;
       
}

.more{
    padding: 0 32px;
    height: 84px;
    border-top: 1px solid #EBEBEB; /*no*/
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color:#999999;
    font-size: 24px;/*px*/
    >div{
        margin-left:20px;
        border: 1px solid #999999; /*no*/
        border-radius: 50px;
        height: 50px;
        width: 130px;
        text-align: center;
    }
}


}   

</style>