const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const generatedColor = `RGB(${red}, ${green}, ${blue})`;
    color.textContent = generatedColor;

    return generatedColor;
}



