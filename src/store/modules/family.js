


import {getFamily} from '@/api/getFamily'
const home = {
    state: {
        list:[],
        detail:{}
    },

    mutations: {
        SHOW_INSURANCE: (state, date) => {
         state.list=[]
        if(date){
           state.list=date
         }
        },
       
        SHOW_DETAIL:(state, index) => {
            state.detail=state.list[index]
        },
    },
  
    actions: {
        showFamilyInsurance({commit},data) {
               getFamily(data.id,data.type).then( (response) => {
                commit('SHOW_INSURANCE', response.data)
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