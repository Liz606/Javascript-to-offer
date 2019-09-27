// 
// 题目描述
// 在一个二维数组中（每个一维数组的长度相同），
// 每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，
// 判断数组中是否含有该整数。
// 
// Math.trunc()方法去除数字的小数部分，保留整数部分。
// Math.round()方法返回一个数字四舍五入后的整数部分。
// Math.ceil()方法返回一个大于或等于数字的最小整数，即向上取整。
// Math.floor()方法返回一个小于或等于数字的最小整数，即向下取整。
const target = 5;
const array =   [[ 0,  1,  2,  3],
                [ 4,  5,  6,  7],
                [ 8,  9, 10, 11]]

Find();

function Find(target, array)
{
    // write code here
    const m = array.length; // 行
    const n = array[0].length; // 列
    // 数组拍平
    let newArray = array[0];
    for (i = 1; i < m ; i++ ){
        for (j = 0; j < n; j++){
            newArray.push(array[i][j]);
        }
    }
    // 二分查找
    let flag = m;
    while(true){
        if(newArray[flag] > target) {
            flag = Math.floor(flag/2)
        } else if(newArray[flag] < target){
            flag = flag + Math.floor((m - flag)/2)
        } else {
            return true;
        }
    }
}