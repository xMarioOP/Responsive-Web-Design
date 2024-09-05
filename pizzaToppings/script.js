const toppings = document.getElementsByClassName("topping") 

function showClick (e) {
    console.log(e.target.innerText)
}

for(const topping of toppings) {
    topping.addEventListener("click", showClick)
}