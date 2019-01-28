


import {getUpload,uploadImage} from '@/api/upload'
const material = {
    state: {
        info:[]
        
    },
    mutations: {
        SHOW_UPLOAD: (state, data) => {
            if(data){
                state.info=data
            }
        }
    },
  
    actions: {
        getUpload({commit }, data) {
            getUpload(data.id,data.type).then((response) => {
                console.log(response)
             commit('SHOW_UPLOAD',response.data)
            }).catch((error) => {
             console.log(error);
            })
           
          },
        uploadSingleImage({commit}, data) {
            console.log(data)
            uploadImage(data).then((response) => {
                console.log(response)
             commit('SHOW_UPLOAD',response.data)
            }).catch((error) => {
             console.log(error);
            })
           
          }
          
      }
         

    
  }
  
  export default material