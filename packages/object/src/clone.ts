
export function deepClone(target: any, map = new Map()){
    //检测数据的类型
    if(typeof target === 'object' && target !== null ){
        //克隆数据之前, 进行判断, 数据之前是否克隆过
        let cache = map.get(target);
        if(cache){
            return cache;
        }
        //判断目标数据的类型
        let isArray = Array.isArray(target);
        //创建一个容器
        const result = isArray ? [] : {};
        //将新的结果存入到容器中
        map.set(target, result);
        //如果目标数据为数组
        if(isArray){
            //forEach 遍历
            target.forEach((item, index) => {
                result[index] = deepClone(item, map);
            });
        }else{
            //如果是对象, 获取所有的键名, 然后 forEach 遍历
            Object.keys(target).forEach(key => {
                result[key] = deepClone(target[key], map);
            });
        }
        return result;
    }else{
        return target;
    }
}
