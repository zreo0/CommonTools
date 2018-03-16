/**
 * 深度复制
 * @date   2018-03-14T16:52:44+0800
 * @param  {Array}                 data 待复制数组
 * @return {Array}                      结果数组
 */
const deepClone = (data) => {
    let dataCopy = data instanceof Array ? [] : {};
    for (let item in data) {
        dataCopy[item] = typeof data[item] === 'object' ? deepClone(data[item]) : data[item];
    }
    return dataCopy;
}