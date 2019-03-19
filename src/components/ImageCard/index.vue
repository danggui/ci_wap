<template>
  <div class="image-container" >
   <div v-if="direction==1">正面</div>
   <div v-else>反面</div>
   <div  class="photo-upload"  @click="trigger" >
        <svg-icon v-if="!defaultImage" class-name="image-icon" icon-class="image"   /> 
        <template v-else ><img  v-lazy="defaultImage" ><svg-icon @click.native.stop="removeImage"  icon-class="delete" class-name="delete-icon"/></template>
    </div>
        <input type="file" v-if="direction==1" id="upload1" accept="image/jpg" @change="upload" :style="style">
        <input type="file" v-else id="upload2" accept="image/jpg" @change="upload" :style="style">
  </div>
</template>

<script>
  import {mapActions} from 'vuex' 
  import {Toast} from 'mint-ui'
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
            },
            
           
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
        const isJPG = picValue.type === 'image/jpeg';
        const isPNG = picValue.type === 'image/png';
        const isLt10M = picValue.size / 1024 /1024  < 1;
        if (!(isJPG||isPNG)) {
           Toast({
            message: '上传图片只能是 JPG 或者 PNG 格式',
            position: 'bottom',
            duration: 5000
          });
         
        }
        else if (!isLt10M) {
          console.log(picValue.size)
           Toast({
            message: '图片大小不能超过 10MB',
            position: 'bottom',
            duration: 5000
          });
          
        }
        else{
           this.imgPreview(picValue)
        }
        
     
    },
     //获取图片
    imgPreview(file, callback) {
      let self = this;
      //判断支不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        //创建一个reader
        let reader = new FileReader();

        //将图片转成base64格式
        reader.readAsDataURL(file);
        //读取成功后的回调
        reader.onloadend = function() {
          let result = this.result;
          let img = new Image();
          img.src = result;
          img.onload = function() {
            let data = self.compress(img);
            self.imgUrl = result;
            console.log(this)
            let blob = self.dataURItoBlob(data);
          const formData = new FormData()
          formData.append('file',blob)
          formData.append('insuredId',3)
          formData.append('accessoryType',self.type)
          console.log(self.direction)
          self.$store.dispatch("uploadIdBankImage",{data:formData,direction:this.direction})

          };
        };
      }
    },
     //压缩图片
     compress(img) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let initSize = img.src.length;
      let width = img.width;
      let height = img.height;
      canvas.width = width;
      canvas.height = height;
      // 铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);

      //进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.1);
      // console.log("*******压缩后的图片大小*******");
      // console.log(ndata)
      // console.log(ndata.length);
      return ndata;
    },
    //uri 转 blob
     dataURItoBlob(base64Data) {
      var byteString;
      if (base64Data.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(base64Data.split(",")[1]);
      else byteString = unescape(base64Data.split(",")[1]);
      var mimeString = base64Data
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: mimeString });
    },
     removeImage(){
         console.log(this.id)
           this.$store.dispatch("deleteInfoImage",{id:this.id,direction:this.direction})
     },
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
    width: 50px !important;
    height: 50px !important;
    transform:translate(100%, 100%)!important;
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