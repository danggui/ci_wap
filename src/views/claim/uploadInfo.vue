<template>
  <div class="upload-container main-page">
     <div class="title">
       <div>已上传凭证</div>
       <div class="value">{{info[2]}}</div>
      </div>
       <div class="gallary">
           <div v-for="(item,index) in upload" :key="index">
                  
                <div class="sub-title" v-if="item.length>0">{{getName(index)}}</div>
                <div class="photo">
                <div v-for="(i,key) of item" :key="key"><img  v-lazy="i.thumbPath"/> </div>
                </div>
        </div>
      </div>
      
       
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import {getLabel} from "@/utils/map"
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
       upload: state=>state.claim.upload,
       info: state=>state.claim.value
      }),
      
    },
    methods:{
      getName(item){
        return getLabel(item)
      }
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.upload-container{
       >div{
           padding: 0 32px;
           background: white;
           border-bottom:1px solid #EBEBEB;
           font-size: 24px;  /*px*/
           line-height: 34px;
           text-align: left;
       }
       .title{
           display: flex;
           font-size: 32px;  /*px*/
           height: 110px;
           line-height:110px;
           align-items: center;
           justify-content: space-between;
           color: #999999;
            .value{
             color:#333333;
           }
        
       }
       .gallary{
           margin-bottom: 25px;
           .sub-title{
               padding: 30px 0

           }
           .photo{
               display: flex;
               flex-wrap:wrap;
               flex-direction: row;
               >div{
                   width: 25%;
                    img{
                        width: 154px;
                         height: 154px;
                        }
               } 
           }
       }
       
      
}


</style>