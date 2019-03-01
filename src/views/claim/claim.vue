<template>
  <div class="claim-container ">
      <Tab :content="contents" :status="status" @choose="selectStatus"></Tab>
      <Default v-if="list.length<=0"/>
      <EditLabel v-for="(item,index) in list" :key="index"  :content="item" :isShow="true" :index="index" />
      <Button/>
  </div>
</template>

<script>
import Tab from '@/components/Tab';
import EditLabel from '@/components/EditLabel';

import Default from '@/components/Default';
import Button from '@/components/Button';
import {mapState,mapActions}  from 'vuex'
export default {
  name: 'Claim',
  components: {
      Tab,Default,EditLabel,Button
    },
  data(){
    return{
       contents:["全部","理赔中","已结案","待提交",],
       show:true,
      
    }
  },
   computed:{
    type(){
      return this.$route.params.id
    },
  ...mapState({
    list: state=>state.claim.list,
    status: state=>state.claim.status,
  })
  },
  mounted(){
    this.fetchData()  
  },
   watch:{
      '$route' (to, from){
        this.fetchData()  
    }
   },
  methods:{
     ...mapActions(['showMyClaim']),
       selectStatus(index){
        this.$router.push(`/claim/${index}`)
    },
    fetchData(){
       this.$store.dispatch("showMyClaim",{id:3,type:this.type})
    },
   
  }
}
</script>
   
<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.claim-container{
    min-height: calc(100vh - 98px );
    padding-bottom:100px;
}

</style>
