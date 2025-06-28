const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)***we can not use these veriavle becouse when page load jsfile...
// const weight = parseInt(document.querySelector('#weight').value)  ...autometically exicute and veriavle will occupied empty values
form.addEventListener('submit', function (e) {
    e.preventDefault() //help to hold the ecution of summit action 
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const alert = document.querySelector('#alert');   
    if (height <= 0 || isNaN(height)) {
        result.style.color = 'orange';
        result.style.fontSize = '20px';
        result.innerHTML = `please enter valid height i.e 2m,1.5m,1.6m`
    } else if (weight <= 0 || isNaN(weight)) {
        result.style.color = 'orange';
        result.style.fontSize = '20px';
        result.innerHTML = `please enter valid weight i.e 20kg,50kg,70kg`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); //bmi veriale we can access inside the else statement only
        result.style.color = 'orange';
        result.style.fontSize = '20px';

        result.innerHTML = `<span>${bmi}</span>`
        result.style.marginBottom = '5px';
          if (bmi < 18.6) {
        result.style.fontSize = '20px';
        alert.innerHTML = `ALERT: you are u in Under Weight cotagory !`
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
        result.style.fontSize = '20px';
        alert.innerHTML = `ALERT: you are u in Normal range cotagory !`
    }
    if (bmi > 24.9) {
        result.style.fontSize = '20px';
        alert.innerHTML = `ALERT: you are u in Overweight cotagory !`
    }
    }
});