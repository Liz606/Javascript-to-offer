
let array = [1, 3, 4, 2, 5, 0, 6];
console.log(selectSort(array))
// 简单选择排序 每次选择余下序列里最小的数更新在有序序列后面
function selectSort(_array) {
    for (i = 0; i < _array.length; i ++) {
        for(j = i ; j < _array.length; j ++) {
            if(_array[j] < _array[i]){
                let temp = _array[j];
                _array[j] = _array[i];
                _array[i] = temp
            }
        }
    }
    return _array
}