<template>
  <div class="family-container">
    <div class="main-page">
      <Tab :content="contents" :status="status"  @choose="selectStatus"></Tab>
      <Default v-if="detail.length<=0"/>
      <Label v-for="(item,index) in detail" :key="index" :content="item.personSecurityInfoResponse" :detail="item.planInsuranceKinds" :isShow="show" :index="index"/>
    </div>
       <Bottom/>
  </div>
</template>

<script>
import Tab from '@/components/Tab';
import Label from '@/components/Label';
import Default from '@/components/Default';
import Bottom from '@/components/Bottom';
import {mapState,mapActions}  from 'vuex'
export default {
  name: 'Family',
  components: {
      Tab,Label,Default,Bottom
    },
  data(){
    return{
       isShow:{value:true},
       contents:["生效中","待生效","已生效"],
       show:true,
      
    }
  },
  mounted(){
    this.$store.dispatch("showFamilyInsurance",{id:3,type:0})
  },
  computed:{
  ...mapState({
    status:state=>state.family.status,
    detail: state=>state.family.list
  })
  },
  methods:{
     ...mapActions(['showFamilyInsurance']),
       selectStatus(index){
         this.showFamilyInsurance({id:3,type:index})
    }
  }
}
</script>
   
<style rel="stylesheet/scss" lang="scss" scope>
@import "../../styles/mixin.scss";
.family-container{
    
      
 
 
}

</style>
