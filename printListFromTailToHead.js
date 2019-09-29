function ListNode(x){
    this.val = x;
    this.next = null;
}

function initList(start, end){
    let i = start;
    let List = new ListNode(i);
    let temp = List;
    i ++;
    while(i < end){
        temp.next = new ListNode(i);
        temp = temp.next;
        i++;
    }
    return List;
}

function printListFromTailToHead(head)
{
    let temp = head;
    let arr = [];
    while(temp){
        arr.unshift(temp.val); // JS数组函数，将元素添加到数组开头。
        temp = temp.next;
    }
    return arr;
}

console.log(printListFromTailToHead(initList(1, 6)));