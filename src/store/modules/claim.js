


import {getClaims,generalClaim} from '@/api/claim' 

const claim = { 
    state: {
        list:[],
        general:{},
        value:[],
        person_info:{},
        history:[],
        upload:{}
        
    },
    mutations: {
        SHOW_UPLOAD: (state, data) => {
            if(data){
                state.list=data
               
            }
        },
        SHOW_GENERAL_CLAIM:(state, data) => {
            state.value=[]
            if(data){
                state.general=data
                state.value.push(data.typeName,data.name,data.invoiceNumber,data.claimStatus,data.invoiceAmount)
                state.person_info=data.personSecurity
                state.history=data.claimStatusLogs
                state.upload=data.claimImages
            }
        }
    },
  
    actions: {
        showMyClaim({commit }, data) {
            getClaims(data.id,data.type).then((response) => {
                console.log(response)
             commit('SHOW_UPLOAD',response.data)
            }).catch((error) => {
             console.log(error);
            })
          },
          showGeneralClaim({commit }, data){
            generalClaim(data).then((response) => {
                console.log(response)
             commit('SHOW_GENERAL_CLAIM',response.data)
            }).catch((error) => {
             console.log(error);
            })}
           
          
       
      }
         

    
  }
  export default claim