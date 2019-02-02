export default {
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
