/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */
document.title = "Interactive JavaScript Calculator";

var calculatorDiv = document.createElement('div');
calculatorDiv.setAttribute('class', 'black stuff-box shadowed');

var header = document.createElement('h1');
header.textContent = "JavaScript Calculator";

var p0 = document.createElement('p');
p0.textContent = "Create An Expression:";

var input1 = document.createElement('input');
input1.setAttribute('type', 'number');
input1.setAttribute('value', 5);

var operationSelection = document.createElement('select');

var option1 = document.createElement('option');
option1.textContent = "+";

var option2 = document.createElement('option');
option2.textContent = "-";

var option3 = document.createElement('option');
option3.textContent = "/";

var option4 = document.createElement('option');
option4.textContent = "*";

var option5 = document.createElement('option');
option5.textContent = "%";

var option6 = document.createElement('option');
option6.textContent = "**";

operationSelection.appendChild(option1);
operationSelection.appendChild(option2);
operationSelection.appendChild(option3);
operationSelection.appendChild(option4);
operationSelection.appendChild(option5);
operationSelection.appendChild(option6);

var input2 = document.createElement('input');
input2.setAttribute('type', 'number');
input2.setAttribute('value', 5);

var button = document.createElement('button');
button.textContent = "Calculate";

var colorSelect = document.createElement('input');
colorSelect.setAttribute('type', 'color');

var label = document.createElement('label');
label.textContent = 'Color of div is ' + colorSelect.value;

colorSelect.addEventListener('change', function(event) {
    label.textContent = 'Color of div is ' + colorSelect.value;
});

var latestNode = null;

button.addEventListener('click', function(event) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'black stuff-box shadowed');
    newDiv.style.backgroundColor = colorSelect.value;

    var paragraph = document.createElement('p');
    
    if (input1.value == "" || input2.value == "") {
        paragraph.textContent = 'Date: ' + new Date() + ' Result: ' + 'Error! Missing One Or More Operands!';
        newDiv.style.backgroundColor = "#Ff0000";
    }
    else {
        paragraph.textContent = 'Date: ' + new Date() + ' Result: ' + eval(input1.value + operationSelection.value + input2.value);
    }
   
    newDiv.appendChild(paragraph);
    
    newDiv.addEventListener('click', function(event) {
        newDiv.remove();
        latestNode = null;
    });
    
    if (latestNode === null) {
        latestNode = newDiv;
        document.body.appendChild(newDiv);
    }
    else {
        document.body.insertBefore(newDiv, latestNode);
        latestNode = newDiv;
    }
});



calculatorDiv.appendChild(header);
calculatorDiv.appendChild(p0);
calculatorDiv.appendChild(input1);
calculatorDiv.appendChild(operationSelection);
calculatorDiv.appendChild(input2);
calculatorDiv.appendChild(button);
calculatorDiv.appendChild(colorSelect);
calculatorDiv.appendChild(label);

document.body.appendChild(calculatorDiv);

