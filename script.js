let listTab = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');


button.addEventListener('click', () => {
    if (listTab.value === '') {
        return;
    }
    ul.innerHTML += `<li>${listTab.value}</li>`;
    listTab.value = '';
});


listTab.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        if (listTab.value === '') {
            return;
        }
    ul.innerHTML += `<li>${listTab.value}</li>`;

    listTab.value = '';
    }
});
