/*
Step 1a) Create calculator buttons
Step 1b) Create operator buttons



*/

let createButtons = function(){
    let calculator_display = document.body.querySelector(".display");
    let number_button = document.createElement('div');
    let numbers = document.createElement('div');
    numbers.classList.add('numbers');
    

    number_button.classList.add('numeric-button');
    number_button.style.cssText = 'display: flex; background-color: white; color: black;  width: 30%; border-style: solid; border-width:5px; justify-content: center; align-items: center;'
    let button_row = document.createElement('div');
    button_row.classList.add('button-row');
    button_row.style.cssText = 'display:inline-flex; padding: 3px; margin: 2px; height: 20%; width: 90%; align-items: center; justify-content: space-evenly;'
    
    calculator_display.parentNode.appendChild(numbers);

    let numeric_label = document.createElement('p');
    numeric_label.classList.add('numeric-label');
    numeric_label.style.cssText = ' color:black; font-size: 12px;;'
    for (let i = 0; i < 3; i++) {
        let temprow = button_row.cloneNode(true);
        temprow.classList.add(`row-number-${3-i}`)
        numbers.appendChild(temprow);
        //calculator_display.parentNode.insertBefore(temprow, calculator_display.nextSibling);
        for (let j=0; j<3; j++){
            let tempbutton = number_button.cloneNode(true);
            //tempbutton.classList.add(`button + ${i} + "," + ${j}`);
            temprow.appendChild(tempbutton);

            let templabel = numeric_label.cloneNode(true);
            templabel.textContent = `${(i*3)+j+1}`;
            tempbutton.appendChild(templabel);
        } 
    }
    let createOperators = function(){
    
        let operators = document.createElement('div');
        operators.classList.add("operator-buttons");
        calculator_display.parentNode.insertBefore(operators, calculator_display);
    }

    createOperators();
}



createButtons();