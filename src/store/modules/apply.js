import {showInfo,showEditInfo,uploadImage,updateImage,deleteImage,saveApply,saveEdit} from '@/api/apply' 
import {vuexStorage} from '../../utils/storage';
import router from '../../router';
function myMap() {
    return new Map()
            .set(101,"outpatients")
            .set(102,"medicals")
            .set(103,"costs")
            .set(104,"inspects")
            .set(105,"others")
            .set(106,"outpatients")
            .set(107,"medicals")
            .set(108,"costs")
            .set(109,"summarys")
            .set(110,"inspects")
            .set(111,"others")
    
  }
const apply = {
    state: {
        people:[],
        image1:{},
        image2:{},
        select:"",
        code:115,
        update:0,
        edit_id:undefined
     
    },

    mutations: {
        SET_INFO: (state, data) => {
            state.select="",
            state.code=data.code
            state.update=0
            vuexStorage.remove("insuredId")
            vuexStorage.remove("personSId")
            vuexStorage.remove("tenant")
           // vuexStorage.remove("code")
            state.people=[]
            state.image1={},
            state.image2={}
            data.res.forEach(
                (item,index)=>{
                    state.people.push({id:item.personId,values:item.name,personSId:item.id,tenant:item.tenantId})
                }
            )
          
        },
        SET_EDIT_INFO:(state, data) => {
            state.select=data.res.name
            const code =data.code
            state.code=code
            state.edit_id=data.id
            state.update=1
            state.people=[]
            state.image1={}
            state.image2={}
            if(code==115){
                state.image1=data.img
            }
            else{
                state.image2=data.img
            }
           // vuexStorage.set("code",code)
            vuexStorage.set("insuredId",data.res.personId)
            vuexStorage.set("personSId",data.res.id)
            vuexStorage.set("tenant",data.res.tenantId)
            
          
        },
        UPDATE_IMAGE: (state, data) => {
            state.image1={}
            state.image2={}
            if(data.res){
                if(data.code==115){
                state.image1=data.res
                }else{
                state.image2=data.res
                }
            }
        },
        UPLOAD_IMAGE:(state, data) => {
            console.log(data)
           if(data.res.accessoryType<=105){
              state.image1[data.code].push({thumbPath:data.res.thumbPath,id:data.res.id})
           }
           else{
            state.image2[data.code].push({thumbPath:data.res.thumbPathm,id:data.res.id})
           }
        },
        SAVE_APPLY:(state, data)=>{
            state.image1={}
            state.image2={}
            state.code=115
            router.push("/claim/0")
        },
        SAVE_EDIT:(state, data)=>{
            state.image1={}
            state.image2={}
            state.code=115
            router.push("/claim/0")
        },
        DELETE_IMAGE:(state, data)=>{
            console.log(data)
            const type= data.accessoryType
            let temp=myMap().get(type)
            if(state.code==115){
                console.log(data.id)
                console.log(state.image1[temp].findIndex(item => item.id === data.id))
                console.log(state.image1[temp])
                state.image1[temp].splice(state.image1[temp].findIndex(item => item.id === data.id), 1)
            }
            else{
                console.log(data.id)
                console.log(state.image2[temp].findIndex(item => item.id === data.id))
                state.image2[temp].splice(state.image2[temp].findIndex(item => item.id === data.id), 1)
            }

            
        },
    },
  
    actions: {
        showApply({ commit }, data) {
            showInfo(data.id).then( (response) => {
               commit('SET_INFO', {res:response.data.familySecurity,status:response.data.replenishData,code:data.code})
            }).catch((error) => {
                console.log(error);
            })
          },
          //获取修改信息及图片
          showEditApply({ commit }, id) {
            showEditInfo(id).then( (response) => {
               commit('SET_EDIT_INFO', {res:response.data.personSecurity,insuredId:response.data.insuredId,img:response.data.claimImages,time:response.data.doctorDate,code:response.data.chargeType,id:response.data.id})
            }).catch((error) => {
                console.log(error);
            })
          },


          uploadSingleImage({commit},data){
            uploadImage(data.data).then( (response) => {
                commit('UPLOAD_IMAGE',{res:response.data,code:data.code})
             }).catch((error) => {
                 console.log(error);
             })
           
          },
           //初始化图片列表
          getImageList({commit},data){
            updateImage(data.id,data.code,data.kind).then((response) => {
                commit('UPDATE_IMAGE', {res:response.data,code:data.code})
             }).catch((error) => {
                 console.log(error);
             })
          },
          //删除单张图片
          deleteSingleImage({commit},data){
            deleteImage(data).then( (response) => {
                commit('DELETE_IMAGE', response.data)
             }).catch((error) => {
                 console.log(error);
             })
          },
         
          //保存或者保存草稿
        saveMyApply({commit, dispatch},data){
            saveApply(data.data).then((response) => {
                commit('SAVE_APPLY', {res:response,status:data.status})
                //dispatch('showApply',{id:3,code:115})
             }).catch((error) => {
                 console.log(error);
             })
          },
         //修改后保存或保存草稿
          saveMyEdit({commit, dispatch},data){
            saveEdit(data.data,data.id).then((response) => {
                commit('SAVE_EDIT', {res:response.data,code:data.code})
                //dispatch('showApply',{id:3,code:115})
             }).catch((error) => {
                 console.log(error);
             })
          },
      }
  }
  
  export default apply