<template>
<div class="claim-lists">
   <router-view></router-view>
   <router-view name="bottom" ></router-view>
</div>
</template>

<script>
export default {
  name: 'ClaimContainer',
  data(){
    return{
      
      
    }
  },
 computed:{
	
	},
  methods:{
    
  }
}
</script>
   
<style rel="stylesheet/scss" lang="scss" scope>

</style>
