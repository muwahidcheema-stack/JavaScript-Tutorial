let form = document.querySelector("form")
form.addEventListener('submit' , (e) => {
    e.preventDefault()
    let height = parseFloat(document.querySelector('#height').value)
    let weight = parseFloat(document.querySelector('#weight').value)
    let result = document.querySelector('#results')
    
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "please give a valid height"
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please giv a valid weight"
    } else {
        let bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
})