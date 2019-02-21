const vStorage= {
  install(Vue)  {
      Vue.prototype.setStorage = (key,value) =>{
        localStorage.setItem(key,JSON.stringify(value));
        },
      Vue.prototype.getStorage = (key) =>{
        return JSON.parse(localStorage.getItem(key))
        },  
      Vue.prototype.removeStorage = (key) =>{
        localStorage.removeItem(key)
        }  
  }
}
const vuexStorage = {
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  },
  get(key){
    return JSON.parse(localStorage.getItem(key))
  },
  remove(key){
    localStorage.removeItem(key)
  }
}
export  {vStorage,vuexStorage};