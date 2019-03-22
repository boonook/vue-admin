import Cookie from 'js-cookie'

/**
 * 获取cookie
 * @param {string} key
 * @param {string} def
 * @return {string}
 */
export const getCookie = (key,def = null) => {
    const value = Cookie.get(key)
    if (value === 'null' ) return def
    return value || def
}

/**
 * 设置cookie
 * @param {string} key
 * @param {string|number|boolean} value
 * @param {string|number|boolean} def 默认值
 */
export const setCookie = (key,value,def = null) => {
    Cookie.set(key,value||def)
};

/**
 * 扁平化树
 * @param {Array} routers
 */
export const flatter = (routers)=>{
    return routers.reduce((rs,r)=>{
        if(r.children && r.children.length>0){
            const children = Array.from(r.children);

            return [].concat(rs).concat(r).concat(flatter(children,r))
        }else{
            return [].concat(rs).concat(r)
        }
    },[])
};
