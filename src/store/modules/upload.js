


import {getUpload,uploadImage,deleteImage} from '@/api/upload'
const material = {
    state: {
        info:[],
        images:{},
        isBank:false,
        frontImage:"",
        frontId:0,
        reverseImage:"",
        reverseId:0,
        type:1
        
    },
    mutations: {
        SHOW_UPLOAD: (state, data) => {
            state.frontImage=""
            state.reverseImage=""
            state.frontId=0
            state.reverseId=0
            
            if(data){
                state.info=data.res
                state.isBank=data.isBank
                state.images=data.res.idAndBankImages
                if(state.isBank){
                    state.frontImage=state.images.frontBankImage.filePath
                    state.reverseImage=state.images.reverseBankImage.filePath

                    state.frontId=state.images.frontBankImage.id
                    state.reverseId=state.images.reverseBankImage.id
                }
                else{
                    state.frontImage=state.images.frontIdImage.filePath
                    state.reverseImage=state.images.reverseIdImage.filePath

                    state.frontId=state.images.frontIdImage.id
                    state.reverseId=state.images.reverseIdImage.id
                }
              
            }
        },
        UPDATE_UPLOAD: (state, data) => {
            if(data){
               if(data.direction==1){
                state.frontImage=data.res.filePath
                state.frontId=data.res.id
               }
               else{
                state.reverseImage=data.res.filePath
                state.reverseId=data.res.id
               }
                
            }
        },
        DELETE_INFO_IMAGE: (state, data) => {
            if(data){
                if(data==1){
                 state.frontImage=""
                 state.frontId=0
                }
                else{
                 state.reverseImage=""
                 state.reverseId=0
                }
                 
             }
        },

    },
  
    actions: {
        getUpload({commit }, data) {
            getUpload(data.id,data.type).then((response) => {
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
           
          },
          deleteInfoImage({commit},data){
            deleteImage(data.id).then( (response) => {
                commit('DELETE_INFO_IMAGE', data.direction)
             }).catch((error) => {
                 console.log(error);
             })
          },
          
      }
         

    
  }
  
  export default material