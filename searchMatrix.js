// 
// 题目描述
// 在一个二维数组中（每个一维数组的长度相同），
// 每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，
// 判断数组中是否含有该整数。

// Math.trunc()方法去除数字的小数部分，保留整数部分。
// Math.round()方法返回一个数字四舍五入后的整数部分。
// Math.ceil()方法返回一个大于或等于数字的最小整数，即向上取整。
// Math.floor()方法返回一个小于或等于数字的最小整数，即向下取整。

// JS数组排序 Array.sort(), 
// JS数组截取A.slice(start, end),返回A[start, end-1],不会改变数组A
// sort()方法按照升序排列数组项，
// 会调用每个数组项的toString()转型方法，然后比较得到的字符串,
// compare()函数方法是一个比较函数，作为sort()方法的参数。
// 二分查找
// 选择排序


const target = 1;
const array =[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]

console.log(Find(target, array));

function Find(target, array) {   
    let len = array.length;
    let i = 0;
    while(i < len){
    if (binarySearch(array[i], target)) return true;
    i++;
  }
  return false;
}

// function Find(target, array) {   
//     const m = array.length; // 行
//     let flag = false;
//     let i = 0;
//     for (i; i < m & !flag ; i++ ){
//         flag = binarySearch(array[i], target);
//     }
//     return flag;
// }

// 二分查找
function binarySearch(newArray, target) {
    let right = newArray.length - 1;
    let left = 0;
    if(newArray[left] > target || newArray[right] < target) {
        return false;
    }
    let i = 1;
    while(left < right){
        console.log('查找第', i++, '次, 数组：', newArray.slice(left, right+1));
        mid = Math.floor(left + (right-left)/2); // 因为是向下取整，容易漏掉 [0 + 1 = 0], 所以right = mid
        console.log('left:', left, 'right:', right, 'mid:', mid);
        if(newArray[mid] > target) {
            right = mid;
        } else if(newArray[mid] < target){
            left = mid + 1;
        }else{
            // newArray[mid] = target
            return true;
        }
    }
    console.log('最后，left:', left, 'right:', right, 'mid:', mid);
    // while 循环结束 此时left == right
    // left == right时, array[left] == target
    if(array[left] === target) return true;
    return false;
}