<template>
  <div class="upload-container">
     <div class="main-page">
     <FlexLabel :content="info" :hasImage="true"/>
      <div class="title-label main-color">上传附件</div>
      <ImageCard :direction="true"/>
      <ImageCard :direction="false"/>
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
      info:{}
    }
  },
  mounted(){
    
  },
  computed:{
    ...mapState({
    
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
