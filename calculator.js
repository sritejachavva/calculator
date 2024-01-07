/*
Step 1a) Create calculator buttons
Step 1b) Create operator buttons



*/

var current_display;

let createButtons = function(){
    let calculator_display = document.body.querySelector(".display");
    let number_button = document.createElement('button');
    let buttons = document.createElement('div');
    
    let numbers = document.createElement('div');
    numbers.classList.add('numbers');
    numbers.style.cssText = 'flex: 70 1 0%; display: flex; flex-direction: column; justify-content: space-between; margin: 10px 0;';
    

    buttons.classList.add('buttons');
    buttons.style.cssText='display:inline-flex; width:100%;'
    calculator_display.parentNode.appendChild(buttons);

    number_button.setAttribute("type","button");
    number_button.classList.add('numeric-button');
    number_button.style.cssText = 'display: flex; background-color: white; color: black;  width: 30%; border-style: solid; border-width:5px; justify-content: center; align-items: center; margin: 5px;'
    let button_row = document.createElement('div');
    button_row.classList.add('button-row');
    button_row.style.cssText = 'display:inline-flex; padding: 3px; margin: 2px; height: 20%; width: 90%; align-items: center; justify-content: space-evenly;'
    
    buttons.appendChild(numbers);



    let number_click = function(){
        var fired_button = this.value;
        alert(fired_button);
        return fired_button;
    }



    let numeric_label = document.createElement('p');
    numeric_label.classList.add('numeric-label');
    numeric_label.style.cssText = ' color:black; font-size: 12px;'
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
            //templabel.classList.add(`button_num`);

            templabel.classList.add(`digit_${(i*3)+j+1}`);
            tempbutton.value = (i*3)+j+1;
            current_display += tempbutton.addEventListener('click', number_click);

            tempbutton.appendChild(templabel);
        } 
    }
    // add a button for 0
    let temprow = button_row.cloneNode(true);
    temprow.classList.add(`row-number-${0}`)
    numbers.appendChild(temprow);
    let tempbutton = number_button.cloneNode(true);
    tempbutton.value = 0;
    temprow.appendChild(tempbutton);
    let templabel = numeric_label.cloneNode(true);
    templabel.textContent = `0`
    templabel.classList.add(`digit_0`);
    tempbutton
    tempbutton.appendChild(templabel);



    let createOperators = function(){
    
        let operators = document.createElement('div');
        operators.classList.add("operator-buttons");
        operators.style.cssText = 'flex: 30 1 0%;  display: flex; ';
        buttons.insertBefore(operators, numbers.nextSibling);


        let operator_button_col1 = document.createElement('div');
        let operator_button_col2 = document.createElement('div');

        operator_button_col1.classList.add('operator_button_column_1');
        operator_button_col2.classList.add('operator_button_column_2');


        operator_button_col1.style.cssText = 'flex: 50 1 0%; flex-direction: column; display: flex;  align-items: center; width: auto; margin: 12px 5px;';
        operator_button_col2.style.cssText = 'flex: 50 1 0%; flex-direction: column; display: flex;  align-items: center; width: auto; margin: 12px 5px;';

        operators.appendChild(operator_button_col1);
        operators.appendChild(operator_button_col2);


        let addButton = function(but_type){
            
            let operator_button = document.createElement('div');



            if (but_type == 'plus' || but_type == 'equal' || but_type == 'multiply'){
            operator_button_col1.appendChild(operator_button);
            }

            if (but_type == 'divide' || but_type == 'minus' || but_type == 'cancel'){
            operator_button_col2.appendChild(operator_button);
            }




            operator_button.classList.add('operator_button');
            operator_button.classList.add(but_type);
            operator_button.style.cssText = 'width: 80%; margin: 2px 0px; padding: 2px; background-color: grey; border-style: solid; border-width:5px;'


            if (but_type == 'plus') {
                let button_character = document.createElement("p");
                button_character.style.cssText = ' color:black; font-size: 15px;'
                button_character.textContent = "+"
                operator_button.appendChild(button_character);
                
            } 
            else if (but_type == 'minus'){
                let button_character = document.createElement("p");
                button_character.style.cssText = ' color:black; font-size: 15px;'
                button_character.textContent = "-"
                operator_button.appendChild(button_character);
            }
            else if (but_type == 'multiply'){
                let button_character = document.createElement("p");
                button_character.style.cssText = ' color:black; font-size: 15px;'
                button_character.textContent = "×"
                operator_button.appendChild(button_character);
            }
            else if (but_type == 'divide'){
                let button_character = document.createElement("p");
                button_character.style.cssText = ' color:black; font-size: 15px;'
                button_character.textContent = "÷"
                operator_button.appendChild(button_character);
            }
            else if (but_type == 'equal'){
                let button_character = document.createElement("p");
                button_character.style.cssText = ' color:black; font-size: 15px;'
                button_character.textContent = "="
                operator_button.appendChild(button_character);
            }
            else if (but_type == 'cancel'){
                let button_character = document.createElement("p");
                button_character.style.cssText = ' color:black; font-size: 15px;'
                button_character.textContent = "c"
                operator_button.appendChild(button_character);
            }
              
        }


        addButton('plus');
        
        addButton('multiply');
        addButton('equal');
        addButton('minus');
        
        addButton('divide');
        addButton('cancel');
    }

    createOperators();

    
}


let operate = function(num1, operand, num2){
/***********
 * Logic for operations
 * 1) Check for sign and assign proper sub function (add,multiply, etc)
 * 2) Call operate() whenever an operand is pressed
 * 
 * 
 * 
 * 
 *  ***********/

}

let addInput = function(){
    let calculator_display = document.body.querySelector(".display");
    let inputField = document.createElement('input');

    inputField.setAttribute("type","number");
    inputField.autofocus = true;
    calculator_display.appendChild(inputField);
    inputField.style.cssText = 'background-color: lightgray; display:flex; width:100%; height:100%; font-size:25px;'

    // let number_click = function(){
    //     var fired_button = this.value;
    //     alert("here");
    //     alert(fired_button);
    // }
    // ///// listen to button inputs
    // let numericButtons = document.body.querySelectorAll(".numeric-button");
    // numericButtons.addEventListener('click', number_click);
    


}



addInput();
createButtons();

//readInputs();