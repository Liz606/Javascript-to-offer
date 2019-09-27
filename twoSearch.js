
// 二分查找
const array = [ 0, 1, 2, 3, 4, 5, 6 ]; //需要是有序序列
twoSearch(5, array)

// 易错点：循环退出条件是 left > right
//        大了： right = mid
//        小了： left = mid + 1
// 

function twoSearch(target, newArray){
    let right = newArray.length - 1;
    let left = 0
    let mid;
    while(left <= right){
        mid = Math.floor((right + left) / 2);
        console.log(mid);
        if(newArray[mid] > target) {
            right = mid;
        } else if(newArray[mid] < target){
            left = mid + 1;
        } else {
            console.log("true",newArray[left]);
            return true;
        }
    }
    console.log("false", left);
    return false;
}