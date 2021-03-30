const a = 0;
/**
 * @param {Array} arr
 */

export function unique(arr: Array<any>): Array<any> {
  // //将数组转化为集合 Set
  // let set = new Set(arr);
  // //将 set 展开创建一个数组
  // let array = [...set];
  // return array;
  return [...new Set(arr)];
}
