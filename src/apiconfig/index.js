import axios from 'axios'
import Cookies from "js-cookie";
/**
* 定义请求常量
* TIME_OUT、ERR_OK
*/
export const TIME_OUT = 1000;    // 请求超时时间
export const ERR_OK = true;      // 请求成功返回状态，字段和后台统一
export const baseUrl = process.env.BASE_URL   // 引入全局url，定义在全局变量process.env中，开发环境为了方便转发，值为空字符串
axios.defaults.baseURL =baseUrl;
// 请求超时时间
axios.defaults.timeout = TIME_OUT

// 封装请求拦截
axios.interceptors.request.use(
    config => {
        let token = Cookies.get('token')   // 获取token
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['Authorization'] =  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJsb2NhbGVcIjpcInpoX0NOXCIsXCJ1c2VySWRcIjpcIjVcIixcInVzZXJuYW1lXCI6XCJhZG1pblwifSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1NDgzMTg5MjN9.QG5FTvInBN0X7v5z8OHrWxU2LrfNye91pOwSoFL-jmb0pfbDd43yKH3kKhW8-r-umgoijKzUHsxS-1u80JkPnw"
        config.headers['TenantId'] = 1
        if(token != null){                          // 如果token不为null，否则传token给后台
            config.headers['Authorization'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 封装响应拦截，判断token是否过期
axios.interceptors.response.use(
  response => {
    let {data} = response
    if (data.message === 'token failure!') {    // 如果后台返回的错误标识为token过期，则重新登录
     Cookies.remove('token')          // token过期，移除token
      // 进行重新登录操作
    } else {
      return Promise.resolve(response)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export function fetch (url, options) {
    var opt = options || {}
    return new Promise((resolve, reject) => {
      axios({
        method: opt.type || 'post',
        url: url,
        params: opt.params || {},
        // 判断是否有自定义头部，以对参数进行序列化。不定义头部，默认对参数序列化为查询字符串。
        data: (opt.headers ? opt.data : stringify(opt.data)) || {},
        responseType: opt.dataType || 'json',
        // 设置默认请求头
        headers: opt.headers || {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
      }).then(response => {
        if (response.data.code === 0) {
          resolve(response.data)
        } else if (response.data.code === '000') {
          resolve(response.data)
        } else {
          reject(response.data)
          //store.commit('SET_LOADING', false)
        }
      }).catch(error => {
        console.log(error)
        reject(error)
        //store.commit('SET_LOADING', false)
      })
    })
  }
  