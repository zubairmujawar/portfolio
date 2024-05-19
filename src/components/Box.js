const box = document.getElementById('box');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    box.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
});
