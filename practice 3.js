const canvas = document.getElementById('drawingCanvas');
const statusDiv = document.getElementById('status');

let isDrawing = false;
let currentPath;
let pathData = '';

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    pathData = `M ${event.offsetX},${event.offsetY}`;
    currentPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    currentPath.setAttribute('d', pathData);
    currentPath.setAttribute('fill', 'none');
    currentPath.setAttribute('stroke', '#000000');
    currentPath.setAttribute('stroke-width', '2');
    canvas.appendChild(currentPath);
    statusDiv.textContent = 'Drawing...';
});

canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;
    pathData += ` L ${event.offsetX},${event.offsetY}`;
    currentPath.setAttribute('d', pathData);
});

canvas.addEventListener('mouseup', () => {
    if (isDrawing) {
        isDrawing = false;
        statusDiv.textContent = 'Click and drag to draw!';
    }
});

canvas.addEventListener('mouseleave', () => {
    if (isDrawing) {
        isDrawing = false;
        statusDiv.textContent = 'Click and drag to draw!';
    }
});
