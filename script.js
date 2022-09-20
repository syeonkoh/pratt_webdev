//Create an array containing 3 or more items
let colors = ["Red", "Blue", "Black", "Yellow", "White"];

//console, log each item in the array
for (let i=0, ii=colors.length; i<ii; i++){
    console.log(i, colors[i]);
}

//Write each item in your array to the DOM
const ul = document.getElementById('color_lst');
function lst_colors(color) {
    let li = document.createElement('li');
    li.innerHTML = color;
    ul.appendChild(li);
    
};

for (let color of colors){
    lst_colors(color);
}

//Create an object with at least 3 properties.
let users = [
    {name: 'John', Age: 34, Type:'A'},
    {name: 'Emily', Age: 25, Type:'B'},
    {name: 'Jin', Age: 27, Type:'C'},
    {name: 'Song', price:17, Type:'B'}
];

//for...in loop, iterate through the object and log each property's key and value to the console.
for (let x in users){
    console.log(users[x]);
}
    