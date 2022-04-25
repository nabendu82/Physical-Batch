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
// const ul = document.querySelector('.items');
// ul.remove()
// ul.firstElementChild.textContent = 'HTML';
// ul.children[1].innerText = 'CSS';
// ul.lastElementChild.innerHTML = '<h1>JavaScript</h1><p>JS is Cool</p>';

// const button = document.querySelector('.btn');
// button.style.backgroundColor = 'blue';
// button.style.textTransform = 'uppercase';

//Event Listener
// const btn = document.querySelector('.btn');
// const ul = document.querySelector('.items');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h1>JavaScript</h1><p>JS is Cool</p>';
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const listItem = document.createElement('li');
        const textNode = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);
        listItem.appendChild(textNode);
        userList.appendChild(listItem);
        nameInput.value = '';
        emailInput.value = '';
    }
}