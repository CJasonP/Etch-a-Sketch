const container = document.querySelector('.container');
const button = document.querySelector('#btn');

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.minHeight = '100vh';


container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '640px';
container.style.height = '640px';

let smolbox = 0;


function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        let smolbox = 640/size;
        square.style.width = `${smolbox}px`; //640/16 jadi 640/size
        square.style.height = `${smolbox}px`;
        square.style.boxSizing = 'border-box';
        square.style.border = '1px solid #ccc';
        square.style.background = '#fff ';
        square.addEventListener('mouseover', () => {
            square.style.background = 'blue';
        });
        square.addEventListener('mouseout', () => {
            setTimeout(() => {
                square.style.background = '#fff';
            }, 300);
        });
        container.appendChild(square);
    }
}

createGrid(16); 

button.addEventListener('click', () => {
    container.innerHTML = ''; 
    let size = prompt('Enter grid size: ');
    if(size > 0 && size <= 100) {
        createGrid(size);
    }
    else alert('Please enter a valid size between 1 and 100.');
});