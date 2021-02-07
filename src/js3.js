let arr = [ 1 ,2 ,3,4,4,5,4]


console.log(arr)

arr.forEach(function(e){
    if (arr.lastIndexOf(e)!=arr.indexOf(e))
    arr.splice(arr.lastIndexOf(e),1)
})

console.log(arr)