// var http = require('http');

// http.createServer(function(req,res){
//     res.end('hello world')
// }).listen(3000, ()=>{
//     console.log('server is listening 3000')
// })





// window.onscroll = function(params) {
//     var topI = a.getBoundingClientRect().top
//     var heightI = a.getBoundingClientRect().height
//     if(topI < 0){
//         console.log('正在离开')
//     }else if(topI + heightI < gh){
//         console.log('在视口')
//     }else  if(topI > gh){
//         console.log('还没到视口')
//     }else{
//         console.log('正在出现')
//     }
// }

var arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 6, name: '部门6', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]

function as(arrs, pid) {
    var list = []
    arrs.forEach(item => {
        if (pid == item.pid) {
            item.children = as(arrs, item.id)
            list.push(item)
        }
    })
    return list;
}
as(arr, 0)

function arrayToTree(array, pid) {
    let result = []
    array.forEach(item => {
        if (item.pid == pid) {
            item.children = arrayToTree(array, item.id)
            result.push(item)
        }
    })
    return result
}
let treeArray = arrayToTree(arr, 0)