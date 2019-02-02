<template>
  <div class="member-container">
    <div class="main-page">
      <PicLabel v-for="(item) in detail" :key="item.label" :content="item" :isShow="show"/>
       </div>
       <Bottom/>
       </div>
</template>

<script>
import Title from '@/components/Title';
import PicLabel from '@/components/PicLabel';
import Bottom from '@/components/Bottom';
import { mapState } from 'vuex'
export default {
  name: 'Material',
  components: {
      Title,PicLabel,Bottom
    },
  data(){
    return{
        isShow:{value:true},
        show:true,
        num:0
    }
  },
  mounted(){
      this.$store.dispatch("showMember",3)
  },
  computed:{
     ...mapState({
        detail: state => state.member.info
     })
  }
  ,
  methods:{
  
  }
}
</script>
   
<style rel="stylesheet/scss" lang="scss" scope>
.member-container{
      
}


</style>
