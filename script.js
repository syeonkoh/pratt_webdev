

let groceries = ["bananas", "milk", "apple"];

for (let i=0, ii=groceries.length; i<ii; i++){
    console.log(i, groceries[i]);
};

// instead of above for loop, we can simplify for loop like this

//for (let g of groceries){
//    console.log(g);
//}

//object: 
//when we want to provide a greater level of detail
let item = {
    name: "bananas",
    price: "3.49",
    aisle: 1
};

//what if i want to know about only price of one item
// item.price

//for (x in item){
//    console.log(x, item[x])
//}

// objects within arrays
let grocery_lst = [
    {name: 'bananas', price: 3.49, aisle:1},
    {name: 'milk', price:2.99, aisle:4},
    {name: 'cereals', price:7, aisle:7}
]
//for (let g of grocery_lst){
//    console.log(g.name + " are " + g.price + " in aisle " + g.aisle)
//}

//functions
function lst_item(g) {
    
    console.log(g.name + " are " + g.price + " in aisle " + g.aisle)
}
//console: lst_item(grocery_lst[0])

//function different way
//let lst_Item =function(){} 이런식


for (let g of grocery_lst){
    lst_item(g)
}

//Adding DOM elements

let groceries_lst = [
    {name: 'bananas', price: 3.49, aisle:1},
    {name: 'milk', price:2.99, aisle:4},
    {name: 'cereals', price:7, aisle:7}
]

const ul = document.getElementById('grocery-lst');

function lst_items(g) {
    let li = document.createElement('li');
    li.innerHTML = g.name + " are " + g.price + " in aisle " + g.aisle;
    ul.appendChild(li);
    
}

for (let g of groceries_lst){
    lst_items(g)
}