<template>
  <div class="claim-progress-container main-page">
     <div class="title">
       <div>案件状态</div>
       <div></div>
      </div>
       <div class="progress">
        <div class="record" v-for="(item,index) of info" :key="index">
             <div class="date">
            
             </div>
              <div class="history">
            
              </div>
        </div>
        <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div>
        <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div>
         <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div>
         <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div>
         <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div>
         <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div>
         <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div>
         <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div> <div class="record" >
             <div class="date">
            werwerwe
             </div>
              <div class="history">
            234234324
              </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  
  export default {
    name:"ClaimProgress",
    props: {
       
    },
    data(){
      return{
         
      }
    },
    mounted(){

    },
    computed:{
     ...mapState({
       info: state=>state.claim.history
      })
    },
    methods:{
     
     
    }, 
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.claim-progress-container{
       >div{
    
           border-bottom:1px solid #EBEBEB;
           font-size: 24px;  /*px*/
           padding: 0 32px;
           line-height: 34px;
           text-align: left;
         
       }
       .title{
           display: flex;
           font-size: 32px;  /*px*/
           height: 110px;
           align-items: center;
           justify-content: space-between;
           background: #ffffff;
           color: #999999;
       }
       .progress{
           padding: 32px;
           margin-bottom: 32px;
           background: #ffffff;
           .record{
               display:flex;
               height: 55px;
               line-height: 55px;
               .date{
                   margin-left: 50px;
                   color: #999999;
                   width: 180px;
               }
           }
       }
      
}


</style>