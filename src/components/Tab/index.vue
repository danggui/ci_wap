<template>
  <ul class="tab-container">
     <li v-for="(item,index) in content" :key="index"  :class="{'active':status[index]}" @click="selectStatus(index)">{{item}}
     <span v-if="(index==3)&&!isUpdate" class="redpoint"></span>
     </li>
     
 </ul>
</template>

<script>
 import {mapState} from "vuex"
  export default {
    name:"Tab",
    props: ["content","status"],
    data(){
      return{
          
      }
    },
    computed:{
      ...mapState(
        {isUpdate:state=>state.home.info.toBeSubmit}
      )
    },
    methods: {
     selectStatus(index){
       this.$emit("choose",index);
     }
    },
    
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.tab-container{
    position: fixed;
   
    width: 100%;
    height: 90px;
    line-height: 90px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #666666;
    font-size: 28px; /*px*/
    background: #ffffff;
    border-bottom: 1px solid #CCCCCC; /*no*/
    z-index: 1;

    li{
        flex:1;
        text-align: center;
        position: relative;
		transition: 0.2s all linear;
		cursor: pointer;
    }
		li::before {
		 content: "";
         position: absolute;
         transition: 0.3s all linear;
		}
		li:active {
          background:#EDEDED;
		  color: #5E62C1;
        }
        li.active{
          color: #5E62C1;
        }
		.active ~ li::before {
          left: 0;
		}
		.active::before {
         content: "";
		 left: 50%;
         margin-left: -15px;
         width: 30px;
         height: 10px;
         background: #5E62C1;
         bottom: 5px;
         border-radius:10px;
        }
        
		.hover::before{
			width: 200%;
		}
    .redpoint{
            display: inline-block;
            position: absolute;
            height:12px;
            width:12px;
            border-radius:16px;
            bottom: 50px;
            right: 35px;
            background:#D80031;
        }


}   

</style>