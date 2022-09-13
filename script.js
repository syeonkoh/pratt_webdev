debugger;

let num = 2012;

num += 10;

console.log('First variable', num);

let name = 'Seungyeon';
let intro = 'My name is ';
let str = intro + name + '.';
console.log('Second variable', str);

let output_first = document.getElementById('output_first').innerHTML = num;
let output_second = document.getElementById('output_second').innerHTML = str;
