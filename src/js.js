window.onload = function(){
    var form = document.querySelector('form')
    form.onsubmit = submitted.bind(form)
    
}
function submitted(e){
    e.preventDefault();
    console.log(e.target.elements.productTitle.value)
    let np = document.createElement('p')
    np.textContent = e.target.elements.productTitle.value
    document.querySelector('div').appendChild(np)
}
const filters ={
    searchItem : ''
}
const renderProducts = function(products , filters){
    const filtredProducts = products.filter(function(item){
    
    })
}