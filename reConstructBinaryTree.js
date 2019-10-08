function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

const pre = [3, 9, 20, 15, 7];
const vin = [9, 3, 15, 20, 7];

console.log(reConstructBinaryTree(pre, vin)); //[ 1, 2, 5, 3, 4, 6, 7 ]
function reConstructBinaryTree(pre, vin){
    let tree = binaryTree(pre, vin);
    console.log(tree);
    let array = [];
    while(tree.length > 0){
        let temp = [];
        tree.map(e => {
            if(Object.prototype.toString.call(e) == '[object Array]'){
                array.push(e.shift());
                temp = temp.concat(e);
            } else {
                array.push(e);
            }
        })
        tree = copy(temp);
    }
    return array;
}

function binaryTree(pre, vin) {
    let tree = [];
    let node = pre.shift(); 
    tree.push(node);
    let leftVin = vin.slice(0, vin.indexOf(node)); 
    let rightVin = vin.slice(vin.indexOf(node) + 1); 
    let leftPre = getPre(pre, leftVin); 
    let rightPre = getPre(pre, rightVin); 
    tree.push(binaryTree(leftPre, leftVin));
    tree.push(binaryTree(rightPre, rightVin));
    return tree;
}



// const __pre = [1, 2, 3, 4, 5, 6, 7];
// const __vin = [3, 2, 4, 1, 6, 5, 7];
//console.log(binaryTree(__pre, __vin));
// [ 1, [ 2, [ 3 ], [ 4 ] ], [ 5, [ 6 ], [ 7 ] ] ]
function binaryTree(pre, vin) {
    let tree = [];
    let node = pre.shift(); 
    tree.push(node);
    let leftVin = vin.slice(0, vin.indexOf(node)); 
    let rightVin = vin.slice(vin.indexOf(node) + 1); 
    let leftPre = getPre(pre, leftVin); 
    let rightPre = getPre(pre, rightVin); 
    if(leftPre.length > 0){
        tree.push(binaryTree(leftPre, leftVin)); //a.concat(b)
    }
    if(rightPre.length > 0){
        tree.push(binaryTree(rightPre, rightVin));
    }
    return tree;
}

// const _pre = [1, 2, 3, 4, 5, 6, 7];
// const _vin = [3, 2, 4, 1, 6, 5, 7];
//console.log(getConstructBinaryTree(_pre, _vin));
/*
TreeNode {
    val: 1,
    left:
     TreeNode {
       val: 2,
       left: TreeNode { val: 3, left: null, right: null },
       right: TreeNode { val: 4, left: null, right: null } },
    right:
     TreeNode {
       val: 5,
       left: TreeNode { val: 6, left: null, right: null },
       right: TreeNode { val: 7, left: null, right: null } } }
*/
function getConstructBinaryTree(pre, vin) {
    let node = pre.shift();
    let leftVin = vin.slice(0, vin.indexOf(node));
    let rightVin = vin.slice(vin.indexOf(node) + 1);
    let leftPre = getPre(pre, leftVin); 
    let rightPre = getPre(pre, rightVin);
    let head = new TreeNode(node); //从数组头部弹出元素,并返回被弹出的元素
    if(leftPre.length > 0){
        head.left = getConstructBinaryTree(leftPre, leftVin);
    } else {
        head.left = null;
    }
    if(rightPre.length > 0){
        head.right = getConstructBinaryTree(rightPre, rightVin);
    }else{
        head.right = null;
    }

    return head;
}
function getPre(oldPre, newVin) {
    let temp = copy(oldPre); // 数组直接复制只是增加了引用而已，浅拷贝都算不上。修改其中一个数组，另一个也会改变。
    oldPre.map(e =>{ // JS迭代函数，map和forEach
        if(newVin.indexOf(e) == -1){ // indexOf(a),返回a的下标，如果a不存在，返回-1
            temp.splice(temp.indexOf(e), 1); // JS数组删除A，start起的index个元素，并返回被删除元素
        }
    })
    return temp;
}
function copy(array) {
    let newArray = [];
    for (var i = 0; i <array.length; i++) {
        newArray[i]=array[i];
    };
    return newArray;
}