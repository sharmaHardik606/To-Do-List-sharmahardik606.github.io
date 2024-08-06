let listTab = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');
let cross = document.querySelector('.cross');



const mainFunc = function(){
    let newLi = document.createElement('li');
    newLi.textContent = listTab.value ;
    ul.appendChild(newLi);
    listTab.value = '';
}


button.addEventListener('click', () => {
    if (listTab.value === '') {
        return;
    }
    mainFunc();
});


listTab.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        if (listTab.value === '') {
            return;
        }
     mainFunc();
    }
});



ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const isStrikethrough = event.target.style.textDecoration === 'line-through';
        const isDisc = event.target.style.listStyle === 'disc';

        if (isStrikethrough && isDisc) {
            event.target.style.textDecoration = 'none';
            event.target.style.listStyle = 'circle';
        } else {
            event.target.style.textDecoration = 'line-through';
            event.target.style.listStyle = 'disc';
        }
    }
});