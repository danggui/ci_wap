<template>
  <div class="upload-container">
     <div class="main-page">
     <FlexLabel :content="info" :hasImage="true" :isBank="isBank"/>
      <div class="title-label main-color">上传附件</div>
      <ImageCard :direction="flag1"  :isBank="isBank" :defaultImage="front"  :id="frontId"/>
      <ImageCard :direction="flag2" :isBank="isBank" :defaultImage="reverse"  :id="reverseId"/>
      </div>
      <Bottom/>
  </div>
</template>

<script>
import Title from '@/components/Title';
import FlexLabel from '@/components/FlexLabel';
import ImageCard from '@/components/ImageCard';
import Bottom from '@/components/Bottom';
import {mapState} from "vuex"
export default {
  name: 'Upload',
  components: {
      Title,FlexLabel,ImageCard,Bottom
    },
  data(){
    return{
      flag1:1,
      flag2:2
    }
  },
  mounted(){
    
  },
  computed:{
    ...mapState({
      info:state=>state.upload.info,
      isBank:state=>state.upload.isBank,
      front:state=>state.upload.frontImage,
      reverse:state=>state.upload.reverseImage,
      frontId:state=>state.upload.frontId,
      reverseId:state=>state.upload.reverseId,
  })
  },
  methods:{
  }
}
</script>
   
<style rel="stylesheet/scss" lang="scss" scope>
.upload-container{
    font-size:30px; /*px*/
        .title-label{
        padding:0 32px;
        height: 90px;
        line-height: 90px;
        text-align: left;
}
}


</style>
