let arr =["javad" ,false, undefined , 1, 2 , true,6,65]



console.log(arr)

arr.forEach(function(e,i){
    if(e == null)
    arr.splice(arr.indexOf(e),1)
    if(Number.isFinite(e) && e>1)
    arr[i] = e*2
})

console.log(arr)

arr.filter(item => !!item).map(item => item >1 ? item*2 : item)
console.log(arr)