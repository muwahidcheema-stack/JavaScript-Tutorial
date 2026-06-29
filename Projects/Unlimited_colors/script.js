let randomColor = () => {
    let hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16)
        color += hex[num]
    }
    return color
}
// console.log(randomColor());
let changedColor
let startChangingColor = () => {
    if(!changedColor){
        changedColor = setInterval(changeColor,1000)
    }
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }
}
let stopChangingColor = () => {
    clearInterval(changedColor)
    changedColor = null
}
document.getElementById('start').addEventListener('click' , startChangingColor)
document.getElementById('stop').addEventListener('click' , stopChangingColor)