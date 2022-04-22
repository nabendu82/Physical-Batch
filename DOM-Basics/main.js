//Grab Single Element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#users'));
// console.log(document.querySelector('h1'));

//Grab Multiple Elements
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));
// nodeItems.forEach(it => console.log(it));
// colItems.forEach(it => console.log(it));
// for(let i = 0; i < colItems.length; i++){
//     console.log(colItems[i]);
// }

//DOM manipulation
const ul = document.querySelector('.items');
// ul.remove()
ul.firstElementChild.textContent = 'HTML';
ul.children[1].innerText = 'CSS';
ul.lastElementChild.innerHTML = '<h1>JavaScript</h1><p>JS is Cool</p>';

const button = document.querySelector('.btn');
button.style.backgroundColor = 'blue';
button.style.textTransform = 'uppercase';