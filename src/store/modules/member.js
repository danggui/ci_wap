


import {getMember} from '@/api/getMember'
const member = {
    state: {
        info:[]
        
    },
    mutations: {
        SHOW_MEMBER: (state, data) => {
            if(data){
                state.info=data
            }
        }
    },
  
    actions: {
        showMember({commit }, id) {
            getMember(id).then((response) => {
                console.log(response)
             commit('SHOW_MEMBER',response.data)
            }).catch((error) => {
             console.log(error);
            })
           
          }
      
      }
         

    
  }
  
  export default member