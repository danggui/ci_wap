<template>
  <div id="app">
    <router-view name="title"></router-view>
    <transition :name="transitionName" >
    <router-view class="Router" />
    </transition>
  </div>
</template>
<script>
import Title from '@/components/Title';
import FlexLabel from '@/components/FlexLabel';
import {mapState} from 'vuex';
export default {
  name: 'App',
  components:{Title},
  data(){
　　　　return {
　　　　　　transitionName: 'slide-right' ,// 默认动态路由变化为slide-right,
           isPage:true,
　　　　}
　　},
  mounted(){

  },
  computed:{
  isShow(){
    return{value:true}},
  title(){
    return this.$route.meta.title
    },
    ...mapState(
      ['isHome']
    )
  },
　　watch: {
　　　'$route' (to, from) {
　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
          //console.log(this.$router)
　　　　　　if(isBack) {
　　　　　　　　this.transitionName = 'slide-right'
　　　　　　} else {
　　　　　　    this.transitionName = 'slide-left'
　　　　　}
　　   this.$router.isBack = false
　　}
　}
}
</script>
<style rel="stylesheet/scss" lang="scss" scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 
}
.main-page{
    min-height: calc(100vh - 98px - 138px); 
}
.Router {
    transition:all .5s ease;
    position: absolute;
    width: 100%;
    margin-top: 98px;
   
}
.login-container{
  margin-top: 0!important;
}
.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>