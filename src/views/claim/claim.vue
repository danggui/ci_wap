<template>
  <div class="claim-container main-page">
      <Tab :content="contents" @choose="selectStatus"></Tab>
      <Default v-if="list.length<=0"/>
      <EditLabel v-for="(item,index) in list" :key="index"  :content="item" :isShow="true" :index="index"/>
  </div>
</template>

<script>
import Tab from '@/components/Tab';
import EditLabel from '@/components/EditLabel';

import Default from '@/components/Default';
import {mapState,mapActions}  from 'vuex'
export default {
  name: 'Claim',
  components: {
      Tab,Default,EditLabel
    },
  data(){
    return{
       contents:[{value:"全部",status:1},{value:"理赔中",status:0},{value:"已结案",status:0},{value:"待提交",status:0}],
       show:true,
      
    }
  },
  mounted(){
    this.$store.dispatch("showMyClaim",{id:3,type:0})
  },
  computed:{
  ...mapState({
    list: state=>state.claim.list
  })
  },
  methods:{
     ...mapActions(['showMyClaim']),
       selectStatus(index){
         this.showMyClaim({id:3,type:index})
    }
  }
}
</script>
   
<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.claim-container{
    
      
 
 
}

</style>
