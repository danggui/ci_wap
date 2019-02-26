<template>
  <div class="image-container" >
   <div v-if="direction==1">正面</div>
   <div v-else>反面</div>
   <div  class="photo-upload"  @click="trigger" >
        <svg-icon v-if="!defaultImage" class-name="image-icon" icon-class="image"   /> 
        <template v-else ><img   v-lazy="defaultImage" ><svg-icon @click.native.stop="removeImage"  icon-class="delete" class-name="delete-icon"/></template>
    </div>
        <input type="file"   v-if="direction==1" id="upload1" accept="image/jpg" @change="upload" :style="style">
        <input type="file" v-else id="upload2" accept="image/jpg" @change="upload" :style="style">
       
  </div>
</template>

<script>
  import {mapActions} from 'vuex' 
  export default {
    name:"ImageCard",
    props: {
        direction:{
            default:1
        },
        defaultImage:{
            type:String,
            default:""
        },
        isBank:{
            type:Boolean,
            default:false
        },
        id:{
            type:Number,
            default:0
        },
       
    },
    data(){
      return{
            style:{
                display:"none"
            }
           
      }
    },
    computed:{
        type(){
            if(!this.isBank){
                switch (this.direction){
                    case 1:
                    return 1;
                    case 2:
                    return 2
                }
            }
            else{
            switch (this.direction){
                    case 1:
                    return 3;
                    case 2:
                    return 4
                }
            }
        }
        
        /*defaultImage(){
            if(this.direction&&!this.isBank){
                return this.content.frontIdImage.filePath
            }
            else if (this.direction&&this.isBank) {
                  return this.content.frontBankImage.filePath
            }
            else if (!this.direction&&!this.isBank) {
                  return this.content.reverseIdImage.filePath
            }
            else if(!this.direction&&this.isBank){
                return this.content.reverseBankImage.filePath
            }
        }
        */
    },
    methods: {
        trigger(){
            if(this.direction==1){
                 document.getElementById("upload1").click();
            }
            else{
                 document.getElementById("upload2").click();
            }
       

        },
        upload (e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        let picValue = files[0];
         //console.log(picValue)
        //this.imgPreview(this.picValue);
        this.postImg(picValue)
     
    },
     postImg(e){
          const formData = new FormData()
          formData.append('file',e)
          formData.append('insuredId',3)
          formData.append('accessoryType',this.type)
          console.log(this.direction)
          this.$store.dispatch("uploadIdBankImage",{data:formData,direction:this.direction})
     },
     removeImage(){
         console.log(this.id)
           this.$store.dispatch("deleteInfoImage",{id:this.id,direction:this.direction})
     }
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.image-container{
   background: #ffffff;
   padding: 32px;
   margin-bottom: 20px;
   .relative-image{
       position: relative;
   }
   .delete-icon{
       color: #D80031;
       position: absolute;
       right: -20px;
       top: -20px;
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
      margin: 25px 0 10px;
      border:2px dashed #cccccc;
      position: relative;
      img{
        width: 154px;
        height: 154px;
        }
  }
  


}   

</style>