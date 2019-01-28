<template>
  <div class="material-container main-page">
     <div class="main-page">
      <div class="title-label main-color">身份证件</div>
      <FlexLabel v-for="(item,index) in info" :key="item.label" :content="item" :isBank="false" :index="index"/>
      <div class="title-label main-color">银行卡</div>
      <FlexLabel v-for="(item,index) in info" :key="item.label" :content="item"  :isBank="true" :index="index"/>
     </div>
       <Bottom/>
  </div>
</template>

<script>
import Title from '@/components/Title';
import FlexLabel from '@/components/FlexLabel';
import Bottom from '@/components/Bottom';
import {mapState} from "vuex"
export default {
  name: 'Material',
  components: {
      Title,FlexLabel,Bottom
    },
  data(){
    return{
      
    }
  },
  mounted(){
    this.$store.dispatch("showMaterial",3)
  },
  computed:{
    ...mapState({
    info: state=>state.material.info,
  })
  },
  methods:{
  
  }
}
</script>
   
<style rel="stylesheet/scss" lang="scss" scope>
.material-container{
        .title-label{
        padding:0 32px;
        font-size:30px;
        height: 90px;
        line-height: 90px;
        text-align: left;
}
}


</style>
