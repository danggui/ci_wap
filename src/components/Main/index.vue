<template>
  <div class="main-container">
       <div class="title">
           <div class="sub-title">我的理赔</div>
           <div @click="showClaim">查看全部 <svg-icon class-name="small-size " icon-class="next" /></div>
       </div>
       <div class="content">
        <div @click="getProcessiong"><div class=" logo logo1"></div>理赔中</div>
        <div @click="getProcessed"><div class=" logo logo2"></div>已结案</div>
        <div @click="getToProcess"><div class=" logo logo3"></div><span v-if="!isMaterial" class="redpoint"></span>待提交</div>
        <div @click="apply"><div class=" logo logo4"></div>理赔申请</div>

       </div>
     </div>
</template>

<script>
  export default {
    name:"Main",
    props: ["isMaterial"],
    data(){
      return{
         
      }
    },
    methods: {
     showClaim(){
         this.$router.push("/claim/0")
     },
     getProcessiong(){
        this.$router.push("/claim/1")
     },
     getProcessed(){
           this.$router.push("/claim/2")
     },
     getToProcess(){
         this.$router.push("/claim/3")
     },
     apply(){
        this.$router.push("/apply")
     }
    },
    
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.main-container{
    background: #ffffff;
    color: #666666;
     .big-size{
            width:62px;
            height: 62px;
        }
    .small-size{
            width:22px;
            height: 22px;
        }
    .title{
        height: 90px;
        line-height: 90px;
        margin: 0 32px;
        display: flex;
        justify-content: space-between;
        .sub-title{
            font-size: 30px;
            color: #333333;
        }
    }
    .content{
        border-top: 1px solid #EBEBEB; /*no*/
        height: 168px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        color: #333333;
        font-size:26px; 
        >div{
            flex: 1;
            position:relative;
            svg{
                position: absolute;
                top: 30px;
                left: 50%;
                margin-left: -31px;
            }
        }
    .redpoint{
            display: inline-block;
            position: absolute;
            height:12px;
            width:12px;
            border-radius:16px;
            bottom: 50px;
            right: 35px;
            background:#D80031;
        }
     .logo{
        width:62px; /*px*/
        height: 62px; /*px*/
        background-size:62px 62px; /*px*/
        margin:30px auto 20px; /*px*/
        position:relative;
        z-index:0;
     }
    .logo1{
        @include bg-image(processing);
    }
    .logo2{
        @include bg-image(processed);
    }
    .logo3{
        @include bg-image(committing);
    }

    .logo4{
        @include bg-image(apply);
    }
    }
}   

</style>