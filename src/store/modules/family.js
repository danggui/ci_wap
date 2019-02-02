


import {getFamily} from '@/api/getFamily'
const home = {
    state: {
        list:[],
        detail:{},
        status:[1,0,0]
    },

    mutations: {
        SHOW_INSURANCE: (state, data) => {
        state.status=[1,0,0]
         state.list=[]
        if(data.res){
           state.list=data.res
           state.status=[0,0,0]
           state.status[data.type]=1
         }
        },
       
        SHOW_DETAIL:(state, index) => {
            state.detail=state.list[index]
        },
    },
  
    actions: {
        showFamilyInsurance({commit},data) {
               getFamily(data.id,data.type).then( (response) => {
                commit('SHOW_INSURANCE', {res:response.data,type:data.type})
            }).catch((error) => {
                console.log(error);
            })
           
          },
        showDetail({commit},index){
            commit('SHOW_DETAIL', index)
        }
      
       
      }
         
  
    
  }
  
  export default home