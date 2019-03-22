/* eslint-disable no-console */
import axios from 'axios'

export default{
    install(Vue,config){
        config = config || {}
        Vue.prototype.$axios = createInstance(config)
    }
}


function createInstance(config){
    function instance(options){
        return instance.axios.request(options)
    }
    instance.axios = new Request(config)

    instance.get = (url,params = {},headers = {})=>{
        return instance.axios.request({
            method:'get',
            params,
            url:url,
            headers:{
                ...headers,
            }
        })
    }

    instance.del = (url,params = {},headers = {})=>{
        return instance.axios.request({
            method:'delete',
            params,
            url:url,
            headers:{
                ...headers,
            }
        })
    }

    instance.post = (url,params = {},headers = {})=>{
        return instance.axios.request({
            method:'post',
            params,
            url:url,
            headers:{
                ...headers,
            }
        })
    }

    instance.put = (url,params = {},headers = {})=>{
        return instance.axios.request({
            method:'put',
            params,
            url:url,
            headers:{
                ...headers,
            }
        })
    }
    return instance
}

function Request(config){
    this.config = config
}

Request.prototype = {
    constructor:Request,
    /**
     * 获取请求配置
     */
    getInsideConfig(){
        const config = {
            baseURL:this.config.baseURL,
            headers:this.config.headers,
            method:'get'
        }   
        return config
    },

    /**
     *
     * @returns
     */
    createInstance(options){
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance(options)
    },

    /**
     *发送请求
     *
     * @param {object} options 请求配置
     * @param {string} options.url 请求地址
     * @param {string} options.method 请求方法
     * @param {object} options.headers 请求头
     * @param {boolean} options.formData 是否为表单请求
     * @returns
     */
    request(options){
        return new Promise( (resolve,reject) =>{
            return this.createInstance(options)
        })
    },

    /**
     *注入请求拦截器和响应拦截器
     *
     * @param {*} instance
     */
    interceptors(instance){
        instance.interceptors.request.use(
            config=>{
                return config
            },
            error=>{
                console.log('error',error)
            }
        ),
        instance.interceptors.response.use(
            response=>{
                return response
            },
            error=>{
                console.log('error',error)
            }
        )
    },
    /**
     * js对象转换为 ?foo=bar 这种形式的字符串不支持对象嵌套
     * @param {object} obj 
     */
    makeQueryString (obj) {
        if (!obj) return '';
        const query = Object.keys(obj).filter(i => !this.isEmpty(obj[i], true)).map(k => `${k}=${obj[k]}`).join('&');
        if (this.isEmpty(query)) return ''
        return `?${query}`
    },
    /**
     *
     *
     * @param {string} url
     * @returns
     */
    getQueryParams(url){
        if(!url || typeof url !== 'string' || url.length<=0) return {}
        let params = null;
        const arr = url.split('?');
        if (arr && Array.isArray(arr) && arr.length > 0) {
          params = {};
          arr[arr.length - 1].split('&').map(s => {
            const p = s.split('=');
            params[p[0]] = p[1];
          });
        } else {
          return null;
        }
        return params;
    },
    /**
     * 对象是否为空
     * @param {object} obj 判断的对象
     * @param {*boolean} strict 严格判断 [],'','null','undefined',{},都为空
     */
    isEmpty(obj, strict = false){
        if (obj === null || obj === undefined)  return true;
        if (typeof obj === 'number') return true
        if (typeof obj === 'string') {
          if (strict) {
            return obj.length <= 0;
          }
          return false;
        }
        if (typeof obj === 'object') {
          if (strict) {
            return Object.keys(obj).length <= 0
          }
          return false
        }
        if(Array.isArray(obj)) return  strict && obj.length<=0
        if (isNaN(obj)) return true;
        return false
    },
    /**
     *js普通对象 转为表单对象
     *
     * @param {*} params
     * @returns
     */
    makeFormData(params){
        if (!params) return new FormData();
        if (typeof params !== "object") return new FormData();
        let formData = new FormData();
        Object.keys(params).forEach(k => {
          if (params.hasOwnProperty(k) && !this.isEmpty(params[k])) {
            ///如果需要添加到表单的值是数组
            if (Array.isArray(params[k]) && !this.isEmpty(params[k])) {
              params[k].forEach((i, index) => {
                ///如果是文件 直接添加到formDate
                if (i.constructor === File) {
                  formData.append(k, i)
                }
                ///如果是对象 需要转换为 form字段[数组下标].对象的key 这个形式的key再添加到formData
                else if (typeof i === 'object') {
                  Object.keys(i).forEach(kk => {
                    formData.append(`${k}[${index}].${kk}`, i[kk]);
                  });
                } else {
                  formData.append(k, i)
                }
              });
            }
            ///如果需要添加到表单的是对象
             else if(params[k].constructor === File){
              formData.append(k,params[k]);
            }
            else if (typeof params[k] === 'object') {
              Object.keys(params[k]).forEach(kk => {
                formData.append(`${k}.${kk}`, params[k][kk]);
              });
            } else {
              formData.append(k, params[k]);
            }
          }
        });
        return formData;
    }    
}
