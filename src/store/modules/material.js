


import {getMaterial} from '@/api/getMaterial'
const material = {
    state: {
        info:[]
        
    },
    mutations: {
        SHOW_MATERIAL: (state, data) => {
            if(data){
                state.info=data
            }
        }
    },
  
    actions: {
        showMaterial({commit }, id) {
            getMaterial(id).then((response) => {
                console.log(response)
             commit('SHOW_MATERIAL',response.data)
            }).catch((error) => {
             console.log(error);
            })
           
          },
          
      }
         

    
  }
  
  export default material