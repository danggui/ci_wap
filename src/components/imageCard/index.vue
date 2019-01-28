<template>
  <div class="image-container" >
   <div v-if="direction">正面</div>
   <div v-else>反面</div>
   <div  class="photo-upload" @click="trigger">
        <svg-icon  v-if="!defaultImage" class-name="image-icon" icon-class="image" />
        <img  v-else  :src="defaultImage">
    </div>
  
       <input type="file" id="upload" accept="image/jpg" @change="upload" :style="style">
        <label for="upload"></label>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name:"ImageCard",
    props: {
        direction:{
            type:Boolean,
            default:false
        }
    },
    data(){
      return{
            defaultImage:'',
            style:{
                display:"none"
            }
           
      }
    },
    methods: {
    trigger(){
    document.getElementById("upload").click();
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
          formData.append('PersonId',3)
          formData.append('accessoryType',1)
          console.log(formData)
      this.$store.dispatch("uploadSingleImage",formData)
     },
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.image-container{
   background: #ffffff;
   padding: 32px;
   margin-bottom: 20px;
   
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
  }


}   

</style>