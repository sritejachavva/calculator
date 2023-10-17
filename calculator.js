/*
Step 1) Create calculator buttons



*/

let createButtons = function(){
    let calculator_display = document.body.querySelector(".display");
    let number_button = document.createElement('div');
    number_button.classList.add('numeric-button');
    number_button.style.cssText = 'display: flex; background-color: white; color: black;  width: 30%; border-style: solid; border-width:5px; justify-content: center; align-items: center;'
    let button_row = document.createElement('div');
    button_row.classList.add('button-row');
    button_row.style.cssText = 'display:flex; padding: 3px; margin: 2px; height: 20%; width: 90%;'

    let numeric_label = document.createElement('p');
    numeric_label.classList.add('numeric-label');
    numeric_label.style.cssText = ' color:black; font-size: 12px;;'
    for (let i = 0; i < 3; i++) {
        let temprow = button_row.cloneNode(true);
        temprow.classList.add(`row-number-${3-i}`)
        calculator_display.parentNode.insertBefore(temprow, calculator_display.nextSibling);
        for (let j=0; j<3; j++){
            let tempbutton = number_button.cloneNode(true);
            //tempbutton.classList.add(`button + ${i} + "," + ${j}`);
            temprow.appendChild(tempbutton);

            let templabel = numeric_label.cloneNode(true);
            templabel.textContent = `${(i*3)+j+1}`;
            tempbutton.appendChild(templabel);
        } 
    }
}

createButtons();