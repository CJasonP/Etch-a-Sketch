const container = document.querySelector('.container');

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
    container.appendChild(square);
}