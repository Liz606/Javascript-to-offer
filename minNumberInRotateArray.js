// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 输入一个升序的数组的一个旋转，输出旋转数组的最小元素。

// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

// 数组可能包含重复项。

// 注意：数组内所含元素非负，若数组大小为0，请返回-1。

// 样例
// 输入：nums=[2,2,2,0,1]

// 输出：0
// let rotateArray = [10, 10, 1, 2, 3, 4, 4, 5, 7, 8];
let rotateArray = [2,2,2,0,1];
// let rotateArray = [4, 7, 7, 9, 10, 10, 10, 11, 13, 15, 16, 16, 17, 18, 1, 1, 2, 3, 4, 4];
// let rotateArray = [3, 4, 4, 6, 7, 7, 7, 7, 9, 9, 10, 12, 15, 15, 16, 18, 18, 20, 20, 23, 24, 24, 24, 28, 29, 29, 29, 30, 32, 36, 36, 37, 38, 39, 39, 39, 40, 40, 0, 2];
console.log(minNumberInRotateArray(rotateArray));
function minNumberInRotateArray(nums)
{
    let right = nums.length;
    if(right == 0) return -1;
    else right--;
    let left = 0;
    let mid = null;
    console.log(nums);
    while(left < right){
        mid = left + Math.floor((right-left)/2);
        console.log('======mid', mid, rotateArray[mid]);
        if(rotateArray[mid] > rotateArray[left]){ // 满足，则mid在左侧递增数组，分割点在mid右侧
            console.log('> left', left, rotateArray[left]);
            left = mid;
            console.log(left, rotateArray[left]);
        }
        if(rotateArray[mid] === rotateArray[left]){ // 满足，则mid在左侧递增数组，分割点在mid右侧
            console.log('= left', left, rotateArray[left]);
            left = mid + 1;
        }
        if(rotateArray[mid] < rotateArray[right]){// 满足，则mid在左侧递增数组，分割点在mid左侧
            console.log('> right', right, rotateArray[right]);
            right = mid;
        }
        if(rotateArray[mid] === rotateArray[right]){// 满足，则mid在左侧递增数组，分割点在mid左侧
            console.log('= right', right, rotateArray[right]);
            right = mid - 1;
        } 
    }
    // left = right = mid
    console.log('======left', left, rotateArray[left]);
    console.log('======right', right, rotateArray[right]);
    let A = nums.splice(left);
    console.log(nums, A);
    let B = A.concat(nums);
    return B[0];
    // return nums.splice(mid)[0];
}