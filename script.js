let listTab = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

button.addEventListener('click', () => {
    ul.innerHTML += `<li>${listTab.value}</li>`;
    listTab.value = '';
});