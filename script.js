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

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.style.width = '40px';
    square.style.height = '40px';
    square.style.boxSizing = 'border-box';
    square.style.border = '1px solid #ccc';
    square.style.background = '#fff';
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