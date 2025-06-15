const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter valid weight ${weight}`
    } else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)

        if(BMI < 18.6){
            Category = `under weight Category`
        }else if(BMI >= 18.6 && BMI <= 24.9){
            Category = `Normal Category`
        }else{
            Category = `OverWeight Category`
        }
        results.innerHTML = `<span class = "BMI value"> Your BMI is ${BMI}</span> <span class = "Category"> and you come under ${Category} category </span>`
    }
})
