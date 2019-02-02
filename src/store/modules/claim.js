


import {getClaims,generalClaim} from '@/api/claim' 

const claim = { 
    state: {
        list:[],
        general:{},
        value:[],
        person_info:{},
        history:[],
        upload:{},
        status:[1,0,0,0]
       
        
    },
    mutations: {
        SHOW_CLAIM: (state, data) => {
            state.list=[]
            if(data.res){
                state.list=data.res
            }
            state.status=[0,0,0,0]
            state.status[data.type]=1
        },
        SHOW_GENERAL_CLAIM:(state, data) => {
            state.value=[]
            state.general={}
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
        showMyClaim({commit}, data) {
            getClaims(data.id,data.type).then((response) => {
             commit('SHOW_CLAIM',{res:response.data,type:data.type})
            }).catch((error) => {
                console.log(error);
            })
          },
          showGeneralClaim({commit}, data){
            generalClaim(data).then((response) => {
                console.log(response)
             commit('SHOW_GENERAL_CLAIM',response.data)
            }).catch((error) => {
             console.log(error);
            })}
           
          
       
      }
         

    
  }
  export default claim