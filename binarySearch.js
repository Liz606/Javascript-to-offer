const target = 5;
const array = []
console.log(binarySearch_recursion(array, target));

// 普通二分查找
function binarySearch(array, target) {
    let  left = 0, right = array.length - 1;
    if(array[left] > target || array[right] < target) {
        return false;
    }
    while(left < right){
	    let mid = Math.floor(left + (right-left)/2);
        if(array[mid] > target) {
            right = mid;
        } else if(array[mid] < target){
            left = mid + 1;
        }else{
            // left < right时, array[left] == target
            return true;
        }
    }
    // left == right时, 判断array[left] == target
    if(array[left] == target) return true;
    return false;
}

// 递归二分查找
function binarySearch_recursion(array, target) {
    let  left = 0, right = array.length - 1;
    if(array[left] > target || array[right] < target) {
        return false;
    }
    const result =  recursion(array, target);
    return result;

    function recursion(array, target) {
        let left = 0, right = array.length - 1;
        let mid = left + Math.floor((right - left) / 2);
        if(left < right) {
            if(array[mid] < target){
                return recursion(array.slice(mid + 1, right + 1), target);
            } else if(array[mid] > target) {
                return recursion(array.slice(left, mid + 1), target);
            } else {
                return true;
            }
        } else if(left == right) {
            if(array[left] == target) return true;
            else return false;
        } else {
            return false;
        }
    }
}