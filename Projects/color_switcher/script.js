let buttons = document.querySelectorAll('.button')
let body = document.querySelector("body")
buttons.forEach(( bt )=>{
    bt.addEventListener('click' , (e) => { 
        if(e.target.id === "grey")
            body.style.backgroundColor = e.target.id
        if(e.target.id === "white")
            body.style.backgroundColor = e.target.id
        if(e.target.id === "blue")
            body.style.backgroundColor = e.target.id
        if(e.target.id === "yellow")
            body.style.backgroundColor = e.target.id
    })
});
