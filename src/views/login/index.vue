<template>
  <div class="login-container">
     <v-header :info="info"></v-header>
     <v-main :isMaterial="info.replenishClaimMaterial" :isUpdate="info.toBeSubmit"></v-main>
     <v-nav></v-nav>
      <keep-alive>
      <router-view ></router-view>
     </keep-alive>
     <back-top v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow'  :style="style"></back-top>
  </div>
</template>

<script>
import header from '@/components/Header';
import main from '@/components/Main';
import nav from '@/components/Nav';
import BackTop from '@/components/BackTop';
import {mapState} from 'vuex'

export default {
  name: 'Login',
  components: {
      'v-header': header,
      'v-main': main,
      'v-nav': nav,
      'back-top':BackTop
    },
  data(){
    return{
       isBackShow:{value:false},
       style:{
         position:"fixed",
         right:"32px",
         bottom:"67px"
       }
    }
  },
   computed:{
        ...mapState({
          info:state=>state.home.info
        })
    },
  mounted(){
    //this.$store.dispatch("checkMaterial",3) 
     this.$store.dispatch("getBasicInfo",3) 
  }
}
</script>

