


import {isMaterial} from '@/api/isMaterial'
import {basicInfo} from '@/api/getBasicInfo'
const home = {
    state: {
        material:true,
        info:{}
    },

    mutations: {
        CHECK_MATERIAL: (state, isMaterial) => {
           state.material=isMaterial
          },
        GET_BASIC_INFO: (state, data) => {
            if(data){
                state.info=data
            }
           },
    },
    actions: {
        checkMaterial({ commit }, id) {
                isMaterial(id).then( (response) => {
                const isMaterial=response.data.replenishClaimMaterial 
                commit('CHECK_MATERIAL', isMaterial)
            }).catch((error) => {
                console.log(error);
            })
          },
         getBasicInfo({ commit }, id) {
            basicInfo(id).then( (response) => {
                console.log(response.data)
            commit('GET_BASIC_INFO', response.data)
        }).catch((error) => {
            console.log(error);
        })
      }
      
      }
  
  }
  
  export default home