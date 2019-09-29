const str = 'we are happy'
replaceSpace(str)

function replaceSpace(str)
{
    // write code here
    console.log(str.replace(/ /g, '%20'));
}