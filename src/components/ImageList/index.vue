<template>
<div class="image-list-container">
  <div class="image-label">
      <div class="title"><span v-if="must">*</span>{{title}}</div>
        <div class="photo">
            <div  class="gallary" v-for="(item,index) of content" :key="index"><img v-lazy="item.thumbPath"/> </div>
        <div class="photo-upload"  @click="trigger">
        <svg-icon  class-name="image-icon" icon-class="image" />
         </div>
        <input type="file"  ref="upload" accept="image/*" @change="upload" :style="style"/>
       </div>
       
     </div> 
</div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import {Toast} from 'mint-ui'
import { endianness } from 'os';
  export default {
    name:"ImageList",
    props: {
       content:{
       },
       title:{
           default:""
       } ,
       must:{
          default:1
       },
       type:{

       },
       typeName:{
           default:""
       }
    
    },
    data(){
      return{
          style:{
                display:"none"
        },
      }
    },
    
    mounted(){
     
    },
    computed:{
     ...mapState({
       list:state=>state.apply.list
      }),
      
    },
    methods:{
       //上传
       trigger(){
            this.$refs.upload.click();
        },
        upload (e) {
         //  console.log(e)
        let files = e.target.files || e.dataTransfer.files;
        console.log(files)
        if (!files.length) return;
        let picValue = files[0];
       

        this.postImg(picValue)
        
    },
     postImg(e){
       
       const id =this.getStorage("insuredId")
         if(!id){
             Toast("请选择就诊人")
             return;
         }
        
          const formData = new FormData()
          formData.append('file',e)
          formData.append('insuredId',id)
          formData.append('accessoryType',this.type)
           
          this.$store.dispatch("uploadSingleImage",{data:formData,code:this.typeName})
     },
     
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.image-list-container{
    margin-bottom: 20px;
     .image-label{
       background: #ffffff;
        padding: 34px;
        .title{
            color:#333333;
            margin-bottom: 20px;
            span{
                color: #D80031;
                display: inline-block;
                vertical-align: middle;
                width: 20px;
            }
        }
       .photo{
            display: flex;
            flex-wrap:wrap;
            flex-direction: row;
             .gallary{
                   width: 25%;
                   margin-bottom: 5px;
                    img{
                        width: 154px;
                         height: 154px;
                        }
               }
       }
}
.image-icon{
    color: #cccccc;
    width: 50px;
    height: 50px;
    transform:translate(100%, 100%);
   }
  .photo-upload{
      width: 154px;
      height: 154px;
      border:2px dashed #cccccc;
      img{
        width: 154px;
        height: 154px;
        }
  }
  

}


</style>