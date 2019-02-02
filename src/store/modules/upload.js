


import {getUpload,uploadImage} from '@/api/upload'
const material = {
    state: {
        info:[],
        images:{},
        isBank:false,
        frontImage:"",
        reverseImage:"",
        type:1
        
    },
    mutations: {
        SHOW_UPLOAD: (state, data) => {
            state.frontImage=""
            state.reverseImage=""
            if(data){
                state.info=data.res
                state.isBank=data.isBank
                state.images=data.res.idAndBankImages
                if(state.isBank){
                    state.frontImage=state.images.frontBankImage.filePath
                    state.reverseImage=state.images.reverseBankImage.filePath
                }
                else{
                    state.frontImage=state.images.frontIdImage.filePath
                    state.reverseImage=state.images.reverseIdImage.filePath
                }
              
            }
        },
        UPDATE_UPLOAD: (state, data) => {
            if(data){
               if(data.direction==1){
                state.frontImage=data.res.filePath
               }
               else{
                state.reverseImage=data.res.filePath
               }
                
            }
        },

    },
  
    actions: {
        getUpload({commit }, data) {
            getUpload(data.id,data.type).then((response) => {
                console.log(response)
             commit('SHOW_UPLOAD',{res:response.data,isBank:data.isBank})
            }).catch((error) => {
             console.log(error);
            })
           
          },
        uploadIdBankImage({commit}, data) {
            uploadImage(data.data).then((response) => {
                console.log(response)
                commit('UPDATE_UPLOAD',{res:response.data,direction:data.direction})
            }).catch((error) => {
             console.log(error);
            })
           
          }
          
      }
         

    
  }
  
  export default material